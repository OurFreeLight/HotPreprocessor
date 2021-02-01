import { HotRoute, HTTPMethod, HotDBMySQL, MySQLSchema, MySQLResults, 
	MySQLSchemaTable, MySQLSchemaField, ConnectionStatus, HotPreprocessor, 
	HotServer, HotRouteMethod, ServerAuthorizationFunction } from "hotpreprocessor";
import { AppAPI } from "./AppAPI";

/**
 * Hello world route.
 */
export class HelloWorld extends HotRoute
{
	constructor (api: AppAPI)
	{
		super (api.connection, "hello_world");

		this.addMethod (new HotRouteMethod (this, "hi", this._hi, 
			HTTPMethod.POST));
	}

	/**
	 * Say hi.
	 */
	protected async _hi (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
	{
        return ("hello");
	}
}