#!/usr/bin/env node
import fs from "fs";
import path from "path";

const COMPONENTS_DIR = path.resolve(__dirname, "../../stackedui/src/components");

// Detect if current project is Next.js
function isNextJsProject(rootDir: string): boolean {
  const nextConfig = path.join(rootDir, "next.config.js");
  const pkgJson = path.join(rootDir, "package.json");

  if (fs.existsSync(nextConfig)) return true;

  if (fs.existsSync(pkgJson)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJson, "utf-8"));
      if (
        (pkg.dependencies && pkg.dependencies.next) ||
        (pkg.devDependencies && pkg.devDependencies.next)
      ) {
        return true;
      }
    } catch {
      // ignore JSON parse errors
    }
  }
  return false;
}

// Determine target directory based on project type
function getTargetComponentsDir(rootDir: string): string {
  const nextApp = isNextJsProject(rootDir);

  if (nextApp) {
    const srcTarget = path.join(rootDir, "src/components/ui");
    const appTarget = path.join(rootDir, "app/components/ui");
    const fallbackTarget = path.join(rootDir, "components/ui");

    if (fs.existsSync(srcTarget)) return srcTarget;
    if (fs.existsSync(appTarget)) return appTarget;

    if (!fs.existsSync(fallbackTarget)) {
      fs.mkdirSync(fallbackTarget, { recursive: true });
      console.log(`📁 Created fallback directory: ${fallbackTarget}`);
    }
    return fallbackTarget;
  } else {
    // React project — just src/components/ui
    const reactTarget = path.join(rootDir, "src/components/ui");
    if (!fs.existsSync(reactTarget)) {
      fs.mkdirSync(reactTarget, { recursive: true });
      console.log(`📁 Created directory: ${reactTarget}`);
    }
    return reactTarget;
  }
}

// Copy folder recursively
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

export async function main(args: string[]) {
  if (args.length === 0) {
    console.error("❌ Usage: stackedui-cli add <component-name>");
    process.exit(1);
  }

  const componentName = args[0];
  const projectRoot = process.cwd();

  const targetDir = getTargetComponentsDir(projectRoot);
  const srcDir = path.join(COMPONENTS_DIR, componentName);
  const destDir = path.join(targetDir, componentName);

  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Component '${componentName}' does not exist in stackedui.`);
    process.exit(1);
  }

  copyRecursive(srcDir, destDir);

  console.log(`✅ Component '${componentName}' added to '${destDir}'`);
}
