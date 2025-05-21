#!/usr/bin/env node

import { runAdd, runRemove, runInit, runList } from "./commands";

const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case "add":
    if (!arg) {
      console.error("❌ Usage: stackedui-cli add <component>");
      process.exit(1);
    }
    runAdd(arg);
    break;

  case "remove":
    if (!arg) {
      console.error("❌ Usage: stackedui-cli remove <component>");
      process.exit(1);
    }
    runRemove(arg);
    break;

  case "init":
    runInit();
    break;

  case "list":
    runList();
    break;

  default:
    console.error("❌ Unknown command. Available commands: add, remove, init, list");
    process.exit(1);
}
