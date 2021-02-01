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

*Defined in [HotPreprocessor.ts:57](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L57)*

The name of the API to interface with.

___

### destinationOrder

• `Optional` **destinationOrder**: string[]

*Defined in [HotPreprocessor.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L62)*

The order in which destinations are supposed to execute. This is
ignored if the destinations are an array.

___

### map

• `Optional` **map**: string \| string[] \| { [name:string]: string \| [HotSiteMapPath](hotsitemappath.md);  } \| [HotSiteMapPath](hotsitemappath.md)[]

*Defined in [HotPreprocessor.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L69)*

The HotTesterMap to use. This can be the name of an
existing one attached to the selected tester, or
can be an array of destinations that will be used to
create a new map.

___

### name

•  **name**: string

*Defined in [HotPreprocessor.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L49)*

The name of the route. Will appear in the title.

___

### url

•  **url**: string

*Defined in [HotPreprocessor.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L53)*

The url to the file to load.
