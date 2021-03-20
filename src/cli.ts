import * as ppath from "path";
import * as fs from "fs";

import * as commander from "commander";

import { HotPreprocessor } from "./HotPreprocessor";
import { HotHTTPServer } from "./HotHTTPServer";
import { HotLogLevel } from "./HotLog";
import { DeveloperMode } from "./Hot";
import { HotTesterServer } from "./HotTesterServer";
import { HotBuilder } from "./HotBuilder";
import { HotCreator } from "./HotCreator";
import { HotDBConnectionInterface } from "./HotDBConnectionInterface";
import { HotAPI } from "./HotAPI";
import { HotTesterMochaSelenium } from "./HotTesterMochaSelenium";
import { HotDBMySQL } from "./schemas/HotDBMySQL";
import { HotIO } from "./HotIO";

HotPreprocessor.isWeb = false;

let VERSION: string = "";
let processor: HotPreprocessor = new HotPreprocessor ();
processor.logger.logLevel = HotLogLevel.All;

let hotsitePath: string = "";
let globalLogLevel: HotLogLevel = null;

/**
 * The API to load.
 */
type APItoLoad = {
	exportedClassName: string;
	path: string;
 };

/**
 * Start the API server.
 */
async function startAPIServer (server: HotHTTPServer, loadedAPI: APItoLoad, baseAPIUrl: 
	string, dbinfo: HotDBConnectionInterface, isAPIOnly: boolean): Promise<HotAPI>
{
	process.chdir (process.cwd ());
	let foundModulePath = require.resolve (loadedAPI.path, { paths: [process.cwd ()] });
	let apiJS = require (foundModulePath);
	let apiClass: any = apiJS[loadedAPI.exportedClassName];
	let api: HotAPI = new apiClass (baseAPIUrl, server);

	server.logger.info (`Loaded API class: ${loadedAPI.exportedClassName}`);

	server.processor.api = api;
	server.api = api;

	if (isAPIOnly === true)
	{
		server.addRoute ("/", async (req: any, res: any) =>
			{
				res.json ({ "status": "ok" });
			});
	}

	if (dbinfo != null)
	{
		let dbClass = null;

		if (dbinfo.type === "mysql")
			dbClass = HotDBMySQL;

		api.db = new dbClass ();
		await server.setAPI (api);

		if (dbinfo.username === "")
			throw new Error (`No database username provided!`);

		if (dbinfo.password === "")
			throw new Error (`No database password provided!`);

		await api.db.connect (dbinfo);
	}

	return (api);
}

/**
 * Get a key/value pair from a string.
 */
function getKeyValuePair (str: string): { key: string; value: string; }
{
	let pos: number = str.indexOf ("=");
	let key: string = "";
	let value: string = "";

	if (pos > -1)
	{
		key = str.substr (0, pos);
		value = str.substr (pos + 1);
	}

	return ({ key: key, value: value });
}

/**
 * Handle any build commands.
 */
async function handleBuildCommands (): Promise<commander.Command>
{
	let builder: HotBuilder = null;
	let createHotBuilder = () =>
		{
			if (builder == null)
				builder = new HotBuilder ();
		};

	const buildCmd: commander.Command = new commander.Command ("build");
	buildCmd.description (`Build commands.`);
	buildCmd.action (async () =>
		{
			createHotBuilder ();

			if (hotsitePath === "")
			{
				let tempHotsitePath: string = ppath.normalize (`${process.cwd ()}/HotSite.json`);

				/// @fixme Do this check without caps sensitivity.
				if (await HotIO.exists (tempHotsitePath) === true)
					hotsitePath = tempHotsitePath;
			}

			if (hotsitePath === "")
				throw new Error (`When building, you must specify a HotSite.json!`);

			if (hotsitePath !== "")
				await processor.loadHotSite (hotsitePath);

			await builder.build ([processor.hotSite]);
		});

	buildCmd.option ("--docker", "Build Dockerfiles from the given HotSite.json.", 
		(arg: string, previous: any) =>
		{
			createHotBuilder ();
			builder.dockerFiles = true;
		}, "");
	buildCmd.option ("--docker-compose", "Build the docker compose file from the given HotSite.json.", 
		(arg: string, previous: any) =>
		{
			createHotBuilder ();
			builder.dockerCompose = true;
		}, "");
	buildCmd.option ("--kubernetes", "Build a Kubernetes cluster from the given HotSite.json.", 
		(arg: string, previous: any) =>
		{
			createHotBuilder ();
			builder.kubernetes = true;
		}, "");
	buildCmd.option ("--output", "The directory path to place all files.", 
		(arg: string, previous: any) =>
		{
			createHotBuilder ();
			builder.outputDir = arg;
		});

	return (buildCmd);
}

