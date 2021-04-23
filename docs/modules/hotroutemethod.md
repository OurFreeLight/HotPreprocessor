[hotpreprocessor](../README.md) / [Exports](../modules.md) / HotRouteMethod

# Module: HotRouteMethod

## Table of contents

### Enumerations

- [HTTPMethod](../enums/hotroutemethod.httpmethod.md)

### Classes

- [HotRouteMethod](../classes/hotroutemethod.hotroutemethod-1.md)

### Interfaces

- [TestCaseObject](../interfaces/hotroutemethod.testcaseobject.md)

### Type aliases

- [ClientExecutionFunction](hotroutemethod.md#clientexecutionfunction)
- [ServerAuthorizationFunction](hotroutemethod.md#serverauthorizationfunction)
- [ServerExecutionFunction](hotroutemethod.md#serverexecutionfunction)
- [ServerRegistrationFunction](hotroutemethod.md#serverregistrationfunction)
- [TestCaseFunction](hotroutemethod.md#testcasefunction)

## Type aliases

### ClientExecutionFunction

Ƭ **ClientExecutionFunction**: (...`args`: *any*[]) => *Promise*<any\>

A function that will be executed by the client.

#### Type declaration:

▸ (...`args`: *any*[]): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *Promise*<any\>

Defined in: [HotRouteMethod.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotRouteMethod.ts#L28)

___

### ServerAuthorizationFunction

Ƭ **ServerAuthorizationFunction**: (`req`: *any*, `res`: *any*, `jsonObj`: *any*, `queryObj`: *any*) => *Promise*<any\>

A function that will be executed by the server for authorization. Any value
returned from this function will be passed to the ServerExecutionFunction.
If an undefined value is returned, this indicates the server was not able
to authenticate the user, so the ServerExecutionFunction will not be
executed.

#### Type declaration:

▸ (`req`: *any*, `res`: *any*, `jsonObj`: *any*, `queryObj`: *any*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`req` | *any* |
`res` | *any* |
`jsonObj` | *any* |
`queryObj` | *any* |

**Returns:** *Promise*<any\>

Defined in: [HotRouteMethod.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotRouteMethod.ts#L36)

___

### ServerExecutionFunction

Ƭ **ServerExecutionFunction**: (`req`: *any*, `res`: *any*, `authorizedValue`: *any*, `jsonObj`: *any*, `queryObj`: *any*) => *Promise*<any\>

A function that will be executed by the server.

#### Type declaration:

▸ (`req`: *any*, `res`: *any*, `authorizedValue`: *any*, `jsonObj`: *any*, `queryObj`: *any*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`req` | *any* |
`res` | *any* |
`authorizedValue` | *any* |
`jsonObj` | *any* |
`queryObj` | *any* |

**Returns:** *Promise*<any\>

Defined in: [HotRouteMethod.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotRouteMethod.ts#L23)

___

### ServerRegistrationFunction

Ƭ **ServerRegistrationFunction**: () => *Promise*<boolean\>

A function that will be executed by the server when first registering with Express.
If this returns false, this route method will not be registered.

#### Type declaration:

▸ (): *Promise*<boolean\>

**Returns:** *Promise*<boolean\>

Defined in: [HotRouteMethod.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotRouteMethod.ts#L19)

___

### TestCaseFunction

Ƭ **TestCaseFunction**: (`driver`: [*HotTestDriver*](../classes/hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](../classes/hottestdriver.hottestdriver-1.md)) => *any*

The test case function to execute.

Defined in: [HotRouteMethod.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotRouteMethod.ts#L40)
