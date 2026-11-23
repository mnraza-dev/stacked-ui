import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execSync } from "child_process";
export async function initCommand(args) {
    const cwd = process.cwd();
    console.log(chalk.bold.hex("#6366f1")("\n🚀 Initializing Stacked UI in your project...\n"));
    // Detect package manager
    let pm = "npm";
    if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml")))
        pm = "pnpm";
    else if (fs.existsSync(path.join(cwd, "yarn.lock")))
        pm = "yarn";
    else if (fs.existsSync(path.join(cwd, "bun.lockb")) || fs.existsSync(path.join(cwd, "bun.lock")))
        pm = "bun";
    const addCmd = pm === "npm" ? "npm install" : pm === "yarn" ? "yarn add" : `${pm} add`;
    // 1. Install base peer dependencies
    console.log(chalk.blue(`📦 Installing core dependencies using ${pm}...`));
    const baseDeps = ["clsx", "tailwind-merge", "class-variance-authority", "lucide-react"];
    try {
        execSync(`${addCmd} ${baseDeps.join(" ")}`, { stdio: "inherit", cwd });
        console.log(chalk.green("✔ Base dependencies installed.\n"));
    }
    catch (err) {
        console.warn(chalk.yellow("⚠️ Failed to auto-install dependencies. Please run manually:"));
        console.warn(chalk.cyan(`  ${addCmd} ${baseDeps.join(" ")}\n`));
    }
    // 2. Create lib/utils.ts with cn() helper
    const isSrc = fs.existsSync(path.join(cwd, "src"));
    const libDir = isSrc ? path.join(cwd, "src/lib") : path.join(cwd, "lib");
    fs.mkdirSync(libDir, { recursive: true });
    const utilsPath = path.join(libDir, "utils.ts");
    if (!fs.existsSync(utilsPath)) {
        const utilsContent = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
        fs.writeFileSync(utilsPath, utilsContent, "utf-8");
        console.log(chalk.green(`✔ Created ${path.relative(cwd, utilsPath)}`));
    }
    else {
        console.log(chalk.dim(`ℹ ${path.relative(cwd, utilsPath)} already exists.`));
    }
    // 3. Create components.json configuration
    const componentsJsonPath = path.join(cwd, "components.json");
    if (!fs.existsSync(componentsJsonPath)) {
        const config = {
            $schema: "https://ui.shadcn.com/schema.json",
            style: "new-york",
            rsc: true,
            tsx: true,
            tailwind: {
                config: fs.existsSync(path.join(cwd, "tailwind.config.ts"))
                    ? "tailwind.config.ts"
                    : fs.existsSync(path.join(cwd, "tailwind.config.js"))
                        ? "tailwind.config.js"
                        : "",
                css: isSrc && fs.existsSync(path.join(cwd, "src/app/globals.css"))
                    ? "src/app/globals.css"
                    : fs.existsSync(path.join(cwd, "app/globals.css"))
                        ? "app/globals.css"
                        : "src/index.css",
                baseColor: "neutral",
                cssVariables: true,
            },
            aliases: {
                components: isSrc ? "@/components" : "~/components",
                utils: isSrc ? "@/lib/utils" : "~/lib/utils",
                ui: isSrc ? "@/components/ui" : "~/components/ui",
                lib: isSrc ? "@/lib" : "~/lib",
            },
        };
        fs.writeFileSync(componentsJsonPath, JSON.stringify(config, null, 2), "utf-8");
        console.log(chalk.green(`✔ Created components.json`));
    }
    console.log(chalk.bold.green("\n✨ Stacked UI initialized successfully!"));
    console.log(`Add your first component: ${chalk.cyan("npx stackedui-cli add button")}\n`);
}
