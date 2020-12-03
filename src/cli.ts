import * as ppath from "path";
import * as fs from "fs";

import * as commander from "commander";

import { HotPreprocessor } from "./HotPreprocessor";
import { HotHTTPServer } from "./HotHTTPServer";
import { HotLogLevel } from "./HotLog";
import { DeveloperMode } from "./Hot";
import { HotTesterServer } from "./HotTesterServer";

async function start ()
{
	let processor: HotPreprocessor = new HotPreprocessor ();
	processor.logger.logLevel = HotLogLevel.All;

	try
	{
		let server: HotHTTPServer = new HotHTTPServer (processor);
		let packageJSON: any = JSON.parse (fs.readFileSync (ppath.normalize (`${process.cwd ()}/package.json`)).toString ());

		const program: commander.Command = new commander.Command ("hotapp");

		program.description (`Copyright(c) 2020, FreeLight, Inc. Under the MIT License.`);
		let command: commander.Command = program.version (packageJSON.version);

		command.option ("-r, --route <route_and_path>", "Add a static route. Example: -r \"/=/var/www\"", 
			(routeAndPath: string, previous: any) =>
			{
				let pos: number = routeAndPath.indexOf ("=");
				let route: string = "";
				let path: string = "";

				if (pos > -1)
				{
					route = routeAndPath.substr (0, pos);
					path = routeAndPath.substr (pos + 1);
				}

				server.addStaticRoute (route, path);
			});
		command.option ("--serve-hott-files", "Serve Hott files", (port: string, previous: any) =>
			{
				server.serveHottFiles = true;
			});
		command.option ("--js-url <url>", "The url to the HotPreprocessor JS", (url: string, previous: any) =>
			{
				server.hottFilesAssociatedInfo.jsSrcPath = url;
			});
		command.option ("--development-mode", "Set to execute in development mode. This will allow for testing data to be collected and executed", 
			(value: string, previous: any) =>
			{
				processor.mode = DeveloperMode.Development;
			});
		command.option ("-h, --http-port <port>", "Set the HTTP port", (port: string, previous: any) =>
			{
				server.ports.http = parseInt (port);
			}, 80);
		command.option ("-s, --https-port <port>", "Set the HTTPS port", (port: string, previous: any) =>
			{
				server.ports.https = parseInt (port);
			}, 443);
		command.option ("-d, --dont-redirect-http-to-https", "Do not redirect HTTP traffic to HTTPS", (port: string, previous: any) =>
			{
				server.redirectHTTPtoHTTPS = false;
			});
		command.option ("-a, --listen-address <address>", "Set the listen address", (address: string, previous: any) =>
			{
				server.listenAddress = address;
			}, "0.0.0.0");
		command.option ("--ssl-cert <path>", "Set the path to the SSL cert", (cert: string, previous: any) =>
			{
				server.ssl.cert = cert;
			}, "");
		command.option ("--ssl-key <path>", "Set the path to the SSL key", (key: string, previous: any) =>
			{
				server.ssl.key = key;
			}, "");
		command.option ("--ssl-ca <path>", "Set the path to the SSL CA", (ca: string, previous: any) =>
			{
				server.ssl.ca = ca;
			}, "");
		command.option ("-l, --log-level <level>", "Set the logging level. Can be (info,warning,error,all,none)", 
			(logLevel: string, previous: any) =>
			{
				if (logLevel === "info")
					server.logger.logLevel = HotLogLevel.Info;

				if (logLevel === "warning")
					server.logger.logLevel = HotLogLevel.Warning;

				if (logLevel === "error")
					server.logger.logLevel = HotLogLevel.Error;

				if (logLevel === "all")
					server.logger.logLevel = HotLogLevel.All;

				if (logLevel === "none")
					server.logger.logLevel = HotLogLevel.None;
			}, "");

		if (process.argv.length > 2)
			program.parse (process.argv);

		if (server.staticRoutes.length < 1)
			server.addStaticRoute ("/", process.cwd ());

		if (processor.mode === DeveloperMode.Development)
			await HotTesterServer.startServer ();

		await server.listen ();
	}
	catch (ex)
	{
		processor.logger.error (ex.stack);
	}
}

start ();