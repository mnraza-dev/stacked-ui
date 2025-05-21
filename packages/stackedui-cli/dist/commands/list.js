"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runList = runList;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const COMPONENTS_DIR = path_1.default.resolve(__dirname, "../../stackedui/src/components");
function runList() {
    if (!fs_1.default.existsSync(COMPONENTS_DIR)) {
        console.error("❌ Components directory not found:", COMPONENTS_DIR);
        process.exit(1);
    }
    const components = fs_1.default.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((dir) => dir.name);
    if (components.length === 0) {
        console.log("⚠️  No components found in stackedui.");
    }
    else {
        console.log("📦 Available components:");
        components.forEach((comp) => console.log(` - ${comp}`));
    }
}
