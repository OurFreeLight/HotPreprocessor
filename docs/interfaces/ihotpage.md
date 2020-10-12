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

## Properties

### files

• `Optional` **files**: [HotFile](../classes/hotfile.md)[]

*Defined in [HotPage.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPage.ts#L27)*

The name of the page. File ordering matters here.
Every file is processed incrementally.

___

### name

• `Optional` **name**: string

*Defined in [HotPage.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPage.ts#L18)*

The name of the page.

___

### processor

•  **processor**: [HotPreprocessor](../classes/hotpreprocessor.md)

*Defined in [HotPage.ts:14](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPage.ts#L14)*

The processor to use.

___

### route

• `Optional` **route**: string

*Defined in [HotPage.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPage.ts#L22)*

The route used to get to this page.
