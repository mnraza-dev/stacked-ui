import { Stack, Grid, Container, Badge } from "stackedui";

export default function LayoutDocPage() {
  return (
    <Container size="lg" className="space-y-10 px-0">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Layout Primitives</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Responsive structural wrappers including Container, Stack, Grid, and Flex.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Grid Preview</h2>
        <Grid cols={3} gap="md">
          <div className="p-6 rounded-lg bg-card border border-border text-center font-mono text-xs">Grid Item 1</div>
          <div className="p-6 rounded-lg bg-card border border-border text-center font-mono text-xs">Grid Item 2</div>
          <div className="p-6 rounded-lg bg-card border border-border text-center font-mono text-xs">Grid Item 3</div>
        </Grid>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Stack Preview</h2>
        <Stack direction="row" gap="sm" align="center">
          <div className="p-3 rounded-md bg-muted border border-border text-xs">Item A</div>
          <div className="p-3 rounded-md bg-muted border border-border text-xs">Item B</div>
          <div className="p-3 rounded-md bg-muted border border-border text-xs">Item C</div>
        </Stack>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add layout</code>
        </div>
      </section>
    </Container>
  );
}
