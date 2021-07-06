import {
  isArrowFunctionStringified,
  isNativeFunction,
  isNonArrowFunctionStringified,
} from '@pashoo2/utils';

import {
  TSimpleTypes,
  IFunctionSerializer,
  IFunctionParser,
  ISerializerClassCheckerIsFunctionSerialized,
  ISerializerClassReplacerCallback,
  ISerializerClassReviverCallback,
} from './types';

export function serializerClassUtilFunctionSerializer(
  fn: (...args: any[]) => any
): string {
  if (isNativeFunction(fn)) {
    throw new Error('Function cannot be serialized');
  }
  const functionSerialized = fn.toString();
  return functionSerialized;
}

export function serializerClassUtilReplacerCallbackDefault(
  key: string,
  value: TSimpleTypes,
  functionSerializer: IFunctionSerializer
): any {
  if (typeof value === 'function') {
    return functionSerializer(value);
  }
  return value;
}

export function serializerClassUtilIsFunctionSerialziedDefault(
  value: any
): boolean {
  if (typeof value !== 'string') {
    return false;
  }
  const valueTrimmed = value.trim();
  const isFunctionAnyTypeStringified =
    isNonArrowFunctionStringified(valueTrimmed) ||
    isArrowFunctionStringified(valueTrimmed);
  return isFunctionAnyTypeStringified;
}

export function serializerClassUtilFunctionParserDefault(
  functionSerialized: string
): (...args: any[]) => any {
  // eslint-disable-next-line no-eval
  try {
    // TODO - ReDoS attacks and make it create function in a sandbox
    const functionCreatedFromString = eval(`(${functionSerialized})`);
    if (!functionCreatedFromString) {
      throw new Error('Failed to create function by it body');
    }
    return functionCreatedFromString;
  } catch (err) {
    throw new Error(`Failed parse the function ${functionSerialized}`);
  }
}

export function serializerClassUtilReviverCallbackDefault(
  key: string,
  value: any,
  functionSerializedChecker: ISerializerClassCheckerIsFunctionSerialized,
  functionParser: IFunctionParser
): any {
  if (functionSerializedChecker(value)) {
    return functionParser(value);
  }
  return value;
}

export function serializerClassUtilCreateReplacerArgumentForJSONStringify(
  functionSerializer: IFunctionSerializer,
  replacerCallback: ISerializerClassReplacerCallback
): (this: any, key: string, value: any) => any {
  return (key: string, value: any) => {
    return replacerCallback(key, value, functionSerializer);
  };
}

export function serializerClassUtilCreateReviverArgumentForJSONParse(
  functionSerializedChecker: ISerializerClassCheckerIsFunctionSerialized,
  functionParser: IFunctionParser,
  reviverCallback: ISerializerClassReviverCallback
): (this: any, key: string, value: any) => any {
  return (key: string, value: any) => {
    return reviverCallback(
      key,
      value,
      functionSerializedChecker,
      functionParser
    );
  };
}
