[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotServer](../modules/hotserver.md) / HotServer

# Class: HotServer

[HotServer](../modules/hotserver.md).HotServer

The server.

## Hierarchy

* **HotServer**

  ↳ [*HotHTTPServer*](hothttpserver.hothttpserver-1.md)

  ↳ [*HotTesterServer*](hottesterserver.hottesterserver-1.md)

## Implements

* [*IHotServer*](../interfaces/hotserver.ihotserver.md)

## Table of contents

### Constructors

- [constructor](hotserver.hotserver-1.md#constructor)

### Properties

- [api](hotserver.hotserver-1.md#api)
- [listenAddress](hotserver.hotserver-1.md#listenaddress)
- [logger](hotserver.hotserver-1.md#logger)
- [ports](hotserver.hotserver-1.md#ports)
- [processor](hotserver.hotserver-1.md#processor)
- [redirectHTTPtoHTTPS](hotserver.hotserver-1.md#redirecthttptohttps)
- [secrets](hotserver.hotserver-1.md#secrets)
- [serverType](hotserver.hotserver-1.md#servertype)
- [ssl](hotserver.hotserver-1.md#ssl)
- [type](hotserver.hotserver-1.md#type)

### Methods

- [listen](hotserver.hotserver-1.md#listen)
- [registerRoute](hotserver.hotserver-1.md#registerroute)
- [setAPI](hotserver.hotserver-1.md#setapi)
- [shutdown](hotserver.hotserver-1.md#shutdown)

## Constructors

### constructor

\+ **new HotServer**(`processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)): [*HotServer*](hotserver.hotserver-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`processor` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) |

**Returns:** [*HotServer*](hotserver.hotserver-1.md)

Defined in: [HotServer.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L138)

## Properties

### api

• **api**: [*HotAPI*](hotapi.hotapi-1.md)

The API to use.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[api](../interfaces/hotserver.ihotserver.md#api)

Defined in: [HotServer.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L94)

___

### listenAddress

• **listenAddress**: *string*

The network address to listen on.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[listenAddress](../interfaces/hotserver.ihotserver.md#listenaddress)

Defined in: [HotServer.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L98)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The logger.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[logger](../interfaces/hotserver.ihotserver.md#logger)

Defined in: [HotServer.ts:134](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L134)

___

### ports

• **ports**: *object*

The ports to use.

#### Type declaration:

Name | Type |
:------ | :------ |
`http` | *number* |
`https` | *number* |

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[ports](../interfaces/hotserver.ihotserver.md#ports)

Defined in: [HotServer.ts:102](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L102)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[processor](../interfaces/hotserver.ihotserver.md#processor)

Defined in: [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L86)

___

### redirectHTTPtoHTTPS

• **redirectHTTPtoHTTPS**: *boolean*

Redirect HTTP traffic to HTTPS.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[redirectHTTPtoHTTPS](../interfaces/hotserver.ihotserver.md#redirecthttptohttps)

Defined in: [HotServer.ts:126](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L126)

___

### secrets

• **secrets**: *any*

Any secrets associated with this server.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[secrets](../interfaces/hotserver.ihotserver.md#secrets)

Defined in: [HotServer.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L138)

___

### serverType

• **serverType**: *string*

The server type.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[serverType](../interfaces/hotserver.ihotserver.md#servertype)

Defined in: [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L90)

___

### ssl

• **ssl**: *object*

SSL settings.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`ca` | *string* | The SSL certificate CA to use.   |
`cert` | *string* | The SSL certificate to use.   |
`key` | *string* | The SSL certificate key to use.   |

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[ssl](../interfaces/hotserver.ihotserver.md#ssl)

Defined in: [HotServer.ts:109](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L109)

___

### type

• **type**: [*HotServerType*](../enums/hotserver.hotservertype.md)

The type of server.

Implementation of: [IHotServer](../interfaces/hotserver.ihotserver.md).[type](../interfaces/hotserver.ihotserver.md#type)

Defined in: [HotServer.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L130)

## Methods

### listen

▸ `Optional`**listen**(): *Promise*<void\>

Start listening for requests.

**Returns:** *Promise*<void\>

Defined in: [HotServer.ts:205](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L205)

___

### registerRoute

▸ `Optional`**registerRoute**(`route`: [*HotRoute*](hotroute.hotroute-1.md)): *Promise*<void\>

Register a route with the server.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*HotRoute*](hotroute.hotroute-1.md) |

**Returns:** *Promise*<void\>

Defined in: [HotServer.ts:200](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L200)

___

### setAPI

▸ **setAPI**(`api`: [*HotAPI*](hotapi.hotapi-1.md)): *Promise*<void\>

Set an API to this server. This will also set the associated
processor to this API as well.

#### Parameters:

Name | Type |
:------ | :------ |
`api` | [*HotAPI*](hotapi.hotapi-1.md) |

**Returns:** *Promise*<void\>

Defined in: [HotServer.ts:188](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L188)

___

### shutdown

▸ `Optional`**shutdown**(): *Promise*<void\>

Shutdown the server.

**Returns:** *Promise*<void\>

Defined in: [HotServer.ts:210](https://github.com/OurFreeLight/HotPreprocessor/blob/81355d3/src/HotServer.ts#L210)
