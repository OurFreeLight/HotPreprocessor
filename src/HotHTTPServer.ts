import * as http from "http";
import * as https from "https";

import express from "express";

import { HotServer } from "./HotServer";
import { HotPreprocessor } from "./HotPreprocessor";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod } from "./HotRouteMethod";

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

	constructor (processor: HotPreprocessor)
	{
		super (processor);

		this.processor = processor;
		this.expressApp = express ();
		this.httpListener = null;
		this.httpsListener = null;
		this.staticRoutes = [];

		if (process.env.LISTEN_ADDR != null)
		{
			if (process.env.LISTEN_ADDR !== "")
				this.listenAddress = process.env.LISTEN_ADDR;
		}

		if (process.env.USE_HTTP != null)
			this.ssl = null;

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

		this.expressApp.use ((req: express.Request, res: express.Response, next: express.NextFunction) =>
			{
				res.header ("Access-Control-Allow-Origin", "*");
				res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

				next ();
			});
		this.expressApp.use (express.urlencoded ({ "extended": true }));
		this.expressApp.use (express.json ({ "limit": "1mb" }));
	}

	/**
	 * Add a static route.
	 */
	addStaticRoute (route: string | StaticRoute, localPath: string): void
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
	 * Register a static route with Express.
	 */
	registerStaticRoute (route: StaticRoute): void
	{
		this.clearErrorHandlingRoutes ();
		this.expressApp.use (route.route, express.static (route.localPath));
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
	registerRoute (route: HotRoute): void
	{
		this.clearErrorHandlingRoutes ();

		for (let iIdx = 0; iIdx < route.methods.length; iIdx++)
		{
			let method: HotRouteMethod = route.methods[iIdx];

			if (method.isRegistered === true)
				continue;

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

					this.logger.verbose (`${req.method} ${methodName}, JSON: ${JSON.stringify (jsonObj)}, Query: ${JSON.stringify (queryObj)}`);

					if (method.onAuthorize != null)
					{
						authorizationValue = await method.onAuthorize (req, res);

						if (authorizationValue === undefined)
							hasAuthorization = false;
					}
					else
					{
						if (route.onAuthorize != null)
						{
							authorizationValue = await route.onAuthorize (req, res);

							if (authorizationValue === undefined)
								hasAuthorization = false;
						}
					}

					this.logger.verbose (`${req.method} ${methodName}, Authorized: ${hasAuthorization}, Authorization Value: ${authorizationValue}`);

					if (hasAuthorization === true)
					{
						if (method.onExecute != null)
						{
							let result: any = await method.onExecute (req, res, authorizationValue, jsonObj, queryObj);

							this.logger.verbose (`${req.method} ${methodName}, Response: ${result}`);

							if (result !== undefined)
								res.json (result);
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
					this.logger.verbose (`500 Server error ${JSON.stringify (err)}`);
					res.status (500).send ({ error: "Server error." });
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

						if (this.ssl != null)
							protocol = "https";

						this.logger.info (`Server running at ${protocol}://${this.listenAddress}:${this.ports.http}/`);
						resolve ();
					};

				for (let iIdx = 0; iIdx < this.staticRoutes.length; iIdx++)
				{
					let staticRoute: StaticRoute = this.staticRoutes[iIdx];

					this.registerStaticRoute (staticRoute);
				}

				if (this.api != null)
					this.api.registerRoutes ();

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
	 * Shutdown the server.
	 */
	async shutdown (): Promise<void>
	{
		this.httpListener.close ();
		this.expressApp = null;
	}
}