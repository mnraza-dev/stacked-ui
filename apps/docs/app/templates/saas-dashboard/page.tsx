"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Card,
  StatCard,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Input,
  Label,
} from "stackedui";
import {
  Users,
  Plus,
  Download,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function SaasOverviewPage() {
  const [period, setPeriod] = React.useState<"7d" | "30d" | "12m">("30d");
  const [isInviteOpen, setIsInviteOpen] = React.useState(false);
  const [inviteEmail, setInviteEmail] = React.useState("");

  // Recent transactions
  const transactions = [
    { id: "TX-9021", customer: "Sarah Chen", company: "NexusLab", amount: "$299.00", status: "Completed", date: "Just now" },
    { id: "TX-9020", customer: "Marcus Miller", company: "MetricFlow", amount: "$79.00", status: "Completed", date: "14m ago" },
    { id: "TX-9019", customer: "David Kim", company: "Vortex AI", amount: "$79.00", status: "Completed", date: "1h ago" },
    { id: "TX-9018", customer: "Elena Rostova", company: "ScaleGrid", amount: "$199.00", status: "Completed", date: "3h ago" },
    { id: "TX-9017", customer: "Lucas Vance", company: "HyperBase", amount: "$79.00", status: "Refunded", date: "1d ago" },
  ];

  // Activity stream
  const activities = [
    { title: "Production deployment succeeded", desc: "v2.4.1 deployed to 280 edge nodes", time: "10 mins ago", icon: CheckCircle2, color: "text-emerald-500" },
    { title: "New organization created", desc: "NexusLab onboarded 8 team members", time: "42 mins ago", icon: Users, color: "text-blue-500" },
    { title: "Database schema migration", desc: "Indexes updated for tenant analytics queries", time: "2 hours ago", icon: Clock, color: "text-amber-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Welcome & Actions Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Real-time analytics and team velocity for Acme Labs Inc.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Period selector */}
          <div className="flex items-center rounded-lg border border-border bg-card p-0.5 text-xs font-medium">
            <button
              type="button"
              onClick={() => setPeriod("7d")}
              className={`px-2.5 py-1 rounded-md transition-colors ${period === "7d" ? "bg-muted text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              7 Days
            </button>
            <button
              type="button"
              onClick={() => setPeriod("30d")}
              className={`px-2.5 py-1 rounded-md transition-colors ${period === "30d" ? "bg-muted text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              30 Days
            </button>
            <button
              type="button"
              onClick={() => setPeriod("12m")}
              className={`px-2.5 py-1 rounded-md transition-colors ${period === "12m" ? "bg-muted text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              12 Months
            </button>
          </div>

          {/* Quick Invite Dialog */}
          <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
            <DialogTrigger asChild>
              <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
                <Plus className="size-3.5" />
                <span>Invite Member</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Send an email invitation to collaborate on the Acme Labs workspace.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <div className="space-y-1">
                  <Label htmlFor="inv-email" className="text-xs">Colleague&apos;s Work Email</Label>
                  <Input
                    id="inv-email"
                    type="email"
                    placeholder="alex@acme.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="inv-role" className="text-xs">Workspace Role</Label>
                  <select id="inv-role" className="w-full rounded-md border border-input bg-background p-2 text-xs">
                    <option value="member">Member (Can edit and deploy)</option>
                    <option value="admin">Admin (Full workspace access)</option>
                    <option value="viewer">Viewer (Read-only)</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" size="sm" onClick={() => setIsInviteOpen(false)}>Cancel</Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setIsInviteOpen(false);
                    setInviteEmail("");
                  }}
                >
                  Send Invitation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Monthly Recurring Revenue"
          value={period === "7d" ? "$14,890" : period === "30d" ? "$54,230" : "$620,400"}
          change={18.4}
          changePeriod="vs last period"
        />
        <StatCard
          title="Active Paid Accounts"
          value={period === "7d" ? "428" : period === "30d" ? "1,842" : "14,200"}
          change={12.1}
          changePeriod="vs last period"
        />
        <StatCard
          title="Avg Session Duration"
          value="4m 32s"
          change={6.8}
          changePeriod="engagement increase"
        />
        <StatCard
          title="Edge Response Time"
          value="84ms"
          change={-14.2}
          changePeriod="latency reduction"
        />
      </div>

      {/* Revenue Graph & Performance Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Visualizer Card */}
        <Card className="lg:col-span-2 space-y-4 p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-foreground">Revenue Growth Trajectory</h2>
              <p className="text-xs text-muted-foreground">Calculated across all subscription tiers</p>
            </div>
            <Badge variant="gradient" size="sm">+24.8% YoY</Badge>
          </div>

          {/* Interactive CSS Bar Visualization */}
          <div className="pt-4 space-y-2">
            <div className="h-44 w-full flex items-end gap-2 sm:gap-3 pt-6 pb-2 border-b border-border">
              {[
                { label: "Jan", val: 45 },
                { label: "Feb", val: 52 },
                { label: "Mar", val: 58 },
                { label: "Apr", val: 63 },
                { label: "May", val: 72 },
                { label: "Jun", val: 68 },
                { label: "Jul", val: 79 },
                { label: "Aug", val: 84 },
                { label: "Sep", val: 91 },
                { label: "Oct", val: 87 },
                { label: "Nov", val: 96 },
                { label: "Dec", val: 100 },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div
                    className="w-full rounded-t-md bg-primary/80 group-hover:bg-primary transition-all duration-300 relative"
                    style={{ height: `${bar.val}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] px-1.5 py-0.5 rounded shadow-sm font-mono pointer-events-none transition-opacity">
                      ${bar.val * 540}
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{bar.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
              <span>Baseline: $24,000 / mo</span>
              <span>Peak: $54,230 / mo</span>
            </div>
          </div>
        </Card>

        {/* Live Activity Stream */}
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">Live Activity</h2>
            <span className="text-[10px] text-muted-foreground font-mono">Real-time</span>
          </div>

          <div className="space-y-4">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <div key={i} className="flex items-start gap-3 text-left">
                  <div className={`mt-0.5 shrink-0 ${act.color}`}>
                    <Icon className="size-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-semibold text-foreground leading-tight">{act.title}</p>
                    <p className="text-[11px] text-muted-foreground">{act.desc}</p>
                    <span className="text-[10px] text-muted-foreground/80 block">{act.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Recent Transactions Table */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-foreground">Recent Subscription Transactions</h2>
            <p className="text-xs text-muted-foreground">Invoices processed during the current cycle</p>
          </div>
          <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
            <Download className="size-3" />
            <span>Export CSV</span>
          </Button>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="text-xs font-semibold">Transaction</TableHead>
                <TableHead className="text-xs font-semibold">Customer</TableHead>
                <TableHead className="text-xs font-semibold">Company</TableHead>
                <TableHead className="text-xs font-semibold">Amount</TableHead>
                <TableHead className="text-xs font-semibold">Status</TableHead>
                <TableHead className="text-xs font-semibold text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="text-xs font-mono font-medium">{tx.id}</TableCell>
                  <TableCell className="text-xs font-medium text-foreground">{tx.customer}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{tx.company}</TableCell>
                  <TableCell className="text-xs font-semibold">{tx.amount}</TableCell>
                  <TableCell>
                    <Badge variant={tx.status === "Completed" ? "success" : "destructive"} size="sm">
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground text-right">{tx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
