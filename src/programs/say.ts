import * as Sentry from "@sentry/node";
import * as program from "commander";
import { waitForSignal } from "../utils";

program.
    command("say").
    option("--message <string>", "What should I say?", String).
    action(programAction);

interface ActionConfig {
    message: string;
}
async function programAction({
    message,
}: ActionConfig) {
    Sentry.init();

    console.log(message);
    await waitForSignal("SIGINT");
}
