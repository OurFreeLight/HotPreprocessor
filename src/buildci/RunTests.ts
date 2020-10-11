import * as ppath from "path";

import { IO, BuildBundle, BuildMeBuild, OS, utils, Application, Settings, libBuildCI } from "libbuildci";

module.exports = async function (buildBundle: BuildBundle, build: BuildMeBuild, another: any, 
		inspectorPort: string = "7478", debugType: string = "browser")
	{
		let settings: Settings = buildBundle.settings;
		const cwd: string = process.cwd ();
		let startApp: string = `node --inspect=127.0.0.1:${inspectorPort} ${cwd}/node_modules/mocha/bin/mocha `;
		let args: string = `--timeout 10000 --colors "`;

		if (debugType === "all")
			args += `${cwd}/build/tests/**/*.js`;

		if (debugType === "browser")
			args += `${cwd}/build/tests/browser/**/*.js`;

		if (debugType === "server")
			args += `${cwd}/build/tests/server/**/*.js`;

		if (debugType === "db")
			args += `${cwd}/build/tests/db/**/*.js`;

		if (debugType === "local")
			args += `${cwd}/build/tests/local/**/*.js`;

		args += `"`;

		let shutdownContainer = async () =>
			{
				await libBuildCI.exec (buildBundle, `docker stop maraidb-hotpreprocessor-tests`);
				await libBuildCI.exec (buildBundle, `docker rm maraidb-hotpreprocessor-tests`);
			};

		if ((debugType === "all") || (debugType === "db"))
		{
			let result = await libBuildCI.exec (buildBundle, `docker ps -a --filter "Name=maraidb-hotpreprocessor-tests" --format "{{.ID}}"`);

			if (result.result.stdout !== "")
				await shutdownContainer ();
		}

		await libBuildCI.exec (buildBundle, `docker run -d --name="maraidb-hotpreprocessor-tests" -p 3306:3306 -e MYSQL_ROOT_PASSWORD=cdO1KjwiC8ksOqCV1s0 -e MYSQL_DATABASE=freelight mariadb`);

		// Wait for the container to start.
		if ((debugType === "all") || (debugType === "db"))
			await libBuildCI.sleep (5000);

		await libBuildCI.exec (buildBundle, `${startApp}${args}`, cwd, { cwd: cwd, shell: true, env: process.env });

		if ((debugType === "all") || (debugType === "db"))
			await shutdownContainer ();
	};
