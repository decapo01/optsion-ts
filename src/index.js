"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptType;
(function (OptType) {
    OptType[OptType["Some"] = 0] = "Some";
    OptType[OptType["None"] = 1] = "None";
})(OptType = exports.OptType || (exports.OptType = {}));
exports.some = function (item) {
    return { item: item, type: OptType.Some };
};
exports.none = function () {
    return { type: OptType.None };
};
exports.map = function (option, func) {
    switch (option.type) {
        case OptType.None: return exports.none();
        case OptType.Some: return exports.some(func(option.item));
    }
};
exports.flatMap = function (option, func) {
    switch (option.type) {
        case OptType.None: return exports.none();
        case OptType.Some: return func(option.item);
    }
};
exports.getOrElse = function (option, other) {
    switch (option.type) {
        case OptType.Some: return option.item;
        case OptType.None: return other;
    }
};
exports.getUnsafe = function (option) {
    switch (option.type) {
        case OptType.Some: return option.item;
        case OptType.None: throw new Error("getUnsafe called on None");
    }
};
