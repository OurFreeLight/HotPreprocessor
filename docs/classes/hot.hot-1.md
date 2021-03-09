[hotpreprocessor](../README.md) / [Exports](../modules.md) / [Hot](../modules/hot.md) / Hot

# Class: Hot

[Hot](../modules/hot.md).Hot

The api used during processing.

## Table of contents

### Constructors

- [constructor](hot.hot-1.md#constructor)

### Properties

- [API](hot.hot-1.md#api)
- [Arguments](hot.hot-1.md#arguments)
- [CSS](hot.hot-1.md#css)
- [Cookies](hot.hot-1.md#cookies)
- [CurrentPage](hot.hot-1.md#currentpage)
- [Data](hot.hot-1.md#data)
- [DeveloperMode](hot.hot-1.md#developermode)
- [HotTestElement](hot.hot-1.md#hottestelement)
- [JSFiles](hot.hot-1.md#jsfiles)
- [JSScripts](hot.hot-1.md#jsscripts)
- [Mode](hot.hot-1.md#mode)
- [Output](hot.hot-1.md#output)
- [PublicSecrets](hot.hot-1.md#publicsecrets)
- [TesterAPI](hot.hot-1.md#testerapi)
- [cssStr](hot.hot-1.md#cssstr)
- [jsFileStr](hot.hot-1.md#jsfilestr)
- [jsScriptsStr](hot.hot-1.md#jsscriptsstr)

### Methods

- [apiCall](hot.hot-1.md#apicall)
- [displayCSS](hot.hot-1.md#displaycss)
- [displayJSFiles](hot.hot-1.md#displayjsfiles)
- [displayJSScripts](hot.hot-1.md#displayjsscripts)
- [echo](hot.hot-1.md#echo)
- [getFile](hot.hot-1.md#getfile)
- [include](hot.hot-1.md#include)
- [runFile](hot.hot-1.md#runfile)

## Constructors

### constructor

\+ **new Hot**(): [*Hot*](hot.hot-1.md)

**Returns:** [*Hot*](hot.hot-1.md)

## Properties

### API

▪ `Static` **API**: [*HotAPI*](hotapi.hotapi-1.md)= null

The current API used on this page. This is cleared between every file processed.

Defined in: [Hot.ts:72](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L72)

___

### Arguments

▪ `Static` **Arguments**: *any*= null

The arguments passed.

Defined in: [Hot.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L53)

___

### CSS

▪ `Static` **CSS**: *string*[]

The CSS files to use in the current page being generated.

**`todo`** Make this a "string | CSSObject" data type so it can also include
the integrity hashes as well.

Defined in: [Hot.ts:103](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L103)

___

### Cookies

▪ `Static` **Cookies**: *CookiesStatic*<object\>

The cookies to use between pages.

Defined in: [Hot.ts:88](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L88)

___

### CurrentPage

▪ `Static` **CurrentPage**: [*HotPage*](hotpage.hotpage-1.md)= null

The currently generated page being displayed. This is cleared between every file processed.

Defined in: [Hot.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L49)

___

### Data

▪ `Static` **Data**: *any*

The data to share across all the different files and pages. This data will be public.

Defined in: [Hot.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L84)

___

### DeveloperMode

▪ `Static` **DeveloperMode**: *typeof* [*DeveloperMode*](../enums/hot.developermode.md)

The mode in which this application is running. If it's set to development mode, all testing
related data will be collected, parsed, and executed if necessary.

Defined in: [Hot.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L58)

___

### HotTestElement

▪ `Static` **HotTestElement**: *typeof* [*HotTestElement*](hottestelement.hottestelement-1.md)

The mode in which this application is running. If it's set to development mode, all testing
related data will be collected, parsed, and executed if necessary.

Defined in: [Hot.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L63)

___

### JSFiles

▪ `Static` **JSFiles**: *any*[]

The JavaScript files to use in the current page being generated.

**`todo`** Make this a "string | JSFileObject" data type so it can also include
the integrity hashes as well.

Defined in: [Hot.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L110)

___

### JSScripts

▪ `Static` **JSScripts**: *any*[]

The JavaScript inline code to use in the current page being generated.

Defined in: [Hot.ts:114](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L114)

___

### Mode

▪ `Static` **Mode**: [*DeveloperMode*](../enums/hot.developermode.md)

The mode in which this application is running. If it's set to development mode, all testing
related data will be collected, parsed, and executed if necessary.

Defined in: [Hot.ts:68](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L68)

___

### Output

▪ `Static` **Output**: *string*= ""

Contains the buffer to output. This is cleared between every file processed.

Defined in: [Hot.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L80)

___

### PublicSecrets

▪ `Static` **PublicSecrets**: *any*

Any secrets that can be shown publicly. These can be passed from HotSite.json.

Defined in: [Hot.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L92)

___

### TesterAPI

▪ `Static` **TesterAPI**: [*HotAPI*](hotapi.hotapi-1.md)= null

The API being used by the tester.

Defined in: [Hot.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L76)

___

### cssStr

▪ `Static` **cssStr**: *string*

The CSS string to use when echoing out the CSS files.

Defined in: [Hot.ts:96](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L96)

___

### jsFileStr

▪ `Static` **jsFileStr**: *string*

The JavaScript string to use when echoing out the Scripts files.

Defined in: [Hot.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L118)

___

### jsScriptsStr

▪ `Static` **jsScriptsStr**: *string*

The JavaScript string to use when echoing out the Scripts files.

Defined in: [Hot.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L122)

## Methods

### apiCall

▸ `Static`**apiCall**(`route`: *string*, `data?`: *any*, `httpMethod?`: *string*): *Promise*<any\>

Make an api call.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`route` | *string* | - |
`data` | *any* | null |
`httpMethod` | *string* | "POST" |

**Returns:** *Promise*<any\>

Defined in: [Hot.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L178)

___

### displayCSS

▸ `Static`**displayCSS**(): *void*

Echo out the CSS for the current page being generated.

**Returns:** *void*

Defined in: [Hot.ts:208](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L208)

___

### displayJSFiles

▸ `Static`**displayJSFiles**(): *void*

Echo out the JS files for the current page being generated.

**Returns:** *void*

Defined in: [Hot.ts:224](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L224)

___

### displayJSScripts

▸ `Static`**displayJSScripts**(): *void*

Echo out the JS scripts for the current page being generated.

**Returns:** *void*

Defined in: [Hot.ts:240](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L240)

___

### echo

▸ `Static`**echo**(`message`: *string*): *void*

Echo out some output.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *void*

Defined in: [Hot.ts:200](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L200)

___

### getFile

▸ `Static`**getFile**(`path`: *string* \| [*HotFile*](hotfile.hotfile-1.md), `args?`: *any*[]): *Promise*<string\>

Get the content of a file.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`path` | *string* \| [*HotFile*](hotfile.hotfile-1.md) | - |
`args` | *any*[] | null |

**Returns:** *Promise*<string\>

Defined in: [Hot.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L151)

___

### include

▸ `Static`**include**(`file`: *string* \| [*HotFile*](hotfile.hotfile-1.md), `args?`: *any*[]): *Promise*<void\>

Retrieve a file and echo out it's contents.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`file` | *string* \| [*HotFile*](hotfile.hotfile-1.md) | - |
`args` | *any*[] | null |

**Returns:** *Promise*<void\>

Defined in: [Hot.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L127)

___

### runFile

▸ `Static`**runFile**(`fileName`: *string*, `args?`: *any*[]): *Promise*<void\>

Run an already loaded file and echo out it's contents.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`fileName` | *string* | - |
`args` | *any*[] | null |

**Returns:** *Promise*<void\>

Defined in: [Hot.ts:135](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/Hot.ts#L135)
