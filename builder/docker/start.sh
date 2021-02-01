#!/bin/sh

# Start the application
hotpreprocessor run ${START_ARGS} --hot-site ${HOTSITE_PATH} \
    --web-http-port ${HTTP_PORT} --web-https-port ${HTTPS_PORT} \
    --web-route "/=/app/${HOTSITE_NAME}/public"