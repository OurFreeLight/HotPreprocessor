**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestDestination

# Class: HotTestDestination

The destination to take in a map.

## Hierarchy

* **HotTestDestination**

## Index

### Constructors

* [constructor](hottestdestination.md#constructor)

### Properties

* [autoStart](hottestdestination.md#autostart)
* [destination](hottestdestination.md#destination)

## Constructors

### constructor

\+ **new HotTestDestination**(`destination?`: string \| [HotTestDestination](hottestdestination.md) \| [HotSiteMapPath](../interfaces/hotsitemappath.md), `autoStart?`: boolean): [HotTestDestination](hottestdestination.md)

*Defined in [HotTestMap.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestMap.ts#L23)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | string \| [HotTestDestination](hottestdestination.md) \| [HotSiteMapPath](../interfaces/hotsitemappath.md) | "" |
`autoStart` | boolean | true |

**Returns:** [HotTestDestination](hottestdestination.md)

## Properties

### autoStart

•  **autoStart**: boolean

*Defined in [HotTestMap.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestMap.ts#L23)*

If set to true, this will automatically start executing it's
tests when it's time.

___

### destination

•  **destination**: string

*Defined in [HotTestMap.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestMap.ts#L18)*

The destination to take.
