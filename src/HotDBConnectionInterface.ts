/**
 * The database connection info.
 */
export interface HotDBConnectionInterface
{
    /**
     * The server's address.
     */
    server?: string;
    /**
     * The server's port.
     */
    port?: number;
    /**
     * The username to use to connect.
     */
    username?: string;
    /**
     * The password to use.
     */
    password?: string;
    /**
     * The database to use.
     */
    database?: string;
}