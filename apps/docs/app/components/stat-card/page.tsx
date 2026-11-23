import { StatCard, Badge } from "stackedui";
import { Users, DollarSign, Activity } from "lucide-react";

export default function StatCardDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Stat Card</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Metric card display for dashboard KPIs, trend percentages, and performance indicators.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Revenue"
            value="$128,430"
            change={12.5}
            changePeriod="vs last month"
            icon={<DollarSign className="size-4" />}
          />
          <StatCard
            title="Active Subscribers"
            value="3,420"
            change={8.2}
            changePeriod="vs last month"
            icon={<Users className="size-4" />}
          />
          <StatCard
            title="Server Latency"
            value="42ms"
            change={-15.3}
            changePeriod="vs last week"
            icon={<Activity className="size-4" />}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add stat-card</code>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-xs overflow-x-auto">
          <pre>{`import { StatCard } from "stackedui";

export default function Example() {
  return (
    <StatCard
      title="Revenue"
      value="$12,450"
      change={14.2}
      changePeriod="vs last month"
    />
  );
}`}</pre>
        </div>
      </section>
    </div>
  );
}
