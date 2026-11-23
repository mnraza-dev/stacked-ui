import { Badge, Button } from "stackedui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CliPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Tooling</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Stacked UI CLI</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Command line tool for scaffolding components directly into your project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Initialization</h2>
        <p className="text-sm text-muted-foreground">
          Run the initialization command in your project root to configure dependencies, utility functions, and <code className="font-mono text-xs">components.json</code>:
        </p>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli init</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Adding Components</h2>
        <p className="text-sm text-muted-foreground">
          Add any component directly to your <code className="font-mono text-xs">components/ui/</code> directory:
        </p>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm space-y-2">
          <code>npx stackedui-cli add button</code>
          <div className="text-muted-foreground pt-1"># Or add multiple components at once:</div>
          <code>npx stackedui-cli add input card dialog tabs</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Listing Available Components</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli list</code>
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        <Link href="/components/button">
          <Button variant="primary" className="gap-2">
            View Button Component <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
