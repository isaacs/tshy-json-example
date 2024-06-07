"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const pj_js_1 = require("./pj.js");
//@ts-ignore
const json_json_1 = __importDefault(require("./json.json"));
//@ts-expect-error
exports.t = { nope: "not ok" };
console.log(json_json_1.default);
import("./blah.json", { assert: { type: "json" } }).then((result) => {
    console.error(result);
});
const external = JSON.parse((0, fs_1.readFileSync)((0, path_1.resolve)((0, path_1.dirname)(pj_js_1.pj), "../json/external.json"), "utf8"));
console.error("external", external);
//# sourceMappingURL=index.js.map