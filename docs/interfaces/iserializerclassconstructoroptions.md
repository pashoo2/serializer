[@pashoo2/serializer](../README.md) / [Exports](../modules.md) / ISerializerClassConstructorOptions

# Interface: ISerializerClassConstructorOptions

## Table of contents

### Properties

- [functionParser](iserializerclassconstructoroptions.md#functionparser)
- [functionSerializedChecker](iserializerclassconstructoroptions.md#functionserializedchecker)
- [functionSerializer](iserializerclassconstructoroptions.md#functionserializer)
- [replacer](iserializerclassconstructoroptions.md#replacer)
- [reviver](iserializerclassconstructoroptions.md#reviver)

## Properties

### functionParser

• `Optional` **functionParser**: [`IFunctionParser`](ifunctionparser.md)

Will be used to parse a function serialized

**`memberof`** ISerializerClassConstructorOptions

#### Defined in

src/types.ts:92

___

### functionSerializedChecker

• `Optional` **functionSerializedChecker**: [`ISerializerClassCheckerIsFunctionSerialized`](iserializerclasscheckerisfunctionserialized.md)

Will be used to define whether a string is a function
serialized.

**`memberof`** ISerializerClassConstructorOptions

#### Defined in

src/types.ts:85

___

### functionSerializer

• `Optional` **functionSerializer**: [`IFunctionSerializer`](ifunctionserializer.md)

Will be used for functions serialization

**`memberof`** ISerializerClassConstructorOptions

#### Defined in

src/types.ts:69

___

### replacer

• `Optional` **replacer**: [`ISerializerClassReplacerCallback`](iserializerclassreplacercallback.md)

Will be used as a JSON.stringify second argument
called "replacer".

**`memberof`** ISerializerClassConstructorOptions

#### Defined in

src/types.ts:77

___

### reviver

• `Optional` **reviver**: [`ISerializerClassReviverCallback`](iserializerclassrevivercallback.md)

Should return a value parsed, in JSON.parse reviver callback

**`memberof`** ISerializerClassConstructorOptions

#### Defined in

src/types.ts:99
