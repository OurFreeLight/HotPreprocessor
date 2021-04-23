[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTestMap](../modules/hottestmap.md) / HotTestMap

# Class: HotTestMap

[HotTestMap](../modules/hottestmap.md).HotTestMap

Maps the paths that are taken to complete a test.

## Table of contents

### Constructors

- [constructor](hottestmap.hottestmap-1.md#constructor)

### Properties

- [destinationOrder](hottestmap.hottestmap-1.md#destinationorder)
- [destinations](hottestmap.hottestmap-1.md#destinations)
- [pages](hottestmap.hottestmap-1.md#pages)

## Constructors

### constructor

\+ **new HotTestMap**(`destinations?`: *string*[] \| [*HotTestDestination*](hottestmap.hottestdestination.md)[] \| { [name: string]: *string* \| [*HotTestDestination*](hottestmap.hottestdestination.md);  }, `pages?`: { [name: string]: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md);  }, `destinationOrder?`: *string*[]): [*HotTestMap*](hottestmap.hottestmap-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`destinations` | *string*[] \| [*HotTestDestination*](hottestmap.hottestdestination.md)[] \| { [name: string]: *string* \| [*HotTestDestination*](hottestmap.hottestdestination.md);  } |
`pages` | *object* |
`destinationOrder` | *string*[] |

**Returns:** [*HotTestMap*](hottestmap.hottestmap-1.md)

Defined in: [HotTestMap.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotTestMap.ts#L98)

## Properties

### destinationOrder

• **destinationOrder**: *string*[]

The order in which destinations are supposed to execute. This is
ignored if the destinations are an array.

Defined in: [HotTestMap.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotTestMap.ts#L92)

___

### destinations

• **destinations**: [*HotTestDestination*](hottestmap.hottestdestination.md)[] \| { [name: string]: [*HotTestDestination*](hottestmap.hottestdestination.md);  }

The order in which paths are to be taken. Each destination is a string
in a type -> path order. The type could be either a page or api route.
For example:
```
[
     "page:signin_page -> signin_path",
     "page:account_page -> change_username_path",
     "page:account_page -> change_password_path",
     "page:account_page -> change_name_path -> change_address_path",
		"page:account_page -> signout_path",
		"api:account_api_route -> signout_route_method -> signout_test_path"
]
```

The first string to the left of the -> will always be the type, such as a
page or an api route. Any strings to the right of the -> will be a path, even
when chaining addtional ->'s.

Defined in: [HotTestMap.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotTestMap.ts#L87)

___

### pages

• **pages**: *object*

The test pages to execute.

#### Type declaration:

Defined in: [HotTestMap.ts:96](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotTestMap.ts#L96)
