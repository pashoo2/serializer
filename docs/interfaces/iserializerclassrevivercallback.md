[@pashoo2/serializer](../README.md) / [Exports](../modules.md) / ISerializerClassReviverCallback

# Interface: ISerializerClassReviverCallback

## Callable

### ISerializerClassReviverCallback

▸ **ISerializerClassReviverCallback**(`key`, `value`, `functionSerializedChecker`, `functionParser`): `any`

Used to parse a value stringified earlier

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |
| `functionSerializedChecker` | [`ISerializerClassCheckerIsFunctionSerialized`](iserializerclasscheckerisfunctionserialized.md) |
| `functionParser` | [`IFunctionParser`](ifunctionparser.md) |

#### Returns

`any`

#### Defined in

[src/types.ts:53](https://github.com/pashoo2/serializer/blob/3d29641/src/types.ts#L53)
