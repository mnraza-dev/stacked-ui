#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

async function main() {
  const projectRoot = process.cwd();

  console.log("🚀 Initializing stackedui in your project...");

  try {
    console.log("📦 Installing required dependencies...");
    execSync(
      "pnpm add clsx tailwind-merge @radix-ui/react-slot",
      { stdio: "inherit" }
    );
    console.log("✅ Dependencies installed.");
  } catch (e) {
    console.error("❌ Failed to install dependencies. Please install manually.");
    process.exit(1);
  }
  const tailwindConfigPath = path.join(projectRoot, "tailwind.config.js");
  if (!fs.existsSync(tailwindConfigPath)) {
    console.log("🛠️ Creating default tailwind.config.js...");
    const tailwindConfigContent = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
    fs.writeFileSync(tailwindConfigPath, tailwindConfigContent, "utf-8");
    console.log("✅ tailwind.config.js created.");
  } else {
    console.log("ℹ️ tailwind.config.js already exists. Skipping creation.");
  }

 const utilsDir = path.join(projectRoot, "src/lib");
  const utilsFile = path.join(utilsDir, "utils.ts");

  if (!fs.existsSync(utilsFile)) {
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
    }
    console.log("🛠️ Creating src/lib/utils.ts with `cn` function...");
    const utilsContent = `import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
`;
    fs.writeFileSync(utilsFile, utilsContent, "utf-8");
    console.log("✅ src/lib/utils.ts created.");
  } else {
    console.log("ℹ️ src/lib/utils.ts already exists. Skipping creation.");
  }

  console.log("🎉 stackedui initialized successfully!");
  console.log("👉 Now you can add components with: stackedui-cli add <component-name>");
}

main().catch((e) => {
  console.error("❌ Unexpected error during init:", e);
  process.exit(1);
});
