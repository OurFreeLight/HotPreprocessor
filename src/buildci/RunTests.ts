import * as ppath from "path";
import * as child_process from "child_process";

import { IO, BuildBundle, BuildMeBuild, OS, utils, Application, Settings, libBuildCI } from "libbuildci";

module.exports = async function (buildBundle: BuildBundle, build: BuildMeBuild, 
		inspectorPortStr: string = "7478", debugType: string = "all", 
		launchContainerStr: string = "true", databasePort: string = "3309")
	{
		const cwd: string = process.cwd ();
		let inspectorPort: number = parseInt (inspectorPortStr);
		let inspector: string = "";

		if (inspectorPort > 0)
			inspector = `--inspect=127.0.0.1:${inspectorPort} `;

		let startApp: string = `node ${inspector}${cwd}/node_modules/mocha/bin/mocha `;
		let args: string = `--timeout 10000 --colors "`;
		let launchContainer: boolean = utils.parseBoolean (launchContainerStr);

		if (debugType === "database")
			debugType = "db";

		if (debugType === "all")
			args += `${cwd}/build/tests/**/*.js`;

		if (debugType === "parsing")
			args += `${cwd}/build/tests/parsing/**/*.js`;

		if (debugType === "browser")
			args += `${cwd}/build/tests/browser/**/*.js`;

		if (debugType === "hotsite")
			args += `${cwd}/build/tests/hotsite/**/*.js`;

		if (debugType === "server")
			args += `${cwd}/build/tests/server/**/*.js`;

		if (debugType === "db")
			args += `${cwd}/build/tests/db/**/*.js`;

		if (debugType === "local")
			args += `${cwd}/build/tests/local/**/*.js`;

		args += `"`;

		let shutdownContainer = async () =>
			{
				this.settings.info ("Stopping docker container: mariadb-hotpreprocessor-tests");
				await libBuildCI.exec (buildBundle, `docker stop mariadb-hotpreprocessor-tests`);
				await libBuildCI.exec (buildBundle, `docker rm mariadb-hotpreprocessor-tests`);
			};

		if (launchContainer === true)
		{
			if ((debugType === "all") || (debugType === "db"))
			{
				let result = await libBuildCI.exec (buildBundle, `docker ps -a --filter "Name=mariadb-hotpreprocessor-tests" --format "{{.ID}}"`);

				if (result.result.stdout !== "")
					await shutdownContainer ();
			}

			this.settings.info (`Starting docker container: mariadb-hotpreprocessor-tests on port ${databasePort}`);
			let results = await libBuildCI.exec (buildBundle, 
				`docker run -d --name="mariadb-hotpreprocessor-tests" -p ${databasePort}:3306 -e MYSQL_ROOT_PASSWORD=cdO1KjwiC8ksOqCV1s0 -e MYSQL_DATABASE=freelight -e MYSQL_USER=5NKVBAt7OrzrumQyQVs -e MYSQL_PASSWORD=1BBrZbKYRUM7oiMA5oY mariadb`
			);
			let containerId: string = results.result.stdout;
			containerId = containerId.trim ();
			this.settings.info (`Started container with id: ${containerId}`);

			// Wait for the container to start.
			if ((debugType === "all") || (debugType === "db"))
			{
				this.settings.info (`Waiting for container ${containerId} to finish loading...`);

				while (true)
				{
					results = await libBuildCI.exec (buildBundle, 
						`docker exec mariadb-hotpreprocessor-tests mysql --password=cdO1KjwiC8ksOqCV1s0 freelight`
					);
					let logs: string = results.result.stdout;

					if (logs === "")
					{
						if (results.result.stderr !== "")
							logs = results.result.stderr;
					}

					logs = logs.trim ();

					if (logs === "")
						break;

					await libBuildCI.sleep (100);
				}
			}
		}

		await libBuildCI.exec (buildBundle, `${startApp}${args}`, cwd, { cwd: cwd, shell: true, env: process.env }, true);

		if (launchContainer === true)
		{
			if ((debugType === "all") || (debugType === "db"))
				await shutdownContainer ();
		}
	};
