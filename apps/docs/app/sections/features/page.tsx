"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import { Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from "stackedui";
import {
  Zap,
  Shield,
  Code2,
  Cpu,
  BarChart3,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Website Sections</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">4 Feature Patterns</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Feature Sections</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Showcase your product architecture, performance benchmarks, and core capabilities with modern Bento grids and interactive card matrices.
        </p>
      </div>

      {/* Feature 1: Bento Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Modern Bento Grid</h2>
          <p className="text-xs text-muted-foreground">
            Asymmetric grid layout displaying hero capability, metric visualization, and code preview.
          </p>
        </div>

        <PreviewFrame
          title="Modern Bento Grid"
          badge="Pro"
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "stackedui";
import { Zap, Shield, Sparkles, Cpu } from "lucide-react";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Large Featured Card */}
      <Card className="md:col-span-2 bg-gradient-to-br from-card to-muted/30 border-border">
        <CardHeader>
          <Badge variant="gradient" className="w-fit">Core Engine</Badge>
          <CardTitle className="text-xl">Engineered for Sub-millisecond Execution</CardTitle>
          <CardDescription>
            Zero runtime CSS overhead powered by Tailwind CSS v4 native compiler and Radix UI primitives.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-xl bg-background/80 border border-border font-mono text-xs text-muted-foreground">
            <code>{"<Button variant=\"glowing\" size=\"lg\">Instant Ship</Button>"}</code>
          </div>
        </CardContent>
      </Card>

      {/* Metric Card */}
      <Card>
        <CardHeader>
          <Zap className="size-6 text-amber-500" />
          <CardTitle>99.99% Uptime</CardTitle>
          <CardDescription>Global edge network distribution</CardDescription>
        </CardHeader>
      </Card>

      {/* Security Card */}
      <Card>
        <CardHeader>
          <Shield className="size-6 text-emerald-500" />
          <CardTitle>Enterprise Security</CardTitle>
          <CardDescription>SOC2 Type II certified primitives</CardDescription>
        </CardHeader>
      </Card>

      {/* API Card */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Universal Framework Support</CardTitle>
          <CardDescription>Works seamlessly in Next.js 15, Vite, Remix, and Astro</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
            {/* Hero Bento Item */}
            <Card className="md:col-span-2 bg-gradient-to-br from-card to-muted/30 border-border">
              <CardHeader className="space-y-2">
                <Badge variant="gradient" size="sm" className="w-fit">Core Engine</Badge>
                <CardTitle className="text-lg">Engineered for Sub-millisecond Execution</CardTitle>
                <CardDescription className="text-xs">
                  Zero runtime CSS overhead powered by Tailwind CSS v4 native compiler and Radix UI primitives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-3.5 rounded-lg bg-background/90 border border-border font-mono text-xs text-foreground/80 space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground pb-1 border-b border-border">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    <span>Bundle Inspection: 100% Tree-shakable</span>
                  </div>
                  <p><span className="text-purple-400">import</span> &#123; Button, Dialog &#125; <span className="text-purple-400">from</span> <span className="text-green-400">&apos;stackedui&apos;</span>;</p>
                </div>
              </CardContent>
            </Card>

            {/* Side Metric Card */}
            <Card className="flex flex-col justify-between">
              <CardHeader className="space-y-2">
                <div className="size-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Zap className="size-4" />
                </div>
                <CardTitle className="text-base">99.99% Uptime</CardTitle>
                <CardDescription className="text-xs">
                  Ultra-low latency distribution verified across 280+ edge locations.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <span className="text-2xl font-bold text-foreground">0.12ms</span>
                <span className="text-[10px] text-emerald-500 block font-medium">Average render latency</span>
              </CardContent>
            </Card>

            {/* Row 2: Security Card */}
            <Card>
              <CardHeader className="space-y-2">
                <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Shield className="size-4" />
                </div>
                <CardTitle className="text-base">Accessible by Default</CardTitle>
                <CardDescription className="text-xs">
                  Full keyboard navigation, focus trap management, and WAI-ARIA roles.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Row 2: Integration Card */}
            <Card className="md:col-span-2">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" size="sm">Framework Ready</Badge>
                  <span className="text-xs text-muted-foreground">React 18 & 19</span>
                </div>
                <CardTitle className="text-base">Zero Friction Integration</CardTitle>
                <CardDescription className="text-xs">
                  Copy components via CLI or consume the verified NPM library package without breaking configuration.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </PreviewFrame>
      </section>

      {/* Feature 2: 3-Column Feature Cards */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. 3-Column Feature Matrix</h2>
          <p className="text-xs text-muted-foreground">
            Balanced three-column layout suitable for primary feature descriptions, integration benefits, and developer workflows.
          </p>
        </div>

        <PreviewFrame
          title="3-Column Feature Matrix"
          badge="Free"
          code={`import { Card, CardHeader, CardTitle, CardDescription } from "stackedui";
import { Cpu, ShieldCheck, BarChart3 } from "lucide-react";

export function ThreeColumnFeatures() {
  const features = [
    { icon: Cpu, title: "Modern Styling", desc: "Tailwind CSS v4 with OKLCH CSS variables for natural color blending." },
    { icon: ShieldCheck, title: "Type Safety", desc: "Strict TypeScript definitions with full prop autocomplete in your IDE." },
    { icon: BarChart3, title: "Production Proven", desc: "Battle-tested across thousands of production page views." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <Card key={i} className="p-6 space-y-3">
          <f.icon className="size-6 text-primary" />
          <h3 className="font-bold text-base">{f.title}</h3>
          <p className="text-xs text-muted-foreground">{f.desc}</p>
        </Card>
      ))}
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
            <Card className="p-5 space-y-3">
              <div className="size-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Cpu className="size-4" />
              </div>
              <h3 className="font-bold text-sm">Tailwind CSS v4 Native</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modern CSS theme variables with OKLCH color spaces, responsive design tokens, and smooth transitions.
              </p>
            </Card>
            <Card className="p-5 space-y-3">
              <div className="size-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Code2 className="size-4" />
              </div>
              <h3 className="font-bold text-sm">Strict Type Safety</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero &apos;any&apos; types, fully typed polymorphic component refs, and comprehensive generic prop interfaces.
              </p>
            </Card>
            <Card className="p-5 space-y-3">
              <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <BarChart3 className="size-4" />
              </div>
              <h3 className="font-bold text-sm">Engineered Velocity</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pre-built layout templates, data tables, and application blocks designed to accelerate delivery by 4x.
              </p>
            </Card>
          </div>
        </PreviewFrame>
      </section>
    </div>
  );
}
