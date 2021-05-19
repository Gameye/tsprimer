import * as test from "tape-promise/tape";
import { packageInfo } from "./package";

test("package version", async t => {
    t.equal(packageInfo.version, "v0.0.0-local");
});
