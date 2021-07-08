"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializerClassUtilCreateReviverArgumentForJSONParse = exports.serializerClassUtilCreateReplacerArgumentForJSONStringify = exports.serializerClassUtilReviverCallbackDefault = exports.serializerClassUtilFunctionParserSandboxedDefault = exports.serializerClassUtilIsFunctionSerialziedDefault = exports.serializerClassUtilReplacerCallbackDefault = exports.serializerClassUtilFunctionSerializer = void 0;
var utils_1 = require("@pashoo2/utils");
var sval_1 = __importDefault(require("sval"));
function serializerClassUtilFunctionSerializer(fn) {
    if (utils_1.isNativeFunction(fn)) {
        throw new Error('Function cannot be serialized');
    }
    var functionSerialized = fn.toString();
    return functionSerialized;
}
exports.serializerClassUtilFunctionSerializer = serializerClassUtilFunctionSerializer;
function serializerClassUtilReplacerCallbackDefault(key, value, functionSerializer) {
    if (typeof value === 'function') {
        return functionSerializer(value);
    }
    return value;
}
exports.serializerClassUtilReplacerCallbackDefault = serializerClassUtilReplacerCallbackDefault;
function serializerClassUtilIsFunctionSerialziedDefault(value) {
    if (typeof value !== 'string') {
        return false;
    }
    var valueTrimmed = value.trim();
    var isFunctionAnyTypeStringified = utils_1.isNonArrowFunctionStringified(valueTrimmed) ||
        utils_1.isArrowFunctionStringified(valueTrimmed);
    return isFunctionAnyTypeStringified;
}
exports.serializerClassUtilIsFunctionSerialziedDefault = serializerClassUtilIsFunctionSerialziedDefault;
function serializerClassUtilFunctionParserSandboxedDefault(functionSerialized) {
    // eslint-disable-next-line no-eval
    try {
        var interpreterForFunction = new sval_1.default({ ecmaVer: 5, sandBox: true });
        interpreterForFunction.run("exports.func = " + functionSerialized);
        var functionCreatedFromString = interpreterForFunction.exports.func;
        if (!functionCreatedFromString) {
            throw new Error('Failed to create function by it body');
        }
        return functionCreatedFromString;
    }
    catch (err) {
        throw new Error("Failed parse the function " + functionSerialized);
    }
}
exports.serializerClassUtilFunctionParserSandboxedDefault = serializerClassUtilFunctionParserSandboxedDefault;
function serializerClassUtilReviverCallbackDefault(key, value, functionSerializedChecker, functionParser) {
    if (functionSerializedChecker(value)) {
        return functionParser(value);
    }
    return value;
}
exports.serializerClassUtilReviverCallbackDefault = serializerClassUtilReviverCallbackDefault;
function serializerClassUtilCreateReplacerArgumentForJSONStringify(functionSerializer, replacerCallback) {
    return function (key, value) {
        return replacerCallback(key, value, functionSerializer);
    };
}
exports.serializerClassUtilCreateReplacerArgumentForJSONStringify = serializerClassUtilCreateReplacerArgumentForJSONStringify;
function serializerClassUtilCreateReviverArgumentForJSONParse(functionSerializedChecker, functionParser, reviverCallback) {
    return function (key, value) {
        return reviverCallback(key, value, functionSerializedChecker, functionParser);
    };
}
exports.serializerClassUtilCreateReviverArgumentForJSONParse = serializerClassUtilCreateReviverArgumentForJSONParse;
//# sourceMappingURL=serializer-class.utils.js.map