[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotFile](../modules/hotfile.md) / HotFile

# Class: HotFile

[HotFile](../modules/hotfile.md).HotFile

A file to process.

## Implements

* [*IHotFile*](../interfaces/hotfile.ihotfile.md)

## Table of contents

### Constructors

- [constructor](hotfile.hotfile-1.md#constructor)

### Properties

- [content](hotfile.hotfile-1.md#content)
- [localFile](hotfile.hotfile-1.md#localfile)
- [name](hotfile.hotfile-1.md#name)
- [page](hotfile.hotfile-1.md#page)
- [throwAllErrors](hotfile.hotfile-1.md#throwallerrors)
- [url](hotfile.hotfile-1.md#url)

### Methods

- [getContent](hotfile.hotfile-1.md#getcontent)
- [load](hotfile.hotfile-1.md#load)
- [loadLocalFile](hotfile.hotfile-1.md#loadlocalfile)
- [loadUrl](hotfile.hotfile-1.md#loadurl)
- [process](hotfile.hotfile-1.md#process)
- [setContent](hotfile.hotfile-1.md#setcontent)
- [httpGet](hotfile.hotfile-1.md#httpget)
- [processContent](hotfile.hotfile-1.md#processcontent)
- [processNestedContent](hotfile.hotfile-1.md#processnestedcontent)

## Constructors

### constructor

\+ **new HotFile**(`copy?`: [*IHotFile*](../interfaces/hotfile.ihotfile.md)): [*HotFile*](hotfile.hotfile-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`copy` | [*IHotFile*](../interfaces/hotfile.ihotfile.md) |

**Returns:** [*HotFile*](hotfile.hotfile-1.md)

Defined in: [HotFile.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L68)

## Properties

### content

• **content**: *string*

The content of the file to process.

Implementation of: [IHotFile](../interfaces/hotfile.ihotfile.md).[content](../interfaces/hotfile.ihotfile.md#content)

Defined in: [HotFile.ts:64](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L64)

___

### localFile

• **localFile**: *string*

The path to the local file to get.

Implementation of: [IHotFile](../interfaces/hotfile.ihotfile.md).[localFile](../interfaces/hotfile.ihotfile.md#localfile)

Defined in: [HotFile.ts:60](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L60)

___

### name

• **name**: *string*

The name of the file.

Implementation of: [IHotFile](../interfaces/hotfile.ihotfile.md).[name](../interfaces/hotfile.ihotfile.md#name)

Defined in: [HotFile.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L52)

___

### page

• **page**: [*HotPage*](hotpage.hotpage-1.md)

The parent page.

Implementation of: [IHotFile](../interfaces/hotfile.ihotfile.md).[page](../interfaces/hotfile.ihotfile.md#page)

Defined in: [HotFile.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L48)

___

### throwAllErrors

• **throwAllErrors**: *boolean*

Force all errors to be thrown.

Implementation of: [IHotFile](../interfaces/hotfile.ihotfile.md).[throwAllErrors](../interfaces/hotfile.ihotfile.md#throwallerrors)

Defined in: [HotFile.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L68)

___

### url

• **url**: *string*

The url to the file to get.

Implementation of: [IHotFile](../interfaces/hotfile.ihotfile.md).[url](../interfaces/hotfile.ihotfile.md#url)

Defined in: [HotFile.ts:56](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L56)

## Methods

### getContent

▸ **getContent**(): *string*

Get the content of this file.

**Returns:** *string*

Defined in: [HotFile.ts:91](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L91)

___

### load

▸ **load**(): *Promise*<string\>

Load the contents of the file.

**Returns:** *Promise*<string\>

Defined in: [HotFile.ts:154](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L154)

___

### loadLocalFile

▸ **loadLocalFile**(): *Promise*<string\>

Load content from a local file.

**Returns:** *Promise*<string\>

Defined in: [HotFile.ts:131](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L131)

___

### loadUrl

▸ **loadUrl**(): *Promise*<string\>

Load content from a url.

**Returns:** *Promise*<string\>

Defined in: [HotFile.ts:121](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L121)

___

### process

▸ **process**(`args?`: *any*): *Promise*<string\>

Process the content in this file. This treats each file as one large JavaScript
file. Any text outside of the <* *> areas will be treated as:

		Hot.echo ("text");

**`fixme`** The regex's in the offContent functions need to be fixed. There's several
test cases where they will fail.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`args` | *any* | null |

**Returns:** *Promise*<string\>

Defined in: [HotFile.ts:330](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L330)

___

### setContent

▸ **setContent**(`content`: *string*): *void*

Set the content of this file.

#### Parameters:

Name | Type |
:------ | :------ |
`content` | *string* |

**Returns:** *void*

Defined in: [HotFile.ts:83](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L83)

___

### httpGet

▸ `Static`**httpGet**(`url`: *string*): *Promise*<string\>

Make a HTTP get request.

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *Promise*<string\>

Defined in: [HotFile.ts:99](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L99)

___

### processContent

▸ `Static`**processContent**(`content`: *string*, `contentRegex`: *RegExp*, `contentProcessor`: (`regexFound`: *string*) => *string*, `offContentProcessor`: (`offContent`: *string*) => *string*, `numRemoveFromBeginning?`: *number*, `numRemoveFromEnd?`: *number*): *string*

Process string content. This will take in a regular expression and
parse the content based on the regex. When the regex content is found
contentProcessor will be executed with the regex content found. When
the regex content is not found, offContentProcessor will be called with
the content outside of the regex.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`content` | *string* | - | The content to parse.   |
`contentRegex` | *RegExp* | - | The regex to use to parse the content.   |
`contentProcessor` | (`regexFound`: *string*) => *string* | - | The content found inside the regex.   |
`offContentProcessor` | (`offContent`: *string*) => *string* | - | The content found outside of the regex.   |
`numRemoveFromBeginning` | *number* | 2 | The number of characters to remove from the beginning of the found content.   |
`numRemoveFromEnd` | *number* | 2 | The number of characters to remove from the end of the found content.    |

**Returns:** *string*

Defined in: [HotFile.ts:183](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L183)

___

### processNestedContent

▸ `Static`**processNestedContent**(`content`: *string*, `startChars`: *string*, `endChars`: *string*, `triggerChar`: *string*, `contentProcessor`: (`regexFound`: *string*) => *string*, `offContentProcessor`: (`offContent`: *string*) => *string*, `numRemoveFromBeginning?`: *number*, `numRemoveFromEnd?`: *number*): *string*

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
:------ | :------ | :------ | :------ |
`content` | *string* | - | The content to parse.   |
`startChars` | *string* | - | - |
`endChars` | *string* | - | - |
`triggerChar` | *string* | - | - |
`contentProcessor` | (`regexFound`: *string*) => *string* | - | The content found inside the regex.   |
`offContentProcessor` | (`offContent`: *string*) => *string* | - | The content found outside of the regex.   |
`numRemoveFromBeginning` | *number* | 2 | The number of characters to remove from the beginning of the found content.   |
`numRemoveFromEnd` | *number* | 1 | The number of characters to remove from the end of the found content.    |

**Returns:** *string*

Defined in: [HotFile.ts:241](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotFile.ts#L241)
