"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import {
  Button,
  Badge,
  Input,
  Card,
  CardContent,
} from "stackedui";
import {
  ArrowRight,
  Sparkles,
  Play,
  CheckCircle2,
} from "lucide-react";

export default function HeroSectionsPage() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Website Sections</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">5 Production Variants</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Hero Sections</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          High-conversion hero sections designed for SaaS products, open-source tools, and developer platforms. Responsive across mobile, tablet, and desktop.
        </p>
      </div>

      {/* Hero 1: Modern SaaS Hero with Dashboard Mockup */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. SaaS Hero with App Preview</h2>
          <p className="text-xs text-muted-foreground">
            Flagship hero layout with value prop, primary and secondary actions, social proof avatars, and an interactive simulated product frame.
          </p>
        </div>

        <PreviewFrame
          title="SaaS Hero with App Preview"
          badge="Pro"
          code={`import { Button, Badge, Card, StatCard } from "stackedui";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";

export function SaasHeroSection() {
  return (
    <div className="w-full py-12 md:py-20 text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium">
        <Sparkles className="size-3.5 text-primary" />
        <span>Stacked UI 2.0 is now live</span>
        <span className="text-muted-foreground">•</span>
        <span className="text-primary font-semibold">Explore Templates</span>
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
        Scale your SaaS product with <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">engineered velocity</span>
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
        Stop recreating foundational UI from scratch. Stacked UI gives you high-converting website sections, accessible primitives, and complete multi-page dashboards.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-indigo-500/20">
          Start Building Free <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <Play className="size-3.5 fill-current" /> Watch 2-min Demo
        </Button>
      </div>

      {/* Social proof */}
      <div className="flex items-center justify-center gap-3 pt-2 text-xs text-muted-foreground">
        <div className="flex -space-x-2">
          <div className="size-7 rounded-full bg-blue-500 border-2 border-background flex items-center justify-center text-[10px] text-white font-bold">JD</div>
          <div className="size-7 rounded-full bg-purple-500 border-2 border-background flex items-center justify-center text-[10px] text-white font-bold">MR</div>
          <div className="size-7 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center text-[10px] text-white font-bold">SK</div>
        </div>
        <span>Trusted by <strong className="text-foreground">2,500+</strong> engineering teams worldwide</span>
      </div>
    </div>
  );
}`}
        >
          <div className="w-full py-8 md:py-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium">
              <Sparkles className="size-3.5 text-primary" />
              <span>Stacked UI 2.0 is now live</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary font-semibold">Explore Templates</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
              Scale your SaaS product with <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">engineered velocity</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Stop recreating foundational UI from scratch. Stacked UI gives you high-converting website sections, accessible primitives, and complete multi-page dashboards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="default" className="gap-2 shadow-md shadow-indigo-500/20">
                Start Building Free <ArrowRight className="size-3.5" />
              </Button>
              <Button variant="outline" size="default" className="gap-2">
                <Play className="size-3 fill-current" /> Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-3 pt-2 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="size-6 rounded-full bg-blue-500 border border-background flex items-center justify-center text-[9px] text-white font-bold">JD</div>
                <div className="size-6 rounded-full bg-purple-500 border border-background flex items-center justify-center text-[9px] text-white font-bold">MR</div>
                <div className="size-6 rounded-full bg-emerald-500 border border-background flex items-center justify-center text-[9px] text-white font-bold">SK</div>
              </div>
              <span>Trusted by <strong className="text-foreground">2,500+</strong> engineering teams</span>
            </div>

            {/* Simulated App Frame */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="rounded-xl border border-border bg-card p-4 shadow-xl text-left space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/80" />
                    <div className="size-2.5 rounded-full bg-amber-500/80" />
                    <div className="size-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">app.stacked-ui.com/analytics</span>
                  <Badge variant="outline" size="sm">Live Feed</Badge>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-muted/40 border border-border">
                    <span className="text-[10px] text-muted-foreground">Active MRR</span>
                    <p className="text-base font-bold text-foreground">$54,230</p>
                    <span className="text-[10px] text-emerald-500 font-semibold">+18.2%</span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/40 border border-border">
                    <span className="text-[10px] text-muted-foreground">Subscribers</span>
                    <p className="text-base font-bold text-foreground">1,842</p>
                    <span className="text-[10px] text-emerald-500 font-semibold">+124 today</span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/40 border border-border col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-muted-foreground">Churn Rate</span>
                    <p className="text-base font-bold text-foreground">0.82%</p>
                    <span className="text-[10px] text-blue-500 font-semibold">Optimal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PreviewFrame>
      </section>

      {/* Hero 2: Split-Screen Hero */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Split-Screen Product Hero</h2>
          <p className="text-xs text-muted-foreground">
            Two-column layout with value proposition and email capture on the left, paired with an interactive live card on the right.
          </p>
        </div>

        <PreviewFrame
          title="Split-Screen Hero"
          badge="Free"
          code={`import { Button, Input, Badge, Card, CardContent } from "stackedui";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function SplitHeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10 w-full">
      <div className="space-y-5 text-left">
        <Badge variant="gradient">Instant Deployment</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ship enterprise interfaces in days, not months
        </h1>
        <p className="text-sm text-muted-foreground">
          Stacked UI combines Radix UI accessibility with Tailwind CSS v4 design tokens to deliver uncompromised UI performance.
        </p>
        <div className="flex gap-2 max-w-sm">
          <Input placeholder="Enter your work email..." className="h-10 text-xs" />
          <Button variant="primary" className="shrink-0 h-10 text-xs">
            Get Invite
          </Button>
        </div>
      </div>
      <Card className="p-4 shadow-lg border-primary/20">
        <CardContent className="space-y-3">
          <p className="font-semibold text-sm">Deployment Pipeline Active</p>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-6 w-full text-left">
            <div className="space-y-4">
              <Badge variant="gradient" size="sm">Instant Deployment</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ship enterprise interfaces in days, not months
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Stacked UI combines Radix UI accessibility with Tailwind CSS v4 design tokens to deliver uncompromised UI performance.
              </p>
              <div className="flex gap-2 max-w-md pt-1">
                <Input placeholder="Enter your work email..." className="text-xs" />
                <Button variant="primary" size="default" className="shrink-0 text-xs">
                  Get Invite
                </Button>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-muted-foreground pt-1">
                <span className="flex items-center gap-1"><CheckCircle2 className="size-3 text-emerald-500" /> Free 14-day trial</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="size-3 text-emerald-500" /> No credit card needed</span>
              </div>
            </div>

            <Card className="border border-border/80 shadow-md bg-card/60 backdrop-blur-xs">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-xs">
                      CI
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Production Release v2.4</p>
                      <span className="text-[10px] text-muted-foreground">Branch: main • Commit: a812f</span>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">Passing</Badge>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Build & Deployment</span>
                    <span className="text-foreground font-semibold">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/40 text-[11px] font-mono text-muted-foreground flex justify-between">
                  <span>Artifacts extracted</span>
                  <span className="text-foreground">42 targets</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </PreviewFrame>
      </section>

      {/* Hero 3: Centered Minimal Hero */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">3. Minimalist Centered Hero</h2>
          <p className="text-xs text-muted-foreground">
            Clean, high-impact centered layout with focus on typography, copyable npm command, and tag badges.
          </p>
        </div>

        <PreviewFrame
          title="Minimalist Centered Hero"
          badge="Free"
          code={`import { Button, Badge } from "stackedui";
import { Terminal, Copy } from "lucide-react";

export function MinimalHero() {
  return (
    <div className="py-12 text-center space-y-5">
      <Badge variant="outline">Open Source</Badge>
      <h1 className="text-4xl font-extrabold tracking-tight">
        The UI foundation for ambitious products
      </h1>
      <p className="text-muted-foreground max-w-lg mx-auto text-sm">
        Pre-built components with zero lock-in. Copy what you need or install our lightweight package.
      </p>
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-card font-mono text-xs">
        <Terminal className="size-3.5 text-muted-foreground" />
        <span>pnpm add stackedui</span>
      </div>
    </div>
  );
}`}
        >
          <div className="py-8 text-center space-y-4 w-full">
            <Badge variant="outline" size="sm">Open Source</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight max-w-xl mx-auto">
              The UI foundation for ambitious products
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Pre-built components with zero lock-in. Copy what you need into your project or install our lightweight package.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-card font-mono text-xs">
              <span className="text-primary">$</span>
              <span>pnpm add stackedui</span>
            </div>
            <div className="flex justify-center gap-3 pt-1">
              <Button variant="primary" size="sm">Browse 30+ Components</Button>
              <Button variant="outline" size="sm">GitHub Repository</Button>
            </div>
          </div>
        </PreviewFrame>
      </section>
    </div>
  );
}
