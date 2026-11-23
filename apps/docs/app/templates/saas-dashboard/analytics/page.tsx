"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Card,
  StatCard,
} from "stackedui";
import {
  Smartphone,
  Monitor,
  Tablet,
  Download,
} from "lucide-react";

export default function AnalyticsDashboardPage() {
  const [dateRange, setDateRange] = React.useState("Last 30 Days");

  const funnelSteps = [
    { name: "Website Visitors", count: "128,400", rate: "100%", pct: 100 },
    { name: "Component Previews", count: "74,200", rate: "57.8%", pct: 58 },
    { name: "CLI Invocations", count: "32,900", rate: "25.6%", pct: 26 },
    { name: "Pro Conversions", count: "1,842", rate: "1.43%", pct: 14 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Product Telemetry & Analytics</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Key conversion funnels, regional customer traffic, and engagement metrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-border bg-card p-0.5 text-xs">
            {["Today", "Last 7 Days", "Last 30 Days", "Year to Date"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setDateRange(r)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  dateRange === r
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Export Report</span>
          </Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Conversion Rate" value="3.42%" change={1.2} changePeriod="vs last month" />
        <StatCard title="Bounce Rate" value="28.6%" change={-4.1} changePeriod="improved quality" />
        <StatCard title="Total Invocations" value="1.42M" change={22.8} changePeriod="developer usage" />
        <StatCard title="Avg Customer LTV" value="$420.00" change={14.5} changePeriod="retention gain" />
      </div>

      {/* Funnel & Device Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversion Funnel */}
        <Card className="lg:col-span-2 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-foreground">Developer Adoption Funnel</h2>
              <p className="text-xs text-muted-foreground">Progression from discovery to paid template adoption</p>
            </div>
            <Badge variant="outline" size="sm">End-to-End</Badge>
          </div>

          <div className="space-y-4 pt-2">
            {funnelSteps.map((step, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-foreground">{step.name}</span>
                  <div className="flex gap-2">
                    <span className="font-mono text-muted-foreground">{step.count}</span>
                    <span className="text-primary font-bold">({step.rate})</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    style={{ width: `${step.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Device Split */}
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">Device Breakdown</h2>
            <span className="text-[10px] text-muted-foreground">User Agents</span>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
              <div className="flex items-center gap-3">
                <Monitor className="size-5 text-blue-500" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Desktop</p>
                  <span className="text-[10px] text-muted-foreground">macOS, Windows, Linux</span>
                </div>
              </div>
              <span className="text-sm font-bold text-foreground">72.4%</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
              <div className="flex items-center gap-3">
                <Smartphone className="size-5 text-indigo-500" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Mobile</p>
                  <span className="text-[10px] text-muted-foreground">iOS, Android</span>
                </div>
              </div>
              <span className="text-sm font-bold text-foreground">21.8%</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-muted/20">
              <div className="flex items-center gap-3">
                <Tablet className="size-5 text-purple-500" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Tablet</p>
                  <span className="text-[10px] text-muted-foreground">iPadOS, Android Tab</span>
                </div>
              </div>
              <span className="text-sm font-bold text-foreground">5.8%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
