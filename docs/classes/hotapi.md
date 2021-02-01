**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotAPI

# Class: HotAPI

The API to use.

## Hierarchy

* **HotAPI**

  ↳ [HotTesterAPI](hottesterapi.md)

## Index

### Constructors

* [constructor](hotapi.md#constructor)

### Properties

* [authCredentials](hotapi.md#authcredentials)
* [baseUrl](hotapi.md#baseurl)
* [connection](hotapi.md#connection)
* [createFunctions](hotapi.md#createfunctions)
* [db](hotapi.md#db)
* [executeEventsUsing](hotapi.md#executeeventsusing)
* [onPostRegister](hotapi.md#onpostregister)
* [onPreRegister](hotapi.md#onpreregister)
* [routes](hotapi.md#routes)

### Methods

* [addRoute](hotapi.md#addroute)
* [call](hotapi.md#call)
* [registerRoute](hotapi.md#registerroute)
* [registerRoutes](hotapi.md#registerroutes)

## Constructors

### constructor

\+ **new HotAPI**(`baseUrl`: string, `connection?`: [HotServer](hotserver.md) \| [HotClient](hotclient.md), `db?`: [HotDB](hotdb.md)): [HotAPI](hotapi.md)

*Defined in [HotAPI.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L62)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`baseUrl` | string | - |
`connection` | [HotServer](hotserver.md) \| [HotClient](hotclient.md) | null |
`db` | [HotDB](hotdb.md) | null |

**Returns:** [HotAPI](hotapi.md)

## Properties

### authCredentials

•  **authCredentials**: any

*Defined in [HotAPI.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L48)*

The authorization credentials to use throughout the application.

___

### baseUrl

•  **baseUrl**: string

*Defined in [HotAPI.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L31)*

The base url for the server.

___

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Defined in [HotAPI.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L27)*

The server connection.

___

### createFunctions

•  **createFunctions**: boolean

*Defined in [HotAPI.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L36)*

If set, this will create the route variables and functions for
easy client/server calling.

___

### db

•  **db**: [HotDB](hotdb.md)

*Defined in [HotAPI.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L44)*

The database connection.

___

### executeEventsUsing

•  **executeEventsUsing**: [EventExecutionType](../enums/eventexecutiontype.md)

*Defined in [HotAPI.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L40)*

The database connection.

___

### onPostRegister

•  **onPostRegister**: () => Promise<boolean\>

*Defined in [HotAPI.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L62)*

Executed when the API has finished registering routes. If
this function returns false, the server will not start.

___

### onPreRegister

•  **onPreRegister**: () => Promise<boolean\>

*Defined in [HotAPI.ts:57](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L57)*

Executed when the API is about to start registering routes. If
this function returns false, the server will not start.

___

### routes

•  **routes**: { [name:string]: [HotRoute](hotroute.md);  }

*Defined in [HotAPI.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L52)*

The database connection.

## Methods

### addRoute

▸ **addRoute**(`route`: [HotRoute](hotroute.md) \| string, `routeMethod?`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction?`: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any\>): void

*Defined in [HotAPI.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L116)*

Add a route. If this.createFunctions is set to true, this will take the incoming
route and create an object in this HotAPI object using the name of the route. If there's
any HotRouteMethods inside of the incoming HotRoute, it will create the methods
and attach them to the newly created HotRoute object.

Example:
```
export class Users extends HotRoute
{
		constructor (api: FreeLightAPI)
		{
			super (api.connection, "user");

			this.addMethod ("create", this._create, HTTPMethod.POST);
		}

		protected async _create (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
		{
			return (true);
		}
}
```

This in turn could be used like so:
```
Hot.API.user.create ({});
```

Additionally it would create the endpoint: ```http://127.0.0.1:8080/v1/user/create```

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`route` | [HotRoute](hotroute.md) \| string | - | The route to add. Can be either a full HotRoute object, or just the route's name. If a HotRoute object is supplied, the rest of the parameters will be ignored. |
`routeMethod` | [HotRouteMethod](hotroutemethod.md) \| string | null | The route's method to add. If the route parameter is a string, it will be interpreted as the route's name, and this will be the method added to the new route. |
`executeFunction` | (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any\> | null | The function to execute when routeMethod is called by the API.  |

**Returns:** void

___

### call

▸ **call**(`route`: string, `data`: any, `httpMethod?`: string): Promise<any\>

*Defined in [HotAPI.ts:292](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L292)*

Make a call to the API.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`data` | any | - |
`httpMethod` | string | "POST" |

**Returns:** Promise<any\>

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): Promise<void\>

*Defined in [HotAPI.ts:270](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L270)*

Register a route with the server.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** Promise<void\>

___

### registerRoutes

▸ **registerRoutes**(): Promise<void\>

*Defined in [HotAPI.ts:279](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotAPI.ts#L279)*

Register all routes with the server.

**Returns:** Promise<void\>
