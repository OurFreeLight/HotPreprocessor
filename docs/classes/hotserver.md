**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotServer

# Class: HotServer

The server.

## Hierarchy

* **HotServer**

  ↳ [HotHTTPServer](hothttpserver.md)

  ↳ [HotTesterServer](hottesterserver.md)

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
* [secrets](hotserver.md#secrets)
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

*Defined in [HotServer.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L130)*

#### Parameters:

Name | Type |
------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md) |

**Returns:** [HotServer](hotserver.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[api](../interfaces/ihotserver.md#api)*

*Defined in [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L86)*

The API to use.

___

### listenAddress

•  **listenAddress**: string

*Implementation of [IHotServer](../interfaces/ihotserver.md).[listenAddress](../interfaces/ihotserver.md#listenaddress)*

*Defined in [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L90)*

The network address to listen on.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[logger](../interfaces/ihotserver.md#logger)*

*Defined in [HotServer.ts:126](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L126)*

The logger.

___

### ports

•  **ports**: { http: number ; https: number  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ports](../interfaces/ihotserver.md#ports)*

*Defined in [HotServer.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L94)*

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

*Defined in [HotServer.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L82)*

The processor to use.

___

### redirectHTTPtoHTTPS

•  **redirectHTTPtoHTTPS**: boolean

*Implementation of [IHotServer](../interfaces/ihotserver.md).[redirectHTTPtoHTTPS](../interfaces/ihotserver.md#redirecthttptohttps)*

*Defined in [HotServer.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L118)*

Redirect HTTP traffic to HTTPS.

___

### secrets

•  **secrets**: any

*Implementation of [IHotServer](../interfaces/ihotserver.md).[secrets](../interfaces/ihotserver.md#secrets)*

*Defined in [HotServer.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L130)*

Any secrets associated with this server.

___

### ssl

•  **ssl**: { ca: string ; cert: string ; key: string  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ssl](../interfaces/ihotserver.md#ssl)*

*Defined in [HotServer.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L101)*

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

*Defined in [HotServer.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L122)*

The type of server.

## Methods

### listen

▸ `Optional`**listen**(): Promise<void\>

*Defined in [HotServer.ts:195](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L195)*

Start listening for requests.

**Returns:** Promise<void\>

___

### registerRoute

▸ `Optional`**registerRoute**(`route`: [HotRoute](hotroute.md)): Promise<void\>

*Defined in [HotServer.ts:190](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L190)*

Register a route with the server.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** Promise<void\>

___

### setAPI

▸ **setAPI**(`api`: [HotAPI](hotapi.md)): Promise<void\>

*Defined in [HotServer.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L178)*

Set an API to this server. This will also set the associated
processor to this API as well.

#### Parameters:

Name | Type |
------ | ------ |
`api` | [HotAPI](hotapi.md) |

**Returns:** Promise<void\>

___

### shutdown

▸ `Optional`**shutdown**(): Promise<void\>

*Defined in [HotServer.ts:200](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotServer.ts#L200)*

Shutdown the server.

**Returns:** Promise<void\>
