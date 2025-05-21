import fs from "fs";
import path from "path";

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
        // ignore JSON parse errors
      }
    }

    if (fs.existsSync(nextConfig)) {
      return currentDir;
    }

    currentDir = path.dirname(currentDir);
  }

  return null;
}

function findComponentPath(appDir: string, componentName: string): string | null {
  const targets = [
    path.join(appDir, "src/components/ui", componentName),
    path.join(appDir, "app/components/ui", componentName),
    path.join(appDir, "components/ui", componentName),
  ];

  return targets.find(fs.existsSync) || null;
}

function deleteRecursive(dirPath: string) {
  if (!fs.existsSync(dirPath)) return;

  fs.readdirSync(dirPath).forEach((file) => {
    const currentPath = path.join(dirPath, file);
    if (fs.lstatSync(currentPath).isDirectory()) {
      deleteRecursive(currentPath);
    } else {
      fs.unlinkSync(currentPath);
    }
  });

  fs.rmdirSync(dirPath);
}

export function runRemove(componentName: string) {
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
