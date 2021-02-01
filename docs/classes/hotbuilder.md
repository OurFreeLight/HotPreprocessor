**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotBuilder

# Class: HotBuilder

Builds stuff for the CLI like docker images and Kubernetes clusters.

## Hierarchy

* **HotBuilder**

## Index

### Constructors

* [constructor](hotbuilder.md#constructor)

### Properties

* [dockerCompose](hotbuilder.md#dockercompose)
* [dockerFiles](hotbuilder.md#dockerfiles)
* [hotsites](hotbuilder.md#hotsites)
* [kubernetes](hotbuilder.md#kubernetes)
* [outputDir](hotbuilder.md#outputdir)

### Methods

* [build](hotbuilder.md#build)

## Constructors

### constructor

\+ **new HotBuilder**(): [HotBuilder](hotbuilder.md)

*Defined in HotBuilder.ts:31*

**Returns:** [HotBuilder](hotbuilder.md)

## Properties

### dockerCompose

•  **dockerCompose**: boolean

*Defined in HotBuilder.ts:23*

Will build the Docker compose file.

___

### dockerFiles

•  **dockerFiles**: boolean

*Defined in HotBuilder.ts:19*

Will build the Dockerfiles.

___

### hotsites

• `Protected` **hotsites**: [HotSite](../interfaces/hotsite.md)[]

*Defined in HotBuilder.ts:15*

The HotSites to build from.

___

### kubernetes

•  **kubernetes**: boolean

*Defined in HotBuilder.ts:27*

Will build the Kubernetes cluster.

___

### outputDir

•  **outputDir**: string

*Defined in HotBuilder.ts:31*

The output directory.

## Methods

### build

▸ **build**(`hotsites`: [HotSite](../interfaces/hotsite.md)[]): Promise<void\>

*Defined in HotBuilder.ts:47*

Build everything and output to outputDir.

**`fixme`** Needs tests!

#### Parameters:

Name | Type |
------ | ------ |
`hotsites` | [HotSite](../interfaces/hotsite.md)[] |

**Returns:** Promise<void\>
