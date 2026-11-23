import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Badge,
} from "stackedui";

export default function PopoverDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Popover</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Floating content container anchored to a trigger button.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-12 flex items-center justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Dimensions</h4>
                <p className="text-xs text-muted-foreground">
                  Set the default dimensions for your canvas export.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add popover</code>
        </div>
      </section>
    </div>
  );
}
