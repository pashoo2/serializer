"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerClass = void 0;
const serializer_class_utils_1 = require("./serializer-class.utils");
const serializer_class_utils_2 = require("./serializer-class.utils");
const serializer_class_utils_3 = require("./serializer-class.utils");
/**
 * Used a replace of the JSON for values
 * parsing and serialization.
 *
 * @export
 * @class SerializerClass
 * @implements {ISerializer}
 * @template T
 */
class SerializerClass {
    constructor(_options = {}) {
        this._options = _options;
    }
    get _defaultFunctionSerializer() {
        return serializer_class_utils_1.serializerClassUtilFunctionSerializer;
    }
    get _defaultReplacerCallback() {
        return serializer_class_utils_1.serializerClassUtilReplacerCallbackDefault;
    }
    get _defaultCheckerIsFunctionSerialized() {
        return serializer_class_utils_3.serializerClassUtilIsFunctionSerialziedDefault;
    }
    get _defaultFunctionSerializedParser() {
        return serializer_class_utils_1.serializerClassUtilFunctionParserSandboxedDefault;
    }
    get _defaultFunctionReviverCallback() {
        return serializer_class_utils_2.serializerClassUtilReviverCallbackDefault;
    }
    stringify(obj) {
        const replacer = this._getReplacerArgumentForJSONStringify();
        return this._getStringifier()(obj, replacer);
    }
    parse(str) {
        const reviver = this._createReviver();
        return this._getParser()(str, reviver);
    }
    _getStringifier() {
        return JSON.stringify;
    }
    _getParser() {
        return JSON.parse;
    }
    _getFunctionSerializer() {
        var _a;
        return (_a = this._options.functionSerializer) !== null && _a !== void 0 ? _a : this._defaultFunctionSerializer;
    }
    _getReplacerCallback() {
        var _a;
        return (_a = this._options.replacer) !== null && _a !== void 0 ? _a : this._defaultReplacerCallback;
    }
    _getReplacerArgumentForJSONStringify() {
        const functionSerializer = this._getFunctionSerializer();
        const replacerCallback = this._getReplacerCallback();
        return serializer_class_utils_1.serializerClassUtilCreateReplacerArgumentForJSONStringify(functionSerializer, replacerCallback);
    }
    _getCheckerIsFunctionSerialized() {
        var _a;
        return ((_a = this._options.functionSerializedChecker) !== null && _a !== void 0 ? _a : this._defaultCheckerIsFunctionSerialized);
    }
    _getFunctionParser() {
        var _a;
        return ((_a = this._options.functionParser) !== null && _a !== void 0 ? _a : this._defaultFunctionSerializedParser);
    }
    _getReviverCallback() {
        var _a;
        return (_a = this._options.reviver) !== null && _a !== void 0 ? _a : this._defaultFunctionReviverCallback;
    }
    _createReviver() {
        return serializer_class_utils_2.serializerClassUtilCreateReviverArgumentForJSONParse(this._getCheckerIsFunctionSerialized(), this._getFunctionParser(), this._getReviverCallback());
    }
}
exports.SerializerClass = SerializerClass;
//# sourceMappingURL=serializer-class.js.map