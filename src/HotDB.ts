import { HotDBSchema } from "./schemas/HotDBSchema";
import { HotDBConnectionInterface } from "./HotDBConnectionInterface";

/**
 * The server-side database connection.
 */
export abstract class HotDB<DBType = any, DBResultType = any, DBSchema = HotDBSchema>
{
	/**
	 * The database type.
	 */
	type: string;
	/**
	 * The connection to the database (or the driver).
	 */
	db: DBType;
	/**
	 * The db schema. This will generate a database structure 
	 * and keep it maintained as needed.
	 */
	schema: DBSchema;

	constructor (db: DBType = null, type: string = "", schema: DBSchema = null)
	{
		this.type = type;
		this.db = db;
		this.schema = schema;
	}

    /**
     * Connect to the database. This will only start connecting 
     * if db is null.
     */
	abstract async connect (connectionInfo: HotDBConnectionInterface): Promise<any[]>;
    /**
     * The query to make.
     */
	abstract async query (queryString: string, values?: any[]): Promise<DBResultType>;
	/**
     * Disconnect from the server.
     */
    abstract async disconnect (): Promise<void>;
}