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

* [isRegistered](hotroutemethod.md#isregistered)
* [name](hotroutemethod.md#name)
* [onClientExecute](hotroutemethod.md#onclientexecute)
* [onServerAuthorize](hotroutemethod.md#onserverauthorize)
* [onServerExecute](hotroutemethod.md#onserverexecute)
* [parentRoute](hotroutemethod.md#parentroute)
* [type](hotroutemethod.md#type)

## Constructors

### constructor

\+ **new HotRouteMethod**(`route`: [HotRoute](hotroute.md), `name`: string, `onExecute`: [ServerExecutionFunction](../globals.md#serverexecutionfunction) \| [ClientExecutionFunction](../globals.md#clientexecutionfunction), `type`: [HTTPMethod](../enums/httpmethod.md), `onAuthorize`: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction)): [HotRouteMethod](hotroutemethod.md)

*Defined in [HotRouteMethod.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L48)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | [HotRoute](hotroute.md) | - |
`name` | string | - |
`onExecute` | [ServerExecutionFunction](../globals.md#serverexecutionfunction) \| [ClientExecutionFunction](../globals.md#clientexecutionfunction) | null |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.POST |
`onAuthorize` | [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction) | null |

**Returns:** [HotRouteMethod](hotroutemethod.md)

## Properties

### isRegistered

•  **isRegistered**: boolean

*Defined in [HotRouteMethod.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L48)*

Has this method been registered with the server? This
prevents the method from being reregistered.

___

### name

•  **name**: string

*Defined in [HotRouteMethod.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L39)*

The api call name.

___

### onClientExecute

• `Optional` **onClientExecute**: [ClientExecutionFunction](../globals.md#clientexecutionfunction)

*Defined in [HotRouteMethod.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L84)*

Executes when executing a called method from the client side.

**`fixme`** Is this necessary?

___

### onServerAuthorize

• `Optional` **onServerAuthorize**: [ServerAuthorizationFunction](../globals.md#serverauthorizationfunction)

*Defined in [HotRouteMethod.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L71)*

Executes when authorizing a called method. If this method
is set, this will not call onAuthorize for the parent HotRoute.
The value returned from here will be passed to onExecute.
Undefined returning from here will mean the authorization failed.

___

### onServerExecute

• `Optional` **onServerExecute**: [ServerExecutionFunction](../globals.md#serverexecutionfunction)

*Defined in [HotRouteMethod.ts:79](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L79)*

Executes when executing a called method from the server side.
This will stringify any JSON object and send it as a JSON response.
If undefined is returned no response will be sent to the server.
So the developer would have to send a response using "res".

___

### parentRoute

•  **parentRoute**: [HotRoute](hotroute.md)

*Defined in [HotRouteMethod.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L35)*

The parent route.

___

### type

•  **type**: [HTTPMethod](../enums/httpmethod.md)

*Defined in [HotRouteMethod.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L43)*

The api call name.
