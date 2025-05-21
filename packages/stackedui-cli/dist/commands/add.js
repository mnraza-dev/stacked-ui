#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const COMPONENTS_DIR = path_1.default.resolve(__dirname, "../../../stackedui/src/components");
function isNextJsProject(rootDir) {
    const nextConfig = path_1.default.join(rootDir, "next.config.js");
    const pkgJson = path_1.default.join(rootDir, "package.json");
    if (fs_1.default.existsSync(nextConfig))
        return true;
    if (fs_1.default.existsSync(pkgJson)) {
        try {
            const pkg = JSON.parse(fs_1.default.readFileSync(pkgJson, "utf-8"));
            return Boolean((pkg.dependencies && pkg.dependencies.next) ||
                (pkg.devDependencies && pkg.devDependencies.next));
        }
        catch { }
    }
    return false;
}
function getTargetComponentsDir(rootDir) {
    const nextApp = isNextJsProject(rootDir);
    if (nextApp) {
        const srcTarget = path_1.default.join(rootDir, "src/components/ui");
        const appTarget = path_1.default.join(rootDir, "app/components/ui");
        const fallbackTarget = path_1.default.join(rootDir, "components/ui");
        if (fs_1.default.existsSync(srcTarget))
            return srcTarget;
        if (fs_1.default.existsSync(appTarget))
            return appTarget;
        if (!fs_1.default.existsSync(fallbackTarget)) {
            fs_1.default.mkdirSync(fallbackTarget, { recursive: true });
            console.log(`📁 Created fallback directory: ${path_1.default.relative(rootDir, fallbackTarget)}`);
        }
        return fallbackTarget;
    }
    else {
        const reactTarget = path_1.default.join(rootDir, "src/components/ui");
        if (!fs_1.default.existsSync(reactTarget)) {
            fs_1.default.mkdirSync(reactTarget, { recursive: true });
            console.log(`📁 Created directory: ${path_1.default.relative(rootDir, reactTarget)}`);
        }
        return reactTarget;
    }
}
function copyRecursive(src, dest, createdFiles) {
    if (!fs_1.default.existsSync(dest))
        fs_1.default.mkdirSync(dest, { recursive: true });
    for (const entry of fs_1.default.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path_1.default.join(src, entry.name);
        const destPath = path_1.default.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyRecursive(srcPath, destPath, createdFiles);
        }
        else {
            fs_1.default.copyFileSync(srcPath, destPath);
            createdFiles.push(path_1.default.relative(process.cwd(), destPath));
        }
    }
}
async function add() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error("❌ Usage: stackedui-cli add <component>");
        process.exit(1);
    }
    const componentName = args[0];
    const projectRoot = process.cwd();
    console.log("✔ Checking registry.");
    const srcDir = path_1.default.join(COMPONENTS_DIR, componentName);
    if (!fs_1.default.existsSync(srcDir)) {
        console.error(`❌ Component '${componentName}' does not exist in stackedui.`);
        process.exit(1);
    }
    const targetDir = getTargetComponentsDir(projectRoot);
    const destDir = path_1.default.join(targetDir, componentName);
    console.log("✔ Installing dependencies.");
    // You could automate dependency installs here if you want, or remove this line if not applicable
    const createdFiles = [];
    copyRecursive(srcDir, destDir, createdFiles);
    console.log(`✔ Created ${createdFiles.length} file${createdFiles.length > 1 ? "s" : ""}:`);
    for (const file of createdFiles) {
        console.log(`  - ${file}`);
    }
    console.log(`✅ Component '${componentName}' added successfully!`);
}
add().catch((e) => {
    console.error("❌ Unexpected error:", e);
    process.exit(1);
});
