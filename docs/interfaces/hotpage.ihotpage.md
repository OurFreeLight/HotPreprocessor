[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotPage](../modules/hotpage.md) / IHotPage

# Interface: IHotPage

[HotPage](../modules/hotpage.md).IHotPage

A page to preprocess.

## Implemented by

* [*HotPage*](../classes/hotpage.hotpage-1.md)

## Table of contents

### Properties

- [files](hotpage.ihotpage.md#files)
- [name](hotpage.ihotpage.md#name)
- [processor](hotpage.ihotpage.md#processor)
- [route](hotpage.ihotpage.md#route)
- [testElements](hotpage.ihotpage.md#testelements)
- [testPaths](hotpage.ihotpage.md#testpaths)
- [testerMap](hotpage.ihotpage.md#testermap)
- [testerName](hotpage.ihotpage.md#testername)

## Properties

### files

• `Optional` **files**: [*HotFile*](../classes/hotfile.hotfile-1.md)[]

The name of the page. File ordering matters here.
Every file is processed incrementally.

Defined in: [HotPage.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L29)

___

### name

• `Optional` **name**: *string*

The name of the page.

Defined in: [HotPage.ts:20](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L20)

___

### processor

• **processor**: [*HotPreprocessor*](../classes/hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Defined in: [HotPage.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L16)

___

### route

• `Optional` **route**: *string*

The route used to get to this page.

Defined in: [HotPage.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L24)

___

### testElements

• `Optional` **testElements**: *object*

The elements to test on this page.

#### Type declaration:

Defined in: [HotPage.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L41)

___

### testPaths

• `Optional` **testPaths**: *object*

The test paths to test on this page.

#### Type declaration:

Defined in: [HotPage.ts:45](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L45)

___

### testerMap

• `Optional` **testerMap**: *string*

The associated tester map.

Defined in: [HotPage.ts:37](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L37)

___

### testerName

• `Optional` **testerName**: *string*

The associated tester name.

Defined in: [HotPage.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotPage.ts#L33)
