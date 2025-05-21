#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("./commands");
const command = process.argv[2];
const arg = process.argv[3];
switch (command) {
    case "add":
        if (!arg) {
            console.error("❌ Usage: stackedui-cli add <component>");
            process.exit(1);
        }
        (0, commands_1.runAdd)(arg);
        break;
    case "remove":
        if (!arg) {
            console.error("❌ Usage: stackedui-cli remove <component>");
            process.exit(1);
        }
        (0, commands_1.runRemove)(arg);
        break;
    case "init":
        (0, commands_1.runInit)();
        break;
    case "list":
        (0, commands_1.runList)();
        break;
    default:
        console.error("❌ Unknown command. Available commands: add, remove, init, list");
        process.exit(1);
}
