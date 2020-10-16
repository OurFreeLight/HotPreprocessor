**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IHotServer

# Interface: IHotServer

The server.

## Hierarchy

* **IHotServer**

## Implemented by

* [HotHTTPServer](../classes/hothttpserver.md)
* [HotServer](../classes/hotserver.md)

## Index

### Properties

* [api](ihotserver.md#api)
* [listenAddress](ihotserver.md#listenaddress)
* [logger](ihotserver.md#logger)
* [ports](ihotserver.md#ports)
* [processor](ihotserver.md#processor)
* [redirectHTTPtoHTTPS](ihotserver.md#redirecthttptohttps)
* [ssl](ihotserver.md#ssl)
* [type](ihotserver.md#type)

## Properties

### api

•  **api**: [HotAPI](../classes/hotapi.md)

*Defined in [HotServer.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L27)*

The API to use.

___

### listenAddress

•  **listenAddress**: string

*Defined in [HotServer.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L31)*

The network address to listen on.

___

### logger

•  **logger**: [HotLog](../classes/hotlog.md)

*Defined in [HotServer.ts:67](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L67)*

The logger.

___

### ports

•  **ports**: { http: number ; https: number  }

*Defined in [HotServer.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L35)*

The ports to use.

#### Type declaration:

Name | Type |
------ | ------ |
`http` | number |
`https` | number |

___

### processor

•  **processor**: [HotPreprocessor](../classes/hotpreprocessor.md)

*Defined in [HotServer.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L23)*

The processor to use.

___

### redirectHTTPtoHTTPS

•  **redirectHTTPtoHTTPS**: boolean

*Defined in [HotServer.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L59)*

Redirect HTTP traffic to HTTPS.

___

### ssl

•  **ssl**: { ca: string ; cert: string ; key: string  }

*Defined in [HotServer.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L42)*

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

*Defined in [HotServer.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotServer.ts#L63)*

The type of server.