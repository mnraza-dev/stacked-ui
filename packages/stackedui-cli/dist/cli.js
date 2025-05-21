"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const command = process.argv[2];
switch (command) {
    case "init":
        (0, init_1.init)();
        break;
    case "add":
        (0, add_1.add)();
        break;
    default:
        console.log("Unknown command");
}
