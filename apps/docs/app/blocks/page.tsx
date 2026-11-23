"use client";

import * as React from "react";
import Link from "next/link";
import {
  Lock,
  Settings,
  Table as TableIcon,
  CreditCard,
  BarChart2,
  Compass,
  ArrowRight,
  Check,
  Box,
} from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "stackedui";

interface BlockCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  count: string;
  badge: "Free" | "Pro" | "New";
  href: string;
  features: string[];
}

const blockCategories: BlockCategory[] = [
  {
    id: "authentication",
    title: "Authentication Flows",
    description: "Production-ready login, registration, and password recovery cards with social auth and validation.",
    icon: Lock,
    count: "3 Screens",
    badge: "Free",
    href: "/blocks/authentication",
    features: ["Social Login Card", "Registration with Strength Meter", "Password Reset Flow"],
  },
  {
    id: "settings",
    title: "Profile & Settings",
    description: "Configurable user settings tabs for personal profiles, 2FA security controls, and notification digests.",
    icon: Settings,
    count: "3 Panels",
    badge: "Free",
    href: "/blocks/settings",
    features: ["User Profile Form", "Security & Active Sessions", "Notification Toggles"],
  },
  {
    id: "tables",
    title: "Data Tables & Filters",
    description: "Full-featured data management with live search, multi-select rows, status filtering, and pagination.",
    icon: TableIcon,
    count: "Interactive",
    badge: "Pro",
    href: "/blocks/tables",
    features: ["Column Sorting", "Status & Role Filters", "Multi-Row Selection", "Live Search"],
  },
  {
    id: "billing",
    title: "Billing & Subscriptions",
    description: "SaaS plan usage meters, credit card manager with modal, and invoice transaction tables.",
    icon: CreditCard,
    count: "3 Panels",
    badge: "Pro",
    href: "/blocks/billing",
    features: ["Plan Tier Card with Meters", "Credit Card Manager", "Downloadable Invoice Table"],
  },
  {
    id: "analytics",
    title: "Analytics Panels",
    description: "Visual KPI summaries, conversion funnels, and channel traffic distributions.",
    icon: BarChart2,
    count: "3 Visuals",
    badge: "Pro",
    href: "/blocks/analytics",
    features: ["Executive KPI Matrix", "Conversion Funnel Visualizer", "Channel Traffic Breakdown"],
  },
  {
    id: "onboarding",
    title: "Onboarding Wizards",
    description: "Step-by-step account configuration wizard guiding users through workspace setup and team invites.",
    icon: Compass,
    count: "Step Wizard",
    badge: "New",
    href: "/blocks/onboarding",
    features: ["3-Step Progress Tracker", "Workspace Config Form", "Team Member Invitation"],
  },
];

export default function BlocksCatalogPage() {
  const [filter, setFilter] = React.useState<"all" | "free" | "pro">("all");

  const filteredBlocks = React.useMemo(() => {
    if (filter === "all") return blockCategories;
    if (filter === "free") return blockCategories.filter((b) => b.badge === "Free");
    return blockCategories.filter((b) => b.badge === "Pro" || b.badge === "New");
  }, [filter]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-foreground">
          <Box className="size-3.5 text-primary" />
          <span>Application Blocks Library</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Application-Level UI Blocks
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Complete, production-tested application layouts and functional interface compositions. Built by combining Stacked UI components into cohesive user experiences.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              filter === "all" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All Blocks ({blockCategories.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("free")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              filter === "free" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Free
          </button>
          <button
            type="button"
            onClick={() => setFilter("pro")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              filter === "pro" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Pro & Advanced
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlocks.map((block) => {
          const Icon = block.icon;
          return (
            <Card key={block.id} className="flex flex-col justify-between hover:border-primary/50 transition-all group">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-muted-foreground font-mono">{block.count}</span>
                    <Badge variant={block.badge === "Pro" ? "gradient" : block.badge === "New" ? "success" : "outline"} size="sm">
                      {block.badge}
                    </Badge>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {block.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2 mt-1">
                    {block.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Included Features:
                </span>
                <ul className="space-y-1 text-xs text-foreground/80">
                  {block.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Link href={block.href} className="w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between group-hover:bg-accent">
                    <span>Inspect {block.title}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
