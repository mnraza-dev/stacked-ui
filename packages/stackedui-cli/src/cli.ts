import fs from "fs";
import path from "path";
const COMPONENTS_DIR = path.resolve(__dirname, "../../stackedui/src/components");
const TARGET_DIR = path.resolve(process.cwd(), "apps/docs/components/ui");

const componentName = process.argv[2];

if (!componentName) {
    console.error("Usage: stackedui-cli <component>");
    process.exit(1);
}

const srcDir = path.join(COMPONENTS_DIR, componentName);
const destDir = path.join(TARGET_DIR, componentName);

if (!fs.existsSync(srcDir)) {
    console.error(`Component '${componentName}' does not exist.`);
    process.exit(1);
}

function copyRecursive(src: string, dest: string) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
copyRecursive(srcDir, destDir);
console.log(`Component '${componentName}' added to '${destDir}'`);
