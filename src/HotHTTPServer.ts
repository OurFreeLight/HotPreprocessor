import * as http from "http";
import * as https from "https";
import * as ppath from "path";
import * as fs from "fs";
import { F_OK } from "constants";

import express from "express";
import { Fields, Files, IncomingForm } from "formidable";

import { HotServer } from "./HotServer";
import { HotPreprocessor } from "./HotPreprocessor";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, HTTPMethod } from "./HotRouteMethod";
import { EventExecutionType, HotAPI } from "./HotAPI";

/**
 * A static route.
 */
export interface StaticRoute
{
	/**
	 * The route to the files.
	 */
	route?: string;
	/**
	 * The absolute path to the location of the files to 
	 * serve on this machine.
	 */
	localPath?: string;
}

/**
 * A HTTP server.
 */
export class HotHTTPServer extends HotServer
{
	/**
	 * The express app to use.
	 */
	expressApp: express.Express;
	/**
	 * The HTTP listener to use.
	 */
	httpListener: http.Server;
	/**
	 * The HTTPS listener to use.
	 */
	httpsListener: https.Server;
	/**
	 * The static files and folders to serve.
	 */
	staticRoutes: StaticRoute[];
	/**
	 * Any non-static routes that need to be added. These 
	 * will be added during the preregistration phase, before 
	 * all API routes are added.
	 */
	routes: {
			/**
			 * The type of route.
			 */
			type: HTTPMethod;
			/**
			 * The type of route.
			 */
			route: string;
			/**
			 * The method to execute when this route is hit.
			 */
			method: (req: express.Request, res: express.Response) => Promise<void>;
		}[];
	/**
	 * Serve hott files when requested.
	 */
	serveHottFiles: boolean;
	/**
	 * The associated info with any hott files served.
	 */
	hottFilesAssociatedInfo: {
			/**
			 * The default name for a served Hott file.
			 */
			name: string;
			/**
			 * The base url for a hott file.
			 */
			url: string;
			/**
			 * The JavaScript source path.
			 */
			jsSrcPath: string;
		};

