[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotIO](../modules/hotio.md) / HotIO

# Class: HotIO

[HotIO](../modules/hotio.md).HotIO

Handles IO for the server.

## Table of contents

### Constructors

- [constructor](hotio.hotio-1.md#constructor)

### Methods

- [copyFiles](hotio.hotio-1.md#copyfiles)
- [exists](hotio.hotio-1.md#exists)
- [mkdir](hotio.hotio-1.md#mkdir)
- [readTextFile](hotio.hotio-1.md#readtextfile)
- [writeTextFile](hotio.hotio-1.md#writetextfile)

## Constructors

### constructor

\+ **new HotIO**(): [*HotIO*](hotio.hotio-1.md)

**Returns:** [*HotIO*](hotio.hotio-1.md)

## Methods

### copyFiles

▸ `Static`**copyFiles**(`src`: *string*, `dest`: *string*): *Promise*<void\>

Copy files to a location.

#### Parameters:

Name | Type |
:------ | :------ |
`src` | *string* |
`dest` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotIO.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotIO.ts#L69)

___

### exists

▸ `Static`**exists**(`path`: *string*): *Promise*<boolean\>

Checks if a file is at a location.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [HotIO.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotIO.ts#L77)

___

### mkdir

▸ `Static`**mkdir**(`path`: *string*): *Promise*<void\>

Make a directory.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotIO.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotIO.ts#L50)

___

### readTextFile

▸ `Static`**readTextFile**(`path`: *string*): *Promise*<string\>

Read a text file.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<string\>

Defined in: [HotIO.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotIO.ts#L12)

___

### writeTextFile

▸ `Static`**writeTextFile**(`path`: *string*, `content`: *string*): *Promise*<string\>

Write to a text file.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`content` | *string* |

**Returns:** *Promise*<string\>

Defined in: [HotIO.ts:32](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotIO.ts#L32)
