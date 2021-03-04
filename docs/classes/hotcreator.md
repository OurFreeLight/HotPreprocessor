**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotCreator

# Class: HotCreator

Creates stuff for the CLI.

## Hierarchy

* **HotCreator**

## Index

### Constructors

* [constructor](hotcreator.md#constructor)

### Properties

* [createCommands](hotcreator.md#createcommands)
* [language](hotcreator.md#language)
* [logger](hotcreator.md#logger)
* [name](hotcreator.md#name)
* [npmCommands](hotcreator.md#npmcommands)
* [outputDir](hotcreator.md#outputdir)
* [type](hotcreator.md#type)

### Methods

* [create](hotcreator.md#create)
* [replaceKeysInFile](hotcreator.md#replacekeysinfile)
* [exec](hotcreator.md#exec)

## Constructors

### constructor

\+ **new HotCreator**(`name?`: string, `logger?`: [HotLog](hotlog.md)): [HotCreator](hotcreator.md)

*Defined in [HotCreator.ts:79](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L79)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string | "" |
`logger` | [HotLog](hotlog.md) | new HotLog () |

**Returns:** [HotCreator](hotcreator.md)

## Properties

### createCommands

•  **createCommands**: { init: string ; transpileTS: string  }

*Defined in [HotCreator.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L41)*

The commands used while creating the app.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`init` | string | The init command to use after the project has been created. |
`transpileTS` | string | The transpile command to use after the project has been initialized. |

___

### language

•  **language**: string

*Defined in [HotCreator.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L29)*

The language to use when creating. Default is "ts". Can be:
* ts

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Defined in [HotCreator.ts:37](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L37)*

The logger.

___

### name

•  **name**: string

*Defined in [HotCreator.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L17)*

The name of the app to create.

___

### npmCommands

•  **npmCommands**: { build: string ; buildWebAPI: string ; buildWebAPIDebug: string ; dev: string ; start: string ; test: string  }

*Defined in [HotCreator.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L54)*

The NPM commands used.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`build` | string | The build command to use. |
`buildWebAPI` | string | The web api build command to use. |
`buildWebAPIDebug` | string | The debug web api build command to use. |
`dev` | string | The dev start command to use. |
`start` | string | The start command to use. |
`test` | string | The test command to use. |

___

### outputDir

•  **outputDir**: string

*Defined in [HotCreator.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L33)*

The output directory.

___

### type

•  **type**: string

*Defined in [HotCreator.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L24)*

The type of project to create. Can be:
* web
* web-api
* api

## Methods

### create

▸ **create**(): Promise<void\>

*Defined in [HotCreator.ts:115](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L115)*

Create an app.

**Returns:** Promise<void\>

___

### replaceKeysInFile

▸ `Protected`**replaceKeysInFile**(`filepath`: string, `keys`: { [name:string]: string;  }): Promise<void\>

*Defined in [HotCreator.ts:417](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L417)*

Replace keys in a file.

#### Parameters:

Name | Type |
------ | ------ |
`filepath` | string |
`keys` | { [name:string]: string;  } |

**Returns:** Promise<void\>

___

### exec

▸ `Static` `Protected`**exec**(`cmd`: string): Promise<string\>

*Defined in [HotCreator.ts:105](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L105)*

Execute a command.

#### Parameters:

Name | Type |
------ | ------ |
`cmd` | string |

**Returns:** Promise<string\>
