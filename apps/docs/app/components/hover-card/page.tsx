import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Avatar,
  AvatarFallback,
  Button,
  Badge,
} from "stackedui";

export default function HoverCardDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Hover Card</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Preview card revealed when hovering over an author, avatar, or link.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-12 flex items-center justify-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@stackedui</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Stacked UI</h4>
                  <p className="text-xs text-muted-foreground">
                    Modern accessible React component library built with Tailwind CSS v4.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add hover-card</code>
        </div>
      </section>
    </div>
  );
}
