#!/bin/bash

red="\e[31m"
green="\e[32m"
endcol="\e[0m"

# Specify a file as the first argument to restrict the test to that file only.
# ```
# $	./test/run_test.sh test/unit_test.py
# ```
if [ $# -ge 1 ]; then
	TEST_ARG=( "$@" )
else
	TEST_ARG=( "test/" )
fi

PYTHONWARNINGS="ignore:Unverified HTTPS request" \
PYTHONPATH=. \
pytest -sx -vv --disable-pytest-warnings "${TEST_ARG[@]}"

succeeded=$?
if [[ $succeeded -eq 0 ]]; then
	printf "%b:-) All tests passed${endcol}\n" "${green}"
else
	printf "\n\n%b:'( Some tests did not pass${endcol}\n" "${red}"
fi
exit $succeeded
