**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / Hot

# Class: Hot

The api used during processing.

## Hierarchy

* **Hot**

## Index

### Properties

* [API](hot.md#api)
* [CSS](hot.md#css)
* [CurrentPage](hot.md#currentpage)
* [JSFiles](hot.md#jsfiles)
* [JSScripts](hot.md#jsscripts)
* [Output](hot.md#output)
* [Persistence](hot.md#persistence)
* [cssStr](hot.md#cssstr)
* [jsFileStr](hot.md#jsfilestr)
* [jsScriptsStr](hot.md#jsscriptsstr)

### Methods

* [apiCall](hot.md#apicall)
* [displayCSS](hot.md#displaycss)
* [displayJSFiles](hot.md#displayjsfiles)
* [displayJSScripts](hot.md#displayjsscripts)
* [echo](hot.md#echo)
* [getFile](hot.md#getfile)
* [include](hot.md#include)

## Properties

### API

▪ `Static` **API**: [HotAPI](hotapi.md) = null

*Defined in [Hot.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L33)*

The current API used on this page. This is cleared between every file processed.

___

### CSS

▪ `Static` **CSS**: string[] = []

*Defined in [Hot.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L52)*

The CSS files to use in the current page being generated.

**`todo`** Make this a "string | CSSObject" data type so it can also include
the integrity hashes as well.

___

### CurrentPage

▪ `Static` **CurrentPage**: [HotPage](hotpage.md) = null

*Defined in [Hot.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L29)*

The currently generated page being displayed. This is cleared between every file processed.

___

### JSFiles

▪ `Static` **JSFiles**: any[] = []

*Defined in [Hot.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L59)*

The JavaScript files to use in the current page being generated.

**`todo`** Make this a "string | JSFileObject" data type so it can also include
the integrity hashes as well.

___

### JSScripts

▪ `Static` **JSScripts**: any[] = []

*Defined in [Hot.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L63)*

The JavaScript inline code to use in the current page being generated.

___

### Output

▪ `Static` **Output**: string = ""

*Defined in [Hot.ts:37](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L37)*

Contains the buffer to output. This is cleared between every file processed.

___

### Persistence

▪ `Static` **Persistence**: any

*Defined in [Hot.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L41)*

The data to share across all the different files and pages.

___

### cssStr

▪ `Static` **cssStr**: string = \`\<link rel = "stylesheet" href = "%CSS\_FILE%" />\`

*Defined in [Hot.ts:45](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L45)*

The CSS string to use when echoing out the CSS files.

___

### jsFileStr

▪ `Static` **jsFileStr**: string = \`\<script type = "text/javascript" src = "%JS\_FILE%">\</script>\`

*Defined in [Hot.ts:67](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L67)*

The JavaScript string to use when echoing out the Scripts files.

___

### jsScriptsStr

▪ `Static` **jsScriptsStr**: string = \`\<script type = "text/javascript">%JS\_CODE%\</script>\`

*Defined in [Hot.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L71)*

The JavaScript string to use when echoing out the Scripts files.

## Methods

### apiCall

▸ `Static`**apiCall**(`route`: string, `data`: any, `httpMethod`: string): Promise\<any>

*Defined in [Hot.ts:111](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L111)*

Make an api call.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`data` | any | null |
`httpMethod` | string | "POST" |

**Returns:** Promise\<any>

___

### displayCSS

▸ `Static`**displayCSS**(): void

*Defined in [Hot.ts:141](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L141)*

Echo out the CSS for the current page being generated.

**Returns:** void

___

### displayJSFiles

▸ `Static`**displayJSFiles**(): void

*Defined in [Hot.ts:157](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L157)*

Echo out the JS files for the current page being generated.

**Returns:** void

___

### displayJSScripts

▸ `Static`**displayJSScripts**(): void

*Defined in [Hot.ts:173](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L173)*

Echo out the JS scripts for the current page being generated.

**Returns:** void

___

### echo

▸ `Static`**echo**(`message`: string): void

*Defined in [Hot.ts:133](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L133)*

Echo out some output.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### getFile

▸ `Static`**getFile**(`path`: [HotFile](hotfile.md) \| string): Promise\<string>

*Defined in [Hot.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L84)*

Get the content of a file.

#### Parameters:

Name | Type |
------ | ------ |
`path` | [HotFile](hotfile.md) \| string |

**Returns:** Promise\<string>

___

### include

▸ `Static`**include**(`file`: [HotFile](hotfile.md) \| string): Promise\<void>

*Defined in [Hot.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/Hot.ts#L76)*

Retrieve a file and echo out it's contents.

#### Parameters:

Name | Type |
------ | ------ |
`file` | [HotFile](hotfile.md) \| string |

**Returns:** Promise\<void>
