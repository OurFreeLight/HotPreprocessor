[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotPage](../modules/hotpage.md) / HotPage

# Class: HotPage

[HotPage](../modules/hotpage.md).HotPage

A page to preprocess.

## Implements

* [*IHotPage*](../interfaces/hotpage.ihotpage.md)

## Table of contents

### Constructors

- [constructor](hotpage.hotpage-1.md#constructor)

### Properties

- [files](hotpage.hotpage-1.md#files)
- [name](hotpage.hotpage-1.md#name)
- [processor](hotpage.hotpage-1.md#processor)
- [route](hotpage.hotpage-1.md#route)
- [testElements](hotpage.hotpage-1.md#testelements)
- [testPaths](hotpage.hotpage-1.md#testpaths)
- [testerMap](hotpage.hotpage-1.md#testermap)
- [testerName](hotpage.hotpage-1.md#testername)

### Methods

- [addFile](hotpage.hotpage-1.md#addfile)
- [addTestElement](hotpage.hotpage-1.md#addtestelement)
- [createTestPath](hotpage.hotpage-1.md#createtestpath)
- [getAPI](hotpage.hotpage-1.md#getapi)
- [getTestElement](hotpage.hotpage-1.md#gettestelement)
- [getTesterAPI](hotpage.hotpage-1.md#gettesterapi)
- [load](hotpage.hotpage-1.md#load)
- [process](hotpage.hotpage-1.md#process)

## Constructors

### constructor

\+ **new HotPage**(`copy`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) \| [*IHotPage*](../interfaces/hotpage.ihotpage.md)): [*HotPage*](hotpage.hotpage-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`copy` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) \| [*IHotPage*](../interfaces/hotpage.ihotpage.md) |

**Returns:** [*HotPage*](hotpage.hotpage-1.md)

Defined in: [HotPage.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L85)

## Properties

### files

• **files**: [*HotFile*](hotfile.hotfile-1.md)[]

The name of the page. File ordering matters here.
Every file is processed incrementally.

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[files](../interfaces/hotpage.ihotpage.md#files)

Defined in: [HotPage.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L69)

___

### name

• **name**: *string*

The name of the page.

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[name](../interfaces/hotpage.ihotpage.md#name)

Defined in: [HotPage.ts:60](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L60)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[processor](../interfaces/hotpage.ihotpage.md#processor)

Defined in: [HotPage.ts:56](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L56)

___

### route

• **route**: *string*

The route used to get to this page.

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[route](../interfaces/hotpage.ihotpage.md#route)

Defined in: [HotPage.ts:64](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L64)

___

### testElements

• **testElements**: *object*

The elements to test on this page.

#### Type declaration:

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[testElements](../interfaces/hotpage.ihotpage.md#testelements)

Defined in: [HotPage.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L81)

___

### testPaths

• **testPaths**: *object*

The test paths to test on this page.

#### Type declaration:

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[testPaths](../interfaces/hotpage.ihotpage.md#testpaths)

Defined in: [HotPage.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L85)

___

### testerMap

• **testerMap**: *string*

The associated tester map.

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[testerMap](../interfaces/hotpage.ihotpage.md#testermap)

Defined in: [HotPage.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L77)

___

### testerName

• **testerName**: *string*

The associated tester name.

Implementation of: [IHotPage](../interfaces/hotpage.ihotpage.md).[testerName](../interfaces/hotpage.ihotpage.md#testername)

Defined in: [HotPage.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L73)

## Methods

### addFile

▸ **addFile**(`file`: [*HotFile*](hotfile.hotfile-1.md)): *Promise*<void\>

Add a file to process. It's recommend to load the file prior to
adding it to a page if it's about to be used.

#### Parameters:

Name | Type |
:------ | :------ |
`file` | [*HotFile*](hotfile.hotfile-1.md) |

**Returns:** *Promise*<void\>

Defined in: [HotPage.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L117)

___

### addTestElement

▸ **addTestElement**(`elm`: [*HotTestElement*](hottestelement.hottestelement-1.md)): *void*

Add a test element.

#### Parameters:

Name | Type |
:------ | :------ |
`elm` | [*HotTestElement*](hottestelement.hottestelement-1.md) |

**Returns:** *void*

Defined in: [HotPage.ts:177](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L177)

___

### createTestPath

▸ **createTestPath**(`pathName`: *string*, `driverFunc`: [*HotTestPath*](../modules/hottestmap.md#hottestpath)): *void*

Create a test path.

#### Parameters:

Name | Type |
:------ | :------ |
`pathName` | *string* |
`driverFunc` | [*HotTestPath*](../modules/hottestmap.md#hottestpath) |

**Returns:** *void*

Defined in: [HotPage.ts:199](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L199)

___

### getAPI

▸ **getAPI**(): [*HotAPI*](hotapi.hotapi-1.md)

Get the API associated with this page.

**Returns:** [*HotAPI*](hotapi.hotapi-1.md)

Defined in: [HotPage.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L127)

___

### getTestElement

▸ **getTestElement**(`name`: *string*): [*HotTestElement*](hottestelement.hottestelement-1.md)

Get a test element.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*HotTestElement*](hottestelement.hottestelement-1.md)

Defined in: [HotPage.ts:188](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L188)

___

### getTesterAPI

▸ **getTesterAPI**(): [*HotAPI*](hotapi.hotapi-1.md)

Get the tester API associated with this page.

**Returns:** [*HotAPI*](hotapi.hotapi-1.md)

Defined in: [HotPage.ts:135](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L135)

___

### load

▸ **load**(`file`: [*HotFile*](hotfile.hotfile-1.md)): *Promise*<void\>

Add all files in the page. Could decrease page loading performance.
It's recommend to load the file prior to adding it to a page.

#### Parameters:

Name | Type |
:------ | :------ |
`file` | [*HotFile*](hotfile.hotfile-1.md) |

**Returns:** *Promise*<void\>

Defined in: [HotPage.ts:144](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L144)

___

### process

▸ **process**(`args?`: *any*): *Promise*<string\>

Process a page and get the result.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`args` | *any* | null |

**Returns:** *Promise*<string\>

Defined in: [HotPage.ts:157](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotPage.ts#L157)
