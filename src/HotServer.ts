import { HotPreprocessor } from "./HotPreprocessor";
import { HotLog } from "./HotLog";
import { HotAPI } from "./HotAPI";
import { HotRoute } from "./HotRoute";

/**
 * The type of server.
 */
export enum HotServerType
{
	HTTP,
	WebSockets
}

/**
 * The server.
 */
export abstract class HotServer
{
	/**
	 * The processor to use.
	 */
	processor: HotPreprocessor;
	/**
	 * The API to use.
	 */
	api: HotAPI;
	/**
	 * The network address to listen on.
	 */
	listenAddress: string;
	/**
	 * The ports to use.
	 */
	ports: {
			http: number;
			https: number;
		};
	/**
	 * SSL settings.
	 */
	ssl: {
			/**
			 * The SSL certificate to use.
			 */
			cert: string;
			/**
			 * The SSL certificate key to use.
			 */
			key: string;
			/**
			 * The SSL certificate CA to use.
			 */
			ca: string;
		};
	/**
	 * Redirect HTTP traffic to HTTPS.
	 */
	redirectHTTPtoHTTPS: boolean;
	/**
	 * The type of server.
	 */
	type: HotServerType;
	/**
	 * The logger.
	 */
	logger: HotLog;

	constructor (processor: HotPreprocessor)
	{
		this.processor = processor;
		this.api = null;
		this.listenAddress = "0.0.0.0";
		this.ports = {
				http: 80,
				https: 443
			};
		this.ssl = {
				cert: "",
				key: "",
				ca: ""
			};
		this.redirectHTTPtoHTTPS = true;
		this.type = HotServerType.HTTP;
		this.logger = processor.logger;
	}

	/**
	 * Set an API to this server.
	 */
	setAPI (api: HotAPI): void
	{
		this.api = api;
		this.api.registerRoutes ();
	}

	/**
	 * Register a route with the server.
	 */
	abstract registerRoute (route: HotRoute): void;

	/**
	 * Start listening for requests.
	 */
	abstract async listen (): Promise<void>;

	/**
	 * Shutdown the server.
	 */
	abstract async shutdown (): Promise<void>;
}