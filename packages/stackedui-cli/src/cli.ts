#!/usr/bin/env node
import chalk from "chalk";

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  if (!command || command === "--help" || command === "-h") {
    console.log(`
${chalk.bold.hex("#6366f1")("Stacked UI CLI")} - Add accessible, beautifully styled components to your apps.

${chalk.bold("USAGE:")}
  ${chalk.cyan("stackedui-cli")} ${chalk.green("<command>")} [options]

${chalk.bold("COMMANDS:")}
  ${chalk.green("init")}       Initialize Stacked UI configuration in your project
  ${chalk.green("add")}        Add components to your project (e.g. ${chalk.cyan("stackedui-cli add button")})
  ${chalk.green("list")}       List all available Stacked UI components
  ${chalk.green("remove")}     Remove a component from your project
  ${chalk.green("help")}       Display this help menu

${chalk.bold("EXAMPLES:")}
  ${chalk.dim("$")} stackedui-cli init
  ${chalk.dim("$")} stackedui-cli add button input card
  ${chalk.dim("$")} stackedui-cli list
`);
    process.exit(0);
  }

  try {
    switch (command) {
      case "init": {
        const { initCommand } = await import("./commands/init.js");
        await initCommand(args.slice(1));
        break;
      }
      case "add": {
        const { addCommand } = await import("./commands/add.js");
        await addCommand(args.slice(1));
        break;
      }
      case "list": {
        const { listCommand } = await import("./commands/list.js");
        await listCommand(args.slice(1));
        break;
      }
      case "remove": {
        const { removeCommand } = await import("./commands/remove.js");
        await removeCommand(args.slice(1));
        break;
      }
      case "version":
      case "-v":
      case "--version": {
        console.log(chalk.bold("stackedui-cli v1.0.0"));
        break;
      }
      default: {
        console.error(chalk.red(`\n❌ Unknown command: "${command}"`));
        console.log(`Run ${chalk.cyan("stackedui-cli --help")} to view available commands.\n`);
        process.exit(1);
      }
    }
  } catch (err: any) {
    console.error(chalk.red("\n❌ Command execution failed:"), err?.message || err);
    process.exit(1);
  }
}

main();
