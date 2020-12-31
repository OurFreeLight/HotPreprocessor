**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTester

# Class: HotTester

Executes tests.

## Hierarchy

* **HotTester**

  ↳ [HotTesterMocha](hottestermocha.md)

  ↳ [HotTesterMochaSelenium](hottestermochaselenium.md)

## Index

### Constructors

* [constructor](hottester.md#constructor)

### Properties

* [baseUrl](hottester.md#baseurl)
* [driver](hottester.md#driver)
* [finishedLoading](hottester.md#finishedloading)
* [hasBeenDestroyed](hottester.md#hasbeendestroyed)
* [hasBeenSetup](hottester.md#hasbeensetup)
* [name](hottester.md#name)
* [processor](hottester.md#processor)
* [testMaps](hottester.md#testmaps)

### Methods

* [destroy](hottester.md#destroy)
* [execute](hottester.md#execute)
* [executeCommand](hottester.md#executecommand)
* [executeTestAPIPath](hottester.md#executetestapipath)
* [executeTestAPIPaths](hottester.md#executetestapipaths)
* [executeTestPagePath](hottester.md#executetestpagepath)
* [executeTestPagePaths](hottester.md#executetestpagepaths)
* [getTestPage](hottester.md#gettestpage)
* [getTestPath](hottester.md#gettestpath)
* [onCommand](hottester.md#oncommand)
* [onExecute](hottester.md#onexecute)
* [onFinishedLoading](hottester.md#onfinishedloading)
* [onTestAPIPathEnd](hottester.md#ontestapipathend)
* [onTestAPIPathStart](hottester.md#ontestapipathstart)
* [onTestEnd](hottester.md#ontestend)
* [onTestPagePathEnd](hottester.md#ontestpagepathend)
* [onTestPagePathStart](hottester.md#ontestpagepathstart)
* [onTestStart](hottester.md#onteststart)
* [setup](hottester.md#setup)
* [waitForData](hottester.md#waitfordata)
* [interpretDestination](hottester.md#interpretdestination)

## Constructors

### constructor

\+ **new HotTester**(`processor`: [HotPreprocessor](hotpreprocessor.md), `name`: string, `baseUrl`: string, `driver`: [HotTestDriver](hottestdriver.md), `testMaps?`: { [name:string]: [HotTestMap](hottestmap.md);  }): [HotTester](hottester.md)

*Defined in [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L98)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) | - |
`name` | string | - |
`baseUrl` | string | - |
`driver` | [HotTestDriver](hottestdriver.md) | - |
`testMaps` | { [name:string]: [HotTestMap](hottestmap.md);  } | {} |

**Returns:** [HotTester](hottester.md)

## Properties

### baseUrl

•  **baseUrl**: string

*Defined in [HotTester.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L74)*

The base url that will construct future urls.

___

### driver

•  **driver**: [HotTestDriver](hottestdriver.md)

*Defined in [HotTester.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L86)*

The driver to use when running tests.

___

### finishedLoading

•  **finishedLoading**: boolean

*Defined in [HotTester.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L90)*

Has this tester finished loading?

___

### hasBeenDestroyed

•  **hasBeenDestroyed**: boolean

*Defined in [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L98)*

Has this tester finished setting up?

___

### hasBeenSetup

•  **hasBeenSetup**: boolean

*Defined in [HotTester.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L94)*

Has this tester finished setting up?

___

### name

•  **name**: string

*Defined in [HotTester.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L70)*

The tester name.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Defined in [HotTester.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L78)*

The associated processor.

___

### testMaps

•  **testMaps**: { [name:string]: [HotTestMap](hottestmap.md);  }

*Defined in [HotTester.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L82)*

The test maps to test.

## Methods

### destroy

▸ `Abstract`**destroy**(): Promise<void\>

*Defined in [HotTester.ts:120](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L120)*

Executed when destroying up the tester.

**Returns:** Promise<void\>

___

### execute

▸ **execute**(`mapName`: string): Promise<void\>

*Defined in [HotTester.ts:555](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L555)*

Execute the tests.

#### Parameters:

Name | Type |
------ | ------ |
`mapName` | string |

**Returns:** Promise<void\>

___

### executeCommand

▸ **executeCommand**(`destination`: [HotDestination](../interfaces/hotdestination.md), `page`: [HotTestPage](../interfaces/hottestpage.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `cmd`: string): Promise<void\>

*Defined in [HotTester.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L381)*

Execute a command.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`page` | [HotTestPage](../interfaces/hottestpage.md) |
`stop` | [HotTestStop](../interfaces/hotteststop.md) |
`cmd` | string |

**Returns:** Promise<void\>

___

### executeTestAPIPath

▸ **executeTestAPIPath**(`destination`: [HotDestination](../interfaces/hotdestination.md), `method`: [HotRouteMethod](hotroutemethod.md), `testName`: string, `skipEventCalls?`: boolean, `continueWhenTestIsComplete?`: boolean): Promise<any\>

*Defined in [HotTester.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L256)*

Execute an API's test path.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) | - |
`method` | [HotRouteMethod](hotroutemethod.md) | - |
`testName` | string | - |
`skipEventCalls` | boolean | false |
`continueWhenTestIsComplete` | boolean | false |

**Returns:** Promise<any\>

___

### executeTestAPIPaths

▸ **executeTestAPIPaths**(`destination`: [HotDestination](../interfaces/hotdestination.md)): Promise<any[]\>

*Defined in [HotTester.ts:294](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L294)*

Execute all test paths in an API route.

**`fixme`** This needs a better implementation...

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |

**Returns:** Promise<any[]\>

___

### executeTestPagePath

▸ **executeTestPagePath**(`destination`: [HotDestination](../interfaces/hotdestination.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `skipEventCalls?`: boolean, `continueWhenTestIsComplete?`: boolean): Promise<any\>

*Defined in [HotTester.ts:329](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L329)*

Execute a test page path.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) | - |
`stop` | [HotTestStop](../interfaces/hotteststop.md) | - |
`skipEventCalls` | boolean | false |
`continueWhenTestIsComplete` | boolean | false |

**Returns:** Promise<any\>

___

### executeTestPagePaths

▸ **executeTestPagePaths**(`destination`: [HotDestination](../interfaces/hotdestination.md), `continueWhenTestIsComplete?`: boolean): Promise<any[]\>

*Defined in [HotTester.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L509)*

Execute all test paths in a page.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) | - |
`continueWhenTestIsComplete` | boolean | false |

**Returns:** Promise<any[]\>

___

### getTestPage

▸ **getTestPage**(`destination`: [HotDestination](../interfaces/hotdestination.md)): [HotTestPage](../interfaces/hottestpage.md)

*Defined in [HotTester.ts:181](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L181)*

Get a test page.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |

**Returns:** [HotTestPage](../interfaces/hottestpage.md)

___

### getTestPath

▸ **getTestPath**(`destination`: [HotDestination](../interfaces/hotdestination.md), `pathName`: string): [HotTestPath](../globals.md#hottestpath)

*Defined in [HotTester.ts:191](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L191)*

Get a test path.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`pathName` | string |

**Returns:** [HotTestPath](../globals.md#hottestpath)

___

### onCommand

▸ `Optional`**onCommand**(`destination`: [HotDestination](../interfaces/hotdestination.md), `page`: [HotTestPage](../interfaces/hottestpage.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `cmd`: string, `args`: string[], `cmdFunc`: (cmdArgs: string[]) => Promise<void\>): Promise<void\>

*Defined in [HotTester.ts:153](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L153)*

Executed when a command is executed.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`page` | [HotTestPage](../interfaces/hottestpage.md) |
`stop` | [HotTestStop](../interfaces/hotteststop.md) |
`cmd` | string |
`args` | string[] |
`cmdFunc` | (cmdArgs: string[]) => Promise<void\> |

**Returns:** Promise<void\>

___

### onExecute

▸ `Optional`**onExecute**(): Promise<void\>

*Defined in [HotTester.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L163)*

Executed when this tester has been executed from the API.

**Returns:** Promise<void\>

___

### onFinishedLoading

▸ `Optional`**onFinishedLoading**(): Promise<void\>

*Defined in [HotTester.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L167)*

Executed when this tester has finished loading all data from the API.

**Returns:** Promise<void\>

___

### onTestAPIPathEnd

▸ `Optional`**onTestAPIPathEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md), `method`: [HotRouteMethod](hotroutemethod.md), `testName`: string, `result`: any, `continueWhenTestIsComplete?`: boolean): Promise<void\>

*Defined in [HotTester.ts:137](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L137)*

Executed when an API test path has ended.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`method` | [HotRouteMethod](hotroutemethod.md) |
`testName` | string |
`result` | any |
`continueWhenTestIsComplete?` | boolean |

**Returns:** Promise<void\>

___

### onTestAPIPathStart

▸ `Optional`**onTestAPIPathStart**(`destination`: [HotDestination](../interfaces/hotdestination.md), `method`: [HotRouteMethod](hotroutemethod.md), `testName`: string, `continueWhenTestIsComplete?`: boolean): Promise<boolean\>

*Defined in [HotTester.ts:132](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L132)*

Executed when an API test path has started. If this returns false,
the testPath will not be immediately executed afterwards.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`method` | [HotRouteMethod](hotroutemethod.md) |
`testName` | string |
`continueWhenTestIsComplete?` | boolean |

**Returns:** Promise<boolean\>

___

### onTestEnd

▸ `Optional`**onTestEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md)): Promise<void\>

*Defined in [HotTester.ts:158](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L158)*

Executed when tests are finished.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |

**Returns:** Promise<void\>

___

### onTestPagePathEnd

▸ `Optional`**onTestPagePathEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md), `testPath`: [HotTestPath](../globals.md#hottestpath), `result`: any, `continueWhenTestIsComplete?`: boolean): Promise<void\>

*Defined in [HotTester.ts:148](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L148)*

Executed when a page test has ended.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`testPath` | [HotTestPath](../globals.md#hottestpath) |
`result` | any |
`continueWhenTestIsComplete?` | boolean |

**Returns:** Promise<void\>

___

### onTestPagePathStart

▸ `Optional`**onTestPagePathStart**(`destination`: [HotDestination](../interfaces/hotdestination.md), `page`: [HotTestPage](../interfaces/hottestpage.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `continueWhenTestIsComplete?`: boolean): Promise<boolean\>

*Defined in [HotTester.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L143)*

Executed when page tests are started. If this returns false, the testPath will not be
immediately executed afterwards.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`page` | [HotTestPage](../interfaces/hottestpage.md) |
`stop` | [HotTestStop](../interfaces/hotteststop.md) |
`continueWhenTestIsComplete?` | boolean |

**Returns:** Promise<boolean\>

___

### onTestStart

▸ `Optional`**onTestStart**(`destination`: [HotDestination](../interfaces/hotdestination.md), `url`: string, `destinationKey?`: string): Promise<boolean\>

*Defined in [HotTester.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L127)*

Executed when tests are started. If this returns true, it will
continue and execute all test paths. If this returns it will
skip all test paths and execute onTestEnd instead.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`url` | string |
`destinationKey?` | string |

**Returns:** Promise<boolean\>

___

### setup

▸ `Abstract`**setup**(`url`: string, `destinationKey?`: string): Promise<void\>

*Defined in [HotTester.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L116)*

Executed when setting up the tester.

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`destinationKey?` | string |

**Returns:** Promise<void\>

___

### waitForData

▸ **waitForData**(): Promise<void\>

*Defined in [HotTester.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L172)*

Waits for the API to finish loading all data.

**Returns:** Promise<void\>

___

### interpretDestination

▸ `Static`**interpretDestination**(`mapName`: string, `testDest`: [HotTestDestination](hottestdestination.md)): [HotDestination](../interfaces/hotdestination.md)

*Defined in [HotTester.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L201)*

Get a destination JSON object to use.

#### Parameters:

Name | Type |
------ | ------ |
`mapName` | string |
`testDest` | [HotTestDestination](hottestdestination.md) |

**Returns:** [HotDestination](../interfaces/hotdestination.md)
