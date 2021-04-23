[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotBuilder](../modules/hotbuilder.md) / HotBuilder

# Class: HotBuilder

[HotBuilder](../modules/hotbuilder.md).HotBuilder

Builds stuff for the CLI like docker images and Kubernetes clusters.

## Table of contents

### Constructors

- [constructor](hotbuilder.hotbuilder-1.md#constructor)

### Properties

- [dockerCompose](hotbuilder.hotbuilder-1.md#dockercompose)
- [dockerFiles](hotbuilder.hotbuilder-1.md#dockerfiles)
- [hotsites](hotbuilder.hotbuilder-1.md#hotsites)
- [kubernetes](hotbuilder.hotbuilder-1.md#kubernetes)
- [logger](hotbuilder.hotbuilder-1.md#logger)
- [outputDir](hotbuilder.hotbuilder-1.md#outputdir)

### Methods

- [build](hotbuilder.hotbuilder-1.md#build)

## Constructors

### constructor

\+ **new HotBuilder**(`logger?`: [*HotLog*](hotlog.hotlog-1.md)): [*HotBuilder*](hotbuilder.hotbuilder-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`logger` | [*HotLog*](hotlog.hotlog-1.md) |

**Returns:** [*HotBuilder*](hotbuilder.hotbuilder-1.md)

Defined in: [HotBuilder.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L35)

## Properties

### dockerCompose

• **dockerCompose**: *boolean*

Will build the Docker compose file.

Defined in: [HotBuilder.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L23)

___

### dockerFiles

• **dockerFiles**: *boolean*

Will build the Dockerfiles.

Defined in: [HotBuilder.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L19)

___

### hotsites

• `Protected` **hotsites**: [*HotSite*](../interfaces/hotpreprocessor.hotsite.md)[]

The HotSites to build from.

Defined in: [HotBuilder.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L15)

___

### kubernetes

• **kubernetes**: *boolean*

Will build the Kubernetes cluster.

Defined in: [HotBuilder.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L27)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The logger.

Defined in: [HotBuilder.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L31)

___

### outputDir

• **outputDir**: *string*

The output directory.

Defined in: [HotBuilder.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L35)

## Methods

### build

▸ **build**(`hotsites`: [*HotSite*](../interfaces/hotpreprocessor.hotsite.md)[]): *Promise*<void\>

Build everything and output to outputDir.

**`fixme`** Needs tests!

#### Parameters:

Name | Type |
:------ | :------ |
`hotsites` | [*HotSite*](../interfaces/hotpreprocessor.hotsite.md)[] |

**Returns:** *Promise*<void\>

Defined in: [HotBuilder.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotBuilder.ts#L52)
