[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotRouteMethod](../modules/hotroutemethod.md) / HotRouteMethod

# Class: HotRouteMethod

[HotRouteMethod](../modules/hotroutemethod.md).HotRouteMethod

An API method to make.

## Table of contents

### Constructors

- [constructor](hotroutemethod.hotroutemethod-1.md#constructor)

### Properties

- [authCredentials](hotroutemethod.hotroutemethod-1.md#authcredentials)
- [executeSetup](hotroutemethod.hotroutemethod-1.md#executesetup)
- [isRegistered](hotroutemethod.hotroutemethod-1.md#isregistered)
- [name](hotroutemethod.hotroutemethod-1.md#name)
- [onClientExecute](hotroutemethod.hotroutemethod-1.md#onclientexecute)
- [onPostRegister](hotroutemethod.hotroutemethod-1.md#onpostregister)
- [onPreRegister](hotroutemethod.hotroutemethod-1.md#onpreregister)
- [onRegister](hotroutemethod.hotroutemethod-1.md#onregister)
- [onServerAuthorize](hotroutemethod.hotroutemethod-1.md#onserverauthorize)
- [onServerExecute](hotroutemethod.hotroutemethod-1.md#onserverexecute)
- [parentRoute](hotroutemethod.hotroutemethod-1.md#parentroute)
- [testCases](hotroutemethod.hotroutemethod-1.md#testcases)
- [type](hotroutemethod.hotroutemethod-1.md#type)

### Methods

- [addTestCase](hotroutemethod.hotroutemethod-1.md#addtestcase)

## Constructors

### constructor

\+ **new HotRouteMethod**(`route`: [*HotRoute*](hotroute.hotroute-1.md), `name`: *string*, `onExecute?`: [*ServerExecutionFunction*](../modules/hotroutemethod.md#serverexecutionfunction) \| [*ClientExecutionFunction*](../modules/hotroutemethod.md#clientexecutionfunction), `type?`: [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md), `onServerAuthorize?`: [*ServerAuthorizationFunction*](../modules/hotroutemethod.md#serverauthorizationfunction), `onRegister?`: [*ServerRegistrationFunction*](../modules/hotroutemethod.md#serverregistrationfunction), `authCredentials?`: *any*, `testCases?`: (*string* \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *any*)[] \| [*TestCaseFunction*](../modules/hotroutemethod.md#testcasefunction)[] \| [*TestCaseObject*](../interfaces/hotroutemethod.testcaseobject.md)[]): [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`route` | [*HotRoute*](hotroute.hotroute-1.md) | - |
`name` | *string* | - |
`onExecute` | [*ServerExecutionFunction*](../modules/hotroutemethod.md#serverexecutionfunction) \| [*ClientExecutionFunction*](../modules/hotroutemethod.md#clientexecutionfunction) | null |
`type` | [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md) | - |
`onServerAuthorize` | [*ServerAuthorizationFunction*](../modules/hotroutemethod.md#serverauthorizationfunction) | null |
`onRegister` | [*ServerRegistrationFunction*](../modules/hotroutemethod.md#serverregistrationfunction) | null |
`authCredentials` | *any* | null |
`testCases` | (*string* \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *any*)[] \| [*TestCaseFunction*](../modules/hotroutemethod.md#testcasefunction)[] \| [*TestCaseObject*](../interfaces/hotroutemethod.testcaseobject.md)[] | null |

**Returns:** [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md)

Defined in: [HotRouteMethod.ts:93](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L93)

## Properties

### authCredentials

• **authCredentials**: *any*

The authorization credentials to be used by the client
when connecting to the server.

Defined in: [HotRouteMethod.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L87)

___

### executeSetup

• **executeSetup**: *boolean*

Has this method been registered with the server? This
prevents the method from being reregistered.

Defined in: [HotRouteMethod.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L82)

___

### isRegistered

• **isRegistered**: *boolean*

Has this method been registered with the server? This
prevents the method from being reregistered.

Defined in: [HotRouteMethod.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L77)

___

### name

• **name**: *string*

The api call name.

Defined in: [HotRouteMethod.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L68)

___

### onClientExecute

• `Optional` **onClientExecute**: [*ClientExecutionFunction*](../modules/hotroutemethod.md#clientexecutionfunction)

Executes when executing a called method from the client side.

**`fixme`** Is this necessary?

Defined in: [HotRouteMethod.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L178)

___

### onPostRegister

• `Optional` **onPostRegister**: () => *Promise*<void\>

Executes after all routes have been registered.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotRouteMethod.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L151)

Defined in: [HotRouteMethod.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L151)

___

### onPreRegister

• `Optional` **onPreRegister**: () => *Promise*<void\>

Executes before all routes have been registered.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotRouteMethod.ts:142](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L142)

Defined in: [HotRouteMethod.ts:142](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L142)

___

### onRegister

• `Optional` **onRegister**: [*ServerRegistrationFunction*](../modules/hotroutemethod.md#serverregistrationfunction)

Executes when first registering this method with Express. If
this returns false, the method will not be registered.

Defined in: [HotRouteMethod.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L147)

___

### onServerAuthorize

• `Optional` **onServerAuthorize**: [*ServerAuthorizationFunction*](../modules/hotroutemethod.md#serverauthorizationfunction)

Executes when authorizing a called method. If this method
is set, this will not call onAuthorize for the parent HotRoute.
The value returned from here will be passed to onExecute.
Undefined returning from here will mean the authorization failed.
If any exceptions are thrown from this function, they will be sent
to the server as an { error: string; } object with the exception
message as the error.

Defined in: [HotRouteMethod.ts:162](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L162)

___

### onServerExecute

• `Optional` **onServerExecute**: [*ServerExecutionFunction*](../modules/hotroutemethod.md#serverexecutionfunction)

Executes when executing a called method from the server side.
This will stringify any JSON object and send it as a JSON response.
If undefined is returned no response will be sent to the server.
So the developer would have to send a response using "res".
If any exceptions are thrown from this function, they will be sent
to the server as an { error: string; } object with the exception
message as the error.

Defined in: [HotRouteMethod.ts:173](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L173)

___

### parentRoute

• **parentRoute**: [*HotRoute*](hotroute.hotroute-1.md)

The parent route.

Defined in: [HotRouteMethod.ts:64](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L64)

___

### testCases

• **testCases**: *object*

The test case objects to execute during tests.

#### Type declaration:

Defined in: [HotRouteMethod.ts:91](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L91)

___

### type

• **type**: [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md)

The api call name.

Defined in: [HotRouteMethod.ts:72](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L72)

## Methods

### addTestCase

▸ **addTestCase**(`newTestCase`: *string* \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *any* \| [*TestCaseObject*](../interfaces/hotroutemethod.testcaseobject.md), `testCaseFunction?`: [*TestCaseFunction*](../modules/hotroutemethod.md#testcasefunction)): *void*

Add a new test case.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`newTestCase` | *string* \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *Promise*<any\> \| (`driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)) => *any* \| [*TestCaseObject*](../interfaces/hotroutemethod.testcaseobject.md) | - |
`testCaseFunction` | [*TestCaseFunction*](../modules/hotroutemethod.md#testcasefunction) | null |

**Returns:** *void*

Defined in: [HotRouteMethod.ts:183](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotRouteMethod.ts#L183)
