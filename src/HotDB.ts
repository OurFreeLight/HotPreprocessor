import { HotDBSchema } from "./schemas/HotDBSchema";

/**
 * The server-side database connection.
 */
export class HotDB
{
	/**
	 * The database type.
	 */
	type: string;
	/**
	 * The connection to the database (or the driver).
	 */
	connection: any;
	/**
	 * The db schema. This will generate a database structure 
	 * and keep it maintained as needed.
	 */
	schema: HotDBSchema;

	constructor (connection: any = null, type: string = "", schema: HotDBSchema = null)
	{
		this.type = type;
		this.connection = connection;
		this.schema = schema;
	}
}