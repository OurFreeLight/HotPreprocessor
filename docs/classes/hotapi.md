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
* [userAuth](hotapi.md#userauth)

### Methods

* [addRoute](hotapi.md#addroute)
* [call](hotapi.md#call)
* [getDB](hotapi.md#getdb)
* [getDBSchema](hotapi.md#getdbschema)
* [registerRoute](hotapi.md#registerroute)
* [registerRoutes](hotapi.md#registerroutes)
* [setDBSchema](hotapi.md#setdbschema)

## Constructors

### constructor

\+ **new HotAPI**(`baseUrl`: string, `connection?`: [HotServer](hotserver.md) \| [HotClient](hotclient.md), `db?`: [HotDB](hotdb.md)): [HotAPI](hotapi.md)

*Defined in [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L68)*

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

*Defined in [HotAPI.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L50)*

The authorization credentials to use throughout the application.

___

### baseUrl

•  **baseUrl**: string

*Defined in [HotAPI.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L33)*

The base url for the server.

___

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Defined in [HotAPI.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L29)*

The server connection.

___

### createFunctions

•  **createFunctions**: boolean

*Defined in [HotAPI.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L38)*

If set, this will create the route variables and functions for
easy client/server calling.

___

### db

•  **db**: [HotDB](hotdb.md)

*Defined in [HotAPI.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L46)*

The database connection.

___

### executeEventsUsing

•  **executeEventsUsing**: [EventExecutionType](../enums/eventexecutiontype.md)

*Defined in [HotAPI.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L42)*

The database connection.

___

### onPostRegister

•  **onPostRegister**: () => Promise<boolean\>

*Defined in [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L68)*

Executed when the API has finished registering routes. If
this function returns false, the server will not start.

___

### onPreRegister

•  **onPreRegister**: () => Promise<boolean\>

*Defined in [HotAPI.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L63)*

Executed when the API is about to start registering routes. If
this function returns false, the server will not start.

___

### routes

•  **routes**: { [name:string]: [HotRoute](hotroute.md);  }

*Defined in [HotAPI.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L58)*

The database connection.

___

### userAuth

•  **userAuth**: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction)

*Defined in [HotAPI.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L54)*

The function used for user authentication.

## Methods

### addRoute

▸ **addRoute**(`route`: [HotRoute](hotroute.md) \| string, `routeMethod?`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction?`: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any\>): void

*Defined in [HotAPI.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L147)*

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

*Defined in [HotAPI.ts:323](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L323)*

Make a call to the API.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`data` | any | - |
`httpMethod` | string | "POST" |

**Returns:** Promise<any\>

___

### getDB

▸ **getDB**(): [HotDB](hotdb.md)

*Defined in [HotAPI.ts:95](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L95)*

Get the database being used.

**Returns:** [HotDB](hotdb.md)

___

### getDBSchema

▸ **getDBSchema**(): [HotDBSchema](hotdbschema.md)

*Defined in [HotAPI.ts:103](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L103)*

Get the database schema being used.

**Returns:** [HotDBSchema](hotdbschema.md)

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): Promise<void\>

*Defined in [HotAPI.ts:301](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L301)*

Register a route with the server.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** Promise<void\>

___

### registerRoutes

▸ **registerRoutes**(): Promise<void\>

*Defined in [HotAPI.ts:310](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L310)*

Register all routes with the server.

**Returns:** Promise<void\>

___

### setDBSchema

▸ **setDBSchema**(`schema`: [HotDBSchema](hotdbschema.md)): void

*Defined in [HotAPI.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L87)*

Set the database schema for use.

#### Parameters:

Name | Type |
------ | ------ |
`schema` | [HotDBSchema](hotdbschema.md) |

**Returns:** void
