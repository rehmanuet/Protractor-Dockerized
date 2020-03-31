#!/bin/bash
set -e

./wait-for-it.sh -t 15 chrome:5555

if [ $? -ne 0 ]
then
  echo "Failure: Timed out to connect to selenium hub." >&2
  exit 1
fi

# run tests and get the exit code
protractor conf/docker_config.js || EXIT_CODE=$?

# generate report

exit $EXIT_CODE