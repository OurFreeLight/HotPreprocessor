**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotLog

# Class: HotLog

The logger.

## Hierarchy

* **HotLog**

## Index

### Constructors

* [constructor](hotlog.md#constructor)

### Properties

* [logLevel](hotlog.md#loglevel)

### Methods

* [error](hotlog.md#error)
* [info](hotlog.md#info)
* [log](hotlog.md#log)
* [verbose](hotlog.md#verbose)
* [warning](hotlog.md#warning)

## Constructors

### constructor

\+ **new HotLog**(`logLevel`: [HotLogLevel](../enums/hotloglevel.md)): [HotLog](hotlog.md)

*Defined in [HotLog.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L40)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`logLevel` | [HotLogLevel](../enums/hotloglevel.md) | HotLogLevel.All |

**Returns:** [HotLog](hotlog.md)

## Properties

### logLevel

•  **logLevel**: [HotLogLevel](../enums/hotloglevel.md)

*Defined in [HotLog.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L40)*

The logging level.

## Methods

### error

▸ **error**(`message`: string): void

*Defined in [HotLog.ts:136](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L136)*

Log an error message.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### info

▸ **info**(`message`: string): void

*Defined in [HotLog.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L110)*

Log a message.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### log

▸ **log**(`level`: [HotLogLevel](../enums/hotloglevel.md), `message`: string): void

*Defined in [HotLog.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L50)*

Log a message.

#### Parameters:

Name | Type |
------ | ------ |
`level` | [HotLogLevel](../enums/hotloglevel.md) |
`message` | string |

**Returns:** void

___

### verbose

▸ **verbose**(`message`: string): void

*Defined in [HotLog.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L101)*

Log a verbose message.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### warning

▸ **warning**(`message`: string): void

*Defined in [HotLog.ts:123](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotLog.ts#L123)*

Log a warning.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
