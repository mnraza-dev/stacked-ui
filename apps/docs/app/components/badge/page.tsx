import { Badge } from "stackedui";

export default function BadgeDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Status indicator badge with variant colors, sizes, and subtle borders.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 flex flex-wrap gap-3 items-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="gradient">Gradient Pro</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add badge</code>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-xs overflow-x-auto">
          <pre>{`import { Badge } from "stackedui";

export default function Example() {
  return (
    <div className="flex gap-2">
      <Badge variant="success">Online</Badge>
      <Badge variant="gradient">Pro Plan</Badge>
    </div>
  );
}`}</pre>
        </div>
      </section>
    </div>
  );
}
