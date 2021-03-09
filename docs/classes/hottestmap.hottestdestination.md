[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTestMap](../modules/hottestmap.md) / HotTestDestination

# Class: HotTestDestination

[HotTestMap](../modules/hottestmap.md).HotTestDestination

The destination to take in a map.

## Table of contents

### Constructors

- [constructor](hottestmap.hottestdestination.md#constructor)

### Properties

- [autoStart](hottestmap.hottestdestination.md#autostart)
- [destination](hottestmap.hottestdestination.md#destination)

## Constructors

### constructor

\+ **new HotTestDestination**(`destination?`: *string* \| [*HotSiteMapPath*](../interfaces/hotpreprocessor.hotsitemappath.md) \| [*HotTestDestination*](hottestmap.hottestdestination.md), `autoStart?`: *boolean*): [*HotTestDestination*](hottestmap.hottestdestination.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | *string* \| [*HotSiteMapPath*](../interfaces/hotpreprocessor.hotsitemappath.md) \| [*HotTestDestination*](hottestmap.hottestdestination.md) | "" |
`autoStart` | *boolean* | true |

**Returns:** [*HotTestDestination*](hottestmap.hottestdestination.md)

Defined in: [HotTestMap.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTestMap.ts#L23)

## Properties

### autoStart

• **autoStart**: *boolean*

If set to true, this will automatically start executing it's
tests when it's time.

Defined in: [HotTestMap.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTestMap.ts#L23)

___

### destination

• **destination**: *string*

The destination to take.

Defined in: [HotTestMap.ts:18](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTestMap.ts#L18)
