"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerClass = void 0;
var serializer_class_utils_1 = require("./serializer-class.utils");
var serializer_class_utils_2 = require("./serializer-class.utils");
var serializer_class_utils_3 = require("./serializer-class.utils");
/**
 * Used a replace of the JSON for values
 * parsing and serialization.
 *
 * @export
 * @class SerializerClass
 * @implements {ISerializer}
 * @template T
 */
var SerializerClass = /** @class */ (function () {
    function SerializerClass(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
    }
    Object.defineProperty(SerializerClass.prototype, "_defaultFunctionSerializer", {
        get: function () {
            return serializer_class_utils_1.serializerClassUtilFunctionSerializer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SerializerClass.prototype, "_defaultReplacerCallback", {
        get: function () {
            return serializer_class_utils_1.serializerClassUtilReplacerCallbackDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SerializerClass.prototype, "_defaultCheckerIsFunctionSerialized", {
        get: function () {
            return serializer_class_utils_3.serializerClassUtilIsFunctionSerialziedDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SerializerClass.prototype, "_defaultFunctionSerializedParser", {
        get: function () {
            return serializer_class_utils_1.serializerClassUtilFunctionParserSandboxedDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SerializerClass.prototype, "_defaultFunctionReviverCallback", {
        get: function () {
            return serializer_class_utils_2.serializerClassUtilReviverCallbackDefault;
        },
        enumerable: false,
        configurable: true
    });
    SerializerClass.prototype.stringify = function (obj) {
        var replacer = this._getReplacerArgumentForJSONStringify();
        return this._getStringifier()(obj, replacer);
    };
    SerializerClass.prototype.parse = function (str) {
        var reviver = this._createReviver();
        return this._getParser()(str, reviver);
    };
    SerializerClass.prototype._getStringifier = function () {
        return JSON.stringify;
    };
    SerializerClass.prototype._getParser = function () {
        return JSON.parse;
    };
    SerializerClass.prototype._getFunctionSerializer = function () {
        var _a;
        return (_a = this._options.functionSerializer) !== null && _a !== void 0 ? _a : this._defaultFunctionSerializer;
    };
    SerializerClass.prototype._getReplacerCallback = function () {
        var _a;
        return (_a = this._options.replacer) !== null && _a !== void 0 ? _a : this._defaultReplacerCallback;
    };
    SerializerClass.prototype._getReplacerArgumentForJSONStringify = function () {
        var functionSerializer = this._getFunctionSerializer();
        var replacerCallback = this._getReplacerCallback();
        return serializer_class_utils_1.serializerClassUtilCreateReplacerArgumentForJSONStringify(functionSerializer, replacerCallback);
    };
    SerializerClass.prototype._getCheckerIsFunctionSerialized = function () {
        var _a;
        return ((_a = this._options.functionSerializedChecker) !== null && _a !== void 0 ? _a : this._defaultCheckerIsFunctionSerialized);
    };
    SerializerClass.prototype._getFunctionParser = function () {
        var _a;
        return ((_a = this._options.functionParser) !== null && _a !== void 0 ? _a : this._defaultFunctionSerializedParser);
    };
    SerializerClass.prototype._getReviverCallback = function () {
        var _a;
        return (_a = this._options.reviver) !== null && _a !== void 0 ? _a : this._defaultFunctionReviverCallback;
    };
    SerializerClass.prototype._createReviver = function () {
        return serializer_class_utils_2.serializerClassUtilCreateReviverArgumentForJSONParse(this._getCheckerIsFunctionSerialized(), this._getFunctionParser(), this._getReviverCallback());
    };
    return SerializerClass;
}());
exports.SerializerClass = SerializerClass;
//# sourceMappingURL=serializer-class.js.map