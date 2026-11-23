import { Tabs, TabsList, TabsTrigger, TabsContent, Badge, Card } from "stackedui";

export default function TabsDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Tabs</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Organize related content into switchable layered tabs with full keyboard navigation.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 flex justify-center">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card className="p-4 mt-2">
                <h4 className="font-semibold text-sm">Account Overview</h4>
                <p className="text-xs text-muted-foreground mt-1">Manage your public display name and email address.</p>
              </Card>
            </TabsContent>
            <TabsContent value="security">
              <Card className="p-4 mt-2">
                <h4 className="font-semibold text-sm">Security & Access</h4>
                <p className="text-xs text-muted-foreground mt-1">Configure multi-factor authentication and passwords.</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add tabs</code>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-xs overflow-x-auto">
          <pre>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "stackedui";

export default function Example() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}`}</pre>
        </div>
      </section>
    </div>
  );
}
