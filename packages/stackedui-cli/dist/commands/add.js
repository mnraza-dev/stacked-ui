"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAdd = runAdd;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const COMPONENTS_DIR = path_1.default.resolve(__dirname, "../../stackedui/src/components");
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
function copyRecursive(src, dest) {
    if (!fs_1.default.existsSync(dest))
        fs_1.default.mkdirSync(dest, { recursive: true });
    const entries = fs_1.default.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path_1.default.join(src, entry.name);
        const destPath = path_1.default.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyRecursive(srcPath, destPath);
        }
        else {
            fs_1.default.copyFileSync(srcPath, destPath);
        }
    }
}
function runAdd(componentName) {
    const projectRoot = process.cwd();
    const appDir = findNextAppDir(projectRoot);
    if (!appDir) {
        console.error("❌ Could not find your Next.js app root folder.");
        process.exit(1);
    }
    const srcTarget = path_1.default.join(appDir, "src/components/ui");
    const appTarget = path_1.default.join(appDir, "app/components/ui");
    const fallbackTarget = path_1.default.join(appDir, "components/ui");
    let finalTarget;
    if (fs_1.default.existsSync(srcTarget)) {
        finalTarget = srcTarget;
    }
    else if (fs_1.default.existsSync(appTarget)) {
        finalTarget = appTarget;
    }
    else {
        finalTarget = fallbackTarget;
        if (!fs_1.default.existsSync(finalTarget)) {
            fs_1.default.mkdirSync(finalTarget, { recursive: true });
            console.log(`📁 Created fallback directory: ${finalTarget}`);
        }
    }
    const srcDir = path_1.default.join(COMPONENTS_DIR, componentName);
    const destDir = path_1.default.join(finalTarget, componentName);
    if (!fs_1.default.existsSync(srcDir)) {
        console.error(`❌ Component '${componentName}' does not exist in stackedui.`);
        process.exit(1);
    }
    copyRecursive(srcDir, destDir);
    console.log(`✅ Component '${componentName}' added to '${destDir}'`);
}
