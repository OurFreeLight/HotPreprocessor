**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTesterAPI

# Class: HotTesterAPI

## Hierarchy

* [HotAPI](hotapi.md)

  ↳ **HotTesterAPI**

## Index

### Constructors

* [constructor](hottesterapi.md#constructor)

### Properties

* [authCredentials](hottesterapi.md#authcredentials)
* [baseUrl](hottesterapi.md#baseurl)
* [connection](hottesterapi.md#connection)
* [createFunctions](hottesterapi.md#createfunctions)
* [db](hottesterapi.md#db)
* [executeEventsUsing](hottesterapi.md#executeeventsusing)
* [onPostRegister](hottesterapi.md#onpostregister)
* [onPreRegister](hottesterapi.md#onpreregister)
* [routes](hottesterapi.md#routes)
* [userAuth](hottesterapi.md#userauth)

### Methods

* [addRoute](hottesterapi.md#addroute)
* [call](hottesterapi.md#call)
* [executeTests](hottesterapi.md#executetests)
* [getDB](hottesterapi.md#getdb)
* [getDBSchema](hottesterapi.md#getdbschema)
* [pageLoaded](hottesterapi.md#pageloaded)
* [registerRoute](hottesterapi.md#registerroute)
* [registerRoutes](hottesterapi.md#registerroutes)
* [setDBSchema](hottesterapi.md#setdbschema)

## Constructors

### constructor

\+ **new HotTesterAPI**(`baseUrl`: string, `connection?`: [HotServer](hotserver.md) \| [HotClient](hotclient.md), `db?`: any): [HotTesterAPI](hottesterapi.md)

*Overrides [HotAPI](hotapi.md).[constructor](hotapi.md#constructor)*

*Defined in [HotTesterAPI.ts:10](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterAPI.ts#L10)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`baseUrl` | string | - |
`connection` | [HotServer](hotserver.md) \| [HotClient](hotclient.md) | null |
`db` | any | null |

**Returns:** [HotTesterAPI](hottesterapi.md)

## Properties

### authCredentials

•  **authCredentials**: any

*Inherited from [HotTesterAPI](hottesterapi.md).[authCredentials](hottesterapi.md#authcredentials)*

*Defined in [HotAPI.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L50)*

The authorization credentials to use throughout the application.

___

### baseUrl

•  **baseUrl**: string

*Inherited from [HotTesterAPI](hottesterapi.md).[baseUrl](hottesterapi.md#baseurl)*

*Defined in [HotAPI.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L33)*

The base url for the server.

___

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Inherited from [HotTesterAPI](hottesterapi.md).[connection](hottesterapi.md#connection)*

*Defined in [HotAPI.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L29)*

The server connection.

___

### createFunctions

•  **createFunctions**: boolean

*Inherited from [HotTesterAPI](hottesterapi.md).[createFunctions](hottesterapi.md#createfunctions)*

*Defined in [HotAPI.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L38)*

If set, this will create the route variables and functions for
easy client/server calling.

___

### db

•  **db**: [HotDB](hotdb.md)

*Inherited from [HotTesterAPI](hottesterapi.md).[db](hottesterapi.md#db)*

*Defined in [HotAPI.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L46)*

The database connection.

___

### executeEventsUsing

•  **executeEventsUsing**: [EventExecutionType](../enums/eventexecutiontype.md)

*Inherited from [HotTesterAPI](hottesterapi.md).[executeEventsUsing](hottesterapi.md#executeeventsusing)*

*Defined in [HotAPI.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L42)*

The database connection.

___

### onPostRegister

•  **onPostRegister**: () => Promise<boolean\>

*Inherited from [HotTesterAPI](hottesterapi.md).[onPostRegister](hottesterapi.md#onpostregister)*

*Defined in [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L68)*

Executed when the API has finished registering routes. If
this function returns false, the server will not start.

___

### onPreRegister

•  **onPreRegister**: () => Promise<boolean\>

*Inherited from [HotTesterAPI](hottesterapi.md).[onPreRegister](hottesterapi.md#onpreregister)*

*Defined in [HotAPI.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L63)*

Executed when the API is about to start registering routes. If
this function returns false, the server will not start.

___

### routes

•  **routes**: { [name:string]: [HotRoute](hotroute.md);  }

*Inherited from [HotTesterAPI](hottesterapi.md).[routes](hottesterapi.md#routes)*

*Defined in [HotAPI.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L58)*

The database connection.

___

### userAuth

•  **userAuth**: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction)

*Inherited from [HotTesterAPI](hottesterapi.md).[userAuth](hottesterapi.md#userauth)*

*Defined in [HotAPI.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L54)*

The function used for user authentication.

## Methods

### addRoute

▸ **addRoute**(`route`: [HotRoute](hotroute.md) \| string, `routeMethod?`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction?`: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any\>): void

*Inherited from [HotTesterAPI](hottesterapi.md).[addRoute](hottesterapi.md#addroute)*

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

*Inherited from [HotTesterAPI](hottesterapi.md).[call](hottesterapi.md#call)*

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

### executeTests

▸ **executeTests**(`req`: any, `res`: any, `authorizedValue`: any, `jsonObj`: any, `queryObj`: any): Promise<any\>

*Defined in [HotTesterAPI.ts:104](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterAPI.ts#L104)*

Execute the tests for a page.

#### Parameters:

Name | Type |
------ | ------ |
`req` | any |
`res` | any |
`authorizedValue` | any |
`jsonObj` | any |
`queryObj` | any |

**Returns:** Promise<any\>

___

### getDB

▸ **getDB**(): [HotDB](hotdb.md)

*Inherited from [HotTesterAPI](hottesterapi.md).[getDB](hottesterapi.md#getdb)*

*Defined in [HotAPI.ts:95](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L95)*

Get the database being used.

**Returns:** [HotDB](hotdb.md)

___

### getDBSchema

▸ **getDBSchema**(): [HotDBSchema](hotdbschema.md)

*Inherited from [HotTesterAPI](hottesterapi.md).[getDBSchema](hottesterapi.md#getdbschema)*

*Defined in [HotAPI.ts:103](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L103)*

Get the database schema being used.

**Returns:** [HotDBSchema](hotdbschema.md)

___

### pageLoaded

▸ **pageLoaded**(`req`: any, `res`: any, `authorizedValue`: any, `jsonObj`: any, `queryObj`: any): Promise<any\>

*Defined in [HotTesterAPI.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterAPI.ts#L26)*

This is called when the page has finished loading in development mode.

#### Parameters:

Name | Type |
------ | ------ |
`req` | any |
`res` | any |
`authorizedValue` | any |
`jsonObj` | any |
`queryObj` | any |

**Returns:** Promise<any\>

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): Promise<void\>

*Inherited from [HotTesterAPI](hottesterapi.md).[registerRoute](hottesterapi.md#registerroute)*

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

*Inherited from [HotTesterAPI](hottesterapi.md).[registerRoutes](hottesterapi.md#registerroutes)*

*Defined in [HotAPI.ts:310](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L310)*

Register all routes with the server.

**Returns:** Promise<void\>

___

### setDBSchema

▸ **setDBSchema**(`schema`: [HotDBSchema](hotdbschema.md)): void

*Inherited from [HotTesterAPI](hottesterapi.md).[setDBSchema](hottesterapi.md#setdbschema)*

*Defined in [HotAPI.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotAPI.ts#L87)*

Set the database schema for use.

#### Parameters:

Name | Type |
------ | ------ |
`schema` | [HotDBSchema](hotdbschema.md) |

**Returns:** void