**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotSiteRoute

# Interface: HotSiteRoute

A route used in a HotSite.

## Hierarchy

* **HotSiteRoute**

## Index

### Properties

* [api](hotsiteroute.md#api)
* [destinationOrder](hotsiteroute.md#destinationorder)
* [map](hotsiteroute.md#map)
* [name](hotsiteroute.md#name)
* [url](hotsiteroute.md#url)

## Properties

### api

• `Optional` **api**: string

*Defined in [HotPreprocessor.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L58)*

The name of the API to interface with.

___

### destinationOrder

• `Optional` **destinationOrder**: string[]

*Defined in [HotPreprocessor.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L63)*

The order in which destinations are supposed to execute. This is
ignored if the destinations are an array.

___

### map

• `Optional` **map**: string \| string[] \| { [name:string]: string \| [HotSiteMapPath](hotsitemappath.md);  } \| [HotSiteMapPath](hotsitemappath.md)[]

*Defined in [HotPreprocessor.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L70)*

The HotTesterMap to use. This can be the name of an
existing one attached to the selected tester, or
can be an array of destinations that will be used to
create a new map.

___

### name

•  **name**: string

*Defined in [HotPreprocessor.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L50)*

The name of the route. Will appear in the title.

___

### url

•  **url**: string

*Defined in [HotPreprocessor.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L54)*

The url to the file to load.
