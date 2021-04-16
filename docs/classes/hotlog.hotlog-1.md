[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotLog](../modules/hotlog.md) / HotLog

# Class: HotLog

[HotLog](../modules/hotlog.md).HotLog

The logger.

## Table of contents

### Constructors

- [constructor](hotlog.hotlog-1.md#constructor)

### Properties

- [logLevel](hotlog.hotlog-1.md#loglevel)

### Methods

- [error](hotlog.hotlog-1.md#error)
- [info](hotlog.hotlog-1.md#info)
- [log](hotlog.hotlog-1.md#log)
- [verbose](hotlog.hotlog-1.md#verbose)
- [warning](hotlog.hotlog-1.md#warning)

## Constructors

### constructor

\+ **new HotLog**(`logLevel?`: [*HotLogLevel*](../enums/hotlog.hotloglevel.md)): [*HotLog*](hotlog.hotlog-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`logLevel` | [*HotLogLevel*](../enums/hotlog.hotloglevel.md) |

**Returns:** [*HotLog*](hotlog.hotlog-1.md)

Defined in: [HotLog.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L40)

## Properties

### logLevel

• **logLevel**: [*HotLogLevel*](../enums/hotlog.hotloglevel.md)

The logging level.

Defined in: [HotLog.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L40)

## Methods

### error

▸ **error**(`message`: *string* \| Error): *void*

Log an error message.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* \| Error |

**Returns:** *void*

Defined in: [HotLog.ts:136](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L136)

___

### info

▸ **info**(`message`: *string*): *void*

Log a message.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *void*

Defined in: [HotLog.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L110)

___

### log

▸ **log**(`level`: [*HotLogLevel*](../enums/hotlog.hotloglevel.md), `message`: *string*): *void*

Log a message.

#### Parameters:

Name | Type |
:------ | :------ |
`level` | [*HotLogLevel*](../enums/hotlog.hotloglevel.md) |
`message` | *string* |

**Returns:** *void*

Defined in: [HotLog.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L50)

___

### verbose

▸ **verbose**(`message`: *string*): *void*

Log a verbose message.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *void*

Defined in: [HotLog.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L101)

___

### warning

▸ **warning**(`message`: *string*): *void*

Log a warning.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *void*

Defined in: [HotLog.ts:123](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotLog.ts#L123)
