import { FormField, Input, Badge } from "stackedui";

export default function FormFieldDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Form Field</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Composite form wrapper managing labels, helper descriptions, and validation error messages.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md space-y-6">
          <FormField
            label="Workspace Domain"
            description="Your organization URL handle."
            required
          >
            <Input placeholder="acme" />
          </FormField>

          <FormField
            label="API Key"
            error="Invalid API key format. Must begin with sk_live_."
            required
          >
            <Input defaultValue="invalid_token_123" />
          </FormField>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add form-field</code>
        </div>
      </section>
    </div>
  );
}
