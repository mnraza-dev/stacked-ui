"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runInit = runInit;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function findNextAppDir(startDir) {
    let currentDir = startDir;
    while (currentDir !== path_1.default.parse(currentDir).root) {
        const pkgJson = path_1.default.join(currentDir, "package.json");
        const nextConfig = path_1.default.join(currentDir, "next.config.js");
        if (fs_1.default.existsSync(pkgJson)) {
            try {
                const pkg = JSON.parse(fs_1.default.readFileSync(pkgJson, "utf-8"));
                if ((pkg.dependencies && pkg.dependencies.next) ||
                    (pkg.devDependencies && pkg.devDependencies.next)) {
                    return currentDir;
                }
            }
            catch {
                // ignore JSON parse errors
            }
        }
        if (fs_1.default.existsSync(nextConfig)) {
            return currentDir;
        }
        currentDir = path_1.default.dirname(currentDir);
    }
    return null;
}
function runInit() {
    const projectRoot = process.cwd();
    const appDir = findNextAppDir(projectRoot);
    if (!appDir) {
        console.error("❌ Could not find your Next.js app root folder.");
        process.exit(1);
    }
    const configPath = path_1.default.join(appDir, "stackedui.config.json");
    if (fs_1.default.existsSync(configPath)) {
        console.log("✅ stackedui is already initialized.");
        return;
    }
    const defaultConfig = {
        componentsPath: "src/components/ui", // User can edit this later
    };
    fs_1.default.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log(`✅ Initialized stackedui in ${appDir}`);
    console.log("📦 Created 'stackedui.config.json' with default config.");
}
