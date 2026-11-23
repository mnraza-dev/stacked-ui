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
  ShieldCheck,
  Palette,
  Terminal,
  Copy,
  Check,
  Star,
  ExternalLink,
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
    <div className="space-y-20 py-6">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-foreground backdrop-blur-xs">
          <Sparkles className="size-3.5 text-primary" />
          <span>Stacked UI v0.1.0 is now live</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary font-semibold">Tailwind CSS v4 Ready</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
          Build <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">effortlessly</span> with modern React components.
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          An open-source UI ecosystem crafted for developer velocity. Beautiful defaults, strict TypeScript, Radix UI accessibility, and full Tailwind CSS v4 theming.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/components/button">
            <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-indigo-500/20">
              Browse Components
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/docs/installation">
            <Button variant="outline" size="lg">
              Get Started
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

      {/* Live Interactive Component Showcase */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="outline" size="sm">Interactive Showcase</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Crafted for modern web apps</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Interact with live components rendered straight from the Stacked UI package.
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
              value="$42,850"
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

      {/* Feature Highlights Grid */}
      <section className="space-y-8 pt-8 border-t border-border">
        <div className="text-center space-y-2">
          <Badge variant="outline" size="sm">Architecture</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Stacked UI?</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Architected specifically for developer productivity, team maintainability, and production reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-3">
            <div className="size-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Palette className="size-5" />
            </div>
            <h3 className="font-semibold text-lg">Tailwind CSS v4 Native</h3>
            <p className="text-sm text-muted-foreground">
              Built on modern CSS theme variables with OKLCH color spaces, responsive design tokens, and smooth transitions.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card space-y-3">
            <div className="size-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="font-semibold text-lg">Accessible by Default</h3>
            <p className="text-sm text-muted-foreground">
              Powered by robust Radix UI primitives ensuring full WAI-ARIA compliance, screen-reader support, and keyboard navigation.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card space-y-3">
            <div className="size-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Terminal className="size-5" />
            </div>
            <h3 className="font-semibold text-lg">Flexible CLI Scaffolding</h3>
            <p className="text-sm text-muted-foreground">
              Use either the pre-bundled npm package or scaffold custom components directly into your codebase with <code className="text-xs font-mono">stackedui-cli</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Productization / Tier Strategy */}
      <section className="p-8 sm:p-12 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <Badge variant="gradient" size="sm">Open Source + Premium Ecosystem</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Free Core. Infinite Possibilities.
            </h2>
            <p className="text-sm text-muted-foreground">
              Stacked UI is 100% free and open-source under the MIT license. In our upcoming releases, look out for premium SaaS starter kits, production dashboard templates, and specialized marketing blocks.
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
            <Link href="/docs/introduction">
              <Button variant="primary" size="default" className="gap-1.5">
                Read the Docs
                <ExternalLink className="size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
