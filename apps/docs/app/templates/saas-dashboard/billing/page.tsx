"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Card,
  Progress,
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
} from "stackedui";
import { Download, Sparkles, ShieldCheck } from "lucide-react";

export default function BillingDashboardPage() {
  const [isPlanOpen, setIsPlanOpen] = React.useState(false);

  const invoices = [
    { id: "INV-2026-011", date: "Nov 01, 2026", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-010", date: "Oct 01, 2026", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-009", date: "Sep 01, 2026", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-008", date: "Aug 01, 2026", amount: "$79.00", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Subscription & Billing</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage your subscription tier, payment credentials, and downloadable receipts.
          </p>
        </div>

        <Dialog open={isPlanOpen} onOpenChange={setIsPlanOpen}>
          <DialogTrigger asChild>
            <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
              <Sparkles className="size-3.5" />
              <span>Change Subscription</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Select Your Plan</DialogTitle>
              <DialogDescription>
                Scale your engineering seats and infrastructure quotas seamlessly.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3 py-3">
              <div className="p-4 rounded-xl border border-primary bg-primary/5 space-y-2">
                <Badge variant="gradient" size="sm">Current Plan</Badge>
                <h4 className="font-bold text-sm">Pro Team</h4>
                <p className="text-xl font-bold">$79 <span className="text-xs text-muted-foreground font-normal">/ year</span></p>
                <p className="text-[11px] text-muted-foreground">Up to 15 members and 500k monthly API requests.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card space-y-2 hover:border-primary/50 transition-colors">
                <Badge variant="outline" size="sm">Enterprise</Badge>
                <h4 className="font-bold text-sm">Enterprise SLA</h4>
                <p className="text-xl font-bold">$299 <span className="text-xs text-muted-foreground font-normal">/ organization</span></p>
                <p className="text-[11px] text-muted-foreground">Unlimited team members, custom tokens, and 24/7 SLA.</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" size="sm" onClick={() => setIsPlanOpen(false)}>Keep Current</Button>
              <Button variant="primary" size="sm" onClick={() => setIsPlanOpen(false)}>Upgrade to Enterprise</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Plan Card & Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <h2 className="text-base font-bold text-foreground">Pro Team Annual Subscription</h2>
              <p className="text-xs text-muted-foreground">Auto-renews on Nov 15, 2027 ($79.00/yr)</p>
            </div>
            <Badge variant="gradient" size="sm">Active</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Team Seats</span>
                <span className="font-semibold text-foreground">8 of 15 used</span>
              </div>
              <Progress value={53} />
              <p className="text-[10px] text-muted-foreground">7 seats available to assign</p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>API Usage</span>
                <span className="font-semibold text-foreground">142k of 500k requests</span>
              </div>
              <Progress value={28} />
              <p className="text-[10px] text-muted-foreground">Quota resets in 18 days</p>
            </div>
          </div>
        </Card>

        {/* Payment Method Card */}
        <Card className="p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-foreground">Payment Method</h3>
              <ShieldCheck className="size-4 text-emerald-500" />
            </div>

            <div className="p-3 rounded-xl border border-border bg-muted/30 flex items-center gap-3">
              <div className="size-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                MC
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Mastercard ending in 4242</p>
                <span className="text-[10px] text-muted-foreground">Expires 08/29 • Primary</span>
              </div>
            </div>
          </div>

          <Button variant="outline" size="sm" className="w-full text-xs">
            Update Payment Details
          </Button>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-foreground">Billing Receipts & Invoices</h2>
            <p className="text-xs text-muted-foreground">Download tax compliant PDF invoices</p>
          </div>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="text-xs font-semibold">Invoice Number</TableHead>
                <TableHead className="text-xs font-semibold">Billing Date</TableHead>
                <TableHead className="text-xs font-semibold">Amount</TableHead>
                <TableHead className="text-xs font-semibold">Status</TableHead>
                <TableHead className="text-xs font-semibold text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="text-xs font-mono font-medium">{inv.id}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{inv.date}</TableCell>
                  <TableCell className="text-xs font-semibold">{inv.amount}</TableCell>
                  <TableCell>
                    <Badge variant="success" size="sm">{inv.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1 text-primary">
                      <Download className="size-3" />
                      <span>PDF</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
