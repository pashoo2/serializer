import { TSimpleTypes, IFunctionSerializer, IFunctionParser, ISerializerClassCheckerIsFunctionSerialized, ISerializerClassReplacerCallback, ISerializerClassReviverCallback } from './types';
export declare function serializerClassUtilFunctionSerializer(fn: (...args: any[]) => any): string;
export declare function serializerClassUtilReplacerCallbackDefault(key: string, value: TSimpleTypes, functionSerializer: IFunctionSerializer): any;
export declare function serializerClassUtilIsFunctionSerialziedDefault(value: any): boolean;
export declare function serializerClassUtilFunctionParserDefault(functionSerialized: string): (...args: any[]) => any;
export declare function serializerClassUtilReviverCallbackDefault(key: string, value: any, functionSerializedChecker: ISerializerClassCheckerIsFunctionSerialized, functionParser: IFunctionParser): any;
export declare function serializerClassUtilCreateReplacerArgumentForJSONStringify(functionSerializer: IFunctionSerializer, replacerCallback: ISerializerClassReplacerCallback): (this: any, key: string, value: any) => any;
export declare function serializerClassUtilCreateReviverArgumentForJSONParse(functionSerializedChecker: ISerializerClassCheckerIsFunctionSerialized, functionParser: IFunctionParser, reviverCallback: ISerializerClassReviverCallback): (this: any, key: string, value: any) => any;
