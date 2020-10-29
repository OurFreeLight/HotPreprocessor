**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotServer

# Class: HotServer

The server.

## Hierarchy

* **HotServer**

  ↳ [HotHTTPServer](hothttpserver.md)

## Implements

* [IHotServer](../interfaces/ihotserver.md)

## Index

### Constructors

* [constructor](hotserver.md#constructor)

### Properties

* [api](hotserver.md#api)
* [listenAddress](hotserver.md#listenaddress)
* [logger](hotserver.md#logger)
* [ports](hotserver.md#ports)
* [processor](hotserver.md#processor)
* [redirectHTTPtoHTTPS](hotserver.md#redirecthttptohttps)
* [ssl](hotserver.md#ssl)
* [type](hotserver.md#type)

### Methods

* [listen](hotserver.md#listen)
* [registerRoute](hotserver.md#registerroute)
* [setAPI](hotserver.md#setapi)
* [shutdown](hotserver.md#shutdown)

## Constructors

### constructor

\+ **new HotServer**(`processor`: [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md)): [HotServer](hotserver.md)

*Defined in [HotServer.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L122)*

#### Parameters:

Name | Type |
------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md) |

**Returns:** [HotServer](hotserver.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[api](../interfaces/ihotserver.md#api)*

*Defined in [HotServer.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L82)*

The API to use.

___

### listenAddress

•  **listenAddress**: string

*Implementation of [IHotServer](../interfaces/ihotserver.md).[listenAddress](../interfaces/ihotserver.md#listenaddress)*

*Defined in [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L86)*

The network address to listen on.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[logger](../interfaces/ihotserver.md#logger)*

*Defined in [HotServer.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L122)*

The logger.

___

### ports

•  **ports**: { http: number ; https: number  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ports](../interfaces/ihotserver.md#ports)*

*Defined in [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L90)*

The ports to use.

#### Type declaration:

Name | Type |
------ | ------ |
`http` | number |
`https` | number |

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[processor](../interfaces/ihotserver.md#processor)*

*Defined in [HotServer.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L78)*

The processor to use.

___

### redirectHTTPtoHTTPS

•  **redirectHTTPtoHTTPS**: boolean

*Implementation of [IHotServer](../interfaces/ihotserver.md).[redirectHTTPtoHTTPS](../interfaces/ihotserver.md#redirecthttptohttps)*

*Defined in [HotServer.ts:114](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L114)*

Redirect HTTP traffic to HTTPS.

___

### ssl

•  **ssl**: { ca: string ; cert: string ; key: string  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ssl](../interfaces/ihotserver.md#ssl)*

*Defined in [HotServer.ts:97](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L97)*

SSL settings.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`ca` | string | The SSL certificate CA to use. |
`cert` | string | The SSL certificate to use. |
`key` | string | The SSL certificate key to use. |

___

### type

•  **type**: [HotServerType](../enums/hotservertype.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[type](../interfaces/ihotserver.md#type)*

*Defined in [HotServer.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L118)*

The type of server.

## Methods

### listen

▸ `Optional`**listen**(): Promise\<void>

*Defined in [HotServer.ts:181](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L181)*

Start listening for requests.

**Returns:** Promise\<void>

___

### registerRoute

▸ `Optional`**registerRoute**(`route`: [HotRoute](hotroute.md)): void

*Defined in [HotServer.ts:176](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L176)*

Register a route with the server.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** void

___

### setAPI

▸ **setAPI**(`api`: [HotAPI](hotapi.md)): void

*Defined in [HotServer.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L167)*

Set an API to this server.

#### Parameters:

Name | Type |
------ | ------ |
`api` | [HotAPI](hotapi.md) |

**Returns:** void

___

### shutdown

▸ `Optional`**shutdown**(): Promise\<void>

*Defined in [HotServer.ts:186](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L186)*

Shutdown the server.

**Returns:** Promise\<void>
