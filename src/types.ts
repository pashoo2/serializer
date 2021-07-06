export type TSimpleTypes =
  | number
  | Number
  | string
  | String
  | boolean
  | null
  | undefined;

export interface ISerializableObject<T> {
  [key: string]: T;
}

export interface ISerializer<T = any> {
  stringify(o: T): string;
  parse(data: string): T;
}

export interface IFunctionSerializer {
  (fn: (...args: any[]) => any): string;
}

export interface IFunctionParser {
  (fnSerialized: string): (...args: any[]) => any;
}

/**
 * Should return a value can be serialized with JSON.stringify
 *
 * @export
 * @interface ISerializerClassReplacerCallback
 */
export interface ISerializerClassReplacerCallback {
  (key: string, value: any, functionSerializer: IFunctionSerializer): any;
}

/**
 * Should return true is string is a function serialized with .toString()
 *
 * @export
 * @interface ISerializerClassCheckerIsFunctionSerialized
 */
export interface ISerializerClassCheckerIsFunctionSerialized {
  (str: any): boolean;
}

/**
 * Used to parse a value stringified earlier
 *
 * @export
 * @interface ISerializerClassReviverCallback
 */
export interface ISerializerClassReviverCallback {
  (
    key: string,
    value: any,
    functionSerializedChecker: ISerializerClassCheckerIsFunctionSerialized,
    functionParser: IFunctionParser
  ): any;
}

export interface ISerializerClassConstructorOptions {
  /**
   * Will be used for functions serialization
   *
   * @type {IFunctionSerializer}
   * @memberof ISerializerClassConstructorOptions
   */
  functionSerializer?: IFunctionSerializer;
  /**
   * Will be used as a JSON.stringify second argument
   * called "replacer".
   *
   * @type null
   * @memberof ISerializerClassConstructorOptions
   */
  replacer?: ISerializerClassReplacerCallback;
  /**
   * Will be used to define whether a string is a function
   * serialized.
   *
   * @type {ISerializerClassCheckerIsFunctionSerialized}
   * @memberof ISerializerClassConstructorOptions
   */
  functionSerializedChecker?: ISerializerClassCheckerIsFunctionSerialized;
  /**
   * Will be used to parse a function serialized
   *
   * @type {IFunctionParser}
   * @memberof ISerializerClassConstructorOptions
   */
  functionParser?: IFunctionParser;
  /**
   * Should return a value parsed, in JSON.parse reviver callback
   *
   * @type {ISerializerClassReviverCallback}
   * @memberof ISerializerClassConstructorOptions
   */
  reviver?: ISerializerClassReviverCallback;
}
