[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotServer](../modules/hotserver.md) / IHotServer

# Interface: IHotServer

[HotServer](../modules/hotserver.md).IHotServer

The server.

## Implemented by

* [*HotServer*](../classes/hotserver.hotserver-1.md)

## Table of contents

### Properties

- [api](hotserver.ihotserver.md#api)
- [listenAddress](hotserver.ihotserver.md#listenaddress)
- [logger](hotserver.ihotserver.md#logger)
- [ports](hotserver.ihotserver.md#ports)
- [processor](hotserver.ihotserver.md#processor)
- [redirectHTTPtoHTTPS](hotserver.ihotserver.md#redirecthttptohttps)
- [secrets](hotserver.ihotserver.md#secrets)
- [serverType](hotserver.ihotserver.md#servertype)
- [ssl](hotserver.ihotserver.md#ssl)
- [type](hotserver.ihotserver.md#type)

## Properties

### api

• **api**: [*HotAPI*](../classes/hotapi.hotapi-1.md)

The API to use.

Defined in: [HotServer.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L31)

___

### listenAddress

• **listenAddress**: *string*

The network address to listen on.

Defined in: [HotServer.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L35)

___

### logger

• **logger**: [*HotLog*](../classes/hotlog.hotlog-1.md)

The logger.

Defined in: [HotServer.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L71)

___

### ports

• **ports**: *object*

The ports to use.

#### Type declaration:

Name | Type |
:------ | :------ |
`http` | *number* |
`https` | *number* |

Defined in: [HotServer.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L39)

___

### processor

• **processor**: [*HotPreprocessor*](../classes/hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Defined in: [HotServer.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L23)

___

### redirectHTTPtoHTTPS

• **redirectHTTPtoHTTPS**: *boolean*

Redirect HTTP traffic to HTTPS.

Defined in: [HotServer.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L63)

___

### secrets

• **secrets**: *any*

Any secrets associated with this server.

Defined in: [HotServer.ts:75](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L75)

___

### serverType

• **serverType**: *string*

The server type.

Defined in: [HotServer.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L27)

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

Defined in: [HotServer.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L46)

___

### type

• **type**: [*HotServerType*](../enums/hotserver.hotservertype.md)

The type of server.

Defined in: [HotServer.ts:67](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotServer.ts#L67)
