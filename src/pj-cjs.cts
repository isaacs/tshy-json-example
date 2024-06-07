import { findPackageJson } from "package-json-from-dist";
export const pj = findPackageJson(__filename, "../package.json");
