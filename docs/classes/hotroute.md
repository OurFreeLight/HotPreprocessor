**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotRoute

# Class: HotRoute

The route to use.

## Hierarchy

* **HotRoute**

## Index

### Constructors

* [constructor](hotroute.md#constructor)

### Properties

* [connection](hotroute.md#connection)
* [errors](hotroute.md#errors)
* [methods](hotroute.md#methods)
* [onAuthorize](hotroute.md#onauthorize)
* [prefix](hotroute.md#prefix)
* [route](hotroute.md#route)
* [version](hotroute.md#version)

### Methods

* [addMethod](hotroute.md#addmethod)
* [createError](hotroute.md#createerror)

## Constructors

### constructor

\+ **new HotRoute**(`connection`: [HotServer](hotserver.md) \| [HotClient](hotclient.md), `route`: string, `methods`: [HotRouteMethod](hotroutemethod.md)[]): [HotRoute](hotroute.md)

*Defined in [HotRoute.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`connection` | [HotServer](hotserver.md) \| [HotClient](hotclient.md) | - |
`route` | string | - |
`methods` | [HotRouteMethod](hotroutemethod.md)[] | [] |

**Returns:** [HotRoute](hotroute.md)

## Properties

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Defined in [HotRoute.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L13)*

The server that maintains the connections.

___

### errors

•  **errors**: { [error:string]: any;  }

*Defined in [HotRoute.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L34)*

The errors and their JSON that can be thrown. Can be:
* not_authorized

___

### methods

•  **methods**: [HotRouteMethod](hotroutemethod.md)[]

*Defined in [HotRoute.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L29)*

The calls that can be made.

___

### onAuthorize

•  **onAuthorize**: (req: any,res: any) => Promise\<any> = null

*Defined in [HotRoute.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L77)*

Executes when authorizing a called method.
The value returned from here will be passed to onExecute in the
called HotRouteMethod. Undefined returning from here will mean
the authorization failed.

___

### prefix

•  **prefix**: string

*Defined in [HotRoute.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L25)*

The prefix to add to the beginning of each route method.

___

### route

•  **route**: string

*Defined in [HotRoute.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L17)*

The route.

___

### version

•  **version**: string

*Defined in [HotRoute.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L21)*

The version.

## Methods

### addMethod

▸ **addMethod**(`method`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction`: (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any>, `type`: [HTTPMethod](../enums/httpmethod.md)): void

*Defined in [HotRoute.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L59)*

Add an API method to this route.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`method` | [HotRouteMethod](hotroutemethod.md) \| string | - |
`executeFunction` | (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any> | null |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.POST |

**Returns:** void

___

### createError

▸ `Static`**createError**(`message`: string): any

*Defined in [HotRoute.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRoute.ts#L51)*

Create an error JSON object.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** any
