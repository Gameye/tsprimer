import * as path from "path";

export const projectRoot = makeProjectRoot();

function makeProjectRoot() {
    const dirname = path.dirname(new URL(import.meta.url).pathname);
    return path.resolve(dirname, "..", "..");
}
