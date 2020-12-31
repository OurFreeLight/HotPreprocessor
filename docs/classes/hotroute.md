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

* [authCredentials](hotroute.md#authcredentials)
* [connection](hotroute.md#connection)
* [errors](hotroute.md#errors)
* [logger](hotroute.md#logger)
* [methods](hotroute.md#methods)
* [onAuthorizeUser](hotroute.md#onauthorizeuser)
* [onPostRegister](hotroute.md#onpostregister)
* [onPreRegister](hotroute.md#onpreregister)
* [onRegister](hotroute.md#onregister)
* [prefix](hotroute.md#prefix)
* [route](hotroute.md#route)
* [version](hotroute.md#version)

### Methods

* [addMethod](hotroute.md#addmethod)
* [getMethod](hotroute.md#getmethod)
* [createError](hotroute.md#createerror)

## Constructors

### constructor

\+ **new HotRoute**(`connection`: [HotServer](hotserver.md) \| [HotClient](hotclient.md), `route`: string, `methods?`: [HotRouteMethod](hotroutemethod.md)[]): [HotRoute](hotroute.md)

*Defined in [HotRoute.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L44)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`connection` | [HotServer](hotserver.md) \| [HotClient](hotclient.md) | - |
`route` | string | - |
`methods` | [HotRouteMethod](hotroutemethod.md)[] | [] |

**Returns:** [HotRoute](hotroute.md)

## Properties

### authCredentials

•  **authCredentials**: any

*Defined in [HotRoute.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L35)*

The authorization credentials to be used by the client
when connecting to the server.

___

### connection

•  **connection**: [HotServer](hotserver.md) \| [HotClient](hotclient.md)

*Defined in [HotRoute.ts:14](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L14)*

The server that maintains the connections.

___

### errors

•  **errors**: { [error:string]: any;  }

*Defined in [HotRoute.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L44)*

The errors and their JSON that can be thrown. Can be:
* not_authorized

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Defined in [HotRoute.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L18)*

The associated logger.

___

### methods

•  **methods**: [HotRouteMethod](hotroutemethod.md)[]

*Defined in [HotRoute.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L39)*

The calls that can be made.

___

### onAuthorizeUser

•  **onAuthorizeUser**: (req: any, res: any) => Promise<any\> = null

*Defined in [HotRoute.ts:136](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L136)*

Executes when authorizing a called method.
The value returned from here will be passed to onExecute in the
called HotRouteMethod. Undefined returning from here will mean
the authorization failed.

___

### onPostRegister

•  **onPostRegister**: () => Promise<void\> = null

*Defined in [HotRoute.ts:128](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L128)*

Executes after all routes have been registered.

___

### onPreRegister

•  **onPreRegister**: () => Promise<void\> = null

*Defined in [HotRoute.ts:119](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L119)*

Executes before all routes have been registered.

___

### onRegister

•  **onRegister**: () => Promise<boolean\> = null

*Defined in [HotRoute.ts:124](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L124)*

Executes when first registering this route with Express. If
this returns false, the route will not be registered.

___

### prefix

•  **prefix**: string

*Defined in [HotRoute.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L30)*

The prefix to add to the beginning of each route method.

___

### route

•  **route**: string

*Defined in [HotRoute.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L22)*

The route.

___

### version

•  **version**: string

*Defined in [HotRoute.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L26)*

The version.

## Methods

### addMethod

▸ **addMethod**(`method`: [HotRouteMethod](hotroutemethod.md) \| string, `executeFunction?`: [ServerExecutionFunction](../globals.md#serverexecutionfunction), `type?`: [HTTPMethod](../enums/httpmethod.md), `testCases?`: (string \| [TestCaseFunction](../globals.md#testcasefunction))[] \| [TestCaseFunction](../globals.md#testcasefunction)[] \| [TestCaseObject](../interfaces/testcaseobject.md)[]): void

*Defined in [HotRoute.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L81)*

Add an API method to this route.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`method` | [HotRouteMethod](hotroutemethod.md) \| string | - | The name of the method to add. If a HotRouteMethod is supplied, the rest of the arguments supplied will be ignored.  |
`executeFunction` | [ServerExecutionFunction](../globals.md#serverexecutionfunction) | null | - |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.POST | - |
`testCases` | (string \| [TestCaseFunction](../globals.md#testcasefunction))[] \| [TestCaseFunction](../globals.md#testcasefunction)[] \| [TestCaseObject](../interfaces/testcaseobject.md)[] | null | - |

**Returns:** void

___

### getMethod

▸ **getMethod**(`name`: string): [HotRouteMethod](hotroutemethod.md)

*Defined in [HotRoute.ts:97](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L97)*

Get a method by it's name.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [HotRouteMethod](hotroutemethod.md)

___

### createError

▸ `Static`**createError**(`message`: string): any

*Defined in [HotRoute.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRoute.ts#L70)*

Create an error JSON object.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** any
