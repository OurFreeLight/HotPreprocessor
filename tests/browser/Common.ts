import * as ppath from "path";
import * as oss from "os";

import { HotPreprocessor, HotHTTPServer, HotLogLevel } from "../../src/api";
import { HelloWorldAPI } from "../server/HelloWorldAPI";

import { Builder, WebDriver, Session } from "selenium-webdriver";

/**
 * Common testing features
 */
export class Common
{
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
	 * The processor to use.
	 */
	processor: HotPreprocessor;
	/**
	 * The HTTP server.
	 */
	server: HotHTTPServer;

	constructor ()
	{
		this.processor = new HotPreprocessor ();
		this.driver = null;
		this.capabilities = {};
		this.session = null;
		this.server = null;
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

		if (oss.platform () === "linux")
			this.capabilities["platformName"] = "linux";

		if (oss.platform () === "darwin")
			this.capabilities["platformName"] = "mac";

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
		return (`http://127.0.0.1:${this.server.ports.http}`);
	}

	/**
	 * Start the web server.
	 */
	async startServer (): Promise<void>
	{
		this.server = new HotHTTPServer (this.processor);

		this.server.logger.logLevel = HotLogLevel.All;
		this.server.staticRoutes.push ({
				"route": "/",
				"localPath": ppath.normalize (`${process.cwd ()}/`)
			});
		let api: HelloWorldAPI = new HelloWorldAPI (this.getUrl (), this.server);
		this.server.setAPI (api);

		return (this.server.listen ());
	}

	/**
	 * Stop the server.
	 */
	async shutdown (): Promise<void>
	{
		await this.server.shutdown ();
	}
}