**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotIO

# Class: HotIO

Handles IO for the server.

## Hierarchy

* **HotIO**

## Index

### Methods

* [copyFiles](hotio.md#copyfiles)
* [exists](hotio.md#exists)
* [mkdir](hotio.md#mkdir)
* [readTextFile](hotio.md#readtextfile)
* [writeTextFile](hotio.md#writetextfile)

## Methods

### copyFiles

▸ `Static`**copyFiles**(`src`: string, `dest`: string): Promise<void\>

*Defined in [HotIO.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotIO.ts#L69)*

Copy files to a location.

#### Parameters:

Name | Type |
------ | ------ |
`src` | string |
`dest` | string |

**Returns:** Promise<void\>

___

### exists

▸ `Static`**exists**(`path`: string): Promise<boolean\>

*Defined in [HotIO.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotIO.ts#L77)*

Checks if a file is at a location.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise<boolean\>

___

### mkdir

▸ `Static`**mkdir**(`path`: string): Promise<void\>

*Defined in [HotIO.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotIO.ts#L50)*

Make a directory.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise<void\>

___

### readTextFile

▸ `Static`**readTextFile**(`path`: string): Promise<string\>

*Defined in [HotIO.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotIO.ts#L12)*

Read a text file.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise<string\>

___

### writeTextFile

▸ `Static`**writeTextFile**(`path`: string, `content`: string): Promise<string\>

*Defined in [HotIO.ts:32](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotIO.ts#L32)*

Write to a text file.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |
`content` | string |

**Returns:** Promise<string\>
