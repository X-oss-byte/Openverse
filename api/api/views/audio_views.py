from django.conf import settings
from rest_framework.decorators import action
from rest_framework.exceptions import APIException, NotFound
from rest_framework.response import Response

from drf_spectacular.utils import extend_schema, extend_schema_view

from api.constants.media_types import AUDIO_TYPE
from api.docs.audio_docs import (
    creator,
    detail,
    related,
    report,
    search,
    source,
    stats,
    tag,
    thumbnail,
    waveform,
)
from api.models import Audio
from api.serializers.audio_serializers import (
    AudioCollectionRequestSerializer,
    AudioReportRequestSerializer,
    AudioSearchRequestSerializer,
    AudioSerializer,
    AudioWaveformSerializer,
)
from api.serializers.media_serializers import MediaThumbnailRequestSerializer
from api.utils.throttle import AnonThumbnailRateThrottle, OAuth2IdThumbnailRateThrottle
from api.views.media_views import MediaViewSet


@extend_schema(tags=["audio"])
@extend_schema_view(
    list=search,
    stats=stats,
    retrieve=detail,
    related=related,
)
class AudioViewSet(MediaViewSet):
    """Viewset for all endpoints pertaining to audio."""

    model_class = Audio
    search_query_serializer_class = AudioSearchRequestSerializer
    collection_serializer_class = AudioCollectionRequestSerializer
    default_index = settings.MEDIA_INDEX_MAPPING[AUDIO_TYPE]

    serializer_class = AudioSerializer

    def get_queryset(self):
        return super().get_queryset().select_related("mature_audio", "audioset")

    # Extra actions

    @creator
    @action(
        detail=False,
        methods=["get"],
        url_path="source/(?P<source>[^/.]+)/creator/(?P<creator>.+)",
    )
    def creator_collection(self, *args, **kwargs):
        """
        Get a collection of audio items by a specific creator from the specified source.

        The items in the collection will be sorted by the order in which they were
        added to Openverse.
        """
        return super().creator_collection(*args, **kwargs)

    @source
    @action(
        detail=False,
        methods=["get"],
        url_path="source/(?P<source>[^/.]+)",
    )
    def source_collection(self, *args, **kwargs):
        """
        Get a collection of audio items from a specific source.

        The items in the collection will be sorted by the order in which they were
        added to Openverse.
        """
        return super().creator_collection(*args, **kwargs)

    @tag
    @action(
        detail=False,
        methods=["get"],
        url_path="tag/(?P<tag>[^/.]+)",
    )
    def tag_collection(self, *args, **kwargs):
        """
        Get a collection of audio items with a specific tag.

        The items will be ranked by their popularity and authority.
        """
        return super().tag_collection(*args, **kwargs)

    @thumbnail
    @action(
        detail=True,
        url_path="thumb",
        url_name="thumb",
        serializer_class=MediaThumbnailRequestSerializer,
        throttle_classes=[AnonThumbnailRateThrottle, OAuth2IdThumbnailRateThrottle],
    )
    def thumbnail(self, request, *_, **__):
        """
        Retrieve the scaled down and compressed thumbnail of the artwork of an
        audio track or its audio set.
        """

        audio = self.get_object()

        image_url = None
        if audio_thumbnail := audio.thumbnail:
            image_url = audio_thumbnail
        elif audio.audio_set and (audio_thumbnail := audio.audio_set.thumbnail):
            image_url = audio_thumbnail
        if not image_url:
            raise NotFound("Could not find artwork.")

        return super().thumbnail(request, audio, image_url)

    @waveform
    @action(
        detail=True,
        serializer_class=AudioWaveformSerializer,
        throttle_classes=[AnonThumbnailRateThrottle, OAuth2IdThumbnailRateThrottle],
    )
    def waveform(self, *_, **__):
        """
        Get the waveform peaks for an audio track.

        The peaks are provided as a list of numbers, each of these numbers being
        a fraction between 0 and 1. The list contains approximately 1000 numbers,
        although it can be slightly higher or lower, depending on the track's length.
        """

        audio = self.get_object()

        try:
            obj = {"points": audio.get_or_create_waveform()}
            serializer = self.get_serializer(obj)

            return Response(status=200, data=serializer.data)
        except Exception as e:
            raise APIException(getattr(e, "message", str(e)))

    @report
    @action(
        detail=True,
        methods=["post"],
        serializer_class=AudioReportRequestSerializer,
    )
    def report(self, request, identifier):
        """
        Report an issue about a specified audio track to Openverse.

        By using this endpoint, you can report an audio track if it infringes
        copyright, contains mature or sensitive content or some other reason.
        """

        return super().report(request, identifier)
