[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTestSeleniumDriver](../modules/hottestseleniumdriver.md) / HotTestSeleniumDriver

# Class: HotTestSeleniumDriver

[HotTestSeleniumDriver](../modules/hottestseleniumdriver.md).HotTestSeleniumDriver

Runs and executes tests using Selenium.

## Hierarchy

* [*HotTestDriver*](hottestdriver.hottestdriver-1.md)

  ↳ **HotTestSeleniumDriver**

## Table of contents

### Constructors

- [constructor](hottestseleniumdriver.hottestseleniumdriver-1.md#constructor)

### Properties

- [browser](hottestseleniumdriver.hottestseleniumdriver-1.md#browser)
- [driver](hottestseleniumdriver.hottestseleniumdriver-1.md#driver)
- [headless](hottestseleniumdriver.hottestseleniumdriver-1.md#headless)
- [openDevTools](hottestseleniumdriver.hottestseleniumdriver-1.md#opendevtools)
- [page](hottestseleniumdriver.hottestseleniumdriver-1.md#page)
- [session](hottestseleniumdriver.hottestseleniumdriver-1.md#session)

### Methods

- [assert](hottestseleniumdriver.hottestseleniumdriver-1.md#assert)
- [assertElementValue](hottestseleniumdriver.hottestseleniumdriver-1.md#assertelementvalue)
- [destroy](hottestseleniumdriver.hottestseleniumdriver-1.md#destroy)
- [findTestElement](hottestseleniumdriver.hottestseleniumdriver-1.md#findtestelement)
- [getTestObjectByName](hottestseleniumdriver.hottestseleniumdriver-1.md#gettestobjectbyname)
- [loadSeleniumDriver](hottestseleniumdriver.hottestseleniumdriver-1.md#loadseleniumdriver)
- [navigateToUrl](hottestseleniumdriver.hottestseleniumdriver-1.md#navigatetourl)
- [parseTestObject](hottestseleniumdriver.hottestseleniumdriver-1.md#parsetestobject)
- [print](hottestseleniumdriver.hottestseleniumdriver-1.md#print)
- [println](hottestseleniumdriver.hottestseleniumdriver-1.md#println)
- [run](hottestseleniumdriver.hottestseleniumdriver-1.md#run)
- [runCommand](hottestseleniumdriver.hottestseleniumdriver-1.md#runcommand)
- [wait](hottestseleniumdriver.hottestseleniumdriver-1.md#wait)
- [waitForTestElement](hottestseleniumdriver.hottestseleniumdriver-1.md#waitfortestelement)

## Constructors

### constructor

\+ **new HotTestSeleniumDriver**(`page?`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)): [*HotTestSeleniumDriver*](hottestseleniumdriver.hottestseleniumdriver-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`page` | [*HotTestPage*](../interfaces/hottestmap.hottestpage.md) | null |

**Returns:** [*HotTestSeleniumDriver*](hottestseleniumdriver.hottestseleniumdriver-1.md)

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L35)

## Properties

### browser

• **browser**: *string*

The browser to use.

Defined in: [HotTestSeleniumDriver.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L27)

___

### driver

• **driver**: *WebDriver*

The selenium webdriver.

Defined in: [HotTestSeleniumDriver.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L23)

___

### headless

• **headless**: *boolean*

Run the tests headless.

Defined in: [HotTestSeleniumDriver.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L31)

___

### openDevTools

• **openDevTools**: *boolean*

Automatically open the developer tools on start.

Defined in: [HotTestSeleniumDriver.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L35)

___

### page

• **page**: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)

The current page.

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md).[page](hottestdriver.hottestdriver-1.md#page)

Defined in: [HotTestDriver.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L13)

___

### session

• **session**: *Session*

The current selenium session running.

Defined in: [HotTestSeleniumDriver.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L19)

## Methods

### assert

▸ **assert**(`value`: *any*, `errorMessage?`: *string*): *Promise*<any\>

An expression to test.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`errorMessage` | *string* | "" |

**Returns:** *Promise*<any\>

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:107](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L107)

___

### assertElementValue

▸ **assertElementValue**(`name`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `value`: *any*, `errorMessage?`: *string*, `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<any\>

An expression to test.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) | - |
`value` | *any* | - |
`errorMessage` | *string* | "" |
`options` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) | - |

**Returns:** *Promise*<any\>

Overrides: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:269](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L269)

___

### destroy

▸ **destroy**(): *Promise*<void\>

Disconnect this server or destroy anything associated with this HotTestDriver.

**Returns:** *Promise*<void\>

Overrides: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L51)

___

### findTestElement

▸ **findTestElement**(`name`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<WebElement\>

Get a test element using selenium webdriver.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) |
`options` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) |

**Returns:** *Promise*<WebElement\>

Overrides: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L172)

___

### getTestObjectByName

▸ **getTestObjectByName**(`name`: *string*): *By*

Get a test object by it's name. If a * is used, it will be used as a
wildcard for the object's name. If a > is used, then the name will
be treated as a CSS selector.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *By*

Defined in: [HotTestSeleniumDriver.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L117)

___

### loadSeleniumDriver

▸ **loadSeleniumDriver**(): *Promise*<void\>

Load the selenium driver.

**Returns:** *Promise*<void\>

Defined in: [HotTestSeleniumDriver.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L65)

___

### navigateToUrl

▸ **navigateToUrl**(`url`: *string*): *Promise*<void\>

Navigate to a url.

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *Promise*<void\>

Overrides: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L127)

___

### parseTestObject

▸ **parseTestObject**(`name`: *string*): *string*

Get a test object by it's name. If a * is used, it will be used as a
wildcard for the object's name. If a > is used, then the name will
be treated as a CSS selector.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *string*

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L25)

___

### print

▸ **print**(`message`: *string*): *Promise*<void\>

Print a message.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *Promise*<void\>

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L65)

___

### println

▸ **println**(`message`: *string*): *Promise*<void\>

Print a message line.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *Promise*<void\>

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L73)

___

### run

▸ **run**(`executions`: *string*[] \| *string*[][]): *Promise*<any[]\>

Run a series of test elements.

#### Parameters:

Name | Type |
:------ | :------ |
`executions` | *string*[] \| *string*[][] |

**Returns:** *Promise*<any[]\>

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L116)

___

### runCommand

▸ **runCommand**(`testElm`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `funcName?`: *string*, `valueStr?`: *string*, `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<any\>

Run a command using Selenium Webdriver.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`testElm` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) | - |
`funcName` | *string* | "" |
`valueStr` | *string* | "" |
`options` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) | - |

**Returns:** *Promise*<any\>

Overrides: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:214](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L214)

___

### wait

▸ **wait**(`numMilliseconds`: *number*): *Promise*<void\>

Wait for a number of milliseconds.

#### Parameters:

Name | Type |
:------ | :------ |
`numMilliseconds` | *number* |

**Returns:** *Promise*<void\>

Inherited from: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestDriver.ts#L51)

___

### waitForTestElement

▸ **waitForTestElement**(`name`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<WebElement\>

Wait for a test element using Selenium Webdriver.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) |
`options` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) |

**Returns:** *Promise*<WebElement\>

Overrides: [HotTestDriver](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestSeleniumDriver.ts:135](https://github.com/OurFreeLight/HotPreprocessor/blob/3f45061/src/HotTestSeleniumDriver.ts#L135)
