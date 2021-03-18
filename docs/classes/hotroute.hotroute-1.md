[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotRoute](../modules/hotroute.md) / HotRoute

# Class: HotRoute

[HotRoute](../modules/hotroute.md).HotRoute

The route to use.

## Table of contents

### Constructors

- [constructor](hotroute.hotroute-1.md#constructor)

### Properties

- [authCredentials](hotroute.hotroute-1.md#authcredentials)
- [connection](hotroute.hotroute-1.md#connection)
- [errors](hotroute.hotroute-1.md#errors)
- [logger](hotroute.hotroute-1.md#logger)
- [methods](hotroute.hotroute-1.md#methods)
- [onAuthorizeUser](hotroute.hotroute-1.md#onauthorizeuser)
- [onPostRegister](hotroute.hotroute-1.md#onpostregister)
- [onPreRegister](hotroute.hotroute-1.md#onpreregister)
- [onRegister](hotroute.hotroute-1.md#onregister)
- [prefix](hotroute.hotroute-1.md#prefix)
- [route](hotroute.hotroute-1.md#route)
- [version](hotroute.hotroute-1.md#version)

### Methods

- [addMethod](hotroute.hotroute-1.md#addmethod)
- [getMethod](hotroute.hotroute-1.md#getmethod)
- [createError](hotroute.hotroute-1.md#createerror)

## Constructors

### constructor

\+ **new HotRoute**(`connection`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md), `route`: *string*, `methods?`: [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)[]): [*HotRoute*](hotroute.hotroute-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`connection` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md) |
`route` | *string* |
`methods` | [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)[] |

**Returns:** [*HotRoute*](hotroute.hotroute-1.md)

Defined in: [HotRoute.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L44)

## Properties

### authCredentials

• **authCredentials**: *any*

The authorization credentials to be used by the client
when connecting to the server.

Defined in: [HotRoute.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L35)

___

### connection

• **connection**: [*HotServer*](hotserver.hotserver-1.md) \| [*HotClient*](hotclient.hotclient-1.md)

The server that maintains the connections.

Defined in: [HotRoute.ts:14](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L14)

___

### errors

• **errors**: *object*

The errors and their JSON that can be thrown. Can be:
* not_authorized

#### Type declaration:

Defined in: [HotRoute.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L44)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The associated logger.

Defined in: [HotRoute.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L18)

___

### methods

• **methods**: [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)[]

The calls that can be made.

Defined in: [HotRoute.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L39)

___

### onAuthorizeUser

• **onAuthorizeUser**: (`req`: *any*, `res`: *any*) => *Promise*<any\>= null

Executes when authorizing a called method.
The value returned from here will be passed to onExecute in the
called HotRouteMethod. Undefined returning from here will mean
the authorization failed.

#### Type declaration:

▸ (`req`: *any*, `res`: *any*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`req` | *any* |
`res` | *any* |

**Returns:** *Promise*<any\>

Defined in: [HotRoute.ts:136](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L136)

Defined in: [HotRoute.ts:136](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L136)

___

### onPostRegister

• **onPostRegister**: () => *Promise*<void\>= null

Executes after all routes have been registered.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotRoute.ts:128](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L128)

Defined in: [HotRoute.ts:128](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L128)

___

### onPreRegister

• **onPreRegister**: () => *Promise*<void\>= null

Executes before all routes have been registered.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotRoute.ts:119](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L119)

Defined in: [HotRoute.ts:119](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L119)

___

### onRegister

• **onRegister**: () => *Promise*<boolean\>= null

Executes when first registering this route with Express. If
this returns false, the route will not be registered.

#### Type declaration:

▸ (): *Promise*<boolean\>

**Returns:** *Promise*<boolean\>

Defined in: [HotRoute.ts:124](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L124)

Defined in: [HotRoute.ts:124](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L124)

___

### prefix

• **prefix**: *string*

The prefix to add to the beginning of each route method.

Defined in: [HotRoute.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L30)

___

### route

• **route**: *string*

The route.

Defined in: [HotRoute.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L22)

___

### version

• **version**: *string*

The version.

Defined in: [HotRoute.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L26)

## Methods

### addMethod

▸ **addMethod**(`method`: *string* \| [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md), `executeFunction?`: [*ServerExecutionFunction*](../modules/hotroutemethod.md#serverexecutionfunction), `type?`: [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md), `testCases?`: (*string* \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *any*)[] \| [*TestCaseFunction*](../modules/hotroutemethod.md#testcasefunction)[] \| [*TestCaseObject*](../interfaces/hotroutemethod.testcaseobject.md)[]): *void*

Add an API method to this route.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`method` | *string* \| [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md) | - | The name of the method to add. If a HotRouteMethod is supplied, the rest of the arguments supplied will be ignored.    |
`executeFunction` | [*ServerExecutionFunction*](../modules/hotroutemethod.md#serverexecutionfunction) | null | - |
`type` | [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md) | - | - |
`testCases` | (*string* \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *any*)[] \| [*TestCaseFunction*](../modules/hotroutemethod.md#testcasefunction)[] \| [*TestCaseObject*](../interfaces/hotroutemethod.testcaseobject.md)[] | null | - |

**Returns:** *void*

Defined in: [HotRoute.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L81)

___

### getMethod

▸ **getMethod**(`name`: *string*): [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)

Get a method by it's name.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)

Defined in: [HotRoute.ts:97](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L97)

___

### createError

▸ `Static`**createError**(`message`: *string*): *any*

Create an error JSON object.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *any*

Defined in: [HotRoute.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotRoute.ts#L70)