/**
 * Handle create commands.
 */
async function handleCreateCommands (): Promise<commander.Command>
{
	let creator: HotCreator = null;
	let createHotCreator = () =>
		{
			if (creator == null)
				creator = new HotCreator ();
		};

	const createCmd: commander.Command = new commander.Command ("create");
	createCmd.description (`Create commands.`);
	createCmd.action (async (cmdr: any, args: string) =>
		{
			createHotCreator ();

			if (args == null)
				throw new Error (`You must supply an npm compatible project name!`);

			if (args.length < 1)
				throw new Error (`You must supply an npm compatible project name!`);

			const name: string = args[0];

			creator.name = name;
			creator.outputDir = ppath.normalize (`${process.cwd ()}/${name}/`);

			await creator.create ();
		});

	createCmd.option (`--type <type>`, 
		`The type of app to create. Can be (web, web-api, api) Default: api`, 
		(type: string, previous: any) =>
		{
			createHotCreator ();
			creator.type = type;
		}, "");
	createCmd.option (`--code <language>`, 
		`Set the type of code output. Can be (ts, js) Default: ts`, 
		(language: string, previous: any) =>
		{
			createHotCreator ();
			creator.language = language;
		}, "");
	createCmd.option (`--output <path>`, 
		`The directory path to place all the files.`, 
		(path: string, previous: any) =>
		{
			createHotCreator ();
			creator.outputDir = path;
		}, "");
	createCmd.option (`--overwrite-cmd-create-init <value>`, 
		`Overwrite the create command for initalizing an app.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.createCommands.init = value;
		}, "");
	createCmd.option (`--overwrite-cmd-create-transpile <value>`, 
		`Overwrite the create command for transpiling.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.createCommands.transpileTS = value;
		}, "");
	createCmd.option (`--overwrite-cmd-npm-build-web-api <value>`, 
		`Overwrite the npm command for building the web api.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.npmCommands.buildWebAPI = value;
		}, "");
	createCmd.option (`--overwrite-cmd-npm-build-web-api-debug <value>`, 
		`Overwrite the npm command for building the debug script for web api.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.npmCommands.buildWebAPIDebug = value;
		}, "");
	createCmd.option (`--overwrite-cmd-npm-dev <value>`, 
		`Overwrite the npm command for building the development script.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.npmCommands.dev = value;
		}, "");
	createCmd.option (`--overwrite-cmd-npm-start <value>`, 
		`Overwrite the npm command for the start script.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.npmCommands.start = value;
		}, "");
	createCmd.option (`--overwrite-cmd-npm-test <value>`, 
		`Overwrite the npm command for the test script.`, 
		(value: string, previous: any) =>
		{
			createHotCreator ();
			creator.npmCommands.test = value;
		}, "");

	return (createCmd);
}

/**
 * Handle run commands.
 */
