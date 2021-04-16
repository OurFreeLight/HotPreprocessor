[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotAPI](../modules/hotapi.md) / HotAPI

# Class: HotAPI

[HotAPI](../modules/hotapi.md).HotAPI

The API to use.

## Hierarchy

* **HotAPI**

  ↳ [*HotTesterAPI*](hottesterapi.hottesterapi-1.md)

## Table of contents

### Constructors

- [constructor](hotapi.hotapi-1.md#constructor)

### Properties

- [authCredentials](hotapi.hotapi-1.md#authcredentials)
- [baseUrl](hotapi.hotapi-1.md#baseurl)
- [connection](hotapi.hotapi-1.md#connection)
- [createFunctions](hotapi.hotapi-1.md#createfunctions)
- [db](hotapi.hotapi-1.md#db)
- [executeEventsUsing](hotapi.hotapi-1.md#executeeventsusing)
- [onPostRegister](hotapi.hotapi-1.md#onpostregister)
- [onPreRegister](hotapi.hotapi-1.md#onpreregister)
- [routes](hotapi.hotapi-1.md#routes)
- [userAuth](hotapi.hotapi-1.md#userauth)

### Methods

- [addRoute](hotapi.hotapi-1.md#addroute)
- [call](hotapi.hotapi-1.md#call)
- [getDB](hotapi.hotapi-1.md#getdb)
- [getDBSchema](hotapi.hotapi-1.md#getdbschema)
- [registerRoute](hotapi.hotapi-1.md#registerroute)
- [registerRoutes](hotapi.hotapi-1.md#registerroutes)
- [setDBSchema](hotapi.hotapi-1.md#setdbschema)

## Constructors

### constructor

\+ **new HotAPI**(`baseUrl`: *string*, `connection?`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md), `db?`: [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>): [*HotAPI*](hotapi.hotapi-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`baseUrl` | *string* | - |
`connection` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md) | null |
`db` | [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\> | null |

**Returns:** [*HotAPI*](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L68)

## Properties

### authCredentials

• **authCredentials**: *any*

The authorization credentials to use throughout the application.

Defined in: [HotAPI.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L50)

___

### baseUrl

• **baseUrl**: *string*

The base url for the server.

Defined in: [HotAPI.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L33)

___

### connection

• **connection**: [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md)

The server connection.

Defined in: [HotAPI.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L29)

___

### createFunctions

• **createFunctions**: *boolean*

If set, this will create the route variables and functions for
easy client/server calling.

Defined in: [HotAPI.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L38)

___

### db

• **db**: [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>

The database connection.

Defined in: [HotAPI.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L46)

___

### executeEventsUsing

• **executeEventsUsing**: [*EventExecutionType*](../enums/hotapi.eventexecutiontype.md)

The database connection.

Defined in: [HotAPI.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L42)

___

### onPostRegister

• **onPostRegister**: () => *Promise*<boolean\>

Executed when the API has finished registering routes. If
this function returns false, the server will not start.

#### Type declaration:

▸ (): *Promise*<boolean\>

**Returns:** *Promise*<boolean\>

Defined in: [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L68)

Defined in: [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L68)

___

### onPreRegister

• **onPreRegister**: () => *Promise*<boolean\>

Executed when the API is about to start registering routes. If
this function returns false, the server will not start.

#### Type declaration:

▸ (): *Promise*<boolean\>

**Returns:** *Promise*<boolean\>

Defined in: [HotAPI.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L63)

Defined in: [HotAPI.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L63)

___

### routes

• **routes**: *object*

The database connection.

#### Type declaration:

Defined in: [HotAPI.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L58)

___

### userAuth

• **userAuth**: [*ServerAuthorizationFunction*](../modules/hotroutemethod.md#serverauthorizationfunction)

The function used for user authentication.

Defined in: [HotAPI.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L54)

## Methods

### addRoute

▸ **addRoute**(`route`: *string* \| [*HotRoute*](hotroute.hotroute-1.md), `routeMethod?`: *string* \| [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md), `executeFunction?`: (`req`: *any*, `res`: *any*, `authorizedValue`: *any*, `jsonObj`: *any*, `queryObj`: *any*) => *Promise*<any\>): *void*

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
:------ | :------ | :------ | :------ |
`route` | *string* \| [*HotRoute*](hotroute.hotroute-1.md) | - | The route to add. Can be either a full HotRoute object, or just the route's name. If a HotRoute object is supplied, the rest of the parameters will be ignored.   |
`routeMethod` | *string* \| [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md) | null | The route's method to add. If the route parameter is a string, it will be interpreted as the route's name, and this will be the method added to the new route.   |
`executeFunction` | (`req`: *any*, `res`: *any*, `authorizedValue`: *any*, `jsonObj`: *any*, `queryObj`: *any*) => *Promise*<any\> | null | The function to execute when routeMethod is called by the API.    |

**Returns:** *void*

Defined in: [HotAPI.ts:159](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L159)

___

### call

▸ **call**(`route`: *string*, `data`: *any*, `httpMethod?`: *string*): *Promise*<any\>

Make a call to the API.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`route` | *string* | - |
`data` | *any* | - |
`httpMethod` | *string* | "POST" |

**Returns:** *Promise*<any\>

Defined in: [HotAPI.ts:335](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L335)

___

### getDB

▸ **getDB**(): [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>

Get the database being used.

**Returns:** [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>

Defined in: [HotAPI.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L101)

___

### getDBSchema

▸ **getDBSchema**(): [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)

Get the database schema being used.

**Returns:** [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)

Defined in: [HotAPI.ts:112](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L112)

___

### registerRoute

▸ **registerRoute**(`route`: [*HotRoute*](hotroute.hotroute-1.md)): *Promise*<void\>

Register a route with the server.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*HotRoute*](hotroute.hotroute-1.md) |

**Returns:** *Promise*<void\>

Defined in: [HotAPI.ts:313](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L313)

___

### registerRoutes

▸ **registerRoutes**(): *Promise*<void\>

Register all routes with the server.

**Returns:** *Promise*<void\>

Defined in: [HotAPI.ts:322](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L322)

___

### setDBSchema

▸ **setDBSchema**(`schema`: [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)): *void*

Set the database schema for use.

#### Parameters:

Name | Type |
:------ | :------ |
`schema` | [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md) |

**Returns:** *void*

Defined in: [HotAPI.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotAPI.ts#L87)
