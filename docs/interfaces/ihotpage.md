**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IHotPage

# Interface: IHotPage

A page to preprocess.

## Hierarchy

* **IHotPage**

## Implemented by

* [HotPage](../classes/hotpage.md)

## Index

### Properties

* [files](ihotpage.md#files)
* [name](ihotpage.md#name)
* [processor](ihotpage.md#processor)
* [route](ihotpage.md#route)
* [testElements](ihotpage.md#testelements)
* [testPaths](ihotpage.md#testpaths)
* [testerMap](ihotpage.md#testermap)
* [testerName](ihotpage.md#testername)

## Properties

### files

• `Optional` **files**: [HotFile](../classes/hotfile.md)[]

*Defined in [HotPage.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L29)*

The name of the page. File ordering matters here.
Every file is processed incrementally.

___

### name

• `Optional` **name**: string

*Defined in [HotPage.ts:20](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L20)*

The name of the page.

___

### processor

•  **processor**: [HotPreprocessor](../classes/hotpreprocessor.md)

*Defined in [HotPage.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L16)*

The processor to use.

___

### route

• `Optional` **route**: string

*Defined in [HotPage.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L24)*

The route used to get to this page.

___

### testElements

• `Optional` **testElements**: { [name:string]: [HotTestElement](../classes/hottestelement.md);  }

*Defined in [HotPage.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L41)*

The elements to test on this page.

___

### testPaths

• `Optional` **testPaths**: { [name:string]: [HotTestPath](../globals.md#hottestpath);  }

*Defined in [HotPage.ts:45](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L45)*

The test paths to test on this page.

___

### testerMap

• `Optional` **testerMap**: string

*Defined in [HotPage.ts:37](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L37)*

The associated tester map.

___

### testerName

• `Optional` **testerName**: string

*Defined in [HotPage.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPage.ts#L33)*

The associated tester name.
