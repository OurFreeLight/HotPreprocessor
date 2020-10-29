**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotClient

# Class: HotClient

A client connected to a server.

## Hierarchy

* **HotClient**

## Index

### Constructors

* [constructor](hotclient.md#constructor)

### Properties

* [api](hotclient.md#api)
* [logger](hotclient.md#logger)
* [processor](hotclient.md#processor)
* [type](hotclient.md#type)

## Constructors

### constructor

\+ **new HotClient**(`processor`: [HotPreprocessor](hotpreprocessor.md)): [HotClient](hotclient.md)

*Defined in [HotClient.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotClient.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) |

**Returns:** [HotClient](hotclient.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Defined in [HotClient.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotClient.ts#L18)*

The API to use.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Defined in [HotClient.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotClient.ts#L26)*

The logger.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Defined in [HotClient.ts:14](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotClient.ts#L14)*

The processor to use.

___

### type

•  **type**: [HotServerType](../enums/hotservertype.md)

*Defined in [HotClient.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotClient.ts#L22)*

The type of server.
