**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IHotPreprocessor

# Class: IHotPreprocessor

The main class that handles all HTML preprocessing, then outputs the
results.

## Hierarchy

* **IHotPreprocessor**

## Implemented by

* [HotPreprocessor](hotpreprocessor.md)

## Index

### Properties

* [api](ihotpreprocessor.md#api)
* [components](ihotpreprocessor.md#components)
* [hotSite](ihotpreprocessor.md#hotsite)
* [pages](ihotpreprocessor.md#pages)

## Properties

### api

• `Optional` **api**: [HotAPI](hotapi.md)

*Defined in [HotPreprocessor.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L78)*

The api that's used to communicate with.

___

### components

• `Optional` **components**: { [name:string]: [HotComponent](hotcomponent.md);  }

*Defined in [HotPreprocessor.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L86)*

The components that can be constructed.

___

### hotSite

• `Optional` **hotSite**: [HotSite](../interfaces/hotsite.md)

*Defined in [HotPreprocessor.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L90)*

The loaded hotsite.

___

### pages

• `Optional` **pages**: { [name:string]: [HotPage](hotpage.md);  }

*Defined in [HotPreprocessor.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L82)*

The pages that can be constructed.
