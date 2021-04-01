[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotCreator](../modules/hotcreator.md) / HotCreator

# Class: HotCreator

[HotCreator](../modules/hotcreator.md).HotCreator

Creates stuff for the CLI.

## Table of contents

### Constructors

- [constructor](hotcreator.hotcreator-1.md#constructor)

### Properties

- [createCommands](hotcreator.hotcreator-1.md#createcommands)
- [language](hotcreator.hotcreator-1.md#language)
- [logger](hotcreator.hotcreator-1.md#logger)
- [name](hotcreator.hotcreator-1.md#name)
- [npmCommands](hotcreator.hotcreator-1.md#npmcommands)
- [outputDir](hotcreator.hotcreator-1.md#outputdir)
- [type](hotcreator.hotcreator-1.md#type)

### Methods

- [create](hotcreator.hotcreator-1.md#create)
- [replaceKeysInFile](hotcreator.hotcreator-1.md#replacekeysinfile)
- [exec](hotcreator.hotcreator-1.md#exec)

## Constructors

### constructor

\+ **new HotCreator**(`name?`: *string*, `logger?`: [*HotLog*](hotlog.hotlog-1.md)): [*HotCreator*](hotcreator.hotcreator-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* | "" |
`logger` | [*HotLog*](hotlog.hotlog-1.md) | - |

**Returns:** [*HotCreator*](hotcreator.hotcreator-1.md)

Defined in: [HotCreator.ts:79](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L79)

## Properties

### createCommands

• **createCommands**: *object*

The commands used while creating the app.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`init` | *string* | The init command to use after the project has been created.   |
`transpileTS` | *string* | The transpile command to use after the project has been initialized.   |

Defined in: [HotCreator.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L41)

___

### language

• **language**: *string*

The language to use when creating. Default is "ts". Can be:
* ts

Defined in: [HotCreator.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L29)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The logger.

Defined in: [HotCreator.ts:37](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L37)

___

### name

• **name**: *string*

The name of the app to create.

Defined in: [HotCreator.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L17)

___

### npmCommands

• **npmCommands**: *object*

The NPM commands used.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`build` | *string* | The build command to use.   |
`buildWebAPI` | *string* | The web api build command to use.   |
`buildWebAPIDebug` | *string* | The debug web api build command to use.   |
`dev` | *string* | The dev start command to use.   |
`start` | *string* | The start command to use.   |
`test` | *string* | The test command to use.   |

Defined in: [HotCreator.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L54)

___

### outputDir

• **outputDir**: *string*

The output directory.

Defined in: [HotCreator.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L33)

___

### type

• **type**: *string*

The type of project to create. Can be:
* web
* web-api
* api

Defined in: [HotCreator.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L24)

## Methods

### create

▸ **create**(): *Promise*<void\>

Create an app.

**Returns:** *Promise*<void\>

Defined in: [HotCreator.ts:115](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L115)

___

### replaceKeysInFile

▸ `Protected`**replaceKeysInFile**(`filepath`: *string*, `keys`: { [name: string]: *string*;  }): *Promise*<void\>

Replace keys in a file.

#### Parameters:

Name | Type |
:------ | :------ |
`filepath` | *string* |
`keys` | *object* |

**Returns:** *Promise*<void\>

Defined in: [HotCreator.ts:442](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L442)

___

### exec

▸ `Protected` `Static`**exec**(`cmd`: *string*): *Promise*<string\>

Execute a command.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | *string* |

**Returns:** *Promise*<string\>

Defined in: [HotCreator.ts:105](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotCreator.ts#L105)
