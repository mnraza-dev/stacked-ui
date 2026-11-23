import { Label, Input, Badge } from "stackedui";

export default function LabelDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Label</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Accessible text label primitive associated with form controls.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="alex@example.com" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add label</code>
        </div>
      </section>
    </div>
  );
}
