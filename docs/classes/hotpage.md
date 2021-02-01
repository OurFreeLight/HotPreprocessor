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
* [testElements](hotpage.md#testelements)
* [testPaths](hotpage.md#testpaths)
* [testerMap](hotpage.md#testermap)
* [testerName](hotpage.md#testername)

### Methods

* [addFile](hotpage.md#addfile)
* [addTestElement](hotpage.md#addtestelement)
* [createTestPath](hotpage.md#createtestpath)
* [getAPI](hotpage.md#getapi)
* [getTestElement](hotpage.md#gettestelement)
* [getTesterAPI](hotpage.md#gettesterapi)
* [load](hotpage.md#load)
* [process](hotpage.md#process)

## Constructors

### constructor

\+ **new HotPage**(`copy`: [IHotPage](../interfaces/ihotpage.md) \| [HotPreprocessor](hotpreprocessor.md)): [HotPage](hotpage.md)

*Defined in [HotPage.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L85)*

#### Parameters:

Name | Type |
------ | ------ |
`copy` | [IHotPage](../interfaces/ihotpage.md) \| [HotPreprocessor](hotpreprocessor.md) |

**Returns:** [HotPage](hotpage.md)

## Properties

### files

•  **files**: [HotFile](hotfile.md)[]

*Implementation of [IHotPage](../interfaces/ihotpage.md).[files](../interfaces/ihotpage.md#files)*

*Defined in [HotPage.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L69)*

The name of the page. File ordering matters here.
Every file is processed incrementally.

___

### name

•  **name**: string

*Implementation of [IHotPage](../interfaces/ihotpage.md).[name](../interfaces/ihotpage.md#name)*

*Defined in [HotPage.ts:60](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L60)*

The name of the page.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Implementation of [IHotPage](../interfaces/ihotpage.md).[processor](../interfaces/ihotpage.md#processor)*

*Defined in [HotPage.ts:56](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L56)*

The processor to use.

___

### route

•  **route**: string

*Implementation of [IHotPage](../interfaces/ihotpage.md).[route](../interfaces/ihotpage.md#route)*

*Defined in [HotPage.ts:64](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L64)*

The route used to get to this page.

___

### testElements

•  **testElements**: { [name:string]: [HotTestElement](hottestelement.md);  }

*Implementation of [IHotPage](../interfaces/ihotpage.md).[testElements](../interfaces/ihotpage.md#testelements)*

*Defined in [HotPage.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L81)*

The elements to test on this page.

___

### testPaths

•  **testPaths**: { [name:string]: [HotTestPath](../globals.md#hottestpath);  }

*Implementation of [IHotPage](../interfaces/ihotpage.md).[testPaths](../interfaces/ihotpage.md#testpaths)*

*Defined in [HotPage.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L85)*

The test paths to test on this page.

___

### testerMap

•  **testerMap**: string

*Implementation of [IHotPage](../interfaces/ihotpage.md).[testerMap](../interfaces/ihotpage.md#testermap)*

*Defined in [HotPage.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L77)*

The associated tester map.

___

### testerName

•  **testerName**: string

*Implementation of [IHotPage](../interfaces/ihotpage.md).[testerName](../interfaces/ihotpage.md#testername)*

*Defined in [HotPage.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L73)*

The associated tester name.

## Methods

### addFile

▸ **addFile**(`file`: [HotFile](hotfile.md)): Promise<void\>

*Defined in [HotPage.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L117)*

Add a file to process. It's recommend to load the file prior to
adding it to a page if it's about to be used.

#### Parameters:

Name | Type |
------ | ------ |
`file` | [HotFile](hotfile.md) |

**Returns:** Promise<void\>

___

### addTestElement

▸ **addTestElement**(`elm`: [HotTestElement](hottestelement.md)): void

*Defined in [HotPage.ts:177](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L177)*

Add a test element.

#### Parameters:

Name | Type |
------ | ------ |
`elm` | [HotTestElement](hottestelement.md) |

**Returns:** void

___

### createTestPath

▸ **createTestPath**(`pathName`: string, `driverFunc`: [HotTestPath](../globals.md#hottestpath)): void

*Defined in [HotPage.ts:199](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L199)*

Create a test path.

#### Parameters:

Name | Type |
------ | ------ |
`pathName` | string |
`driverFunc` | [HotTestPath](../globals.md#hottestpath) |

**Returns:** void

___

### getAPI

▸ **getAPI**(): [HotAPI](hotapi.md)

*Defined in [HotPage.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L127)*

Get the API associated with this page.

**Returns:** [HotAPI](hotapi.md)

___

### getTestElement

▸ **getTestElement**(`name`: string): [HotTestElement](hottestelement.md)

*Defined in [HotPage.ts:188](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L188)*

Get a test element.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [HotTestElement](hottestelement.md)

___

### getTesterAPI

▸ **getTesterAPI**(): [HotAPI](hotapi.md)

*Defined in [HotPage.ts:135](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L135)*

Get the tester API associated with this page.

**Returns:** [HotAPI](hotapi.md)

___

### load

▸ **load**(`file`: [HotFile](hotfile.md)): Promise<void\>

*Defined in [HotPage.ts:144](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L144)*

Add all files in the page. Could decrease page loading performance.
It's recommend to load the file prior to adding it to a page.

#### Parameters:

Name | Type |
------ | ------ |
`file` | [HotFile](hotfile.md) |

**Returns:** Promise<void\>

___

### process

▸ **process**(`args?`: any): Promise<string\>

*Defined in [HotPage.ts:157](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L157)*

Process a page and get the result.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`args` | any | null |

**Returns:** Promise<string\>
