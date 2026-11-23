"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
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
} from "stackedui";
import { Download } from "lucide-react";

export default function BillingBlocksPage() {
  const invoices = [
    { id: "INV-2026-004", date: "Nov 01, 2026", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-003", date: "Oct 01, 2026", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-002", date: "Sep 01, 2026", amount: "$79.00", status: "Paid" },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Application Blocks</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">SaaS Subscription UI</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Billing & Invoices</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Everything needed for customer subscription management: active plan summaries, usage meters, payment method cards, and downloadable PDF invoices.
        </p>
      </div>

      {/* Block 1: Active Subscription Plan */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Subscription Plan & Usage</h2>
          <p className="text-xs text-muted-foreground">
            Current plan card with renewal date, allocated team seats, and storage meters.
          </p>
        </div>

        <PreviewFrame
          title="Subscription Overview"
          badge="Pro"
          code={`import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Progress } from "stackedui";

export function SubscriptionCard() {
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Pro Plan (Annual)</CardTitle>
          <CardDescription>Renews automatically on Nov 15, 2027</CardDescription>
        </div>
        <Badge variant="gradient">Active</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span>Team Members (8 of 15 seats used)</span>
            <span>53%</span>
          </div>
          <Progress value={53} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm">Change Plan</Button>
        <Button variant="primary" size="sm">Add Seats</Button>
      </CardFooter>
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-xl mx-auto text-left bg-card p-5 space-y-4 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-3 border-b border-border">
              <div>
                <h3 className="text-base font-bold text-foreground">Pro Team License (Annual)</h3>
                <p className="text-xs text-muted-foreground">Next billing date: November 15, 2027 ($79.00/yr)</p>
              </div>
              <Badge variant="gradient" size="sm">Active</Badge>
            </div>

            <div className="space-y-3 pt-1">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Team Seats (8 of 15 seats used)</span>
                  <span className="font-semibold text-foreground">53%</span>
                </div>
                <Progress value={53} />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>API Request Quota (142k of 500k used)</span>
                  <span className="font-semibold text-foreground">28%</span>
                </div>
                <Progress value={28} />
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">Mastercard ending in <strong>4242</strong></span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs h-7">Change Plan</Button>
                <Button variant="primary" size="sm" className="text-xs h-7">Manage Billing</Button>
              </div>
            </div>
          </Card>
        </PreviewFrame>
      </section>

      {/* Block 2: Invoice History Table */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Invoice History Table</h2>
          <p className="text-xs text-muted-foreground">
            Receipt history with invoice number, date, amount, payment status, and download buttons.
          </p>
        </div>

        <PreviewFrame
          title="Invoice History Table"
          badge="Free"
          code={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge, Button } from "stackedui";
import { Download } from "lucide-react";

export function InvoiceTable() {
  return (
    <div className="rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Table rows */}
        </TableBody>
      </Table>
    </div>
  );
}`}
        >
          <div className="w-full max-w-xl mx-auto rounded-lg border border-border overflow-hidden text-left bg-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="text-xs font-semibold">Invoice ID</TableHead>
                  <TableHead className="text-xs font-semibold">Date</TableHead>
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
        </PreviewFrame>
      </section>
    </div>
  );
}
