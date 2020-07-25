import { HotAPI } from "../../src/HotAPI";
import { HotRoute } from "../../src/HotRoute";
import { HotRouteMethod } from "../../src/HotRouteMethod";
import { HotClient } from "../../src/HotClient";
import { HotServer } from "../../src/HotServer";

export class HelloWorldAPI extends HotAPI
{
	constructor (baseUrl: string, connection: HotServer | HotClient = null, db: any = null)
	{
		super(baseUrl, connection, db);

		this.addRoute (new HotRoute (connection, "hello_world", [
				new HotRouteMethod ("hello", this.helloCalled)
			]));
	}

	/**
	 * This executes from the server side, 
	 */
	async helloCalled (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
	{
		let message: string = "";

		if (jsonObj != null)
		{
			if (jsonObj.message != null)
				message = (<string>jsonObj.message).toLowerCase ();
		}

		if ((message === "hi") || (message === "hello"))
			return ("Hello!");

		return ({ error: "You didn't say hi." });
	}

	/**
	 * This should be called from the client side.
	 */
	async sayHello (message: string = "hello"): Promise<string>
	{
		let result: any = await this.connection.api.call ("/v1/hello_world/hello", { message: message });

		if (result.error != null)
			result = result.error;

		return (result);
	}
}