import test from "tape-promise/tape.js";
import { packageInfo } from "./package.js";

test("package version", async t => {
    t.equal(packageInfo.version, "v0.0.0-local");
});
