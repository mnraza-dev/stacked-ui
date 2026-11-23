"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import { Badge, Card, StatCard } from "stackedui";

export default function AnalyticsBlocksPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Application Blocks</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Data Visualization</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Analytics Panels</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Visual KPI statistics, conversion funnel progress steps, and referral channel acquisition breakdowns.
        </p>
      </div>

      {/* Block 1: Executive KPI Matrix */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Executive KPI Summary</h2>
          <p className="text-xs text-muted-foreground">
            3-stat header grid showing monthly recurring revenue, active subscriptions, and low-latency response metrics.
          </p>
        </div>

        <PreviewFrame
          title="Executive KPI Grid"
          badge="Pro"
          code={`import { StatCard } from "stackedui";

export function KpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        title="Monthly Recurring Revenue"
        value="$54,230"
        change={14.8}
        changePeriod="vs last month"
      />
      <StatCard
        title="Active Paid Accounts"
        value="1,842"
        change={8.2}
        changePeriod="vs last month"
      />
      <StatCard
        title="Avg Page Response"
        value="84ms"
        change={-12.4}
        changePeriod="latency reduction"
      />
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left">
            <StatCard
              title="Monthly Recurring Revenue"
              value="$54,230"
              change={14.8}
              changePeriod="vs last month"
            />
            <StatCard
              title="Active Paid Accounts"
              value="1,842"
              change={8.2}
              changePeriod="vs last month"
            />
            <StatCard
              title="Avg Page Response"
              value="84ms"
              change={-12.4}
              changePeriod="latency reduction"
            />
          </div>
        </PreviewFrame>
      </section>

      {/* Block 2: Channel Acquisition Breakdown */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Traffic Channel Acquisition</h2>
          <p className="text-xs text-muted-foreground">
            Visual breakdown of incoming customer channels with percentage bars and volume statistics.
          </p>
        </div>

        <PreviewFrame
          title="Traffic Channels Visualizer"
          badge="Free"
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "stackedui";

export function TrafficChannels() {
  const channels = [
    { name: "Direct Search", pct: 45, visitors: "32,450", color: "bg-blue-500" },
    { name: "GitHub / Developer Referrals", pct: 28, visitors: "20,190", color: "bg-indigo-500" },
    { name: "Social & Community", pct: 16, visitors: "11,540", color: "bg-purple-500" },
    { name: "Organic Articles", pct: 11, visitors: "7,930", color: "bg-emerald-500" },
  ];

  return (
    <Card className="w-full max-w-xl mx-auto p-4 space-y-4">
      {/* Bars and volume */}
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-xl mx-auto text-left bg-card p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <div>
                <h3 className="text-sm font-bold text-foreground">Top Acquisition Channels</h3>
                <p className="text-xs text-muted-foreground">Visitor distribution during the last 30 days</p>
              </div>
              <Badge variant="outline" size="sm">72,110 Total</Badge>
            </div>

            <div className="space-y-3">
              {[
                { name: "Direct Search", pct: 45, visitors: "32,450", color: "bg-blue-500" },
                { name: "GitHub / Developer Referrals", pct: 28, visitors: "20,190", color: "bg-indigo-500" },
                { name: "Social & Community", pct: 16, visitors: "11,540", color: "bg-purple-500" },
                { name: "Organic Articles", pct: 11, visitors: "7,930", color: "bg-emerald-500" },
              ].map((channel, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-foreground">{channel.name}</span>
                    <span className="text-muted-foreground">{channel.visitors} ({channel.pct}%)</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${channel.color} rounded-full`} style={{ width: `${channel.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </PreviewFrame>
      </section>
    </div>
  );
}
