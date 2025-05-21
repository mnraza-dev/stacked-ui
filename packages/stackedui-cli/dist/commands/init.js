#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const REQUIRED_DEPS = [
    "@radix-ui/react-slot",
    "clsx",
    // Add other runtime deps your components need here
];
const REQUIRED_DEV_DEPS = [
    "typescript",
    // Add dev deps if your users need them
];
function detectPackageManager() {
    try {
        (0, child_process_1.execSync)("pnpm --version", { stdio: "ignore" });
        return "pnpm";
    }
    catch { }
    try {
        (0, child_process_1.execSync)("yarn --version", { stdio: "ignore" });
        return "yarn";
    }
    catch { }
    return "npm";
}
function installPackages(manager, packages, isDev = false) {
    if (packages.length === 0)
        return;
    let cmd = "";
    if (manager === "pnpm") {
        cmd = `pnpm add ${isDev ? "-D" : ""} ${packages.join(" ")}`;
    }
    else if (manager === "yarn") {
        cmd = `yarn add ${isDev ? "-D" : ""} ${packages.join(" ")}`;
    }
    else {
        cmd = `npm install ${isDev ? "--save-dev" : "--save"} ${packages.join(" ")}`;
    }
    console.log(`✔ Installing ${isDev ? "dev " : ""}dependencies with ${manager}...`);
    (0, child_process_1.execSync)(cmd, { stdio: "inherit" });
}
function addTsConfigIfMissing(rootDir) {
    const tsconfigPath = path_1.default.join(rootDir, "tsconfig.json");
    if (!fs_1.default.existsSync(tsconfigPath)) {
        console.log("✔ Creating basic tsconfig.json");
        fs_1.default.writeFileSync(tsconfigPath, JSON.stringify({
            compilerOptions: {
                target: "ESNext",
                module: "ESNext",
                lib: ["DOM", "ESNext"],
                moduleResolution: "Node",
                esModuleInterop: true,
                skipLibCheck: true,
                forceConsistentCasingInFileNames: true,
                strict: true,
                jsx: "react-jsx",
                baseUrl: ".",
                paths: {
                    "@/*": ["src/*"],
                },
            },
            include: ["src"],
            exclude: ["node_modules"],
        }, null, 2));
    }
}
async function init() {
    const rootDir = process.cwd();
    console.log("🏗️ Initializing stackedui component library setup...");
    // Detect package manager
    const pkgManager = detectPackageManager();
    console.log(`✔ Detected package manager: ${pkgManager}`);
    // Install runtime deps
    installPackages(pkgManager, REQUIRED_DEPS, false);
    // Install dev deps
    installPackages(pkgManager, REQUIRED_DEV_DEPS, true);
    // Add tsconfig.json if missing
    addTsConfigIfMissing(rootDir);
    // You can add other config or file setup here (like global CSS import tips)
    console.log("✅ stackedui initialized successfully!");
    console.log("👉 Now you can add components with: stackedui-cli add <component-name>");
}
init().catch((e) => {
    console.error("❌ Init failed:", e);
    process.exit(1);
});