async function handleRunCommands (): Promise<commander.Command>
{
	let webServer: HotHTTPServer = new HotHTTPServer (processor);
	let apiServer: HotHTTPServer = new HotHTTPServer (processor);
	let apis: APItoLoad[] = [];
	let dbinfo: HotDBConnectionInterface = null;
	let setupDB = () =>
		{
			if (dbinfo != null)
				return;

			dbinfo = {
				"type": "mysql",
				"server": process.env["DATABASE_SERVER"] || "127.0.0.1",
				"username": process.env["DATABASE_USERNAME"],
				"password": process.env["DATABASE_PASSWORD"],
				"port": 3306,
				"database": process.env["DATABASE_SCHEMA"]
			};

			if (process.env["DATABASE_PORT"] != null)
			{
				try
				{
					dbinfo.port = parseInt (process.env["DATABASE_PORT"]);
				}
				catch (ex)
				{
					throw new Error (`Unable to parse db port ${process.env["DATABASE_PORT"]}`);
				}
			}
		};

	let serverType: string = "web";
	let baseWebUrl: string = "";
	let baseAPIUrl: string = "";

	const runCmd: commander.Command = new commander.Command ("run");
	runCmd.description (`Run commands.`);
	runCmd.action (async () =>
		{
			let runWebServer: boolean = false;
			let runAPIServer: boolean = false;
			let testerServer: HotTesterServer = null;

			if (hotsitePath !== "")
			{
				await processor.loadHotSite (hotsitePath);

				if (processor.hotSite != null)
				{
					if (processor.hotSite.apis != null)
					{
						for (let key in processor.hotSite.apis)
						{
							let tempapi = processor.hotSite.apis[key];

							if (tempapi.libraryName != null)
							{
								let path: string = tempapi.filepath;

								let apiToLoad: APItoLoad = {
										exportedClassName: tempapi.apiName,
										path: path
									};
								apis.push (apiToLoad);
							}
						}
					}
				}
			}

			if (baseWebUrl === "")
			{
				let foundBaseUrl: string = HotPreprocessor.getValueFromHotSiteObj (processor.hotSite, ["server", "url"]);
	
				if (foundBaseUrl != null)
					baseWebUrl = foundBaseUrl;
			}

			if (baseWebUrl === "")
				baseWebUrl = `http://127.0.0.1:${webServer.ports.http}`;

			if ((serverType === "web") || (serverType === "web-api"))
				runWebServer = true;

			if ((serverType === "api") || (serverType === "web-api"))
				runAPIServer = true;

			if (processor.mode === DeveloperMode.Development)
			{
				let serverStarter = await HotTesterServer.startServer ("http://127.0.0.1:8183", 8183, 4143, processor);
				testerServer = serverStarter.server;

				let tester: HotTesterMochaSelenium = new HotTesterMochaSelenium (
								processor, "HotTesterMochaSelenium", baseWebUrl);
				tester.driver.openDevTools = true;
				testerServer.addTester (tester);
			}

			/// @fixme Allow for multiple APIs to be loaded, and have their 
			/// servers start in the future.
			let loadAPI = apis[0];
			let getBaseUrlFromHotSite = () =>
				{
					let foundAPIUrl: string = null;

					// Attempt to find the base url from the HotSite's API.
					if (processor.hotSite != null)
					{
						if (processor.hotSite.apis != null)
						{
							for (let key in processor.hotSite.apis)
							{
								let tempAPI = processor.hotSite.apis[key];

								if (tempAPI.apiName != null)
								{
									if (tempAPI.apiName === loadAPI.exportedClassName)
									{
										if (tempAPI.url != null)
											foundAPIUrl = tempAPI.url;

										break;
									}
								}
							}
						}
					}
		
					if (foundAPIUrl != null)
						baseAPIUrl = foundAPIUrl;
				};

			if (serverType === "api")
			{
				if (apis.length < 1)
					throw new Error (`No APIs are loaded! Try using --api-load`);

				if (baseAPIUrl === "")
					getBaseUrlFromHotSite ();

				if (baseAPIUrl === "")
					baseAPIUrl = `http://127.0.0.1:${apiServer.ports.http}`;

				// Only run the api server.
				await startAPIServer (apiServer, loadAPI, baseAPIUrl, dbinfo, true);

				if (globalLogLevel != null)
					apiServer.logger.logLevel = globalLogLevel;

				apiServer.serverType = "API Server";
				await apiServer.listen ();
			}

			if (runWebServer === true)
			{
				if (runAPIServer === true)
				{
					if (apis.length < 1)
						throw new Error (`No APIs are loaded! Try using --api-load`);

					if (baseAPIUrl === "")
						getBaseUrlFromHotSite ();

					if (baseAPIUrl === "")
						baseAPIUrl = `http://127.0.0.1:${webServer.ports.http}`;

					await startAPIServer (webServer, loadAPI, baseAPIUrl, dbinfo, false);
					webServer.serverType = "Web-API Server";
				}
				else
					webServer.serverType = "Web Server";

				if (globalLogLevel != null)
					webServer.logger.logLevel = globalLogLevel;

				await webServer.listen ();
			}
		});

	const serverTypes: string[] = ["web", "api"];

	for (let iIdx = 0; iIdx < serverTypes.length; iIdx++)
	{
		let currentServerType: string = serverTypes[iIdx];
		let httpPort: number = 80;
		let httpsPort: number = 443;

		if (currentServerType === "api")
		{
			httpPort = 81;
			httpsPort = 444;
		}

		runCmd.option (`--${currentServerType}-base-url <url>`, 
			`Set the base ${currentServerType} server url.`, 
			(url: string, previous: any) =>
			{
				if (currentServerType === "web")
					baseWebUrl = url;
				else
					baseAPIUrl = url;
			}, "");
		runCmd.option (`--${currentServerType}-http-port <port>`, 
			`Set the ${currentServerType} HTTP port`, 
			(port: string, previous: any) =>
			{
				try
				{
					const tempPort: number = parseInt (port);

					if (currentServerType === "web")
						webServer.ports.http = tempPort;
					else
						apiServer.ports.http = tempPort;
				}
				catch (ex)
				{
					processor.logger.error (`Unable to parse ${currentServerType} http port ${port}`);
				}
			}, httpPort);
		runCmd.option (`--${currentServerType}-https-port [port]`, 
			`Set the ${currentServerType} HTTPS port`, 
			(port: string, previous: any) =>
			{
				if (port == null)
					return;

				if (port === "")
					return;

				try
				{
					const tempPort: number = parseInt (port);

					if (currentServerType === "web")
						webServer.ports.https = tempPort;
					else
						apiServer.ports.https = tempPort;
				}
				catch (ex)
				{
					processor.logger.error (`Unable to parse ${currentServerType} https port ${port}`);
				}
			}, httpsPort);
		runCmd.option (`--${currentServerType}-dont-redirect-http-to-https`, 
			`Do not redirect ${currentServerType} HTTP traffic to HTTPS`, 
			(port: string, previous: any) =>
			{
				if (currentServerType === "web")
					webServer.redirectHTTPtoHTTPS = false;
				else
					apiServer.redirectHTTPtoHTTPS = false;
			});
		runCmd.option (`--${currentServerType}-listen-address <address>`, 
			`Set the ${currentServerType} listen address`, 
			(address: string, previous: any) =>
			{
				if (currentServerType === "web")
					webServer.listenAddress = address;
				else
					apiServer.listenAddress = address;
			}, "0.0.0.0");
		runCmd.option (`--${currentServerType}-ssl-cert <path>`, 
			`Set the path to the SSL cert for the ${currentServerType} server`, 
			(cert: string, previous: any) =>
			{
				if (currentServerType === "web")
					webServer.ssl.cert = cert;
				else
					apiServer.ssl.cert = cert;
			}, "");
		runCmd.option (`--${currentServerType}-ssl-key <path>`, 
			`Set the path to the SSL key for the ${currentServerType} server`, 
			(key: string, previous: any) =>
			{
				if (currentServerType === "web")
					webServer.ssl.key = key;
				else
					apiServer.ssl.key = key;
			}, "");
		runCmd.option (`--${currentServerType}-ssl-ca <path>`, 
			`Set the path to the SSL CA for the ${currentServerType} server`, 
			(ca: string, previous: any) =>
			{
				if (currentServerType === "web")
					webServer.ssl.ca = ca;
				else
					apiServer.ssl.ca = ca;
			}, "");
		runCmd.option (`--${currentServerType}-log-level <level>`, 
			`Set the logging level for the ${currentServerType} server. Can be (info,warning,error,all,none)`, 
			(logLevel: string, previous: any) =>
			{
				let tempServer: HotHTTPServer = null;

				if (logLevel === "")
					return;

				if (currentServerType === "web")
					tempServer = webServer;
				else
					tempServer = apiServer;

				if (logLevel === "info")
					tempServer.logger.logLevel = HotLogLevel.Info;

				if (logLevel === "warning")
					tempServer.logger.logLevel = HotLogLevel.Warning;

				if (logLevel === "error")
					tempServer.logger.logLevel = HotLogLevel.Error;

				if (logLevel === "verbose")
					tempServer.logger.logLevel = HotLogLevel.Verbose;

				if (logLevel === "all")
					tempServer.logger.logLevel = HotLogLevel.All;

				if (logLevel === "none")
					tempServer.logger.logLevel = HotLogLevel.None;
			}, "");

		if (currentServerType === "web")
		{
			runCmd.option (`--${currentServerType}-route <route_and_path>`, 
				`Add a static route in "key=path" format. Example: --${currentServerType}-route "/=/var/www"`, 
				(routeAndPath: string, previous: any) =>
				{
					let keyValuePair = getKeyValuePair (routeAndPath);
					const route: string = keyValuePair.key;
					const path: string = keyValuePair.value;

					webServer.addStaticRoute (route, path);
				});
			runCmd.option (`--${currentServerType}-serve-hott-files`, "Serve Hott files", 
				(port: string, previous: any) =>
				{
					webServer.serveHottFiles = true;
				});
			runCmd.option (`--${currentServerType}-js-url <url>`, "The url to the HotPreprocessor JS", 
				(url: string, previous: any) =>
				{
					webServer.hottFilesAssociatedInfo.jsSrcPath = url;
				});
		}

		if (currentServerType === "api")
		{
			runCmd.option (`--${currentServerType}-load <exported_name_and_path>`,
				`Load an API for use in "exported_name=path_to_js_file" format. Example: --${currentServerType}-load "FreeLightAPI=/app/FreeLight/build/src/FreeLightAPI.js"`,
				(exported_name_and_path: string, previous: any) =>
				{
					let keyValuePair = getKeyValuePair (exported_name_and_path);
					const exportedClassName: string = keyValuePair.key;
					const path: string = keyValuePair.value;

					apis.push ({ exportedClassName: exportedClassName, path: path });
				});
		}
	}

	runCmd.option (`--server-type <type>`, 
		`Set the type of server. Can be (web, api, web-api)`, 
		(type: string, previous: any) =>
		{
			serverType = type;
		}, "");
	runCmd.option ("--db-type <type>", "The type of database to use. Can be (mysql)", 
		(type: string, previous: any) =>
		{
			setupDB ();
			dbinfo.type = type;
		});
	runCmd.option ("--db-server <address>", "The address to the database", 
		(address: string, previous: any) =>
		{
			setupDB ();
			dbinfo.server = address;
		});
	runCmd.option ("--db-username <username>", "The database's username", 
		(username: string, previous: any) =>
		{
			setupDB ();
			dbinfo.username = username;
		});
	runCmd.option ("--db-password <password>", "The database's password. This is insecure to use on the command line!", 
		(password: string, previous: any) =>
		{
			setupDB ();
			dbinfo.password = password;
		});
	runCmd.option ("--db-port <port>", "The database's port", 
		(port: string, previous: any) =>
		{
			setupDB ();

			try
			{
				dbinfo.port = parseInt (port);
			}
			catch (ex)
			{
				processor.logger.error (`Unable to parse db port ${port}`);
			}
		});
	runCmd.option ("--db-database <schema>", "The database's schema to select", 
		(schema: string, previous: any) =>
		{
			setupDB ();
			dbinfo.database = schema;
		});

	return (runCmd);
}

