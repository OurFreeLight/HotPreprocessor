**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTesterMochaSelenium

# Class: HotTesterMochaSelenium

The tester that uses Mocha to executes all tests.

## Hierarchy

* [HotTester](hottester.md)

  ↳ **HotTesterMochaSelenium**

## Index

### Constructors

* [constructor](hottestermochaselenium.md#constructor)

### Properties

* [afterAll](hottestermochaselenium.md#afterall)
* [baseUrl](hottestermochaselenium.md#baseurl)
* [beforeAll](hottestermochaselenium.md#beforeall)
* [driver](hottestermochaselenium.md#driver)
* [finishedLoading](hottestermochaselenium.md#finishedloading)
* [hasBeenDestroyed](hottestermochaselenium.md#hasbeendestroyed)
* [hasBeenSetup](hottestermochaselenium.md#hasbeensetup)
* [mocha](hottestermochaselenium.md#mocha)
* [name](hottestermochaselenium.md#name)
* [onSetup](hottestermochaselenium.md#onsetup)
* [processor](hottestermochaselenium.md#processor)
* [suite](hottestermochaselenium.md#suite)
* [testMaps](hottestermochaselenium.md#testmaps)
* [timeout](hottestermochaselenium.md#timeout)
* [waitForTesterData](hottestermochaselenium.md#waitfortesterdata)

### Methods

* [destroy](hottestermochaselenium.md#destroy)
* [execute](hottestermochaselenium.md#execute)
* [executeCommand](hottestermochaselenium.md#executecommand)
* [executeTestAPIPath](hottestermochaselenium.md#executetestapipath)
* [executeTestAPIPaths](hottestermochaselenium.md#executetestapipaths)
* [executeTestPagePath](hottestermochaselenium.md#executetestpagepath)
* [executeTestPagePaths](hottestermochaselenium.md#executetestpagepaths)
* [getTestPage](hottestermochaselenium.md#gettestpage)
* [getTestPath](hottestermochaselenium.md#gettestpath)
* [onCommand](hottestermochaselenium.md#oncommand)
* [onExecute](hottestermochaselenium.md#onexecute)
* [onFinishedLoading](hottestermochaselenium.md#onfinishedloading)
* [onTestAPIPathEnd](hottestermochaselenium.md#ontestapipathend)
* [onTestAPIPathStart](hottestermochaselenium.md#ontestapipathstart)
* [onTestEnd](hottestermochaselenium.md#ontestend)
* [onTestPagePathEnd](hottestermochaselenium.md#ontestpagepathend)
* [onTestPagePathStart](hottestermochaselenium.md#ontestpagepathstart)
* [onTestStart](hottestermochaselenium.md#onteststart)
* [setup](hottestermochaselenium.md#setup)
* [waitForData](hottestermochaselenium.md#waitfordata)
* [interpretDestination](hottestermochaselenium.md#interpretdestination)

## Constructors

### constructor

\+ **new HotTesterMochaSelenium**(`processor`: [HotPreprocessor](hotpreprocessor.md), `name`: string, `baseUrl`: string, `testMaps?`: { [name:string]: [HotTestMap](hottestmap.md);  }, `onSetup?`: (driver: WebDriver) => Promise<boolean\>, `beforeAll?`: () => Promise<void\>, `afterAll?`: () => Promise<void\>): [HotTesterMochaSelenium](hottestermochaselenium.md)

*Overrides [HotTester](hottester.md).[constructor](hottester.md#constructor)*

*Defined in [HotTesterMochaSelenium.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L50)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) | - |
`name` | string | - |
`baseUrl` | string | - |
`testMaps` | { [name:string]: [HotTestMap](hottestmap.md);  } | {} |
`onSetup` | (driver: WebDriver) => Promise<boolean\> | null |
`beforeAll` | () => Promise<void\> | null |
`afterAll` | () => Promise<void\> | null |

**Returns:** [HotTesterMochaSelenium](hottestermochaselenium.md)

## Properties

### afterAll

•  **afterAll**: () => Promise<void\>

*Defined in [HotTesterMochaSelenium.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L39)*

The Mocha afterAll event to call before any tests are executed.

___

### baseUrl

•  **baseUrl**: string

*Inherited from [HotTester](hottester.md).[baseUrl](hottester.md#baseurl)*

*Defined in [HotTester.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L74)*

The base url that will construct future urls.

___

### beforeAll

•  **beforeAll**: () => Promise<void\>

*Defined in [HotTesterMochaSelenium.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L35)*

The Mocha beforeAll event to call before any tests are executed.

___

### driver

•  **driver**: HotTestSeleniumDriver

*Overrides [HotTester](hottester.md).[driver](hottester.md#driver)*

*Defined in [HotTesterMochaSelenium.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L19)*

The driver to use when running tests.

___

### finishedLoading

•  **finishedLoading**: boolean

*Inherited from [HotTester](hottester.md).[finishedLoading](hottester.md#finishedloading)*

*Defined in [HotTester.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L90)*

Has this tester finished loading?

___

### hasBeenDestroyed

•  **hasBeenDestroyed**: boolean

*Inherited from [HotTester](hottester.md).[hasBeenDestroyed](hottester.md#hasbeendestroyed)*

*Defined in [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L98)*

Has this tester finished setting up?

___

### hasBeenSetup

•  **hasBeenSetup**: boolean

*Inherited from [HotTester](hottester.md).[hasBeenSetup](hottester.md#hasbeensetup)*

*Defined in [HotTester.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L94)*

Has this tester finished setting up?

___

### mocha

•  **mocha**: Mocha

*Defined in [HotTesterMochaSelenium.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L23)*

The mocha instance to run.

___

### name

•  **name**: string

*Inherited from [HotTester](hottester.md).[name](hottester.md#name)*

*Defined in [HotTester.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L70)*

The tester name.

___

### onSetup

•  **onSetup**: (driver: WebDriver, url: string) => Promise<boolean\>

*Defined in [HotTesterMochaSelenium.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L44)*

This event is executed after the Selenium driver and url have
been loaded. If this returns true, Selenium will load the url.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Inherited from [HotTester](hottester.md).[processor](hottester.md#processor)*

*Defined in [HotTester.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L78)*

The associated processor.

___

### suite

•  **suite**: Suite

*Defined in [HotTesterMochaSelenium.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L31)*

The suite to execute.

___

### testMaps

•  **testMaps**: { [name:string]: [HotTestMap](hottestmap.md);  }

*Inherited from [HotTester](hottester.md).[testMaps](hottester.md#testmaps)*

*Defined in [HotTester.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L82)*

The test maps to test.

___

### timeout

•  **timeout**: number

*Defined in [HotTesterMochaSelenium.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L27)*

The timeout for each test.

___

### waitForTesterData

•  **waitForTesterData**: boolean

*Defined in [HotTesterMochaSelenium.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L50)*

If set to true, this will wait for the tester API data. If
onSetup is used, it will have to return true in order to
wait for the tester data.

## Methods

### destroy

▸ **destroy**(): Promise<void\>

*Overrides [HotTester](hottester.md).[destroy](hottester.md#destroy)*

*Defined in [HotTesterMochaSelenium.ts:108](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L108)*

Executed when destroying this tester.

**Returns:** Promise<void\>

___

### execute

▸ **execute**(`mapName`: string): Promise<void\>

*Inherited from [HotTester](hottester.md).[execute](hottester.md#execute)*

*Defined in [HotTester.ts:555](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L555)*

Execute the tests.

#### Parameters:

Name | Type |
------ | ------ |
`mapName` | string |

**Returns:** Promise<void\>

___

### executeCommand

▸ **executeCommand**(`destination`: [HotDestination](../interfaces/hotdestination.md), `page`: [HotTestPage](../interfaces/hottestpage.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `cmd`: string): Promise<void\>

*Inherited from [HotTester](hottester.md).[executeCommand](hottester.md#executecommand)*

*Defined in [HotTester.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L381)*

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

*Inherited from [HotTester](hottester.md).[executeTestAPIPath](hottester.md#executetestapipath)*

*Defined in [HotTester.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L256)*

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

*Inherited from [HotTester](hottester.md).[executeTestAPIPaths](hottester.md#executetestapipaths)*

*Defined in [HotTester.ts:294](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L294)*

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

*Inherited from [HotTester](hottester.md).[executeTestPagePath](hottester.md#executetestpagepath)*

*Defined in [HotTester.ts:329](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L329)*

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

*Inherited from [HotTester](hottester.md).[executeTestPagePaths](hottester.md#executetestpagepaths)*

*Defined in [HotTester.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L509)*

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

*Inherited from [HotTester](hottester.md).[getTestPage](hottester.md#gettestpage)*

*Defined in [HotTester.ts:181](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L181)*

Get a test page.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |

**Returns:** [HotTestPage](../interfaces/hottestpage.md)

___

### getTestPath

▸ **getTestPath**(`destination`: [HotDestination](../interfaces/hotdestination.md), `pathName`: string): [HotTestPath](../globals.md#hottestpath)

*Inherited from [HotTester](hottester.md).[getTestPath](hottester.md#gettestpath)*

*Defined in [HotTester.ts:191](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L191)*

Get a test path.

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |
`pathName` | string |

**Returns:** [HotTestPath](../globals.md#hottestpath)

___

### onCommand

▸ **onCommand**(`destination`: [HotDestination](../interfaces/hotdestination.md), `page`: [HotTestPage](../interfaces/hottestpage.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `cmd`: string, `args`: string[], `cmdFunc`: (cmdArgs: string[]) => Promise<void\>): Promise<void\>

*Overrides [HotTester](hottester.md).[onCommand](hottester.md#oncommand)*

*Defined in [HotTesterMochaSelenium.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L163)*

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

*Inherited from [HotTester](hottester.md).[onExecute](hottester.md#onexecute)*

*Defined in [HotTester.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L163)*

Executed when this tester has been executed from the API.

**Returns:** Promise<void\>

___

### onFinishedLoading

▸ `Optional`**onFinishedLoading**(): Promise<void\>

*Inherited from [HotTester](hottester.md).[onFinishedLoading](hottester.md#onfinishedloading)*

*Defined in [HotTester.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L167)*

Executed when this tester has finished loading all data from the API.

**Returns:** Promise<void\>

___

### onTestAPIPathEnd

▸ `Optional`**onTestAPIPathEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md), `method`: [HotRouteMethod](hotroutemethod.md), `testName`: string, `result`: any, `continueWhenTestIsComplete?`: boolean): Promise<void\>

*Inherited from [HotTester](hottester.md).[onTestAPIPathEnd](hottester.md#ontestapipathend)*

*Defined in [HotTester.ts:137](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L137)*

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

*Inherited from [HotTester](hottester.md).[onTestAPIPathStart](hottester.md#ontestapipathstart)*

*Defined in [HotTester.ts:132](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L132)*

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

▸ **onTestEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md)): Promise<void\>

*Overrides [HotTester](hottester.md).[onTestEnd](hottester.md#ontestend)*

*Defined in [HotTesterMochaSelenium.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L172)*

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |

**Returns:** Promise<void\>

___

### onTestPagePathEnd

▸ `Optional`**onTestPagePathEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md), `testPath`: [HotTestPath](../globals.md#hottestpath), `result`: any, `continueWhenTestIsComplete?`: boolean): Promise<void\>

*Inherited from [HotTester](hottester.md).[onTestPagePathEnd](hottester.md#ontestpagepathend)*

*Defined in [HotTester.ts:148](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L148)*

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

▸ **onTestPagePathStart**(`destination`: [HotDestination](../interfaces/hotdestination.md), `page`: [HotTestPage](../interfaces/hottestpage.md), `stop`: [HotTestStop](../interfaces/hotteststop.md), `continueWhenTestIsComplete?`: boolean): Promise<boolean\>

*Overrides [HotTester](hottester.md).[onTestPagePathStart](hottester.md#ontestpagepathstart)*

*Defined in [HotTesterMochaSelenium.ts:134](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L134)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) | - |
`page` | [HotTestPage](../interfaces/hottestpage.md) | - |
`stop` | [HotTestStop](../interfaces/hotteststop.md) | - |
`continueWhenTestIsComplete` | boolean | false |

**Returns:** Promise<boolean\>

___

### onTestStart

▸ **onTestStart**(`destination`: [HotDestination](../interfaces/hotdestination.md), `url`: string, `destinationKey?`: string): Promise<boolean\>

*Overrides [HotTester](hottester.md).[onTestStart](hottester.md#onteststart)*

*Defined in [HotTesterMochaSelenium.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L117)*

Executed when tests are started.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) | - |
`url` | string | - |
`destinationKey` | string | "" |

**Returns:** Promise<boolean\>

___

### setup

▸ **setup**(`url?`: string, `destinationKey?`: string): Promise<void\>

*Overrides [HotTester](hottester.md).[setup](hottester.md#setup)*

*Defined in [HotTesterMochaSelenium.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTesterMochaSelenium.ts#L77)*

Setup the Mocha/Selenium frameworks.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`url` | string | "" | If this is set, this url will be used instead of the url associated with this tester.  |
`destinationKey` | string | "" | - |

**Returns:** Promise<void\>

___

### waitForData

▸ **waitForData**(): Promise<void\>

*Inherited from [HotTester](hottester.md).[waitForData](hottester.md#waitfordata)*

*Defined in [HotTester.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L172)*

Waits for the API to finish loading all data.

**Returns:** Promise<void\>

___

### interpretDestination

▸ `Static`**interpretDestination**(`mapName`: string, `testDest`: [HotTestDestination](hottestdestination.md)): [HotDestination](../interfaces/hotdestination.md)

*Inherited from [HotTester](hottester.md).[interpretDestination](hottester.md#interpretdestination)*

*Defined in [HotTester.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTester.ts#L201)*

Get a destination JSON object to use.

#### Parameters:

Name | Type |
------ | ------ |
`mapName` | string |
`testDest` | [HotTestDestination](hottestdestination.md) |

**Returns:** [HotDestination](../interfaces/hotdestination.md)
