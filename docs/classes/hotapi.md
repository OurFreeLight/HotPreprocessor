**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotAPI

# Class: HotAPI

The API to use.

## Hierarchy

* **HotAPI**

## Index

### Constructors

* [constructor](hotapi.md#constructor)

### Properties

* [baseUrl](hotapi.md#baseurl)
* [connection](hotapi.md#connection)
* [createFunctions](hotapi.md#createfunctions)
* [db](hotapi.md#db)
* [routes](hotapi.md#routes)

### Methods

* [addRoute](hotapi.md#addroute)
* [call](hotapi.md#call)
* [registerRoute](hotapi.md#registerroute)
* [registerRoutes](hotapi.md#registerroutes)

## Constructors

### constructor

\+ **new HotAPI**(`baseUrl`: string, `connection`: [HotServer](hotserver.md) \| [HotClient](hotclient.md), `db`: [HotDB](hotdb.md)): [HotAPI](hotapi.md)

*Defined in [HotAPI.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L35)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`baseUrl` | string | - |
`connection` | [HotServer](hotserver.md) \| [HotClient](hotclient.md) | null |
`db` | [HotDB](hotdb.md) | null |

**Returns:** [HotAPI](hotapi.md)

## Properties

### baseUrl

•  **baseUrl**: string

*Defined in [HotAPI.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L22)*

The base url for the server.

___

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Defined in [HotAPI.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L18)*

The server connection.

___

### createFunctions

•  **createFunctions**: boolean

*Defined in [HotAPI.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L27)*

If set, this will create the route variables and functions for
easy client/server calling.

___

### db

•  **db**: [HotDB](hotdb.md)

*Defined in [HotAPI.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L31)*

The database connection.

___

### routes

•  **routes**: { [name:string]: [HotRoute](hotroute.md);  }

*Defined in [HotAPI.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L35)*

The database connection.

## Methods

### addRoute

▸ **addRoute**(`route`: [HotRoute](hotroute.md) \| string, `routeMethod`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction`: (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any>): void

*Defined in [HotAPI.ts:56](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L56)*

Add a route.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`route` | [HotRoute](hotroute.md) \| string | - | The route to add. Can be either a full HotRoute object, or just the route's name. |
`routeMethod` | [HotRouteMethod](hotroutemethod.md) \| string | null | The route's method to add. If the route parameter is a string, it will be interpreted as the route's name, and this will be the method added to the new route. |
`executeFunction` | (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any> | null | The function to execute when routeMethod is called by the API.  |

**Returns:** void

___

### call

▸ **call**(`route`: string, `data`: any, `httpMethod`: string): Promise\<any>

*Defined in [HotAPI.ts:168](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L168)*

Make a call to the API.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`data` | any | - |
`httpMethod` | string | "POST" |

**Returns:** Promise\<any>

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): void

*Defined in [HotAPI.ts:146](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L146)*

Register a route with the server.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** void

___

### registerRoutes

▸ **registerRoutes**(): void

*Defined in [HotAPI.ts:155](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotAPI.ts#L155)*

Register all routes with the server.

**Returns:** void
