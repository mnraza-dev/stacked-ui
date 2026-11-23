import { EmptyState, Button, Badge } from "stackedui";
import { FolderPlus } from "lucide-react";

export default function EmptyStateDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Empty State</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Placeholder display for lists, search queries, or datasets when no content exists.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <EmptyState
          icon={<FolderPlus className="size-6" />}
          title="No projects found"
          description="You haven't created any workspaces yet. Get started by creating your first project."
          action={<Button variant="primary">Create Project</Button>}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add empty-state</code>
        </div>
      </section>
    </div>
  );
}
