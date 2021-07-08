[@pashoo2/serializer](README.md) / Exports

# @pashoo2/serializer

## Table of contents

### Classes

- [SerializerClass](classes/serializerclass.md)

### Interfaces

- [IFunctionParser](interfaces/ifunctionparser.md)
- [IFunctionSerializer](interfaces/ifunctionserializer.md)
- [ISerializableObject](interfaces/iserializableobject.md)
- [ISerializer](interfaces/iserializer.md)
- [ISerializerClassCheckerIsFunctionSerialized](interfaces/iserializerclasscheckerisfunctionserialized.md)
- [ISerializerClassConstructorOptions](interfaces/iserializerclassconstructoroptions.md)
- [ISerializerClassReplacerCallback](interfaces/iserializerclassreplacercallback.md)
- [ISerializerClassReviverCallback](interfaces/iserializerclassrevivercallback.md)

### Type aliases

- [TSimpleTypes](modules.md#tsimpletypes)

### Functions

- [serializerClassUtilCreateReplacerArgumentForJSONStringify](modules.md#serializerclassutilcreatereplacerargumentforjsonstringify)
- [serializerClassUtilCreateReviverArgumentForJSONParse](modules.md#serializerclassutilcreatereviverargumentforjsonparse)
- [serializerClassUtilFunctionParserSandboxedDefault](modules.md#serializerclassutilfunctionparsersandboxeddefault)
- [serializerClassUtilFunctionSerializer](modules.md#serializerclassutilfunctionserializer)
- [serializerClassUtilIsFunctionSerialziedDefault](modules.md#serializerclassutilisfunctionserialzieddefault)
- [serializerClassUtilReplacerCallbackDefault](modules.md#serializerclassutilreplacercallbackdefault)
- [serializerClassUtilReviverCallbackDefault](modules.md#serializerclassutilrevivercallbackdefault)

## Type aliases

### TSimpleTypes

Ƭ **TSimpleTypes**: `number` \| `Number` \| `string` \| `String` \| `boolean` \| ``null`` \| `undefined`

#### Defined in

[src/types.ts:1](https://github.com/pashoo2/serializer/blob/01e8d50/src/types.ts#L1)

## Functions

### serializerClassUtilCreateReplacerArgumentForJSONStringify

▸ **serializerClassUtilCreateReplacerArgumentForJSONStringify**(`functionSerializer`, `replacerCallback`): (`this`: `any`, `key`: `string`, `value`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionSerializer` | [`IFunctionSerializer`](interfaces/ifunctionserializer.md) |
| `replacerCallback` | [`ISerializerClassReplacerCallback`](interfaces/iserializerclassreplacercallback.md) |

#### Returns

`fn`

▸ (`this`, `key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

[src/serializer-class.utils.ts:82](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L82)

___

### serializerClassUtilCreateReviverArgumentForJSONParse

▸ **serializerClassUtilCreateReviverArgumentForJSONParse**(`functionSerializedChecker`, `functionParser`, `reviverCallback`): (`this`: `any`, `key`: `string`, `value`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionSerializedChecker` | [`ISerializerClassCheckerIsFunctionSerialized`](interfaces/iserializerclasscheckerisfunctionserialized.md) |
| `functionParser` | [`IFunctionParser`](interfaces/ifunctionparser.md) |
| `reviverCallback` | [`ISerializerClassReviverCallback`](interfaces/iserializerclassrevivercallback.md) |

#### Returns

`fn`

▸ (`this`, `key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

[src/serializer-class.utils.ts:91](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L91)

___

### serializerClassUtilFunctionParserSandboxedDefault

▸ **serializerClassUtilFunctionParserSandboxedDefault**(`functionSerialized`): (...`args`: `any`[]) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionSerialized` | `string` |

#### Returns

`fn`

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[src/serializer-class.utils.ts:53](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L53)

___

### serializerClassUtilFunctionSerializer

▸ **serializerClassUtilFunctionSerializer**(`fn`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |

#### Returns

`string`

#### Defined in

[src/serializer-class.utils.ts:19](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L19)

___

### serializerClassUtilIsFunctionSerialziedDefault

▸ **serializerClassUtilIsFunctionSerialziedDefault**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/serializer-class.utils.ts:40](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L40)

___

### serializerClassUtilReplacerCallbackDefault

▸ **serializerClassUtilReplacerCallbackDefault**(`key`, `value`, `functionSerializer`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`TSimpleTypes`](modules.md#tsimpletypes) |
| `functionSerializer` | [`IFunctionSerializer`](interfaces/ifunctionserializer.md) |

#### Returns

`any`

#### Defined in

[src/serializer-class.utils.ts:29](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L29)

___

### serializerClassUtilReviverCallbackDefault

▸ **serializerClassUtilReviverCallbackDefault**(`key`, `value`, `functionSerializedChecker`, `functionParser`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |
| `functionSerializedChecker` | [`ISerializerClassCheckerIsFunctionSerialized`](interfaces/iserializerclasscheckerisfunctionserialized.md) |
| `functionParser` | [`IFunctionParser`](interfaces/ifunctionparser.md) |

#### Returns

`any`

#### Defined in

[src/serializer-class.utils.ts:70](https://github.com/pashoo2/serializer/blob/01e8d50/src/serializer-class.utils.ts#L70)
