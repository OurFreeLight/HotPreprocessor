**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotPage

# Class: HotPage

A page to preprocess.

## Hierarchy

* **HotPage**

## Implements

* [IHotPage](../interfaces/ihotpage.md)

## Index

### Constructors

* [constructor](hotpage.md#constructor)

### Properties

* [files](hotpage.md#files)
* [name](hotpage.md#name)
* [processor](hotpage.md#processor)
* [route](hotpage.md#route)

### Methods

* [addFile](hotpage.md#addfile)
* [getAPI](hotpage.md#getapi)
* [load](hotpage.md#load)
* [process](hotpage.md#process)

## Constructors

### constructor

\+ **new HotPage**(`copy`: [IHotPage](../interfaces/ihotpage.md) \| [HotPreprocessor](hotpreprocessor.md)): [HotPage](hotpage.md)

*Defined in [HotPage.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L51)*

#### Parameters:

Name | Type |
------ | ------ |
`copy` | [IHotPage](../interfaces/ihotpage.md) \| [HotPreprocessor](hotpreprocessor.md) |

**Returns:** [HotPage](hotpage.md)

## Properties

### files

•  **files**: [HotFile](hotfile.md)[]

*Implementation of [IHotPage](../interfaces/ihotpage.md).[files](../interfaces/ihotpage.md#files)*

*Defined in [HotPage.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L51)*

The name of the page. File ordering matters here.
Every file is processed incrementally.

___

### name

•  **name**: string

*Implementation of [IHotPage](../interfaces/ihotpage.md).[name](../interfaces/ihotpage.md#name)*

*Defined in [HotPage.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L42)*

The name of the page.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Implementation of [IHotPage](../interfaces/ihotpage.md).[processor](../interfaces/ihotpage.md#processor)*

*Defined in [HotPage.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L38)*

The processor to use.

___

### route

•  **route**: string

*Implementation of [IHotPage](../interfaces/ihotpage.md).[route](../interfaces/ihotpage.md#route)*

*Defined in [HotPage.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L46)*

The route used to get to this page.

## Methods

### addFile

▸ **addFile**(`file`: [HotFile](hotfile.md)): Promise\<void>

*Defined in [HotPage.ts:75](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L75)*

Add a file to process. It's recommend to load the file prior to
adding it to a page if it's about to be used.

#### Parameters:

Name | Type |
------ | ------ |
`file` | [HotFile](hotfile.md) |

**Returns:** Promise\<void>

___

### getAPI

▸ **getAPI**(): [HotAPI](hotapi.md)

*Defined in [HotPage.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L85)*

Get the API associated with this page.

**Returns:** [HotAPI](hotapi.md)

___

### load

▸ **load**(`file`: [HotFile](hotfile.md)): Promise\<void>

*Defined in [HotPage.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L94)*

Add all files in the page. Could decrease page loading performance.
It's recommend to load the file prior to adding it to a page.

#### Parameters:

Name | Type |
------ | ------ |
`file` | [HotFile](hotfile.md) |

**Returns:** Promise\<void>

___

### process

▸ **process**(): Promise\<string>

*Defined in [HotPage.ts:107](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPage.ts#L107)*

Process a page and get the result.

**Returns:** Promise\<string>
