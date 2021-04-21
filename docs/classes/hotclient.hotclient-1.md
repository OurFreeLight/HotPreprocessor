[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotClient](../modules/hotclient.md) / HotClient

# Class: HotClient

[HotClient](../modules/hotclient.md).HotClient

A client connected to a server.

## Table of contents

### Constructors

- [constructor](hotclient.hotclient-1.md#constructor)

### Properties

- [api](hotclient.hotclient-1.md#api)
- [logger](hotclient.hotclient-1.md#logger)
- [processor](hotclient.hotclient-1.md#processor)
- [testerAPI](hotclient.hotclient-1.md#testerapi)
- [type](hotclient.hotclient-1.md#type)

## Constructors

### constructor

\+ **new HotClient**(`processor`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)): [*HotClient*](hotclient.hotclient-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) |

**Returns:** [*HotClient*](hotclient.hotclient-1.md)

Defined in: [HotClient.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotClient.ts#L30)

## Properties

### api

• **api**: [*HotAPI*](hotapi.hotapi-1.md)

The API to use.

Defined in: [HotClient.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotClient.ts#L18)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The logger.

Defined in: [HotClient.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotClient.ts#L30)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Defined in: [HotClient.ts:14](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotClient.ts#L14)

___

### testerAPI

• **testerAPI**: [*HotAPI*](hotapi.hotapi-1.md)

The tester API to use.

Defined in: [HotClient.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotClient.ts#L22)

___

### type

• **type**: [*HotServerType*](../enums/hotserver.hotservertype.md)

The type of server.

Defined in: [HotClient.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotClient.ts#L26)
