"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Check,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardFooter,
} from "stackedui";

interface TemplateItem {
  id: string;
  title: string;
  category: "SaaS" | "CRM" | "Analytics" | "Projects" | "Starter";
  description: string;
  badge: "Flagship" | "Pro" | "Free";
  pagesCount: string;
  demoUrl?: string;
  features: string[];
}

const templates: TemplateItem[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Admin Dashboard",
    category: "SaaS",
    description: "Production-ready, multi-page SaaS dashboard with live client-side state, collapsible navigation, table filtering, project management, billing meters, and settings.",
    badge: "Flagship",
    pagesCount: "7 Connected Pages",
    demoUrl: "/templates/saas-dashboard",
    features: [
      "Real-time overview KPIs with interactive period selector",
      "Sortable & filterable user management table",
      "Developer adoption funnel & telemetry telemetry",
      "Project sprint initiative cards with progress gauges",
      "Full subscription billing management & invoice downloads",
      "Team role permission matrix & colleague invite flow",
      "Tabbed workspace configuration with custom theming",
    ],
  },
  {
    id: "crm-dashboard",
    title: "CRM & Sales Pipeline",
    category: "CRM",
    description: "Lead management and deal pipeline dashboard with stage drag tracking, sales quotas, and revenue forecasting.",
    badge: "Pro",
    pagesCount: "5 Pages",
    features: [
      "Deal stage kanban with win probability scoring",
      "Lead contact cards with activity timeline",
      "Sales rep quota performance benchmarks",
      "Commission calculation and payout summaries",
      "Automated follow-up task notifications",
    ],
  },
  {
    id: "analytics-dashboard",
    title: "Product Analytics Engine",
    category: "Analytics",
    description: "Telemetry dashboard focused on user cohort retention, real-time event ingestion, and feature adoption funnels.",
    badge: "Pro",
    pagesCount: "4 Pages",
    features: [
      "User retention cohort heatmaps",
      "Real-time event streaming telemetry",
      "Feature adoption and session drop-off graphs",
      "Custom SQL / filter query builder interface",
    ],
  },
  {
    id: "project-mgmt",
    title: "Project Sprint Workspace",
    category: "Projects",
    description: "Engineering team task board with milestone tracking, assignee avatars, priority badges, and burndown meters.",
    badge: "Pro",
    pagesCount: "4 Pages",
    features: [
      "Sprint planning backlog and active task boards",
      "Milestone roadmap with interactive timeline",
      "Team workload distribution charts",
      "GitHub & Jira pull request sync status",
    ],
  },
  {
    id: "starter-dashboard",
    title: "Minimal Starter Dashboard",
    category: "Starter",
    description: "Lightweight, clean starter dashboard template for indie hackers and developers building MVP applications.",
    badge: "Free",
    pagesCount: "3 Pages",
    features: [
      "Minimalist responsive sidebar layout",
      "Essential KPI metric overview cards",
      "Clean user table with basic search",
      "Dark and light theme support",
    ],
  },
];

export default function TemplatesGalleryPage() {
  const [filter, setFilter] = React.useState<string>("All");

  const filtered = React.useMemo(() => {
    if (filter === "All") return templates;
    if (filter === "Free") return templates.filter((t) => t.badge === "Free");
    if (filter === "Pro") return templates.filter((t) => t.badge === "Pro" || t.badge === "Flagship");
    return templates.filter((t) => t.category === filter);
  }, [filter]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-foreground">
          <Sparkles className="size-3.5 text-indigo-500" />
          <span>Application Templates Ecosystem</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Production Application Templates
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Complete, multi-page application templates built with Stacked UI primitives and Tailwind CSS v4. Not static screenshots — fully interactive with stateful navigation, tables, dialogs, and filters.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {["All", "Free", "Pro", "SaaS", "CRM", "Analytics", "Projects"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === tab
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Hero Card */}
      <div className="rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card via-card to-indigo-950/20 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="gradient" size="sm">Flagship Template</Badge>
              <span className="text-xs text-muted-foreground">7 Connected Pages • Live Client State</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              SaaS Admin Dashboard
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The definitive administrative template for modern subscription platforms. Includes Overview KPIs, Sortable User Management, Telemetry Analytics, Project Cards, Annual Billing Meters, Team Permission Roles, and Tabbed Workspace Settings.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-foreground/80">
              <span className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md">
                <Check className="size-3 text-emerald-500" /> React 19 & Next.js 15
              </span>
              <span className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md">
                <Check className="size-3 text-emerald-500" /> Full Keyboard Navigation
              </span>
              <span className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md">
                <Check className="size-3 text-emerald-500" /> Light & Dark Theming
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/templates/saas-dashboard" className="w-full">
              <Button variant="primary" size="lg" className="w-full gap-2 shadow-lg shadow-indigo-500/25">
                <Sparkles className="size-4" />
                <span>Launch Live Application</span>
                <ExternalLink className="size-3.5 ml-1" />
              </Button>
            </Link>
            <Link href="/templates/saas-dashboard/users" className="w-full">
              <Button variant="outline" size="default" className="w-full text-xs">
                Preview Users Table
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid of Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((t) => (
          <Card key={t.id} className="flex flex-col justify-between hover:border-primary/50 transition-all p-6 space-y-5 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    t.badge === "Flagship" || t.badge === "Pro"
                      ? "gradient"
                      : "outline"
                  }
                  size="sm"
                >
                  {t.badge}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">{t.pagesCount}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-border">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Highlights:
                </span>
                <ul className="space-y-1 text-xs text-foreground/80">
                  {t.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CardFooter className="p-0 pt-4">
              {t.demoUrl ? (
                <Link href={t.demoUrl} className="w-full">
                  <Button variant="primary" size="sm" className="w-full justify-between shadow-xs">
                    <span>Open Live Template</span>
                    <ArrowRight className="size-3.5" />
                  </Button>
                </Link>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <Badge variant="outline" size="sm" className="text-muted-foreground">
                    Included in Pro License
                  </Badge>
                  <Link href="/templates/saas-dashboard">
                    <Button variant="outline" size="sm" className="text-xs gap-1">
                      <span>View Flagship Demo</span>
                      <ArrowRight className="size-3" />
                    </Button>
                  </Link>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
