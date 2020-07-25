/**
 * Available HTTP methods.
 */
export enum HTTPMethod
{
	GET = "get",
	POST = "post"
}

/**
 * An API method to make.
 */
export class HotRouteMethod
{
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

	constructor (name: string, 
		onExecute: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any> = null, 
		type: HTTPMethod = HTTPMethod.POST)
	{
		this.name = name;
		this.type = type;
		this.isRegistered = false;
		this.onAuthorize = null;
		this.onExecute = onExecute;
	}

	/**
	 * Executes when authorizing a called method. If this method 
	 * is set, this will not call onAuthorize for the parent HotRoute.
	 * The value returned from here will be passed to onExecute. 
	 * Undefined returning from here will mean the authorization failed.
	 */
	onAuthorize: (req: any, res: any) => Promise<any> = null;

	/**
	 * Executes when executing a called method. This will stringify 
	 * any JSON object and send it as a JSON response. If undefined 
	 * is returned no response will be sent to the server. So the 
	 * developer would have to send a response using "res".
	 */
	onExecute: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any> = null;
}