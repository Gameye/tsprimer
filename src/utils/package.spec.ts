import test from "tape-promise/tape.js";
import { packageInfo } from "./package.js";

test("package version", async t => {
    t.notOk(packageInfo.version, undefined);
});
