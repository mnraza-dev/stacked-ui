import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, Badge } from "stackedui";

export default function AvatarDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Image avatar element with automatic fallback support and stacked group layouts.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User" />
              <AvatarFallback>DF</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Avatar Group</h3>
            <AvatarGroup max={3}>
              <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
            </AvatarGroup>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add avatar</code>
        </div>
      </section>
    </div>
  );
}
