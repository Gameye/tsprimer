import { program } from "commander";
import { packageInfo } from "../utils/index.js";

if (packageInfo.version) {
    program.version(packageInfo.version);
}
