[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotPreprocessor](../modules/hotpreprocessor.md) / HotSiteRoute

# Interface: HotSiteRoute

[HotPreprocessor](../modules/hotpreprocessor.md).HotSiteRoute

A route used in a HotSite.

## Table of contents

### Properties

- [api](hotpreprocessor.hotsiteroute.md#api)
- [destinationOrder](hotpreprocessor.hotsiteroute.md#destinationorder)
- [map](hotpreprocessor.hotsiteroute.md#map)
- [name](hotpreprocessor.hotsiteroute.md#name)
- [url](hotpreprocessor.hotsiteroute.md#url)

## Properties

### api

• `Optional` **api**: *string*

The name of the API to interface with.

Defined in: [HotPreprocessor.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotPreprocessor.ts#L58)

___

### destinationOrder

• `Optional` **destinationOrder**: *string*[]

The order in which destinations are supposed to execute. This is
ignored if the destinations are an array.

Defined in: [HotPreprocessor.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotPreprocessor.ts#L63)

___

### map

• `Optional` **map**: *string* \| *string*[] \| { [name: string]: *string* \| [*HotSiteMapPath*](hotpreprocessor.hotsitemappath.md);  } \| [*HotSiteMapPath*](hotpreprocessor.hotsitemappath.md)[]

The HotTesterMap to use. This can be the name of an
existing one attached to the selected tester, or
can be an array of destinations that will be used to
create a new map.

Defined in: [HotPreprocessor.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotPreprocessor.ts#L70)

___

### name

• **name**: *string*

The name of the route. Will appear in the title.

Defined in: [HotPreprocessor.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotPreprocessor.ts#L50)

___

### url

• **url**: *string*

The url to the file to load.

Defined in: [HotPreprocessor.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotPreprocessor.ts#L54)
