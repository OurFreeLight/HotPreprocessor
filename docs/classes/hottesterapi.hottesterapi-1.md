[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTesterAPI](../modules/hottesterapi.md) / HotTesterAPI

# Class: HotTesterAPI

[HotTesterAPI](../modules/hottesterapi.md).HotTesterAPI

## Hierarchy

* [*HotAPI*](hotapi.hotapi-1.md)

  ↳ **HotTesterAPI**

## Table of contents

### Constructors

- [constructor](hottesterapi.hottesterapi-1.md#constructor)

### Properties

- [authCredentials](hottesterapi.hottesterapi-1.md#authcredentials)
- [baseUrl](hottesterapi.hottesterapi-1.md#baseurl)
- [connection](hottesterapi.hottesterapi-1.md#connection)
- [createFunctions](hottesterapi.hottesterapi-1.md#createfunctions)
- [db](hottesterapi.hottesterapi-1.md#db)
- [executeEventsUsing](hottesterapi.hottesterapi-1.md#executeeventsusing)
- [onPostRegister](hottesterapi.hottesterapi-1.md#onpostregister)
- [onPreRegister](hottesterapi.hottesterapi-1.md#onpreregister)
- [routes](hottesterapi.hottesterapi-1.md#routes)
- [userAuth](hottesterapi.hottesterapi-1.md#userauth)

### Methods

- [addRoute](hottesterapi.hottesterapi-1.md#addroute)
- [call](hottesterapi.hottesterapi-1.md#call)
- [executeTests](hottesterapi.hottesterapi-1.md#executetests)
- [getDB](hottesterapi.hottesterapi-1.md#getdb)
- [getDBSchema](hottesterapi.hottesterapi-1.md#getdbschema)
- [pageLoaded](hottesterapi.hottesterapi-1.md#pageloaded)
- [registerRoute](hottesterapi.hottesterapi-1.md#registerroute)
- [registerRoutes](hottesterapi.hottesterapi-1.md#registerroutes)
- [setDBSchema](hottesterapi.hottesterapi-1.md#setdbschema)

## Constructors

### constructor

\+ **new HotTesterAPI**(`baseUrl`: *string*, `connection?`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md), `db?`: *any*): [*HotTesterAPI*](hottesterapi.hottesterapi-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`baseUrl` | *string* | - |
`connection` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md) | null |
`db` | *any* | null |

**Returns:** [*HotTesterAPI*](hottesterapi.hottesterapi-1.md)

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotTesterAPI.ts:10](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterAPI.ts#L10)

## Properties

### authCredentials

• **authCredentials**: *any*

The authorization credentials to use throughout the application.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[authCredentials](hotapi.hotapi-1.md#authcredentials)

Defined in: [HotAPI.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L50)

___

### baseUrl

• **baseUrl**: *string*

The base url for the server.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[baseUrl](hotapi.hotapi-1.md#baseurl)

Defined in: [HotAPI.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L33)

___

### connection

• **connection**: [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md)

The server connection.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[connection](hotapi.hotapi-1.md#connection)

Defined in: [HotAPI.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L29)

___

### createFunctions

• **createFunctions**: *boolean*

If set, this will create the route variables and functions for
easy client/server calling.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[createFunctions](hotapi.hotapi-1.md#createfunctions)

Defined in: [HotAPI.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L38)

___

### db

• **db**: [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>

The database connection.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[db](hotapi.hotapi-1.md#db)

Defined in: [HotAPI.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L46)

___

### executeEventsUsing

• **executeEventsUsing**: [*EventExecutionType*](../enums/hotapi.eventexecutiontype.md)

The database connection.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[executeEventsUsing](hotapi.hotapi-1.md#executeeventsusing)

Defined in: [HotAPI.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L42)

___

### onPostRegister

• **onPostRegister**: () => *Promise*<boolean\>

Executed when the API has finished registering routes. If
this function returns false, the server will not start.

#### Type declaration:

▸ (): *Promise*<boolean\>

**Returns:** *Promise*<boolean\>

Defined in: [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L68)

Inherited from: [HotAPI](hotapi.hotapi-1.md).[onPostRegister](hotapi.hotapi-1.md#onpostregister)

Defined in: [HotAPI.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L68)

___

### onPreRegister

• **onPreRegister**: () => *Promise*<boolean\>

Executed when the API is about to start registering routes. If
this function returns false, the server will not start.

#### Type declaration:

▸ (): *Promise*<boolean\>

**Returns:** *Promise*<boolean\>

Defined in: [HotAPI.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L63)

Inherited from: [HotAPI](hotapi.hotapi-1.md).[onPreRegister](hotapi.hotapi-1.md#onpreregister)

Defined in: [HotAPI.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L63)

___

### routes

• **routes**: *object*

The database connection.

#### Type declaration:

Inherited from: [HotAPI](hotapi.hotapi-1.md).[routes](hotapi.hotapi-1.md#routes)

Defined in: [HotAPI.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L58)

___

### userAuth

• **userAuth**: [*ServerAuthorizationFunction*](../modules/hotroutemethod.md#serverauthorizationfunction)

The function used for user authentication.

Inherited from: [HotAPI](hotapi.hotapi-1.md).[userAuth](hotapi.hotapi-1.md#userauth)

Defined in: [HotAPI.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L54)

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

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:159](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L159)

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

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:335](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L335)

___

### executeTests

▸ **executeTests**(`req`: *any*, `res`: *any*, `authorizedValue`: *any*, `jsonObj`: *any*, `queryObj`: *any*): *Promise*<any\>

Execute the tests for a page.

#### Parameters:

Name | Type |
:------ | :------ |
`req` | *any* |
`res` | *any* |
`authorizedValue` | *any* |
`jsonObj` | *any* |
`queryObj` | *any* |

**Returns:** *Promise*<any\>

Defined in: [HotTesterAPI.ts:104](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterAPI.ts#L104)

___

### getDB

▸ **getDB**(): [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>

Get the database being used.

**Returns:** [*HotDB*](hotdb.hotdb-1.md)<any, any, [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)\>

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L101)

___

### getDBSchema

▸ **getDBSchema**(): [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)

Get the database schema being used.

**Returns:** [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:112](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L112)

___

### pageLoaded

▸ **pageLoaded**(`req`: *any*, `res`: *any*, `authorizedValue`: *any*, `jsonObj`: *any*, `queryObj`: *any*): *Promise*<any\>

This is called when the page has finished loading in development mode.

#### Parameters:

Name | Type |
:------ | :------ |
`req` | *any* |
`res` | *any* |
`authorizedValue` | *any* |
`jsonObj` | *any* |
`queryObj` | *any* |

**Returns:** *Promise*<any\>

Defined in: [HotTesterAPI.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterAPI.ts#L26)

___

### registerRoute

▸ **registerRoute**(`route`: [*HotRoute*](hotroute.hotroute-1.md)): *Promise*<void\>

Register a route with the server.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*HotRoute*](hotroute.hotroute-1.md) |

**Returns:** *Promise*<void\>

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:313](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L313)

___

### registerRoutes

▸ **registerRoutes**(): *Promise*<void\>

Register all routes with the server.

**Returns:** *Promise*<void\>

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:322](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L322)

___

### setDBSchema

▸ **setDBSchema**(`schema`: [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)): *void*

Set the database schema for use.

#### Parameters:

Name | Type |
:------ | :------ |
`schema` | [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md) |

**Returns:** *void*

Inherited from: [HotAPI](hotapi.hotapi-1.md)

Defined in: [HotAPI.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotAPI.ts#L87)
