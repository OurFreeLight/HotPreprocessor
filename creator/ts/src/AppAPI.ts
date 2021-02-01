import { HotAPI, HotServer, HotClient, HotRoute, 
	HotRouteMethod, MySQLSchema, 
	ServerAuthorizationFunction, HotPreprocessor } from "hotpreprocessor";
import { HelloWorld } from "./HelloWorld";

/**
 * The App's API and routes.
 */
export class AppAPI extends HotAPI
{
	constructor (baseUrl: string, connection: HotServer | HotClient = null, db: any = null)
	{
		super(baseUrl, connection, db);

		this.onPreRegister = async (): Promise<boolean> =>
			{
                this.setDBSchema (new MySQLSchema ("app_db"));

				return (true);
			};
		this.onPostRegister = async (): Promise<boolean> =>
			{
				try
				{
					await this.getDB ().syncAllTables ();
				}
				catch (ex)
				{
					this.connection.logger.error (ex);

					return (false);
				}

				return (true);
			};

		this.addRoute (new HelloWorld (this));
	}
}