#!/usr/bin/env node

import fs from "fs";
import path from "path";

const COMPONENTS_DIR = path.resolve(__dirname, "../../stackedui/src/components");

// Utility to find the Next.js app root by looking for package.json with next or next.config.js
function findNextAppDir(startDir: string): string | null {
  let currentDir = startDir;

  while (currentDir !== path.parse(currentDir).root) {
    const pkgJson = path.join(currentDir, "package.json");
    const nextConfig = path.join(currentDir, "next.config.js");

    if (fs.existsSync(pkgJson)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(pkgJson, "utf-8"));
        if (
          (pkg.dependencies && pkg.dependencies.next) ||
          (pkg.devDependencies && pkg.devDependencies.next)
        ) {
          return currentDir;
        }
      } catch {
        // Ignore JSON parse errors
      }
    }

    if (fs.existsSync(nextConfig)) {
      return currentDir;
    }

    currentDir = path.dirname(currentDir);
  }

  return null;
}

const projectRoot = process.cwd();
const appDir = findNextAppDir(projectRoot);

if (!appDir) {
  console.error(
    "❌ Could not find your Next.js app root folder. Make sure you run this inside a Next.js project."
  );
  process.exit(1);
}

const srcTarget = path.join(appDir, "src/components/ui");
const appTarget = path.join(appDir, "app/components/ui");
const fallbackTarget = path.join(appDir, "components/ui");

let finalTarget: string;
if (fs.existsSync(srcTarget)) {
  finalTarget = srcTarget;
} else if (fs.existsSync(appTarget)) {
  finalTarget = appTarget;
} else {
  finalTarget = fallbackTarget;
  if (!fs.existsSync(finalTarget)) {
    fs.mkdirSync(finalTarget, { recursive: true });
    console.log(`Created fallback directory: ${finalTarget}`);
  }
}

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Usage: stackedui-cli <component>");
  process.exit(1);
}

const srcDir = path.join(COMPONENTS_DIR, componentName);
const destDir = path.join(finalTarget, componentName);

if (!fs.existsSync(srcDir)) {
  console.error(`❌ Component '${componentName}' does not exist in stackedui.`);
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

console.log(`✅ Component '${componentName}' added to '${destDir}'`);
