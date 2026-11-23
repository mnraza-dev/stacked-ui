import fs from "fs";
import path from "path";
import chalk from "chalk";

export async function removeCommand(args: string[]) {
  const cwd = process.cwd();
  if (args.length === 0) {
    console.error(chalk.red("❌ Error: Please specify a component to remove."));
    console.log(`Example: ${chalk.cyan("npx stackedui-cli remove button")}`);
    process.exit(1);
  }

  const isSrc = fs.existsSync(path.join(cwd, "src"));
  const targetDir = isSrc ? path.join(cwd, "src/components/ui") : path.join(cwd, "components/ui");

  for (const rawName of args) {
    const name = rawName.toLowerCase();
    const targetFile = path.join(targetDir, `${name}.tsx`);

    if (fs.existsSync(targetFile)) {
      fs.unlinkSync(targetFile);
      console.log(chalk.green(`✔ Removed ${path.relative(cwd, targetFile)}`));
    } else {
      console.warn(chalk.yellow(`⚠️ Component "${name}" was not found at ${path.relative(cwd, targetFile)}`));
    }
  }

  console.log(chalk.bold.green("\n✨ Removal complete!\n"));
}
