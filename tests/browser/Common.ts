import * as http from "http";

import express from "express";
import { Builder, WebDriver, Session } from "selenium-webdriver";

/**
 * Common testing features
 */
export class Common
{
	/**
	 * The express app to serve HTML with.
	 */
	expressApp: express.Express;
	/**
	 * The HTTP listener.
	 */
	httpListener: http.Server;
	/**
	 * The selenium webdriver.
	 */
	driver: WebDriver;
	/**
	 * The driver capabilities to use.
	 */
	capabilities: any;
	/**
	 * The current selenium session running.
	 */
	session: Session;
	/**
	 * The port the web server should use.
	 */
	port: number;
	/**
	 * The listen address to use.
	 */
	listenAddress: string;

	constructor ()
	{
		this.expressApp = null;
		this.httpListener = null;
		this.driver = null;
		this.capabilities = {};
		this.session = null;
		this.port = 8238;
		this.listenAddress = "127.0.0.1";
	}

	/**
	 * Load the tests.
	 */
	async load (): Promise<void>
	{
		this.capabilities = {
				browserName: "chrome",
				platformName: "windows"
			};

		if (process.env.NODE_TLS_REJECT_UNAUTHORIZED != null)
		{
			if (process.env.NODE_TLS_REJECT_UNAUTHORIZED == "0")
				this.capabilities["acceptInsecureCerts"] = true;
		}

		let builder: Builder = new Builder ();
		this.driver = await builder.withCapabilities (this.capabilities).build ();
		this.session = await this.driver.getSession ();
	}

	/**
	 * Get the url for the server.
	 */
	getUrl (): string
	{
		return (`http://127.0.0.1:${this.port}`);
	}

	/**
	 * Start the micro web server.
	 */
	async startServer (): Promise<void>
	{
		let promise: Promise<void> = new Promise<void> (async (resolve, reject) =>
			{
				this.expressApp = express ();
		
				this.expressApp.use (express.static (`${process.cwd ()}/`));
				this.expressApp.get ("/", async (req: express.Request, res: express.Response) => 
					{
						res.send ("HotPreprocessor");
					});
				this.httpListener = this.expressApp.listen (this.port, this.listenAddress, () =>
					{
						console.log (`Running on port http://127.0.0.1:${this.port}/`);
						resolve ();
					});
			});

		return (promise);
	}

	/**
	 * Stop the server.
	 */
	shutdown (): void
	{
		this.httpListener.close ();
		this.expressApp = null;
	}
}