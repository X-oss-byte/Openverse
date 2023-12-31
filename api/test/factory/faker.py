from uuid import uuid4

from factory import Faker
from faker.providers import BaseProvider
from faker.providers.internet import Provider as InternetProvider
from faker.utils.distribution import choices_distribution


class ChoiceProvider(BaseProvider):
    def random_choice_field(self, choices):
        return self.random_element(elements=[choice[0] for choice in choices])


class WaveformProvider(BaseProvider):
    _float_space = [x / 100.0 for x in range(101)] * 20

    @classmethod
    def generate_waveform(cls) -> list[float]:
        return choices_distribution(cls._float_space, p=None, length=1000)

    def waveform(self) -> list[float]:
        return WaveformProvider.generate_waveform()


class GloballyUniqueUrl(InternetProvider):
    def globally_unique_url(self) -> str:
        return f"{self.url()}?{uuid4()}"


Faker.add_provider(ChoiceProvider)
Faker.add_provider(WaveformProvider)
Faker.add_provider(GloballyUniqueUrl)
