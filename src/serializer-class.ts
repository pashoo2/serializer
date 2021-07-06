import {createFunctionFromSerializedFunction} from '@pashoo2/utils';

import {
  ISerializerClassConstructorOptions,
  ISerializerClassReplacerCallback,
  ISerializerClassCheckerIsFunctionSerialized,
  ISerializerClassReviverCallback,
  ISerializer,
  IFunctionSerializer,
  IFunctionParser,
  ISerializableObject,
  TSimpleTypes,
} from './types';
import {
  serializerClassUtilFunctionSerializer,
  serializerClassUtilReplacerCallbackDefault,
  serializerClassUtilCreateReplacerArgumentForJSONStringify,
} from './serializer-class.utils';
import {
  serializerClassUtilReviverCallbackDefault,
  serializerClassUtilCreateReviverArgumentForJSONParse,
} from './serializer-class.utils';
import {serializerClassUtilIsFunctionSerialziedDefault} from './serializer-class.utils';

/**
 * Used a replace of the JSON for values
 * parsing and serialization.
 *
 * @export
 * @class SerializerClass
 * @implements {ISerializer}
 * @template T
 */
export class SerializerClass<T = any> implements ISerializer {
  protected get _defaultFunctionSerializer(): IFunctionSerializer {
    return serializerClassUtilFunctionSerializer;
  }

  protected get _defaultReplacerCallback(): ISerializerClassReplacerCallback {
    return serializerClassUtilReplacerCallbackDefault;
  }

  protected get _defaultCheckerIsFunctionSerialized(): ISerializerClassCheckerIsFunctionSerialized {
    return serializerClassUtilIsFunctionSerialziedDefault;
  }

  protected get _defaultFunctionSerializedParser(): IFunctionParser {
    return createFunctionFromSerializedFunction;
  }

  protected get _defaultFunctionReviverCallback(): ISerializerClassReviverCallback {
    return serializerClassUtilReviverCallbackDefault;
  }

  constructor(
    protected readonly _options: ISerializerClassConstructorOptions = {}
  ) {}
  public stringify(obj: ISerializableObject<T> | TSimpleTypes): string {
    const replacer = this._getReplacerArgumentForJSONStringify();
    return this._getStringifier()(obj, replacer);
  }
  public parse(str: string): ISerializableObject<T> | TSimpleTypes {
    const reviver = this._createReviver();
    return this._getParser()(str, reviver);
  }

  protected _getStringifier(): typeof JSON.stringify {
    return JSON.stringify;
  }

  protected _getParser(): typeof JSON.parse {
    return JSON.parse;
  }

  protected _getFunctionSerializer(): IFunctionSerializer {
    return this._options.functionSerializer ?? this._defaultFunctionSerializer;
  }

  protected _getReplacerCallback(): ISerializerClassReplacerCallback {
    return this._options.replacer ?? this._defaultReplacerCallback;
  }

  protected _getReplacerArgumentForJSONStringify(): (
    this: any,
    key: string,
    value: any
  ) => any {
    const functionSerializer = this._getFunctionSerializer();
    const replacerCallback = this._getReplacerCallback();
    return serializerClassUtilCreateReplacerArgumentForJSONStringify(
      functionSerializer,
      replacerCallback
    );
  }

  protected _getCheckerIsFunctionSerialized(): ISerializerClassCheckerIsFunctionSerialized {
    return (
      this._options.functionSerializedChecker ??
      this._defaultCheckerIsFunctionSerialized
    );
  }

  protected _getFunctionParser(): IFunctionParser {
    return (
      this._options.functionParser ?? this._defaultFunctionSerializedParser
    );
  }

  protected _getReviverCallback(): ISerializerClassReviverCallback {
    return this._options.reviver ?? this._defaultFunctionReviverCallback;
  }

  protected _createReviver(): (this: any, key: string, value: any) => any {
    return serializerClassUtilCreateReviverArgumentForJSONParse(
      this._getCheckerIsFunctionSerialized(),
      this._getFunctionParser(),
      this._getReviverCallback()
    );
  }
}
