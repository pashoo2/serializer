import { ISerializerClassConstructorOptions, ISerializerClassReplacerCallback, ISerializerClassCheckerIsFunctionSerialized, ISerializerClassReviverCallback, ISerializer, IFunctionSerializer, IFunctionParser, ISerializableObject, TSimpleTypes } from './types';
/**
 * Used a replace of the JSON for values
 * parsing and serialization.
 *
 * @export
 * @class SerializerClass
 * @implements {ISerializer}
 * @template T
 */
export declare class SerializerClass<T = any> implements ISerializer {
    protected readonly _options: ISerializerClassConstructorOptions;
    protected get _defaultFunctionSerializer(): IFunctionSerializer;
    protected get _defaultReplacerCallback(): ISerializerClassReplacerCallback;
    protected get _defaultCheckerIsFunctionSerialized(): ISerializerClassCheckerIsFunctionSerialized;
    protected get _defaultFunctionSerializedParser(): IFunctionParser;
    protected get _defaultFunctionReviverCallback(): ISerializerClassReviverCallback;
    constructor(_options?: ISerializerClassConstructorOptions);
    stringify(obj: ISerializableObject<T> | TSimpleTypes): string;
    parse(str: string): ISerializableObject<T> | TSimpleTypes;
    protected _getStringifier(): typeof JSON.stringify;
    protected _getParser(): typeof JSON.parse;
    protected _getFunctionSerializer(): IFunctionSerializer;
    protected _getReplacerCallback(): ISerializerClassReplacerCallback;
    protected _getReplacerArgumentForJSONStringify(): (this: any, key: string, value: any) => any;
    protected _getCheckerIsFunctionSerialized(): ISerializerClassCheckerIsFunctionSerialized;
    protected _getFunctionParser(): IFunctionParser;
    protected _getReviverCallback(): ISerializerClassReviverCallback;
    protected _createReviver(): (this: any, key: string, value: any) => any;
}
