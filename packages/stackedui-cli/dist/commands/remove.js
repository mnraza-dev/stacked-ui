"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runRemove = runRemove;
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
function findComponentPath(appDir, componentName) {
    const targets = [
        path_1.default.join(appDir, "src/components/ui", componentName),
        path_1.default.join(appDir, "app/components/ui", componentName),
        path_1.default.join(appDir, "components/ui", componentName),
    ];
    return targets.find(fs_1.default.existsSync) || null;
}
function deleteRecursive(dirPath) {
    if (!fs_1.default.existsSync(dirPath))
        return;
    fs_1.default.readdirSync(dirPath).forEach((file) => {
        const currentPath = path_1.default.join(dirPath, file);
        if (fs_1.default.lstatSync(currentPath).isDirectory()) {
            deleteRecursive(currentPath);
        }
        else {
            fs_1.default.unlinkSync(currentPath);
        }
    });
    fs_1.default.rmdirSync(dirPath);
}
function runRemove(componentName) {
    const projectRoot = process.cwd();
    const appDir = findNextAppDir(projectRoot);
    if (!appDir) {
        console.error("❌ Could not find your Next.js app root folder.");
        process.exit(1);
    }
    const componentPath = findComponentPath(appDir, componentName);
    if (!componentPath) {
        console.error(`❌ Component '${componentName}' was not found in your app.`);
        process.exit(1);
    }
    deleteRecursive(componentPath);
    console.log(`🗑️ Removed component '${componentName}' from '${componentPath}'`);
}
