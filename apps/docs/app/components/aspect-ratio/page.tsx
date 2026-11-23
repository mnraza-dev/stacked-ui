import { AspectRatio, Badge } from "stackedui";

export default function AspectRatioDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Aspect Ratio</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Maintains consistent width-to-height ratio for responsive media and embeds.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview (16:9)</h2>
        <div className="w-[450px] overflow-hidden rounded-xl border border-border bg-muted">
          <AspectRatio ratio={16 / 9} className="flex items-center justify-center bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 text-sm font-semibold">
            16 / 9 Media Container
          </AspectRatio>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add aspect-ratio</code>
        </div>
      </section>
    </div>
  );
}