/**
 * Check if the path exists.
 */
function checkIfPathExists (path: string): boolean
{
	if (fs.existsSync (path) === true)
		return (true);

	console.log (`PATH: ${path}`);

	return (false);
}

/**
 * Start the CLI app.
 */
async function start ()
{
	try
	{
		let packagePath: string = ppath.normalize (`${__dirname}/../../package.json`);

		if (checkIfPathExists (packagePath) === false)
		{
			packagePath = ppath.normalize (`${process.cwd ()}/package.json`);

			if (checkIfPathExists (packagePath) === false)
			{
				console.error (`Unable to find path to HotPreprocessor!`);

				return;
			}
		}

		let packageJSON: any = JSON.parse (fs.readFileSync (packagePath).toString ());
		VERSION = packageJSON.version;

		const program: commander.Command = new commander.Command ("hotpreprocessor");

		program.description (`Copyright(c) 2021, FreeLight, Inc. Under the MIT License.`);
		let command: commander.Command = program.version (VERSION);

		command.option ("--cwd <path>", "Set the current working directory to use.", 
			(path: string, previous: any) =>
			{
				process.chdir (path);
			});
		command.option ("-o, --hotsite <path>", "Use a HotSite.json", 
			(path: string, previous: any) =>
			{
				hotsitePath = path;
			});
		command.option ("-l, --log-level <level>", "Set the logging level. Can be (info,warning,error,all,none)", 
			(logLevel: string, previous: any) =>
			{
				if (logLevel === "info")
					globalLogLevel = HotLogLevel.Info;

				if (logLevel === "warning")
					globalLogLevel = HotLogLevel.Warning;

				if (logLevel === "error")
					globalLogLevel = HotLogLevel.Error;

				if (logLevel === "verbose")
					globalLogLevel = HotLogLevel.Verbose;

				if (logLevel === "all")
					globalLogLevel = HotLogLevel.All;

				if (logLevel === "none")
					globalLogLevel = HotLogLevel.None;
			}, "");
		command.option ("--development-mode", "Set to execute in development mode. This will allow for testing data to be collected and executed", 
			(value: string, previous: any) =>
			{
				processor.mode = DeveloperMode.Development;
			});

		let createCmd: commander.Command = await handleCreateCommands ();
		command.addCommand (createCmd);

		let runCmd: commander.Command = await handleRunCommands ();
		command.addCommand (runCmd);

		let buildCmd: commander.Command = await handleBuildCommands ();
		command.addCommand (buildCmd);

		if (process.argv.length > 2)
			program.parse (process.argv);
	}
	catch (ex)
	{
		processor.logger.error (ex.stack);
	}
}

start ();