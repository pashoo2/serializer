[@pashoo2/serializer](../README.md) / [Exports](../modules.md) / ISerializer

# Interface: ISerializer<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Implemented by

- [`SerializerClass`](../classes/serializerclass.md)

## Table of contents

### Methods

- [parse](iserializer.md#parse)
- [stringify](iserializer.md#stringify)

## Methods

### parse

▸ **parse**(`data`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`T`

#### Defined in

[src/types.ts:16](https://github.com/pashoo2/serializer/blob/3d29641/src/types.ts#L16)

___

### stringify

▸ **stringify**(`o`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

`string`

#### Defined in

[src/types.ts:15](https://github.com/pashoo2/serializer/blob/3d29641/src/types.ts#L15)