	constructor (processor: HotPreprocessor | HotServer, httpPort: number = null, httpsPort: number = null)
	{
		super (processor);

		this.expressApp = express ();
		this.httpListener = null;
		this.httpsListener = null;
		this.staticRoutes = [];
		this.routes = [];
		this.serveHottFiles = false;
		this.hottFilesAssociatedInfo = {
				name: "",
				url: "./",
				jsSrcPath: "./js/HotPreprocessor.js"
			};

		if (process.env.LISTEN_ADDR != null)
		{
			if (process.env.LISTEN_ADDR !== "")
				this.listenAddress = process.env.LISTEN_ADDR;
		}

		if (process.env.USE_HTTP != null)
		{
			this.ssl = {
					cert: "",
					key: "",
					ca: ""
				};
		}

		if (httpPort != null)
			this.ports.http = httpPort;

		if (httpsPort != null)
			this.ports.https = httpsPort;

		if (process.env.HTTP_PORT != null)
		{
			if (process.env.HTTP_PORT !== "")
				this.ports.http = parseInt (process.env.HTTP_PORT);
		}

		if (process.env.HTTPS_PORT != null)
		{
			if (process.env.HTTPS_PORT !== "")
				this.ports.https = parseInt (process.env.HTTPS_PORT);
		}

		if (process.env.HTTPS_SSL_CERT != null)
		{
			if (process.env.HTTPS_SSL_CERT !== "")
				this.ssl.cert = process.env.HTTPS_SSL_CERT;

			if (process.env.HTTPS_SSL_KEY !== "")
				this.ssl.key = process.env.HTTPS_SSL_KEY;

			if (process.env.HTTPS_SSL_CA !== "")
				this.ssl.ca = process.env.HTTPS_SSL_CA;
		}

		let JSONLimit: string = "1mb";

		if (process.env.JSON_LIMIT != null)
		{
			if (process.env.JSON_LIMIT !== "")
				JSONLimit = process.env.JSON_LIMIT;
		}

		this.expressApp.options ("*", (req: express.Request, res: express.Response, next: express.NextFunction) =>
			{
				res.header ("Access-Control-Allow-Origin", "*");
				res.header ("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
				res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

				res.statusCode = 204;
				res.setHeader ("Content-Length", "0");
				res.end ();
			});
		this.expressApp.use ((req: express.Request, res: express.Response, next: express.NextFunction) =>
			{
				res.header ("Access-Control-Allow-Origin", "*");
				res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

				next ();
			});
		this.expressApp.use (express.urlencoded ({ "extended": true }));
		this.expressApp.use (express.json ({ "limit": JSONLimit }));
	}

	/**
	 * Add a static route.
	 */
	addStaticRoute (route: string | StaticRoute, localPath: string = "."): void
	{
		let staticRoute: StaticRoute = null;

		if (typeof (route) === "string")
		{
			staticRoute = {
					"route": route,
					"localPath": localPath
				};
		}
		else
			staticRoute = route;

		this.staticRoutes.push (staticRoute);
		this.registerStaticRoute (staticRoute);
	}

	/**
	 * Add a route. This will be registered before any APIs are registered.
	 */
	addRoute (route: string, method: (req: express.Request, res: express.Response) => Promise<void>, 
				type: HTTPMethod = HTTPMethod.GET): void
	{
		let newRoute = {
				type: type,
				route: route,
				method: method
			};

		this.routes.push (newRoute);
	}

	/**
	 * Serve a directory. This is an alias for addStaticRoute.
	 */
	serveDirectory (route: string | StaticRoute, localPath: string = "."): void
	{
		this.addStaticRoute (route, localPath);
	}

	/**
	 * Register a static route with Express.
	 */
	registerStaticRoute (route: StaticRoute): void
	{
		this.clearErrorHandlingRoutes ();
		this.preregisterRoute ();
		this.expressApp.use (route.route, express.static (ppath.normalize (route.localPath)));
		this.setErrorHandlingRoutes ();
	}

	/**
	 * Get a static route.
	 */
	getStaticRoute (route: string): StaticRoute
	{
		let foundRoute: StaticRoute = null;

		for (let iIdx = 0; iIdx < this.staticRoutes.length; iIdx++)
		{
			let tempRoute: StaticRoute = this.staticRoutes[iIdx];

			if (tempRoute.route === route)
			{
				foundRoute = tempRoute;

				break;
			}
		}

		return (foundRoute);
	}

	/**
	 * Register a route.
	 */
	async registerRoute (route: HotRoute): Promise<void>
	{
		if (route.onRegister != null)
		{
			if (await route.onRegister () === false)
				return;
		}

		this.clearErrorHandlingRoutes ();
		this.preregisterRoute ();

		for (let iIdx = 0; iIdx < route.methods.length; iIdx++)
		{
			let method: HotRouteMethod = route.methods[iIdx];

			if (method.isRegistered === true)
				continue;

			if (method.onRegister != null)
			{
				if (await method.onRegister () === false)
					continue;
			}

			let methodName: string = "/";

			if (route.version !== "")
				methodName += `${route.version}/`;

			if (route.prefix !== "")
				methodName += `${route.prefix}/`;

			if (route.route !== "")
				methodName += `${route.route}/`;

			methodName += method.name;
			method.isRegistered = true;

			this.expressApp[method.type] (methodName, 
				async (req: express.Request, res: express.Response) =>
				{
					let hasAuthorization: boolean = true;
					let authorizationValue: any = null;
					let jsonObj: any = req.body;
					let queryObj: any = req.query;
					let api: HotAPI = route.connection.api;
					let thisObj: any = route;

					if (api.executeEventsUsing === EventExecutionType.HotAPI)
						thisObj = api;

					if (api.executeEventsUsing === EventExecutionType.HotMethod)
						thisObj = method;

					this.logger.verbose (`${req.method} ${methodName}, JSON: ${JSON.stringify (jsonObj)}, Query: ${JSON.stringify (queryObj)}`);

					if (method.onServerAuthorize != null)
					{
						try
						{
							authorizationValue = 
								await method.onServerAuthorize.call (thisObj, req, res, jsonObj, queryObj);
						}
						catch (ex)
						{
							this.logger.verbose (`Authorization error: ${ex.message}`);
							res.json ({ error: ex.message });
							hasAuthorization = false;

							return;
						}

						if (authorizationValue === undefined)
							hasAuthorization = false;
					}
					else
					{
						if (route.onAuthorizeUser != null)
						{
							authorizationValue = await route.onAuthorizeUser (req, res);

							if (authorizationValue === undefined)
								hasAuthorization = false;
						}
					}

					this.logger.verbose (`${req.method} ${methodName}, Authorized: ${hasAuthorization}, Authorization Value: ${authorizationValue}`);

					if (hasAuthorization === true)
					{
						if (method.onServerExecute != null)
						{
							try
							{
								let result: any = 
									await method.onServerExecute.call (
										thisObj, req, res, authorizationValue, jsonObj, queryObj);

								this.logger.verbose (`${req.method} ${methodName}, Response: ${result}`);

								if (result !== undefined)
									res.json (result);
							}
							catch (ex)
							{
								this.logger.verbose (`Execution error: ${ex.message}`);
								res.json ({ error: ex.message });
							}
						}
					}
					else
					{
						res.json (route.errors["not_authorized"]);
						this.logger.verbose (`${req.method} ${methodName}, not_authorized`);
					}
				});
		}

		this.setErrorHandlingRoutes ();
	}

	/**
	 * Check if a file exists.
	 */
	static async checkIfFileExists (filepath: string): Promise<boolean>
	{
		return (await new Promise<boolean> ((resolve, reject) =>
			{
				fs.access (filepath, F_OK, (err: NodeJS.ErrnoException) =>
					{
						if (err != null)
							resolve (false);

						resolve (true);
					});
			}));
	}

	/**
	 * The routes to add before registering a route.
	 */
	preregisterRoute (): void
	{
		this.expressApp.use ((req: express.Request, res: express.Response, next: any): void =>
			{
				const url: string = `${req.protocol}://${req.hostname}${req.originalUrl}`;
				this.logger.verbose (`Requested: ${url}`);

				next ();
			});

		for (let iIdx = 0; iIdx < this.routes.length; iIdx++)
		{
			let route = this.routes[iIdx];

			this.expressApp[route.type] (route.route, route.method);
		}

		if (this.serveHottFiles === true)
		{
			this.expressApp.use ((req: express.Request, res: express.Response, next: any): void =>
				{
					(async () =>
					{
						const requestedUrl: string = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
						let url: URL = new URL (requestedUrl);
						let sendContent = (fullUrl: URL, path: string): void =>
							{
								fullUrl.searchParams.append ("hpserve", "nahfam");

								const content: string = this.processor.generateContent (path, 
									this.hottFilesAssociatedInfo.name,
									fullUrl.toString (),
									this.hottFilesAssociatedInfo.jsSrcPath);
								res.send (content);
							};

						if (url.pathname.indexOf (".hott") > -1)
						{
							let result: string = "";
							let hpserve = url.searchParams.get ("hpserve");

							if (hpserve != null)
								result = hpserve;

							if (result !== "nahfam")
							{
								if (await HotHTTPServer.checkIfFileExists (url.pathname) === true)
								{
									sendContent (url, url.pathname);

									return;
								}

								if (await HotHTTPServer.checkIfFileExists (
									ppath.normalize (`${process.cwd ()}/${url.pathname}`)) === true)
								{
									sendContent (url, url.pathname);

									return;
								}
							}
						}

						next ();
					})();
				});
		}
	}

	/**
	 * Get all files uploaded.
	 */
	static async getFileUploads (req: express.Request, options: any = { multiples: true }): Promise<Files>
	{
		return (await new Promise<Files> ((resolve, reject) =>
			{
				const form = new IncomingForm (options);
		
				form.parse (req, (err: any, fields: Fields, files: Files) =>
					{
						if (err != null)
							throw err;
		
						resolve (files);
					});
			}));
	}

	/**
	 * Set the error handlers. This will create two express routes at the bottom of the
	 * route stack. The first will be to capture any 404 errors, the second would be to 
	 * catch any remaining errors.
	 */
	setErrorHandlingRoutes (
		handle404: (req: express.Request, res: express.Response, next: any) => void = null, 
		handleOther: (err: any, req: express.Request, res: express.Response, next: any) => void = null
		): void
	{
		if (handle404 == null)
		{
			handle404 = (req: express.Request, res: express.Response, next: any): void =>
				{
					this.logger.verbose (`404 ${JSON.stringify (req.url)}`);
					res.status (404).send ({ error: "404" });
				};
		}

		if (handleOther == null)
		{
			handleOther = (err: any, req: express.Request, res: express.Response, next: any): void =>
				{
					let stack: string = "";
					let msg: string = "";

					if (err != null)
					{
						stack = err.stack;
						msg = err.message;
					}

					this.logger.verbose (`500 Server error ${JSON.stringify (stack)}`);
					res.status (500).send ({ error: `Server error: ${msg}` });
				};
		}

		this.expressApp.use (handle404);
		this.expressApp.use (handleOther);
	}

	/**
	 * Clear the last two express routes, which are reserved for the 
	 * error handlers.
	 */
	clearErrorHandlingRoutes (): void
	{
		if (this.expressApp._router == null)
			return;

		let stackCount: number = this.expressApp._router.stack.length;

		for (let iIdx = 0; iIdx < stackCount; iIdx++)
		{
			let elm: any = this.expressApp._router.stack[iIdx];

			if (elm != null)
			{
				let name: string = elm.name;

				if ((name === "handle404") || (name === "handleOther"))
				{
					(<any[]>this.expressApp._router.stack).splice (iIdx, 1);
					iIdx--;
					stackCount = this.expressApp._router.stack.length;
				}
			}
		}
	}

	/**
	 * Load a HotSite JSON file. Be sure to call this after attaching 
	 * your api!
	 */
	async loadHotSite (path: string): Promise<HotPreprocessor>
	{
		await this.processor.loadHotSite (ppath.normalize (path));
		this.processor.createExpressRoutes (this.expressApp);

		return (this.processor);
	}

	/**
	 * Start listening for requests.
	 */
	async listen (): Promise<void>
	{
		let promise: Promise<void> = new Promise<void> (
			async (resolve, reject) =>
			{
				let completedSetup = () =>
					{
						let protocol: string = "http";
						let port: number = this.ports.http;

						if (this.ssl.cert !== "")
						{
							protocol = "https";
							port = this.ports.https;
						}

						this.logger.info (`Server running at ${protocol}://${this.listenAddress}:${port}/`);
						resolve ();
					};

				for (let iIdx = 0; iIdx < this.staticRoutes.length; iIdx++)
				{
					let staticRoute: StaticRoute = this.staticRoutes[iIdx];

					this.registerStaticRoute (staticRoute);
				}

				if (this.api != null)
				{
					if (this.api.onPreRegister != null)
					{
						let continueRegistering: boolean = await this.api.onPreRegister ();

						if (continueRegistering === false)
							return;
					}

					await this.api.registerRoutes ();

					if (this.api.onPostRegister != null)
					{
						let continueOn: boolean = await this.api.onPostRegister ();

						if (continueOn === false)
							return;
					}
				}

				if (this.ssl.cert === "")
				{
					this.httpListener = http.createServer (this.expressApp);
					this.httpListener.listen (this.ports.http, this.listenAddress, completedSetup);
				}
				else
				{
					if (this.redirectHTTPtoHTTPS === true)
					{
						this.httpListener = http.createServer ((req: http.IncomingMessage, res: http.ServerResponse) =>
							{
								let host: string = req.headers["host"];

								res.writeHead (301, {
										"Location": `https://${host}${req.url}`
									});
								res.end ();
							});
						this.httpListener.listen (this.ports.http, this.listenAddress, () =>
							{
								this.logger.info (`Redirecting HTTP(${this.ports.http}) traffic to HTTPS(${this.ports.https})`);
							});
					}

					this.httpsListener = https.createServer ({
							cert: this.ssl.cert,
							key: this.ssl.key,
							ca: this.ssl.ca
						}, this.expressApp);
					this.httpsListener.listen (this.ports.https, this.listenAddress, completedSetup);
				}
			});

		return (promise);
	}

	/**
	 * Start the server.
	 * 
	 * @param localStaticPath The public path that contains the HTML, Hott files, images, and 
	 * all public content. This can also be an array of StaticRoutes.
	 * @param httpPort The HTTP port to listen on .
	 * @param httpsPort The HTTPS port to listen on.
	 * @param processor The HotPreprocessor or parent server being used for communication.
	 */
	static async startServer (localStaticPath: string | StaticRoute[] = null, 
		httpPort: number = 80, httpsPort: number = 443, 
		processor: HotServer | HotPreprocessor = null,): 
			Promise<{ processor: HotServer | HotPreprocessor; server: HotHTTPServer; }>
	{
		if (processor == null)
			processor = new HotPreprocessor ();

		let webServer: HotHTTPServer = new HotHTTPServer (processor, httpPort, httpsPort);

		if (localStaticPath == null)
			localStaticPath = process.cwd ();

		if (typeof (localStaticPath) === "string")
			webServer.addStaticRoute ("/", localStaticPath);
		else
		{
			for (let iIdx = 0; iIdx < localStaticPath.length; iIdx++)
			{
				let staticRoute: StaticRoute = localStaticPath[iIdx];

				webServer.addStaticRoute (staticRoute);
			}
		}

		await webServer.listen ();

		return ({ processor: processor, server: webServer });
	}

	/**
	 * Shutdown the server.
	 */
	async shutdown (): Promise<void>
	{
		this.httpListener.close ();
		this.expressApp = null;
	}
}