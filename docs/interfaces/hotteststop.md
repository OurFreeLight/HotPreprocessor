**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestStop

# Interface: HotTestStop

The test stop that is executed as either a destination or
a path.

## Hierarchy

* **HotTestStop**

## Index

### Properties

* [cmd](hotteststop.md#cmd)
* [dest](hotteststop.md#dest)
* [path](hotteststop.md#path)

## Properties

### cmd

•  **cmd**: string

*Defined in [HotTester.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L28)*

A command to execute. Can be:
* print(x)
  * Print a message to the server's console.
* println(x)
  * Print a message with a new line to the server's console.
* url(x)
  * Open a url. Must be an absolute url.
* waitForTesterAPIData
  * This will wait for the tester API to receive data.
* wait(x)
  * This will wait for x number of milliseconds.
* waitForTestObject(x)
  * This will wait for a test object to be loaded.

___

### dest

•  **dest**: string

*Defined in [HotTester.ts:32](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L32)*

The destination to execute.

___

### path

•  **path**: string

*Defined in [HotTester.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTester.ts#L36)*

The path to execute.
