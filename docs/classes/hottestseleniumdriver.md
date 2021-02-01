**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestSeleniumDriver

# Class: HotTestSeleniumDriver

Runs and executes tests using Selenium.

## Hierarchy

* [HotTestDriver](hottestdriver.md)

  ↳ **HotTestSeleniumDriver**

## Index

### Constructors

* [constructor](hottestseleniumdriver.md#constructor)

### Properties

* [browser](hottestseleniumdriver.md#browser)
* [driver](hottestseleniumdriver.md#driver)
* [headless](hottestseleniumdriver.md#headless)
* [openDevTools](hottestseleniumdriver.md#opendevtools)
* [page](hottestseleniumdriver.md#page)
* [session](hottestseleniumdriver.md#session)

### Methods

* [assert](hottestseleniumdriver.md#assert)
* [assertElementValue](hottestseleniumdriver.md#assertelementvalue)
* [destroy](hottestseleniumdriver.md#destroy)
* [findTestElement](hottestseleniumdriver.md#findtestelement)
* [getTestObjectByName](hottestseleniumdriver.md#gettestobjectbyname)
* [loadSeleniumDriver](hottestseleniumdriver.md#loadseleniumdriver)
* [navigateToUrl](hottestseleniumdriver.md#navigatetourl)
* [parseTestObject](hottestseleniumdriver.md#parsetestobject)
* [print](hottestseleniumdriver.md#print)
* [println](hottestseleniumdriver.md#println)
* [run](hottestseleniumdriver.md#run)
* [runCommand](hottestseleniumdriver.md#runcommand)
* [wait](hottestseleniumdriver.md#wait)
* [waitForTestElement](hottestseleniumdriver.md#waitfortestelement)

## Constructors

### constructor

\+ **new HotTestSeleniumDriver**(`page?`: [HotTestPage](../interfaces/hottestpage.md)): [HotTestSeleniumDriver](hottestseleniumdriver.md)

*Overrides [HotTestDriver](hottestdriver.md).[constructor](hottestdriver.md#constructor)*

*Defined in [HotTestSeleniumDriver.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L35)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | [HotTestPage](../interfaces/hottestpage.md) | null |

**Returns:** [HotTestSeleniumDriver](hottestseleniumdriver.md)

## Properties

### browser

•  **browser**: string

*Defined in [HotTestSeleniumDriver.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L27)*

The browser to use.

___

### driver

•  **driver**: WebDriver

*Defined in [HotTestSeleniumDriver.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L23)*

The selenium webdriver.

___

### headless

•  **headless**: boolean

*Defined in [HotTestSeleniumDriver.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L31)*

Run the tests headless.

___

### openDevTools

•  **openDevTools**: boolean

*Defined in [HotTestSeleniumDriver.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L35)*

Automatically open the developer tools on start.

___

### page

•  **page**: [HotTestPage](../interfaces/hottestpage.md)

*Inherited from [HotTestDriver](hottestdriver.md).[page](hottestdriver.md#page)*

*Defined in [HotTestDriver.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L13)*

The current page.

___

### session

•  **session**: Session

*Defined in [HotTestSeleniumDriver.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L19)*

The current selenium session running.

## Methods

### assert

▸ **assert**(`value`: any, `errorMessage?`: string): Promise<any\>

*Inherited from [HotTestDriver](hottestdriver.md).[assert](hottestdriver.md#assert)*

*Defined in [HotTestDriver.ts:107](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L107)*

An expression to test.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | any | - |
`errorMessage` | string | "" |

**Returns:** Promise<any\>

___

### assertElementValue

▸ **assertElementValue**(`name`: string \| [HotTestElement](hottestelement.md), `value`: any, `errorMessage?`: string, `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<any\>

*Overrides [HotTestDriver](hottestdriver.md).[assertElementValue](hottestdriver.md#assertelementvalue)*

*Defined in [HotTestSeleniumDriver.ts:269](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L269)*

An expression to test.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string \| [HotTestElement](hottestelement.md) | - |
`value` | any | - |
`errorMessage` | string | "" |
`options` | [HotTestElementOptions](hottestelementoptions.md) | new HotTestElementOptions () |

**Returns:** Promise<any\>

___

### destroy

▸ **destroy**(): Promise<void\>

*Overrides [HotTestDriver](hottestdriver.md).[destroy](hottestdriver.md#destroy)*

*Defined in [HotTestSeleniumDriver.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L51)*

Disconnect this server or destroy anything associated with this HotTestDriver.

**Returns:** Promise<void\>

___

### findTestElement

▸ **findTestElement**(`name`: string \| [HotTestElement](hottestelement.md), `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<WebElement\>

*Overrides [HotTestDriver](hottestdriver.md).[findTestElement](hottestdriver.md#findtestelement)*

*Defined in [HotTestSeleniumDriver.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L172)*

Get a test element using selenium webdriver.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string \| [HotTestElement](hottestelement.md) | - |
`options` | [HotTestElementOptions](hottestelementoptions.md) | new HotTestElementOptions () |

**Returns:** Promise<WebElement\>

___

### getTestObjectByName

▸ **getTestObjectByName**(`name`: string): By

*Defined in [HotTestSeleniumDriver.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L117)*

Get a test object by it's name. If a * is used, it will be used as a
wildcard for the object's name. If a > is used, then the name will
be treated as a CSS selector.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** By

___

### loadSeleniumDriver

▸ **loadSeleniumDriver**(): Promise<void\>

*Defined in [HotTestSeleniumDriver.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L65)*

Load the selenium driver.

**Returns:** Promise<void\>

___

### navigateToUrl

▸ **navigateToUrl**(`url`: string): Promise<void\>

*Overrides [HotTestDriver](hottestdriver.md).[navigateToUrl](hottestdriver.md#navigatetourl)*

*Defined in [HotTestSeleniumDriver.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L127)*

Navigate to a url.

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |

**Returns:** Promise<void\>

___

### parseTestObject

▸ **parseTestObject**(`name`: string): string

*Inherited from [HotTestDriver](hottestdriver.md).[parseTestObject](hottestdriver.md#parsetestobject)*

*Defined in [HotTestDriver.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L25)*

Get a test object by it's name. If a * is used, it will be used as a
wildcard for the object's name. If a > is used, then the name will
be treated as a CSS selector.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string

___

### print

▸ **print**(`message`: string): Promise<void\>

*Inherited from [HotTestDriver](hottestdriver.md).[print](hottestdriver.md#print)*

*Defined in [HotTestDriver.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L65)*

Print a message.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** Promise<void\>

___

### println

▸ **println**(`message`: string): Promise<void\>

*Inherited from [HotTestDriver](hottestdriver.md).[println](hottestdriver.md#println)*

*Defined in [HotTestDriver.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L73)*

Print a message line.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** Promise<void\>

___

### run

▸ **run**(`executions`: string[] \| string[][]): Promise<any[]\>

*Inherited from [HotTestDriver](hottestdriver.md).[run](hottestdriver.md#run)*

*Defined in [HotTestDriver.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L116)*

Run a series of test elements.

#### Parameters:

Name | Type |
------ | ------ |
`executions` | string[] \| string[][] |

**Returns:** Promise<any[]\>

___

### runCommand

▸ **runCommand**(`testElm`: string \| [HotTestElement](hottestelement.md), `funcName?`: string, `valueStr?`: string, `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<any\>

*Overrides [HotTestDriver](hottestdriver.md).[runCommand](hottestdriver.md#runcommand)*

*Defined in [HotTestSeleniumDriver.ts:214](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L214)*

Run a command using Selenium Webdriver.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`testElm` | string \| [HotTestElement](hottestelement.md) | - |
`funcName` | string | "" |
`valueStr` | string | "" |
`options` | [HotTestElementOptions](hottestelementoptions.md) | new HotTestElementOptions () |

**Returns:** Promise<any\>

___

### wait

▸ **wait**(`numMilliseconds`: number): Promise<void\>

*Inherited from [HotTestDriver](hottestdriver.md).[wait](hottestdriver.md#wait)*

*Defined in [HotTestDriver.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestDriver.ts#L51)*

Wait for a number of milliseconds.

#### Parameters:

Name | Type |
------ | ------ |
`numMilliseconds` | number |

**Returns:** Promise<void\>

___

### waitForTestElement

▸ **waitForTestElement**(`name`: string \| [HotTestElement](hottestelement.md), `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<WebElement\>

*Overrides [HotTestDriver](hottestdriver.md).[waitForTestElement](hottestdriver.md#waitfortestelement)*

*Defined in [HotTestSeleniumDriver.ts:135](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestSeleniumDriver.ts#L135)*

Wait for a test element using Selenium Webdriver.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string \| [HotTestElement](hottestelement.md) | - |
`options` | [HotTestElementOptions](hottestelementoptions.md) | new HotTestElementOptions () |

**Returns:** Promise<WebElement\>
