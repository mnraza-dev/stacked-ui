"use client";

import Link from "next/link";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  StatCard,
  Input,
  Alert,
  AlertTitle,
  AlertDescription,
  Progress,
  Switch,
} from "stackedui";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Terminal,
  Copy,
  Check,
  Star,
  ExternalLink,
  Layers,
  Layout,
  Box,
  LayoutTemplate,
  CheckCircle2,
} from "lucide-react";
import * as React from "react";

export default function Home() {
  const [copied, setCopied] = React.useState(false);
  const [installCmd, setInstallCmd] = React.useState("pnpm add stackedui");
  const [switchState, setSwitchState] = React.useState(true);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-24 py-6">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-muted/60 text-xs font-medium text-foreground backdrop-blur-xs">
          <Sparkles className="size-3.5 text-primary" />
          <span>Stacked UI 2.0 Ecosystem is live</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary font-semibold">Components • Sections • Blocks • Templates</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight sm:leading-none">
          Everything you need to build{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            modern web apps
          </span>
        </h1>

        <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From individual accessible primitives to complete multi-page SaaS dashboard templates. Built with Tailwind CSS v4, Radix UI, and strict TypeScript.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/templates/saas-dashboard">
            <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-indigo-500/25">
              <Sparkles className="size-4" />
              <span>Explore SaaS Dashboard</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/components/button">
            <Button variant="outline" size="lg">
              Browse Components
            </Button>
          </Link>
          <Link href="/sections">
            <Button variant="outline" size="lg">
              Website Sections
            </Button>
          </Link>
        </div>

        {/* Installation Terminal Box */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card/80 p-2.5 backdrop-blur-md shadow-xs">
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm pl-2 text-foreground">
              <Terminal className="size-4 text-muted-foreground" />
              <span>{installCmd}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyCommand(installCmd)}
              className="size-8 p-0"
              aria-label="Copy installation command"
            >
              {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
            <button
              onClick={() => setInstallCmd("pnpm add stackedui")}
              className={`hover:text-foreground ${installCmd.startsWith("pnpm") ? "text-primary font-semibold" : ""}`}
            >
              pnpm
            </button>
            <button
              onClick={() => setInstallCmd("npm install stackedui")}
              className={`hover:text-foreground ${installCmd.startsWith("npm") ? "text-primary font-semibold" : ""}`}
            >
              npm
            </button>
            <button
              onClick={() => setInstallCmd("npx stackedui-cli init")}
              className={`hover:text-foreground ${installCmd.includes("cli") ? "text-primary font-semibold" : ""}`}
            >
              CLI
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid: Components, Sections, Blocks, Templates */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="outline" size="sm">Product Pillars</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Engineered at Every Abstraction Layer</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Choose the exact level of granularity your engineering team needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {/* Card 1: Components */}
          <Link href="/components/button" className="group">
            <Card className="h-full hover:border-primary/50 transition-all p-5 space-y-3">
              <div className="size-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Layers className="size-5" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">Components</h3>
                  <Badge variant="outline" size="sm">30+ Primitives</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Accessible, keyboard-navigable buttons, dialogs, dropdowns, inputs, tables, and tabs.
                </p>
              </div>
              <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:underline pt-2">
                Browse UI Primitives <ArrowRight className="size-3" />
              </span>
            </Card>
          </Link>

          {/* Card 2: Sections */}
          <Link href="/sections" className="group">
            <Card className="h-full hover:border-primary/50 transition-all p-5 space-y-3">
              <div className="size-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Layout className="size-5" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">Sections</h3>
                  <Badge variant="success" size="sm">New</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Ready-to-use landing heroes, Bento grids, pricing tables, review grids, and CTAs.
                </p>
              </div>
              <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:underline pt-2">
                Explore Sections <ArrowRight className="size-3" />
              </span>
            </Card>
          </Link>

          {/* Card 3: Blocks */}
          <Link href="/blocks" className="group">
            <Card className="h-full hover:border-primary/50 transition-all p-5 space-y-3">
              <div className="size-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <Box className="size-5" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">Blocks</h3>
                  <Badge variant="success" size="sm">New</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Application-level auth forms, profile panels, filterable tables, and onboarding flows.
                </p>
              </div>
              <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:underline pt-2">
                Explore App Blocks <ArrowRight className="size-3" />
              </span>
            </Card>
          </Link>

          {/* Card 4: Templates */}
          <Link href="/templates" className="group">
            <Card className="h-full hover:border-primary/50 transition-all p-5 space-y-3 border-primary/30 bg-primary/5">
              <div className="size-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                <LayoutTemplate className="size-5" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">Templates</h3>
                  <Badge variant="gradient" size="sm">Flagship</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Complete multi-page applications with real client-side state, navigation, and charts.
                </p>
              </div>
              <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:underline pt-2">
                Launch Live Templates <ArrowRight className="size-3" />
              </span>
            </Card>
          </Link>
        </div>
      </section>

      {/* Flagship SaaS Dashboard Highlight Banner */}
      <section className="rounded-2xl border border-primary/40 bg-gradient-to-br from-card via-card to-indigo-950/20 p-6 sm:p-10 space-y-6 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <Badge variant="gradient" size="sm">Flagship Experience</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              SaaS Admin Dashboard Template
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Experience our fully functional 7-page administrative dashboard. Test live table sorting, search filtering, project initiative progress bars, billing meter gauges, and role permissions.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-foreground/80 pt-1">
              <span className="flex items-center gap-1 bg-muted/60 px-2 py-0.5 rounded">
                <CheckCircle2 className="size-3 text-emerald-500" /> Multi-page layout
              </span>
              <span className="flex items-center gap-1 bg-muted/60 px-2 py-0.5 rounded">
                <CheckCircle2 className="size-3 text-emerald-500" /> Interactive charts
              </span>
              <span className="flex items-center gap-1 bg-muted/60 px-2 py-0.5 rounded">
                <CheckCircle2 className="size-3 text-emerald-500" /> Dark & light mode
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/templates/saas-dashboard" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-indigo-500/20">
                <Sparkles className="size-4" />
                <span>Launch Live Application</span>
                <ExternalLink className="size-3.5" />
              </Button>
            </Link>
            <Link href="/templates" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-xs">
                View All Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Interactive Component Showcase */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="outline" size="sm">Interactive Showcase</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Live Component Primitives</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Test and interact directly with components rendered straight from the Stacked UI core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {/* Card 1: Buttons & Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Buttons & Badges</CardTitle>
              <CardDescription>Multiple aesthetic styles and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">Default</Button>
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="success" size="sm">Success</Button>
                <Button variant="outline" size="sm">Outline</Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                <Badge variant="default">New</Badge>
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="destructive">Failed</Badge>
                <Badge variant="gradient">Pro</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/components/button" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
                Explore Button variants <ArrowRight className="size-3" />
              </Link>
            </CardFooter>
          </Card>

          {/* Card 2: Form Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Input & Toggle</CardTitle>
              <CardDescription>Glowing focus effects and switch controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input variant="glowing" placeholder="Focus to see glow effect..." />
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-medium">Automatic Backups</span>
                <Switch checked={switchState} onCheckedChange={setSwitchState} />
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Storage Used</span>
                  <span>72%</span>
                </div>
                <Progress value={72} />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/components/input" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
                Explore Form components <ArrowRight className="size-3" />
              </Link>
            </CardFooter>
          </Card>

          {/* Card 3: Metrics & Feedback */}
          <div className="space-y-6">
            <StatCard
              title="Monthly Recurring Revenue"
              value="$54,230"
              change={18.4}
              changePeriod="vs last month"
            />
            <Alert variant="info">
              <Zap className="size-4" />
              <AlertTitle>Smart Caching Enabled</AlertTitle>
              <AlertDescription>
                Edge network latency reduced by 48%.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Free & Pro Pricing Overview */}
      <section className="p-8 sm:p-12 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <Badge variant="gradient" size="sm">Free Core • Infinite Possibilities</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Open Source Foundation with Premium Power
            </h2>
            <p className="text-sm text-muted-foreground">
              All 30+ component primitives and selected sections are 100% free under the MIT license. Upgrade to the Pro ecosystem for the full SaaS dashboard template and advanced application blocks.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <a
              href="https://github.com/mnraza-dev/stacked-ui"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" size="default" className="gap-2">
                <Star className="size-4 text-amber-500" />
                Star on GitHub
              </Button>
            </a>
            <Link href="/sections/pricing">
              <Button variant="primary" size="default" className="gap-1.5">
                Explore Pricing
                <ArrowRight className="size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
