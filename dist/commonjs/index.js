"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
//@ts-ignore
const json_json_1 = __importDefault(require("./json.json"));
//@ts-expect-error
exports.t = { nope: 'not ok' };
console.log(json_json_1.default);
import('./blah.json', { assert: { type: 'json' } }).then(result => {
    console.error(result);
});
//# sourceMappingURL=index.js.map