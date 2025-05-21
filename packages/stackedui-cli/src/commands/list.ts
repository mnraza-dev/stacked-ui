import fs from "fs";
import path from "path";

const COMPONENTS_DIR = path.resolve(__dirname, "../../stackedui/src/components");

export function runList() {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error("❌ Components directory not found:", COMPONENTS_DIR);
    process.exit(1);
  }

  const components = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

  if (components.length === 0) {
    console.log("⚠️  No components found in stackedui.");
  } else {
    console.log("📦 Available components:");
    components.forEach((comp) => console.log(` - ${comp}`));
  }
}
