**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotRouteMethod

# Class: HotRouteMethod

An API method to make.

## Hierarchy

* **HotRouteMethod**

## Index

### Constructors

* [constructor](hotroutemethod.md#constructor)

### Properties

* [authCredentials](hotroutemethod.md#authcredentials)
* [executeSetup](hotroutemethod.md#executesetup)
* [isRegistered](hotroutemethod.md#isregistered)
* [name](hotroutemethod.md#name)
* [onClientExecute](hotroutemethod.md#onclientexecute)
* [onPostRegister](hotroutemethod.md#onpostregister)
* [onPreRegister](hotroutemethod.md#onpreregister)
* [onRegister](hotroutemethod.md#onregister)
* [onServerAuthorize](hotroutemethod.md#onserverauthorize)
* [onServerExecute](hotroutemethod.md#onserverexecute)
* [parentRoute](hotroutemethod.md#parentroute)
* [testCases](hotroutemethod.md#testcases)
* [type](hotroutemethod.md#type)

### Methods

* [addTestCase](hotroutemethod.md#addtestcase)

## Constructors

### constructor

\+ **new HotRouteMethod**(`route`: [HotRoute](hotroute.md), `name`: string, `onExecute?`: [ServerExecutionFunction](../globals.md#serverexecutionfunction) \| [ClientExecutionFunction](../globals.md#clientexecutionfunction), `type?`: [HTTPMethod](../enums/httpmethod.md), `onServerAuthorize?`: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction), `onRegister?`: [ServerRegistrationFunction](../globals.md#serverregistrationfunction), `authCredentials?`: any, `testCases?`: (string \| [TestCaseFunction](../globals.md#testcasefunction))[] \| [TestCaseFunction](../globals.md#testcasefunction)[] \| [TestCaseObject](../interfaces/testcaseobject.md)[]): [HotRouteMethod](hotroutemethod.md)

*Defined in [HotRouteMethod.ts:93](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L93)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | [HotRoute](hotroute.md) | - |
`name` | string | - |
`onExecute` | [ServerExecutionFunction](../globals.md#serverexecutionfunction) \| [ClientExecutionFunction](../globals.md#clientexecutionfunction) | null |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.POST |
`onServerAuthorize` | [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction) | null |
`onRegister` | [ServerRegistrationFunction](../globals.md#serverregistrationfunction) | null |
`authCredentials` | any | null |
`testCases` | (string \| [TestCaseFunction](../globals.md#testcasefunction))[] \| [TestCaseFunction](../globals.md#testcasefunction)[] \| [TestCaseObject](../interfaces/testcaseobject.md)[] | null |

**Returns:** [HotRouteMethod](hotroutemethod.md)

## Properties

### authCredentials

•  **authCredentials**: any

*Defined in [HotRouteMethod.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L87)*

The authorization credentials to be used by the client
when connecting to the server.

___

### executeSetup

•  **executeSetup**: boolean

*Defined in [HotRouteMethod.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L82)*

Has this method been registered with the server? This
prevents the method from being reregistered.

___

### isRegistered

•  **isRegistered**: boolean

*Defined in [HotRouteMethod.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L77)*

Has this method been registered with the server? This
prevents the method from being reregistered.

___

### name

•  **name**: string

*Defined in [HotRouteMethod.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L68)*

The api call name.

___

### onClientExecute

• `Optional` **onClientExecute**: [ClientExecutionFunction](../globals.md#clientexecutionfunction)

*Defined in [HotRouteMethod.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L178)*

Executes when executing a called method from the client side.

**`fixme`** Is this necessary?

___

### onPostRegister

• `Optional` **onPostRegister**: () => Promise<void\>

*Defined in [HotRouteMethod.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L151)*

Executes after all routes have been registered.

___

### onPreRegister

• `Optional` **onPreRegister**: () => Promise<void\>

*Defined in [HotRouteMethod.ts:142](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L142)*

Executes before all routes have been registered.

___

### onRegister

• `Optional` **onRegister**: [ServerRegistrationFunction](../globals.md#serverregistrationfunction)

*Defined in [HotRouteMethod.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L147)*

Executes when first registering this method with Express. If
this returns false, the method will not be registered.

___

### onServerAuthorize

• `Optional` **onServerAuthorize**: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction)

*Defined in [HotRouteMethod.ts:162](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L162)*

Executes when authorizing a called method. If this method
is set, this will not call onAuthorize for the parent HotRoute.
The value returned from here will be passed to onExecute.
Undefined returning from here will mean the authorization failed.
If any exceptions are thrown from this function, they will be sent
to the server as an { error: string; } object with the exception
message as the error.

___

### onServerExecute

• `Optional` **onServerExecute**: [ServerExecutionFunction](../globals.md#serverexecutionfunction)

*Defined in [HotRouteMethod.ts:173](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L173)*

Executes when executing a called method from the server side.
This will stringify any JSON object and send it as a JSON response.
If undefined is returned no response will be sent to the server.
So the developer would have to send a response using "res".
If any exceptions are thrown from this function, they will be sent
to the server as an { error: string; } object with the exception
message as the error.

___

### parentRoute

•  **parentRoute**: [HotRoute](hotroute.md)

*Defined in [HotRouteMethod.ts:64](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L64)*

The parent route.

___

### testCases

•  **testCases**: { [name:string]: [TestCaseObject](../interfaces/testcaseobject.md);  }

*Defined in [HotRouteMethod.ts:91](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L91)*

The test case objects to execute during tests.

___

### type

•  **type**: [HTTPMethod](../enums/httpmethod.md)

*Defined in [HotRouteMethod.ts:72](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L72)*

The api call name.

## Methods

### addTestCase

▸ **addTestCase**(`newTestCase`: [TestCaseObject](../interfaces/testcaseobject.md) \| string \| [TestCaseFunction](../globals.md#testcasefunction), `testCaseFunction?`: [TestCaseFunction](../globals.md#testcasefunction)): void

*Defined in [HotRouteMethod.ts:183](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotRouteMethod.ts#L183)*

Add a new test case.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`newTestCase` | [TestCaseObject](../interfaces/testcaseobject.md) \| string \| [TestCaseFunction](../globals.md#testcasefunction) | - |
`testCaseFunction` | [TestCaseFunction](../globals.md#testcasefunction) | null |

**Returns:** void
