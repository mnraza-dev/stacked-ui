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

export function runInit() {
  const projectRoot = process.cwd();
  const appDir = findNextAppDir(projectRoot);

  if (!appDir) {
    console.error("❌ Could not find your Next.js app root folder.");
    process.exit(1);
  }

  const configPath = path.join(appDir, "stackedui.config.json");

  if (fs.existsSync(configPath)) {
    console.log("✅ stackedui is already initialized.");
    return;
  }

  const defaultConfig = {
    componentsPath: "src/components/ui", // User can edit this later
  };

  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
  console.log(`✅ Initialized stackedui in ${appDir}`);
  console.log("📦 Created 'stackedui.config.json' with default config.");
}
