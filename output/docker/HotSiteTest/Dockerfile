FROM node:lts-alpine3.11 AS builder

# Install build dependencies
RUN apk update && \
	apk add git && \
	npm install -g typescript hotpreprocessor && \
	mkdir -p /tmp/app/HotSiteTest && \
	mkdir -p /app/HotSiteTest

COPY ./ /tmp/app/HotSiteTest

RUN cd /tmp/app && \
	npm install && \
	npm run build && \
	npm -g install .

FROM node:lts-alpine3.11

COPY --from=builder /tmp/app /app/HotSiteTest
COPY ./docker/start.sh /app/HotSiteTest-start.sh

RUN chmod 500 /app/HotSiteTest-start.sh

RUN npm install -g hotpreprocessor

ARG HTTP_PORT=80
ENV HTTP_PORT ${HTTP_PORT}
EXPOSE ${HTTP_PORT}

ARG START_ARGS=""
ENV START_ARGS=${START_ARGS}

ENV HOTSITE_PATH=/app/HotSiteTest/HotSite.json

WORKDIR /app/HotSiteTest
ENTRYPOINT [ "/app/HotSiteTest-start.sh" ]

