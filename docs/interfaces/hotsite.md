**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotSite

# Interface: HotSite

A HotSite to load.

## Hierarchy

* **HotSite**

## Index

### Properties

* [apis](hotsite.md#apis)
* [components](hotsite.md#components)
* [routes](hotsite.md#routes)

## Properties

### apis

• `Optional` **apis**: { [name:string]: { apiName: string ; exportedName: string ; jsapi: string  };  }

*Defined in [HotPreprocessor.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L40)*

The api to load.

___

### components

• `Optional` **components**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L59)*

The components to load.

___

### routes

•  **routes**: { [routeName:string]: { api?: string ; name: string ; url: string  };  }

*Defined in [HotPreprocessor.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotPreprocessor.ts#L21)*

The routes to load.
