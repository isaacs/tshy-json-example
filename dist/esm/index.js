import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { pj } from "./pj.js";
//@ts-ignore
import json from "./json.json" assert { type: "json" };
//@ts-expect-error
export const t = { nope: "not ok" };
console.log(json);
import("./blah.json", { assert: { type: "json" } }).then((result) => {
    console.error(result);
});
const external = JSON.parse(readFileSync(resolve(dirname(pj), "../json/external.json"), "utf8"));
console.error("external", external);
//# sourceMappingURL=index.js.map