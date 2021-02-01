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

*Defined in [HotPreprocessor.ts:285](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L285)*

The api that's used to communicate with.

___

### components

• `Optional` **components**: { [name:string]: [HotComponent](../classes/hotcomponent.md);  }

*Defined in [HotPreprocessor.ts:301](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L301)*

The components that can be constructed.

___

### files

• `Optional` **files**: { [name:string]: [HotFile](../classes/hotfile.md);  }

*Defined in [HotPreprocessor.ts:305](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L305)*

The files that can be stored for later use.

___

### hotSite

• `Optional` **hotSite**: [HotSite](hotsite.md)

*Defined in [HotPreprocessor.ts:309](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L309)*

The loaded hotsite.

___

### mode

• `Optional` **mode**: [DeveloperMode](../enums/developermode.md)

*Defined in [HotPreprocessor.ts:293](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L293)*

Indicates what type of execution this is.

___

### pages

• `Optional` **pages**: { [name:string]: [HotPage](../classes/hotpage.md);  }

*Defined in [HotPreprocessor.ts:297](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L297)*

The pages that can be constructed.

___

### testerAPI

• `Optional` **testerAPI**: [HotAPI](../classes/hotapi.md)

*Defined in [HotPreprocessor.ts:289](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L289)*

The tester api that's used to communicate with.
