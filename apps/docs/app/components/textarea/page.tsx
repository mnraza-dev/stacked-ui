import { Textarea, Badge } from "stackedui";

export default function TextareaDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Multi-line text input field with consistent focus ring and disabled states.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
            Project Description
          </label>
          <Textarea placeholder="Type your message here..." rows={4} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add textarea</code>
        </div>
      </section>
    </div>
  );
}
