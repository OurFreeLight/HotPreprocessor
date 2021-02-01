**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotFile

# Class: HotFile

A file to process.

## Hierarchy

* **HotFile**

## Implements

* [IHotFile](../interfaces/ihotfile.md)

## Index

### Constructors

* [constructor](hotfile.md#constructor)

### Properties

* [content](hotfile.md#content)
* [localFile](hotfile.md#localfile)
* [name](hotfile.md#name)
* [page](hotfile.md#page)
* [throwAllErrors](hotfile.md#throwallerrors)
* [url](hotfile.md#url)

### Methods

* [getContent](hotfile.md#getcontent)
* [load](hotfile.md#load)
* [loadLocalFile](hotfile.md#loadlocalfile)
* [loadUrl](hotfile.md#loadurl)
* [process](hotfile.md#process)
* [setContent](hotfile.md#setcontent)
* [httpGet](hotfile.md#httpget)
* [processContent](hotfile.md#processcontent)
* [processNestedContent](hotfile.md#processnestedcontent)

## Constructors

### constructor

\+ **new HotFile**(`copy?`: [IHotFile](../interfaces/ihotfile.md)): [HotFile](hotfile.md)

*Defined in [HotFile.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L68)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`copy` | [IHotFile](../interfaces/ihotfile.md) | {} |

**Returns:** [HotFile](hotfile.md)

## Properties

### content

•  **content**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[content](../interfaces/ihotfile.md#content)*

*Defined in [HotFile.ts:64](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L64)*

The content of the file to process.

___

### localFile

•  **localFile**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[localFile](../interfaces/ihotfile.md#localfile)*

*Defined in [HotFile.ts:60](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L60)*

The path to the local file to get.

___

### name

•  **name**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[name](../interfaces/ihotfile.md#name)*

*Defined in [HotFile.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L52)*

The name of the file.

___

### page

•  **page**: [HotPage](hotpage.md)

*Implementation of [IHotFile](../interfaces/ihotfile.md).[page](../interfaces/ihotfile.md#page)*

*Defined in [HotFile.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L48)*

The parent page.

___

### throwAllErrors

•  **throwAllErrors**: boolean

*Implementation of [IHotFile](../interfaces/ihotfile.md).[throwAllErrors](../interfaces/ihotfile.md#throwallerrors)*

*Defined in [HotFile.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L68)*

Force all errors to be thrown.

___

### url

•  **url**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[url](../interfaces/ihotfile.md#url)*

*Defined in [HotFile.ts:56](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L56)*

The url to the file to get.

## Methods

### getContent

▸ **getContent**(): string

*Defined in [HotFile.ts:91](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L91)*

Get the content of this file.

**Returns:** string

___

### load

▸ **load**(): Promise<string\>

*Defined in [HotFile.ts:154](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L154)*

Load the contents of the file.

**Returns:** Promise<string\>

___

### loadLocalFile

▸ **loadLocalFile**(): Promise<string\>

*Defined in [HotFile.ts:131](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L131)*

Load content from a local file.

**Returns:** Promise<string\>

___

### loadUrl

▸ **loadUrl**(): Promise<string\>

*Defined in [HotFile.ts:121](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L121)*

Load content from a url.

**Returns:** Promise<string\>

___

### process

▸ **process**(`args?`: any): Promise<string\>

*Defined in [HotFile.ts:330](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L330)*

Process the content in this file. This treats each file as one large JavaScript
file. Any text outside of the <* *> areas will be treated as:

		Hot.echo ("text");

**`fixme`** The regex's in the offContent functions need to be fixed. There's several
test cases where they will fail.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`args` | any | null |

**Returns:** Promise<string\>

___

### setContent

▸ **setContent**(`content`: string): void

*Defined in [HotFile.ts:83](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L83)*

Set the content of this file.

#### Parameters:

Name | Type |
------ | ------ |
`content` | string |

**Returns:** void

___

### httpGet

▸ `Static`**httpGet**(`url`: string): Promise<string\>

*Defined in [HotFile.ts:99](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L99)*

Make a HTTP get request.

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |

**Returns:** Promise<string\>

___

### processContent

▸ `Static`**processContent**(`content`: string, `contentRegex`: RegExp, `contentProcessor`: (regexFound: string) => string, `offContentProcessor`: (offContent: string) => string, `numRemoveFromBeginning?`: number, `numRemoveFromEnd?`: number): string

*Defined in [HotFile.ts:183](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L183)*

Process string content. This will take in a regular expression and
parse the content based on the regex. When the regex content is found
contentProcessor will be executed with the regex content found. When
the regex content is not found, offContentProcessor will be called with
the content outside of the regex.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`content` | string | - | The content to parse. |
`contentRegex` | RegExp | - | The regex to use to parse the content. |
`contentProcessor` | (regexFound: string) => string | - | The content found inside the regex. |
`offContentProcessor` | (offContent: string) => string | - | The content found outside of the regex. |
`numRemoveFromBeginning` | number | 2 | The number of characters to remove from the beginning of the found content. |
`numRemoveFromEnd` | number | 2 | The number of characters to remove from the end of the found content.  |

**Returns:** string

___

### processNestedContent

▸ `Static`**processNestedContent**(`content`: string, `startChars`: string, `endChars`: string, `triggerChar`: string, `contentProcessor`: (regexFound: string) => string, `offContentProcessor`: (offContent: string) => string, `numRemoveFromBeginning?`: number, `numRemoveFromEnd?`: number): string

*Defined in [HotFile.ts:241](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotFile.ts#L241)*

Process any content that could have nested values. This will
take in a regular expression and
parse the content based on the regex. When the regex content is found
contentProcessor will be executed with the regex content found. When
the regex content is not found, offContentProcessor will be called with
the content outside of the regex.

**`fixme`** Needs to be able to ignore any characters found inside comments
or a string. For example, if the following is used ```${"Test }"}``` It
will error out.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`content` | string | - | The content to parse. |
`startChars` | string | - | - |
`endChars` | string | - | - |
`triggerChar` | string | - | - |
`contentProcessor` | (regexFound: string) => string | - | The content found inside the regex. |
`offContentProcessor` | (offContent: string) => string | - | The content found outside of the regex. |
`numRemoveFromBeginning` | number | 2 | The number of characters to remove from the beginning of the found content. |
`numRemoveFromEnd` | number | 1 | The number of characters to remove from the end of the found content.  |

**Returns:** string
