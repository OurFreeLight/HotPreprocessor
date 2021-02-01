#!/bin/sh

# Start the application
hotpreprocessor run ${START_ARGS} --hot-site /app/HotSiteTest/HotSite.json \
    --web-http-port ${HTTP_PORT} --web-https-port ${HTTPS_PORT} \
    --web-route "/=${workspaceFolder}"