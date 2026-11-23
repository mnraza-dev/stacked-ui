import { Input } from "stackedui";

export default function InputPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-3">Input</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Form input field supporting standard, outline, and glowing gradient effects with full keyboard accessibility.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="bg-card border border-border rounded-xl p-8 space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Standard Input</label>
            <Input variant="default" placeholder="e.g. jane@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Glowing Gradient Input</label>
            <Input variant="glowing" placeholder="Focus to see glowing gradient" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Disabled Input</label>
            <Input variant="default" placeholder="Disabled state" disabled />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <div className="bg-muted border border-border rounded-xl p-4 font-mono text-sm">
          <code>pnpm add stackedui</code>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <div className="bg-muted border border-border rounded-xl overflow-hidden">
          <pre className="p-6 text-sm font-mono overflow-x-auto">
            <code>{`import { Input } from "stackedui";

export default function Example() {
  return (
    <div className="space-y-4 max-w-md">
      <Input variant="default" placeholder="Default Input" />
      <Input variant="glowing" placeholder="Glowing Accent Input" />
      <Input disabled placeholder="Disabled Input" />
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
