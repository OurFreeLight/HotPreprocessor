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

* [executeSetup](hotroutemethod.md#executesetup)
* [isRegistered](hotroutemethod.md#isregistered)
* [name](hotroutemethod.md#name)
* [onClientExecute](hotroutemethod.md#onclientexecute)
* [onRegister](hotroutemethod.md#onregister)
* [onServerAuthorize](hotroutemethod.md#onserverauthorize)
* [onServerExecute](hotroutemethod.md#onserverexecute)
* [parentRoute](hotroutemethod.md#parentroute)
* [type](hotroutemethod.md#type)

## Constructors

### constructor

\+ **new HotRouteMethod**(`route`: [HotRoute](hotroute.md), `name`: string, `onExecute`: [ServerExecutionFunction](../globals.md#serverexecutionfunction) \| [ClientExecutionFunction](../globals.md#clientexecutionfunction), `type`: [HTTPMethod](../enums/httpmethod.md), `onAuthorize`: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction), `onRegister`: [ServerRegistrationFunction](../globals.md#serverregistrationfunction)): [HotRouteMethod](hotroutemethod.md)

*Defined in [HotRouteMethod.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L59)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | [HotRoute](hotroute.md) | - |
`name` | string | - |
`onExecute` | [ServerExecutionFunction](../globals.md#serverexecutionfunction) \| [ClientExecutionFunction](../globals.md#clientexecutionfunction) | null |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.POST |
`onAuthorize` | [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction) | null |
`onRegister` | [ServerRegistrationFunction](../globals.md#serverregistrationfunction) | null |

**Returns:** [HotRouteMethod](hotroutemethod.md)

## Properties

### executeSetup

•  **executeSetup**: boolean

*Defined in [HotRouteMethod.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L59)*

Has this method been registered with the server? This
prevents the method from being reregistered.

___

### isRegistered

•  **isRegistered**: boolean

*Defined in [HotRouteMethod.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L54)*

Has this method been registered with the server? This
prevents the method from being reregistered.

___

### name

•  **name**: string

*Defined in [HotRouteMethod.ts:45](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L45)*

The api call name.

___

### onClientExecute

• `Optional` **onClientExecute**: [ClientExecutionFunction](../globals.md#clientexecutionfunction)

*Defined in [HotRouteMethod.ts:103](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L103)*

Executes when executing a called method from the client side.

**`fixme`** Is this necessary?

___

### onRegister

• `Optional` **onRegister**: [ServerRegistrationFunction](../globals.md#serverregistrationfunction)

*Defined in [HotRouteMethod.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L82)*

Executes when first registering this method with Express. If
this returns false, the method will not be registered.

___

### onServerAuthorize

• `Optional` **onServerAuthorize**: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction)

*Defined in [HotRouteMethod.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L90)*

Executes when authorizing a called method. If this method
is set, this will not call onAuthorize for the parent HotRoute.
The value returned from here will be passed to onExecute.
Undefined returning from here will mean the authorization failed.

___

### onServerExecute

• `Optional` **onServerExecute**: [ServerExecutionFunction](../globals.md#serverexecutionfunction)

*Defined in [HotRouteMethod.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L98)*

Executes when executing a called method from the server side.
This will stringify any JSON object and send it as a JSON response.
If undefined is returned no response will be sent to the server.
So the developer would have to send a response using "res".

___

### parentRoute

•  **parentRoute**: [HotRoute](hotroute.md)

*Defined in [HotRouteMethod.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L41)*

The parent route.

___

### type

•  **type**: [HTTPMethod](../enums/httpmethod.md)

*Defined in [HotRouteMethod.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotRouteMethod.ts#L49)*

The api call name.
