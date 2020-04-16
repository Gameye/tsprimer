import * as debug from "debug";
import { packageName } from ".";

export function createLogger() {
    return debug(packageName);
}
