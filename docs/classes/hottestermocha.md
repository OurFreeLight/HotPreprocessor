**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTesterMocha

# Class: HotTesterMocha

The tester that uses Mocha to executes all tests.

## Hierarchy

* [HotTester](hottester.md)

  ↳ **HotTesterMocha**

## Index

### Constructors

* [constructor](hottestermocha.md#constructor)

### Properties

* [afterAll](hottestermocha.md#afterall)
* [baseUrl](hottestermocha.md#baseurl)
* [beforeAll](hottestermocha.md#beforeall)
* [driver](hottestermocha.md#driver)
* [finishedLoading](hottestermocha.md#finishedloading)
* [hasBeenDestroyed](hottestermocha.md#hasbeendestroyed)
* [hasBeenSetup](hottestermocha.md#hasbeensetup)
* [mocha](hottestermocha.md#mocha)
* [name](hottestermocha.md#name)
* [processor](hottestermocha.md#processor)
* [suite](hottestermocha.md#suite)
* [testMaps](hottestermocha.md#testmaps)
* [timeout](hottestermocha.md#timeout)

### Methods

* [destroy](hottestermocha.md#destroy)
* [execute](hottestermocha.md#execute)
* [executeCommand](hottestermocha.md#executecommand)
* [executeTestAPIPath](hottestermocha.md#executetestapipath)
* [executeTestAPIPaths](hottestermocha.md#executetestapipaths)
* [executeTestPagePath](hottestermocha.md#executetestpagepath)
* [executeTestPagePaths](hottestermocha.md#executetestpagepaths)
* [getTestPage](hottestermocha.md#gettestpage)
* [getTestPath](hottestermocha.md#gettestpath)
* [onCommand](hottestermocha.md#oncommand)
* [onExecute](hottestermocha.md#onexecute)
* [onFinishedLoading](hottestermocha.md#onfinishedloading)
* [onTestAPIPathEnd](hottestermocha.md#ontestapipathend)
* [onTestAPIPathStart](hottestermocha.md#ontestapipathstart)
* [onTestEnd](hottestermocha.md#ontestend)
* [onTestPagePathEnd](hottestermocha.md#ontestpagepathend)
* [onTestPagePathStart](hottestermocha.md#ontestpagepathstart)
* [onTestStart](hottestermocha.md#onteststart)
* [setup](hottestermocha.md#setup)
* [waitForData](hottestermocha.md#waitfordata)
* [interpretDestination](hottestermocha.md#interpretdestination)

## Constructors

### constructor

\+ **new HotTesterMocha**(`processor`: [HotPreprocessor](hotpreprocessor.md), `name`: string, `baseUrl`: string, `driver`: [HotTestDriver](hottestdriver.md), `testMaps?`: { [name:string]: [HotTestMap](hottestmap.md);  }, `beforeAll?`: () => Promise<void\>, `afterAll?`: () => Promise<void\>): [HotTesterMocha](hottestermocha.md)

*Overrides [HotTester](hottester.md).[constructor](hottester.md#constructor)*

*Defined in [HotTesterMocha.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L33)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) | - |
`name` | string | - |
`baseUrl` | string | - |
`driver` | [HotTestDriver](hottestdriver.md) | - |
`testMaps` | { [name:string]: [HotTestMap](hottestmap.md);  } | {} |
`beforeAll` | () => Promise<void\> | null |
`afterAll` | () => Promise<void\> | null |

**Returns:** [HotTesterMocha](hottestermocha.md)

## Properties

### afterAll

•  **afterAll**: () => Promise<void\>

*Defined in [HotTesterMocha.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L33)*

The Mocha afterAll event to call before any tests are executed.

___

### baseUrl

•  **baseUrl**: string

*Inherited from [HotTester](hottester.md).[baseUrl](hottester.md#baseurl)*

*Defined in [HotTester.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L74)*

The base url that will construct future urls.

___

### beforeAll

•  **beforeAll**: () => Promise<void\>

*Defined in [HotTesterMocha.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L29)*

The Mocha beforeAll event to call before any tests are executed.

___

### driver

•  **driver**: [HotTestDriver](hottestdriver.md)

*Inherited from [HotTester](hottester.md).[driver](hottester.md#driver)*

*Defined in [HotTester.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L86)*

The driver to use when running tests.

___

### finishedLoading

•  **finishedLoading**: boolean

*Inherited from [HotTester](hottester.md).[finishedLoading](hottester.md#finishedloading)*

*Defined in [HotTester.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L90)*

Has this tester finished loading?

___

### hasBeenDestroyed

•  **hasBeenDestroyed**: boolean

*Inherited from [HotTester](hottester.md).[hasBeenDestroyed](hottester.md#hasbeendestroyed)*

*Defined in [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L98)*

Has this tester finished setting up?

___

### hasBeenSetup

•  **hasBeenSetup**: boolean

*Inherited from [HotTester](hottester.md).[hasBeenSetup](hottester.md#hasbeensetup)*

*Defined in [HotTester.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L94)*

Has this tester finished setting up?

___

### mocha

•  **mocha**: Mocha

*Defined in [HotTesterMocha.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L17)*

The mocha instance to run.

___

### name

•  **name**: string

*Inherited from [HotTester](hottester.md).[name](hottester.md#name)*

*Defined in [HotTester.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L70)*

The tester name.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Inherited from [HotTester](hottester.md).[processor](hottester.md#processor)*

*Defined in [HotTester.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L78)*

The associated processor.

___

### suite

•  **suite**: Suite

*Defined in [HotTesterMocha.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L25)*

The suite to execute.

___

### testMaps

•  **testMaps**: { [name:string]: [HotTestMap](hottestmap.md);  }

*Inherited from [HotTester](hottester.md).[testMaps](hottester.md#testmaps)*

*Defined in [HotTester.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L82)*

The test maps to test.

___

### timeout

•  **timeout**: number

*Defined in [HotTesterMocha.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L21)*

The timeout for each test.

## Methods

### destroy

▸ **destroy**(): Promise<void\>

*Overrides [HotTester](hottester.md).[destroy](hottester.md#destroy)*

*Defined in [HotTesterMocha.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L58)*

Executed when destroying up the tester.

**Returns:** Promise<void\>

___

### execute

▸ **execute**(`mapName`: string): Promise<void\>

*Inherited from [HotTester](hottester.md).[execute](hottester.md#execute)*

*Defined in [HotTester.ts:555](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L555)*

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

*Defined in [HotTester.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L381)*

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

*Defined in [HotTester.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L256)*

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

*Defined in [HotTester.ts:294](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L294)*

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

*Defined in [HotTester.ts:329](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L329)*

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

*Defined in [HotTester.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L509)*

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

*Defined in [HotTester.ts:181](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L181)*

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

*Defined in [HotTester.ts:191](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L191)*

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

*Defined in [HotTesterMocha.ts:111](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L111)*

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

*Defined in [HotTester.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L163)*

Executed when this tester has been executed from the API.

**Returns:** Promise<void\>

___

### onFinishedLoading

▸ `Optional`**onFinishedLoading**(): Promise<void\>

*Inherited from [HotTester](hottester.md).[onFinishedLoading](hottester.md#onfinishedloading)*

*Defined in [HotTester.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L167)*

Executed when this tester has finished loading all data from the API.

**Returns:** Promise<void\>

___

### onTestAPIPathEnd

▸ `Optional`**onTestAPIPathEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md), `method`: [HotRouteMethod](hotroutemethod.md), `testName`: string, `result`: any, `continueWhenTestIsComplete?`: boolean): Promise<void\>

*Inherited from [HotTester](hottester.md).[onTestAPIPathEnd](hottester.md#ontestapipathend)*

*Defined in [HotTester.ts:137](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L137)*

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

*Defined in [HotTester.ts:132](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L132)*

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

*Defined in [HotTesterMocha.ts:120](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L120)*

#### Parameters:

Name | Type |
------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) |

**Returns:** Promise<void\>

___

### onTestPagePathEnd

▸ `Optional`**onTestPagePathEnd**(`destination`: [HotDestination](../interfaces/hotdestination.md), `testPath`: [HotTestPath](../globals.md#hottestpath), `result`: any, `continueWhenTestIsComplete?`: boolean): Promise<void\>

*Inherited from [HotTester](hottester.md).[onTestPagePathEnd](hottester.md#ontestpagepathend)*

*Defined in [HotTester.ts:148](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L148)*

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

*Defined in [HotTesterMocha.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L82)*

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

▸ **onTestStart**(`destination`: [HotDestination](../interfaces/hotdestination.md), `destinationKey?`: string): Promise<boolean\>

*Overrides [HotTester](hottester.md).[onTestStart](hottester.md#onteststart)*

*Defined in [HotTesterMocha.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L65)*

Executed when tests are started.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destination` | [HotDestination](../interfaces/hotdestination.md) | - |
`destinationKey` | string | "" |

**Returns:** Promise<boolean\>

___

### setup

▸ **setup**(): Promise<void\>

*Overrides [HotTester](hottester.md).[setup](hottester.md#setup)*

*Defined in [HotTesterMocha.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterMocha.ts#L51)*

Executed when setting up the tester.

**Returns:** Promise<void\>

___

### waitForData

▸ **waitForData**(): Promise<void\>

*Inherited from [HotTester](hottester.md).[waitForData](hottester.md#waitfordata)*

*Defined in [HotTester.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L172)*

Waits for the API to finish loading all data.

**Returns:** Promise<void\>

___

### interpretDestination

▸ `Static`**interpretDestination**(`mapName`: string, `testDest`: [HotTestDestination](hottestdestination.md)): [HotDestination](../interfaces/hotdestination.md)

*Inherited from [HotTester](hottester.md).[interpretDestination](hottester.md#interpretdestination)*

*Defined in [HotTester.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTester.ts#L201)*

Get a destination JSON object to use.

#### Parameters:

Name | Type |
------ | ------ |
`mapName` | string |
`testDest` | [HotTestDestination](hottestdestination.md) |

**Returns:** [HotDestination](../interfaces/hotdestination.md)
