import { HotRoute } from "./HotRoute";
import { HotServer } from "./HotServer";

/**
 * Available HTTP methods.
 */
export enum HTTPMethod
{
	GET = "get",
	POST = "post"
}

/**
 * A function that will be executed by the server.
 */
export type ServerExecutionFunction = 
	(req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any>;
/**
 * A function that will be executed by the client.
 */
export type ClientExecutionFunction = (...args: any[]) => Promise<any>;
/**
 * A function that will be executed by the server for authorization.
 */
export type ServerAuthorizationFunction = (req: any, res: any) => Promise<any>;

/**
 * An API method to make.
 */
export class HotRouteMethod
{
	/**
	 * The parent route.
	 */
	parentRoute: HotRoute;
	/**
	 * The api call name.
	 */
	name: string;
	/**
	 * The api call name.
	 */
	type: HTTPMethod;
	/**
	 * Has this method been registered with the server? This 
	 * prevents the method from being reregistered.
	 */
	isRegistered: boolean;

	constructor (route: HotRoute, name: string, onExecute: ServerExecutionFunction | ClientExecutionFunction = null, 
		type: HTTPMethod = HTTPMethod.POST, onAuthorize: ServerAuthorizationFunction = null)
	{
		this.parentRoute = route;
		this.name = name;
		this.type = type;
		this.isRegistered = false;
		this.onServerAuthorize = onAuthorize;

		if (this.parentRoute.connection instanceof HotServer)
			this.onServerExecute = onExecute;
		//else
			//this.onClientExecute = onExecute;
	}

	/**
	 * Executes when authorizing a called method. If this method 
	 * is set, this will not call onAuthorize for the parent HotRoute.
	 * The value returned from here will be passed to onExecute. 
	 * Undefined returning from here will mean the authorization failed.
	 */
	onServerAuthorize?: ServerAuthorizationFunction;

	/**
	 * Executes when executing a called method from the server side. 
	 * This will stringify any JSON object and send it as a JSON response. 
	 * If undefined is returned no response will be sent to the server. 
	 * So the developer would have to send a response using "res".
	 */
	onServerExecute?: ServerExecutionFunction;
	/**
	 * Executes when executing a called method from the client side.
	 * @fixme Is this necessary?
	 */
	onClientExecute?: ClientExecutionFunction;
}