import { Button, Badge } from "stackedui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Getting Started</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground mt-2">
          How to install and set up Stacked UI in your React or Next.js project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">1. Package Installation</h2>
        <p className="text-sm text-muted-foreground">
          Install Stacked UI along with its required peer dependencies using your preferred package manager:
        </p>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm space-y-2">
          <div className="text-muted-foreground"># Using pnpm</div>
          <code>pnpm add stackedui</code>
          <div className="text-muted-foreground pt-2"># Using npm</div>
          <code>npm install stackedui</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">2. Import Stylesheet</h2>
        <p className="text-sm text-muted-foreground">
          Add the Stacked UI styles to your root CSS file or layout (e.g. <code className="font-mono text-xs">app/globals.css</code> or <code className="font-mono text-xs">src/index.css</code>):
        </p>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>import &quot;stackedui/css&quot;;</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">3. Use Your First Component</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm overflow-x-auto">
          <pre>{`import { Button } from "stackedui";

export default function App() {
  return (
    <div className="p-8 flex gap-4">
      <Button variant="default">Default Button</Button>
      <Button variant="primary">Gradient Primary</Button>
    </div>
  );
}`}</pre>
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        <Link href="/docs/theming">
          <Button variant="primary" className="gap-2">
            Configure Theming <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
