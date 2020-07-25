// @ts-ignore dunno what this issue is about.
import fetch from "cross-fetch";

import { HotServer } from "./HotServer";
import { HotRoute } from "./HotRoute";
import { HotClient } from "./HotClient";

/**
 * The API to use.
 */
export abstract class HotAPI
{
	/**
	 * The server connection.
	 */
	connection: HotServer | HotClient;
	/**
	 * The base url for the server.
	 */
	baseUrl: string;
	/**
	 * The database connection.
	 */
	db: any;
	/**
	 * The database connection.
	 */
	routes: { [name: string]: HotRoute };

	constructor (baseUrl: string, connection: HotServer | HotClient = null, db: any = null)
	{
		this.baseUrl = baseUrl;
		this.connection = connection;
		this.db = db;
		this.routes = {};
	}

	/**
	 * Add a route.
	 */
	addRoute (route: HotRoute): void
	{
		this.routes[route.route] = route;
	}

	/**
	 * Register a route with the server.
	 */
	registerRoute (route: HotRoute): void
	{
		if (this.connection instanceof HotServer)
			this.connection.registerRoute (route);
	}

	/**
	 * Register all routes with the server.
	 */
	registerRoutes (): void
	{
		for (let key in this.routes)
		{
			let route: HotRoute = this.routes[key];

			this.registerRoute (route);
		}
	}

	/**
	 * Make a call to the API.
	 */
	async call (route: string, data: any): Promise<any>
	{
		let url: string = this.baseUrl;

		if (route[0] !== "/")
			url += "/";

		url += route;

		let fetchObj = {
				method: "POST",
				body: JSON.stringify (data),
				headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
			};
		let res: any = await fetch (url, fetchObj);
		let jsonObj: any = await res.json ();

		return (jsonObj);
	}
}