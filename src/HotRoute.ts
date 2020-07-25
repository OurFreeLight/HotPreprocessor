import { HotServer } from "./HotServer";
import { HotRouteMethod } from "./HotRouteMethod";
import { HotClient } from "./HotClient";

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
		this.route = route;
		this.version = "v1";
		this.prefix = "";
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
	addMethod (method: HotRouteMethod)
	{
		if (! (method instanceof HotRouteMethod))
			method = new HotRouteMethod (method);

		this.methods.push (method);
	}

	/**
	 * Executes when authorizing a called method.
	 * The value returned from here will be passed to onExecute in the 
	 * called HotRouteMethod. Undefined returning from here will mean 
	 * the authorization failed.
	 */
	onAuthorize: (req: any, res: any) => Promise<any> = null;
}