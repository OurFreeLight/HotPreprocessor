**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IHotPreprocessor

# Interface: IHotPreprocessor

The main class that handles all HTML preprocessing, then outputs the
results.

## Hierarchy

* **IHotPreprocessor**

## Implemented by

* [HotPreprocessor](../classes/hotpreprocessor.md)

## Index

### Properties

* [api](ihotpreprocessor.md#api)
* [components](ihotpreprocessor.md#components)
* [files](ihotpreprocessor.md#files)
* [hotSite](ihotpreprocessor.md#hotsite)
* [mode](ihotpreprocessor.md#mode)
* [pages](ihotpreprocessor.md#pages)
* [testerAPI](ihotpreprocessor.md#testerapi)

## Properties

### api

• `Optional` **api**: [HotAPI](../classes/hotapi.md)

*Defined in [HotPreprocessor.ts:255](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L255)*

The api that's used to communicate with.

___

### components

• `Optional` **components**: { [name:string]: [HotComponent](../classes/hotcomponent.md);  }

*Defined in [HotPreprocessor.ts:271](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L271)*

The components that can be constructed.

___

### files

• `Optional` **files**: { [name:string]: [HotFile](../classes/hotfile.md);  }

*Defined in [HotPreprocessor.ts:275](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L275)*

The files that can be stored for later use.

___

### hotSite

• `Optional` **hotSite**: [HotSite](hotsite.md)

*Defined in [HotPreprocessor.ts:279](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L279)*

The loaded hotsite.

___

### mode

• `Optional` **mode**: [DeveloperMode](../enums/developermode.md)

*Defined in [HotPreprocessor.ts:263](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L263)*

Indicates what type of execution this is.

___

### pages

• `Optional` **pages**: { [name:string]: [HotPage](../classes/hotpage.md);  }

*Defined in [HotPreprocessor.ts:267](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L267)*

The pages that can be constructed.

___

### testerAPI

• `Optional` **testerAPI**: [HotAPI](../classes/hotapi.md)

*Defined in [HotPreprocessor.ts:259](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L259)*

The tester api that's used to communicate with.
