#!/usr/bin/env node
const args = process.argv.slice(2);
const command = args[0];

async function main() {
  if (!command) {
    console.error("❌ Usage: stackedui-cli <command> [args]");
    process.exit(1);
  }

  try {
    if (command === "add") {
      const { main } = await import("./commands/add");
      await main(args.slice(1));
    } else if (command === "init") {
      const { main } = await import("./commands/init");
      await main(args.slice(1));
    } else if (command === "remove") {
      const { main } = await import("./commands/remove");
      await main(args.slice(1));
    } else if (command === "list") {
      const { main } = await import("./commands/list");
      await main(args.slice(1));
    } else {
      console.error(`❌ Unknown command: ${command}`);
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

main();