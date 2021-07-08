[@pashoo2/serializer](../README.md) / [Exports](../modules.md) / ISerializerClassReplacerCallback

# Interface: ISerializerClassReplacerCallback

## Callable

### ISerializerClassReplacerCallback

▸ **ISerializerClassReplacerCallback**(`key`, `value`, `functionSerializer`): `any`

Should return a value can be serialized with JSON.stringify

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |
| `functionSerializer` | [`IFunctionSerializer`](ifunctionserializer.md) |

#### Returns

`any`

#### Defined in

[src/types.ts:33](https://github.com/pashoo2/serializer/blob/01e8d50/src/types.ts#L33)
