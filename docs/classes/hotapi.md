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

*Defined in [HotAPI.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L34)*

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

*Defined in [HotAPI.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L21)*

The base url for the server.

___

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Defined in [HotAPI.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L17)*

The server connection.

___

### createFunctions

•  **createFunctions**: boolean

*Defined in [HotAPI.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L26)*

If set, this will create the route variables and functions for
easy client/server calling.

___

### db

•  **db**: [HotDB](hotdb.md)

*Defined in [HotAPI.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L30)*

The database connection.

___

### routes

•  **routes**: { [name:string]: [HotRoute](hotroute.md);  }

*Defined in [HotAPI.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L34)*

The database connection.

## Methods

### addRoute

▸ **addRoute**(`route`: [HotRoute](hotroute.md) \| string, `routeMethod`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction`: (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any>): void

*Defined in [HotAPI.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L48)*

Add a route.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | [HotRoute](hotroute.md) \| string | - |
`routeMethod` | [HotRouteMethod](hotroutemethod.md) \| string | null |
`executeFunction` | (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any> | null |

**Returns:** void

___

### call

▸ **call**(`route`: string, `data`: any, `httpMethod`: string): Promise\<any>

*Defined in [HotAPI.ts:160](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L160)*

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

*Defined in [HotAPI.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L138)*

Register a route with the server.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** void

___

### registerRoutes

▸ **registerRoutes**(): void

*Defined in [HotAPI.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotAPI.ts#L147)*

Register all routes with the server.

**Returns:** void
