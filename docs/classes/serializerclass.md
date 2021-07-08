[@pashoo2/serializer](../README.md) / [Exports](../modules.md) / SerializerClass

# Class: SerializerClass<T\>

Used a replace of the JSON for values
parsing and serialization.

**`export`**

**`implements`** {ISerializer}

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Implements

- [`ISerializer`](../interfaces/iserializer.md)

## Table of contents

### Constructors

- [constructor](serializerclass.md#constructor)

### Properties

- [\_options](serializerclass.md#_options)

### Accessors

- [\_defaultCheckerIsFunctionSerialized](serializerclass.md#_defaultcheckerisfunctionserialized)
- [\_defaultFunctionReviverCallback](serializerclass.md#_defaultfunctionrevivercallback)
- [\_defaultFunctionSerializedParser](serializerclass.md#_defaultfunctionserializedparser)
- [\_defaultFunctionSerializer](serializerclass.md#_defaultfunctionserializer)
- [\_defaultReplacerCallback](serializerclass.md#_defaultreplacercallback)

### Methods

- [\_createReviver](serializerclass.md#_createreviver)
- [\_getCheckerIsFunctionSerialized](serializerclass.md#_getcheckerisfunctionserialized)
- [\_getFunctionParser](serializerclass.md#_getfunctionparser)
- [\_getFunctionSerializer](serializerclass.md#_getfunctionserializer)
- [\_getParser](serializerclass.md#_getparser)
- [\_getReplacerArgumentForJSONStringify](serializerclass.md#_getreplacerargumentforjsonstringify)
- [\_getReplacerCallback](serializerclass.md#_getreplacercallback)
- [\_getReviverCallback](serializerclass.md#_getrevivercallback)
- [\_getStringifier](serializerclass.md#_getstringifier)
- [parse](serializerclass.md#parse)
- [stringify](serializerclass.md#stringify)

## Constructors

### constructor

• **new SerializerClass**<`T`\>(`_options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`ISerializerClassConstructorOptions`](../interfaces/iserializerclassconstructoroptions.md) |

#### Defined in

[src/serializer-class.ts:52](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L52)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ISerializerClassConstructorOptions`](../interfaces/iserializerclassconstructoroptions.md) = `{}`

## Accessors

### \_defaultCheckerIsFunctionSerialized

• `Protected` `get` **_defaultCheckerIsFunctionSerialized**(): [`ISerializerClassCheckerIsFunctionSerialized`](../interfaces/iserializerclasscheckerisfunctionserialized.md)

#### Returns

[`ISerializerClassCheckerIsFunctionSerialized`](../interfaces/iserializerclasscheckerisfunctionserialized.md)

#### Defined in

[src/serializer-class.ts:42](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L42)

___

### \_defaultFunctionReviverCallback

• `Protected` `get` **_defaultFunctionReviverCallback**(): [`ISerializerClassReviverCallback`](../interfaces/iserializerclassrevivercallback.md)

#### Returns

[`ISerializerClassReviverCallback`](../interfaces/iserializerclassrevivercallback.md)

#### Defined in

[src/serializer-class.ts:50](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L50)

___

### \_defaultFunctionSerializedParser

• `Protected` `get` **_defaultFunctionSerializedParser**(): [`IFunctionParser`](../interfaces/ifunctionparser.md)

#### Returns

[`IFunctionParser`](../interfaces/ifunctionparser.md)

#### Defined in

[src/serializer-class.ts:46](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L46)

___

### \_defaultFunctionSerializer

• `Protected` `get` **_defaultFunctionSerializer**(): [`IFunctionSerializer`](../interfaces/ifunctionserializer.md)

#### Returns

[`IFunctionSerializer`](../interfaces/ifunctionserializer.md)

#### Defined in

[src/serializer-class.ts:34](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L34)

___

### \_defaultReplacerCallback

• `Protected` `get` **_defaultReplacerCallback**(): [`ISerializerClassReplacerCallback`](../interfaces/iserializerclassreplacercallback.md)

#### Returns

[`ISerializerClassReplacerCallback`](../interfaces/iserializerclassreplacercallback.md)

#### Defined in

[src/serializer-class.ts:38](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L38)

## Methods

### \_createReviver

▸ `Protected` **_createReviver**(): (`key`: `string`, `value`: `any`) => `any`

#### Returns

`fn`

▸ (`key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

[src/serializer-class.ts:112](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L112)

___

### \_getCheckerIsFunctionSerialized

▸ `Protected` **_getCheckerIsFunctionSerialized**(): [`ISerializerClassCheckerIsFunctionSerialized`](../interfaces/iserializerclasscheckerisfunctionserialized.md)

#### Returns

[`ISerializerClassCheckerIsFunctionSerialized`](../interfaces/iserializerclasscheckerisfunctionserialized.md)

#### Defined in

[src/serializer-class.ts:95](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L95)

___

### \_getFunctionParser

▸ `Protected` **_getFunctionParser**(): [`IFunctionParser`](../interfaces/ifunctionparser.md)

#### Returns

[`IFunctionParser`](../interfaces/ifunctionparser.md)

#### Defined in

[src/serializer-class.ts:102](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L102)

___

### \_getFunctionSerializer

▸ `Protected` **_getFunctionSerializer**(): [`IFunctionSerializer`](../interfaces/ifunctionserializer.md)

#### Returns

[`IFunctionSerializer`](../interfaces/ifunctionserializer.md)

#### Defined in

[src/serializer-class.ts:74](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L74)

___

### \_getParser

▸ `Protected` **_getParser**(): (`text`: `string`, `reviver?`: (`key`: `string`, `value`: `any`) => `any`) => `any`

#### Returns

`fn`

▸ (`text`, `reviver?`): `any`

Converts a JavaScript Object Notation (JSON) string into an object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | A valid JSON string. |
| `reviver?` | (`key`: `string`, `value`: `any`) => `any` | A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is. |

##### Returns

`any`

#### Defined in

[src/serializer-class.ts:70](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L70)

___

### \_getReplacerArgumentForJSONStringify

▸ `Protected` **_getReplacerArgumentForJSONStringify**(): (`key`: `string`, `value`: `any`) => `any`

#### Returns

`fn`

▸ (`key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

[src/serializer-class.ts:82](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L82)

___

### \_getReplacerCallback

▸ `Protected` **_getReplacerCallback**(): [`ISerializerClassReplacerCallback`](../interfaces/iserializerclassreplacercallback.md)

#### Returns

[`ISerializerClassReplacerCallback`](../interfaces/iserializerclassreplacercallback.md)

#### Defined in

[src/serializer-class.ts:78](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L78)

___

### \_getReviverCallback

▸ `Protected` **_getReviverCallback**(): [`ISerializerClassReviverCallback`](../interfaces/iserializerclassrevivercallback.md)

#### Returns

[`ISerializerClassReviverCallback`](../interfaces/iserializerclassrevivercallback.md)

#### Defined in

[src/serializer-class.ts:108](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L108)

___

### \_getStringifier

▸ `Protected` **_getStringifier**(): (`value`: `any`, `replacer?`: (`key`: `string`, `value`: `any`) => `any`, `space?`: `string` \| `number`) => `string`(`value`: `any`, `replacer?`: ``null`` \| (`string` \| `number`)[], `space?`: `string` \| `number`) => `string`

#### Returns

`fn`

▸ (`value`, `replacer?`, `space?`): `string`

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | A JavaScript value, usually an object or array, to be converted. |
| `replacer?` | (`key`: `string`, `value`: `any`) => `any` | A function that transforms the results. |
| `space?` | `string` \| `number` | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

##### Returns

`string`

▸ (`value`, `replacer?`, `space?`): `string`

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | A JavaScript value, usually an object or array, to be converted. |
| `replacer?` | ``null`` \| (`string` \| `number`)[] | An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified. |
| `space?` | `string` \| `number` | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

##### Returns

`string`

#### Defined in

[src/serializer-class.ts:66](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L66)

___

### parse

▸ **parse**(`str`): [`ISerializableObject`](../interfaces/iserializableobject.md)<`T`\> \| [`TSimpleTypes`](../modules.md#tsimpletypes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`ISerializableObject`](../interfaces/iserializableobject.md)<`T`\> \| [`TSimpleTypes`](../modules.md#tsimpletypes)

#### Implementation of

[ISerializer](../interfaces/iserializer.md).[parse](../interfaces/iserializer.md#parse)

#### Defined in

[src/serializer-class.ts:61](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L61)

___

### stringify

▸ **stringify**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`ISerializableObject`](../interfaces/iserializableobject.md)<`T`\> \| [`TSimpleTypes`](../modules.md#tsimpletypes) |

#### Returns

`string`

#### Implementation of

[ISerializer](../interfaces/iserializer.md).[stringify](../interfaces/iserializer.md#stringify)

#### Defined in

[src/serializer-class.ts:57](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.ts#L57)
