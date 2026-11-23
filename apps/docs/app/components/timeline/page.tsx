import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTitle,
  TimelineTime,
  Badge,
} from "stackedui";

export default function TimelineDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Timeline</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Chronological event timeline for activity feeds, deploy logs, and roadmap milestones.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md">
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>Just now</TimelineTime>
                <TimelineTitle>Production Deployment #142</TimelineTitle>
                <p className="text-xs text-muted-foreground">Successfully deployed release to edge cluster.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>2 hours ago</TimelineTime>
                <TimelineTitle>Pull Request Merged</TimelineTitle>
                <p className="text-xs text-muted-foreground">Automated unit tests and checks passed (15/15).</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>Yesterday</TimelineTime>
                <TimelineTitle>Release Candidate Tagged</TimelineTitle>
                <p className="text-xs text-muted-foreground">Tagged version v0.1.0 for public release.</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add timeline</code>
        </div>
      </section>
    </div>
  );
}
