**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / Hot

# Class: Hot

The api used during processing.

## Hierarchy

* **Hot**

## Index

### Properties

* [API](hot.md#api)
* [Arguments](hot.md#arguments)
* [CSS](hot.md#css)
* [Cookies](hot.md#cookies)
* [CurrentPage](hot.md#currentpage)
* [Data](hot.md#data)
* [DeveloperMode](hot.md#developermode)
* [HotTestElement](hot.md#hottestelement)
* [JSFiles](hot.md#jsfiles)
* [JSScripts](hot.md#jsscripts)
* [Mode](hot.md#mode)
* [Output](hot.md#output)
* [PublicSecrets](hot.md#publicsecrets)
* [TesterAPI](hot.md#testerapi)
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
* [runFile](hot.md#runfile)

## Properties

### API

▪ `Static` **API**: [HotAPI](hotapi.md) = null

*Defined in [Hot.ts:72](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L72)*

The current API used on this page. This is cleared between every file processed.

___

### Arguments

▪ `Static` **Arguments**: any = null

*Defined in [Hot.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L53)*

The arguments passed.

___

### CSS

▪ `Static` **CSS**: string[] = []

*Defined in [Hot.ts:103](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L103)*

The CSS files to use in the current page being generated.

**`todo`** Make this a "string | CSSObject" data type so it can also include
the integrity hashes as well.

___

### Cookies

▪ `Static` **Cookies**: CookiesStatic = Cookies

*Defined in [Hot.ts:88](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L88)*

The cookies to use between pages.

___

### CurrentPage

▪ `Static` **CurrentPage**: [HotPage](hotpage.md) = null

*Defined in [Hot.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L49)*

The currently generated page being displayed. This is cleared between every file processed.

___

### Data

▪ `Static` **Data**: any

*Defined in [Hot.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L84)*

The data to share across all the different files and pages. This data will be public.

___

### DeveloperMode

▪ `Static` **DeveloperMode**: [DeveloperMode](../enums/developermode.md) = DeveloperMode

*Defined in [Hot.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L58)*

The mode in which this application is running. If it's set to development mode, all testing
related data will be collected, parsed, and executed if necessary.

___

### HotTestElement

▪ `Static` **HotTestElement**: [HotTestElement](hottestelement.md) = HotTestElement

*Defined in [Hot.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L63)*

The mode in which this application is running. If it's set to development mode, all testing
related data will be collected, parsed, and executed if necessary.

___

### JSFiles

▪ `Static` **JSFiles**: any[] = []

*Defined in [Hot.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L110)*

The JavaScript files to use in the current page being generated.

**`todo`** Make this a "string | JSFileObject" data type so it can also include
the integrity hashes as well.

___

### JSScripts

▪ `Static` **JSScripts**: any[] = []

*Defined in [Hot.ts:114](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L114)*

The JavaScript inline code to use in the current page being generated.

___

### Mode

▪ `Static` **Mode**: [DeveloperMode](hot.md#developermode) = DeveloperMode.Production

*Defined in [Hot.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L68)*

The mode in which this application is running. If it's set to development mode, all testing
related data will be collected, parsed, and executed if necessary.

___

### Output

▪ `Static` **Output**: string = ""

*Defined in [Hot.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L80)*

Contains the buffer to output. This is cleared between every file processed.

___

### PublicSecrets

▪ `Static` **PublicSecrets**: any

*Defined in [Hot.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L92)*

Any secrets that can be shown publicly. These can be passed from HotSite.json.

___

### TesterAPI

▪ `Static` **TesterAPI**: [HotAPI](hotapi.md) = null

*Defined in [Hot.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L76)*

The API being used by the tester.

___

### cssStr

▪ `Static` **cssStr**: string = \`<link rel = "stylesheet" href = "%CSS\_FILE%" /\>\`

*Defined in [Hot.ts:96](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L96)*

The CSS string to use when echoing out the CSS files.

___

### jsFileStr

▪ `Static` **jsFileStr**: string = \`<script type = "text/javascript" src = "%JS\_FILE%"\></script\>\`

*Defined in [Hot.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L118)*

The JavaScript string to use when echoing out the Scripts files.

___

### jsScriptsStr

▪ `Static` **jsScriptsStr**: string = \`<script type = "text/javascript"\>%JS\_CODE%</script\>\`

*Defined in [Hot.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L122)*

The JavaScript string to use when echoing out the Scripts files.

## Methods

### apiCall

▸ `Static`**apiCall**(`route`: string, `data?`: any, `httpMethod?`: string): Promise<any\>

*Defined in [Hot.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L178)*

Make an api call.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`data` | any | null |
`httpMethod` | string | "POST" |

**Returns:** Promise<any\>

___

### displayCSS

▸ `Static`**displayCSS**(): void

*Defined in [Hot.ts:208](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L208)*

Echo out the CSS for the current page being generated.

**Returns:** void

___

### displayJSFiles

▸ `Static`**displayJSFiles**(): void

*Defined in [Hot.ts:224](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L224)*

Echo out the JS files for the current page being generated.

**Returns:** void

___

### displayJSScripts

▸ `Static`**displayJSScripts**(): void

*Defined in [Hot.ts:240](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L240)*

Echo out the JS scripts for the current page being generated.

**Returns:** void

___

### echo

▸ `Static`**echo**(`message`: string): void

*Defined in [Hot.ts:200](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L200)*

Echo out some output.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### getFile

▸ `Static`**getFile**(`path`: [HotFile](hotfile.md) \| string, `args?`: any[]): Promise<string\>

*Defined in [Hot.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L151)*

Get the content of a file.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`path` | [HotFile](hotfile.md) \| string | - |
`args` | any[] | null |

**Returns:** Promise<string\>

___

### include

▸ `Static`**include**(`file`: [HotFile](hotfile.md) \| string, `args?`: any[]): Promise<void\>

*Defined in [Hot.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L127)*

Retrieve a file and echo out it's contents.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`file` | [HotFile](hotfile.md) \| string | - |
`args` | any[] | null |

**Returns:** Promise<void\>

___

### runFile

▸ `Static`**runFile**(`fileName`: string, `args?`: any[]): Promise<void\>

*Defined in [Hot.ts:135](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/Hot.ts#L135)*

Run an already loaded file and echo out it's contents.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fileName` | string | - |
`args` | any[] | null |

**Returns:** Promise<void\>
