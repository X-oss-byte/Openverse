"""
TODO: Add additional tests for any methods you added in your subclass.
Try to test edge cases (missing keys, different data types returned, Nones, etc).
You may also need to update the given test names to be more specific.

Run your tests locally with `just test -k xeno_canto`
"""

import json
from pathlib import Path

from providers.provider_api_scripts.xeno_canto import XenoCantoDataIngester


# TODO: API responses used for testing can be added to this directory
RESOURCES = Path(__file__).parent / "resources/xeno_canto"

# Set up test class
ingester = XenoCantoDataIngester()


def test_get_next_query_params_default_response():
    actual_result = ingester.get_next_query_params(None)
    expected_result = {
        # TODO: Fill out expected default query params
    }
    assert actual_result == expected_result


def test_get_next_query_params_updates_parameters():
    previous_query_params = {
        # TODO: Fill out a realistic set of previous query params
    }
    actual_result = ingester.get_next_query_params(previous_query_params)

    expected_result = {
        # TODO: Fill out what the next set of query params should be,
        # incrementing offsets or page numbers if necessary
    }
    assert actual_result == expected_result


def test_get_media_type():
    # TODO: Test the correct media type is returned for each possible media type.
    pass


def test_get_record_data():
    # High level test for `get_record_data`. One way to test this is to create a
    # `tests/resources/XenoCanto/single_item.json` file containing a sample json
    # representation of a record from the API under test, call `get_record_data` with
    # the json, and directly compare to expected output.
    #
    # Make sure to add additional tests for records of each media type supported by
    # your provider.

    # Sample code for loading in the sample json
    with open(RESOURCES / "single_item.json") as f:
        resource_json = json.load(f)

    actual_data = ingester.get_record_data(resource_json)

    expected_data = {
        # TODO: Fill out the expected data which will be saved to the Catalog
    }

    assert actual_data == expected_data
