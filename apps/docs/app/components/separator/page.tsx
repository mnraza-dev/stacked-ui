import { Separator, Badge } from "stackedui";

export default function SeparatorDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Separator</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Visual or semantic divider between sections of content, horizontally or vertically.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-sm space-y-4">
          <div>
            <h4 className="text-sm font-semibold">Stacked UI Library</h4>
            <p className="text-xs text-muted-foreground">An open-source React component toolkit.</p>
          </div>
          <Separator />
          <div className="flex h-5 items-center space-x-4 text-xs text-muted-foreground">
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Components</span>
            <Separator orientation="vertical" />
            <span>GitHub</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add separator</code>
        </div>
      </section>
    </div>
  );
}
