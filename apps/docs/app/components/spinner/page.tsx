import { Spinner, Badge } from "stackedui";

export default function SpinnerDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Spinner</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Accessible SVG loading spinner with size and color variants for async operations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="default" color="primary" />
          <Spinner size="lg" color="primary" />
          <Spinner size="xl" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add spinner</code>
        </div>
      </section>
    </div>
  );
}
