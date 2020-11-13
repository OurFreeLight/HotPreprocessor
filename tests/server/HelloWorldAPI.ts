/**
 * This file can be used for both server/client side at the same time. So because of that, 
 * weird tricks have to be done with WebPack to get it to work properly. Still looking for 
 * ideas on how to make this work more seamlessly.
 */
import { HotAPI } from "../../src/HotAPI";
import { HotRoute } from "../../src/HotRoute";
import { HotClient } from "../../src/HotClient";
import { HotServer } from "../../src/HotServer";
<<<<<<< Updated upstream
import { HotHTTPServer } from "../../src/api";
=======
import { HotPreprocessor } from "../../src/HotPreprocessor";

/// @fixme This weirdness is due to WebPack. Gotta find another way around this...
var HotHTTPServer: any = null;

// @ts-ignore
if (typeof (HotPreprocessorWeb) === "undefined")
{
	if (HotPreprocessor.isWeb === false)
		HotHTTPServer = require ("../../src/HotHTTPServer").HotHTTPServer;
}
>>>>>>> Stashed changes

export class HelloWorldAPI extends HotAPI
{
	constructor (baseUrl: string, connection: HotServer | HotClient = null, db: any = null)
	{
		super(baseUrl, connection, db);

		let route: HotRoute = new HotRoute (connection, "hello_world");
		route.addMethod ("hello", this.helloCalled);
		route.addMethod ("file_upload", this.fileUpload);
		this.addRoute (route);
	}

	/**
	 * This executes a response saying Hello from the server side.
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
	 * This accepts a file upload.
	 */
	async fileUpload (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
	{
		let filename: string = "";
		let filepath: string = "";
		let results = await HotHTTPServer.getFileUploads (req);

		for (let key in results)
		{
			let file = results[key];
			filename = file.name;
			filepath = file.path;

			break;
		}

		return ({ msg: `File ${filename} uploaded to ${filepath}!`, path: filepath });
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