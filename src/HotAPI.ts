import fetch from "cross-fetch";

import { HotServer } from "./HotServer";
import { HotRoute } from "./HotRoute";
import { HotClient } from "./HotClient";
import { HotRouteMethod } from "./HotPreprocessorWeb";
import { HotDB } from "./HotDB";

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
	 * If set, this will create the route variables and functions for 
	 * easy client/server calling.
	 */
	createFunctions: boolean;
	/**
	 * The database connection.
	 */
	db: HotDB;
	/**
	 * The database connection.
	 */
	routes: { [name: string]: HotRoute };

	constructor (baseUrl: string, connection: HotServer | HotClient = null, db: HotDB = null)
	{
		this.connection = connection;
		this.baseUrl = baseUrl;
		this.createFunctions = true;
		this.db = db;
		this.routes = {};
	}

	/**
	 * Add a route.
	 */
	addRoute (
		route: HotRoute | string,
		routeMethod: HotRouteMethod | string = null,
		executeFunction: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any> = null
		): void
	{
		let routeName: string = "";

		if (route instanceof HotRoute)
		{
			routeName = route.route;
			this.routes[route.route] = route;
		}
		else
		{
			routeName = route;

			if (this.routes[routeName] == null)
				this.routes[routeName] = new HotRoute (this.connection, routeName);

			if (routeMethod instanceof HotRouteMethod)
				this.routes[routeName].addMethod (routeMethod);
			else
			{
				this.routes[routeName].addMethod (new HotRouteMethod (
					this.routes[routeName], routeMethod, executeFunction));
			}
		}

		this.routes[routeName].connection = this.connection;

		// Create the route functions for the server/client.
		if (this.createFunctions === true)
		{
			// @ts-ignore
			let newRoute: { [name: string]: Function } = this[routeName];

			if (newRoute == null)
				newRoute = {};

			for (let iIdx = 0; iIdx < this.routes[routeName].methods.length; iIdx++)
			{
				let currentRoute: HotRoute = this.routes[routeName];
				let newRouteMethod: HotRouteMethod = this.routes[routeName].methods[iIdx];

				if (this.connection instanceof HotServer)
				{
					if (newRouteMethod.onServerExecute != null)
						newRoute[newRouteMethod.name] = newRouteMethod.onServerExecute;
				}
				else
				{
					/*
					/// @fixme Is onClientExecute necessary? I'm thinking the dev can just simply create 
					/// their own function to call.
					if (newRouteMethod.onClientExecute != null)
						newRoute[newRouteMethod.name] = newRouteMethod.onClientExecute;
					else
					{*/
						newRoute[newRouteMethod.name] = (data: any): any =>
							{
								let httpMethod: string = newRouteMethod.type;
								// Construct the url here. Base + route + route method
								let routeStr: string = "";

								if (currentRoute.version !== "")
									routeStr += `/${currentRoute.version}`;

								if (currentRoute.route !== "")
									routeStr += `/${currentRoute.route}`;

								if (newRouteMethod.name !== "")
									routeStr += `/${newRouteMethod.name}`;

								let args: any[] = [routeStr, data, httpMethod];

								return (this.call.apply (this, args));
							};
					//}
				}
			}

			// @ts-ignore
			this[routeName] = newRoute;
		}
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
	async call (route: string, data: any, httpMethod: string = "POST"): Promise<any>
	{
		let url: string = this.baseUrl;

		if (url[(url.length - 1)] === "/")
			url = url.substr (0, (url.length - 1));

		if (route[0] !== "/")
			url += "/";

		url += route;

		httpMethod = httpMethod.toUpperCase ();

		let fetchObj: any = {
				method: httpMethod,
				headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
			};

		if ((httpMethod !== "GET") && 
			(httpMethod !== "HEAD"))
		{
			fetchObj["body"] = JSON.stringify (data);
		}

		let res: any = await fetch (url, fetchObj);
		let jsonObj: any = await res.json ();

		return (jsonObj);
	}
}