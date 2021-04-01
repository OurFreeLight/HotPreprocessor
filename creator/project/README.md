# ${APPNAME}
This application was bootstrapped with [Hotpreprocessor](https://www.github.com/HigherEdgeSoftware/Hotpreprocessor)

## Getting Started
Navigate to the project's directory then enter:
${BUILDSTEPS}
	npm run dev

This will launch the web server in development mode. Open a web browser and navigate to https://127.0.0.1:8080 to see the example page!

## Docker
To build the docker images navigate to the project's directory and enter:

	hotpreprocessor --hotsite <path_to_hotsite.json> build

This will build the Dockerfiles and docker compose files. After which you can navigate into your output directory and enter:

	docker build

Once it's done building you can then enter:

	docker stack deploy

## Setting up the CI/CD pipeline

## Deploying to production
To deploy to production, setup an account at [HotStaq](https://wwww.hotstaq.com/)

## Monitoring
