import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execSync } from "child_process";
import { AVAILABLE_COMPONENTS } from "./list.js";
function getTargetDir(cwd) {
    const isSrc = fs.existsSync(path.join(cwd, "src"));
    const componentsPath = isSrc ? path.join(cwd, "src/components/ui") : path.join(cwd, "components/ui");
    fs.mkdirSync(componentsPath, { recursive: true });
    return componentsPath;
}
export async function addCommand(args) {
    const cwd = process.cwd();
    const skipInstall = args.includes("--skip-install") || args.includes("--no-deps");
    const componentNames = args.filter((a) => !a.startsWith("--"));
    if (componentNames.length === 0) {
        console.error(chalk.red("❌ Error: Please specify at least one component to add."));
        console.log(`Example: ${chalk.cyan("npx stackedui-cli add button input")}`);
        process.exit(1);
    }
    const targetDir = getTargetDir(cwd);
    for (const rawName of componentNames) {
        const name = rawName.toLowerCase();
        const componentInfo = AVAILABLE_COMPONENTS[name];
        if (!componentInfo) {
            console.warn(chalk.yellow(`⚠️ Warning: "${name}" is not a recognized component. Run "stackedui-cli list" to see options.`));
            continue;
        }
        console.log(chalk.blue(`⏳ Adding ${chalk.bold(name)}...`));
        // Check if component requires additional dependencies
        if (!skipInstall && componentInfo.dependencies && componentInfo.dependencies.length > 0) {
            const hasPkgJson = fs.existsSync(path.join(cwd, "package.json"));
            if (hasPkgJson) {
                let pm = "npm";
                if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml")))
                    pm = "pnpm";
                else if (fs.existsSync(path.join(cwd, "yarn.lock")))
                    pm = "yarn";
                else if (fs.existsSync(path.join(cwd, "bun.lockb")) || fs.existsSync(path.join(cwd, "bun.lock")))
                    pm = "bun";
                const addCmd = pm === "npm" ? "npm install" : pm === "yarn" ? "yarn add" : `${pm} add`;
                try {
                    execSync(`${addCmd} ${componentInfo.dependencies.join(" ")}`, { stdio: "ignore", cwd });
                }
                catch {
                    console.warn(chalk.dim(`(Optional: run ${addCmd} ${componentInfo.dependencies.join(" ")})`));
                }
            }
        }
        // Determine target file
        const targetFile = path.join(targetDir, `${name}.tsx`);
        if (fs.existsSync(targetFile)) {
            console.log(chalk.yellow(`ℹ ${path.relative(cwd, targetFile)} already exists. Skipping.`));
            continue;
        }
        // Generate component stub referencing library
        const componentContent = `import * as React from "react";
// Scaffolding export from Stacked UI package
export * from "stackedui";
`;
        fs.writeFileSync(targetFile, componentContent, "utf-8");
        console.log(chalk.green(`✔ Created ${path.relative(cwd, targetFile)}`));
    }
    console.log(chalk.bold.green("\n✨ Component installation complete!\n"));
}
