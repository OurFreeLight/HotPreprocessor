import { HotServer } from "./HotServer";
import { HotRouteMethod, HTTPMethod, ServerExecutionFunction } from "./HotRouteMethod";
import { HotClient } from "./HotClient";
import { HotLog } from "./HotLog";

/**
 * The route to use.
 */
export class HotRoute
{
	/**
	 * The server that maintains the connections.
	 */
	connection: HotServer | HotClient;
	/**
	 * The associated logger.
	 */
	logger: HotLog;
	/**
	 * The route.
	 */
	route: string;
	/**
	 * The version.
	 */
	version: string;
	/**
	 * The prefix to add to the beginning of each route method.
	 */
	prefix: string;
	/**
	 * The authorization credentials to be used by the client 
	 * when connecting to the server.
	 */
	authCredentials: any;
	/**
	 * The calls that can be made.
	 */
	methods: HotRouteMethod[];
	/**
	 * The errors and their JSON that can be thrown. Can be:
	 * * not_authorized
	 */
	errors: { [error: string]: any };

	constructor (connection: HotServer | HotClient, route: string, methods: HotRouteMethod[] = [])
	{
		this.connection = connection;
		this.logger = null;

		if (this.connection != null)
		{
			if (this.connection.processor != null)
				this.logger = this.connection.processor.logger;
		}

		this.route = route;
		this.version = "v1";
		this.prefix = "";
		this.authCredentials = null;
		this.methods = methods;
		this.errors = {
				"not_authorized": HotRoute.createError ("Not authorized.")
			};
	}

	/**
	 * Create an error JSON object.
	 */
	static createError (message: string): any
	{
		return ({ error: message });
	}

	/**
	 * Add an API method to this route.
	 */
	addMethod (
		method: HotRouteMethod | string, 
		executeFunction: ServerExecutionFunction = null,
		type: HTTPMethod = HTTPMethod.POST
		): void
	{
		if (typeof (method) === "string")
			method = new HotRouteMethod (this, method, executeFunction, type);

		this.methods.push (method);
	}

	/**
	 * Executes when first registering this route with Express. If 
	 * this returns false, the route will not be registered.
	 */
	onRegister: () => Promise<boolean> = null;

	/**
	 * Executes when authorizing a called method.
	 * The value returned from here will be passed to onExecute in the 
	 * called HotRouteMethod. Undefined returning from here will mean 
	 * the authorization failed.
	 */
	onAuthorizeUser: (req: any, res: any) => Promise<any> = null;
}