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
* [url](hotfile.md#url)

### Methods

* [getContent](hotfile.md#getcontent)
* [load](hotfile.md#load)
* [loadLocalFile](hotfile.md#loadlocalfile)
* [loadUrl](hotfile.md#loadurl)
* [process](hotfile.md#process)
* [setContent](hotfile.md#setcontent)
* [httpGet](hotfile.md#httpget)

## Constructors

### constructor

\+ **new HotFile**(`copy`: [IHotFile](../interfaces/ihotfile.md)): [HotFile](hotfile.md)

*Defined in [HotFile.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L59)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`copy` | [IHotFile](../interfaces/ihotfile.md) | {} |

**Returns:** [HotFile](hotfile.md)

## Properties

### content

•  **content**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[content](../interfaces/ihotfile.md#content)*

*Defined in [HotFile.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L59)*

The content of the file to process.

___

### localFile

•  **localFile**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[localFile](../interfaces/ihotfile.md#localfile)*

*Defined in [HotFile.ts:55](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L55)*

The path to the local file to get.

___

### name

•  **name**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[name](../interfaces/ihotfile.md#name)*

*Defined in [HotFile.ts:47](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L47)*

The name of the file.

___

### page

•  **page**: [HotPage](hotpage.md)

*Implementation of [IHotFile](../interfaces/ihotfile.md).[page](../interfaces/ihotfile.md#page)*

*Defined in [HotFile.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L43)*

The parent page.

___

### url

•  **url**: string

*Implementation of [IHotFile](../interfaces/ihotfile.md).[url](../interfaces/ihotfile.md#url)*

*Defined in [HotFile.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L51)*

The url to the file to get.

## Methods

### getContent

▸ **getContent**(): string

*Defined in [HotFile.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L81)*

Get the content of this file.

**Returns:** string

___

### load

▸ **load**(): Promise\<string>

*Defined in [HotFile.ts:133](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L133)*

Load the contents of the file.

**Returns:** Promise\<string>

___

### loadLocalFile

▸ **loadLocalFile**(): Promise\<string>

*Defined in [HotFile.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L110)*

Load content from a local file.

**Returns:** Promise\<string>

___

### loadUrl

▸ **loadUrl**(): Promise\<string>

*Defined in [HotFile.ts:100](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L100)*

Load content from a url.

**Returns:** Promise\<string>

___

### process

▸ **process**(): Promise\<string>

*Defined in [HotFile.ts:152](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L152)*

Process the content in this file. This treats each file as one large JavaScript
file. Any text outside of the <* *> areas will be treated as:

		Hot.echo ("text");

**Returns:** Promise\<string>

___

### setContent

▸ **setContent**(`content`: string): void

*Defined in [HotFile.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L73)*

Set the content of this file.

#### Parameters:

Name | Type |
------ | ------ |
`content` | string |

**Returns:** void

___

### httpGet

▸ `Static`**httpGet**(`url`: string): Promise\<string>

*Defined in [HotFile.ts:89](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotFile.ts#L89)*

Make a HTTP get request.

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |

**Returns:** Promise\<string>
