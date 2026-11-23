"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import { Button, Badge, Input, Card } from "stackedui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CtaSectionsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Website Sections</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">4 CTA Patterns</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Call to Action Banners</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          High-conversion banners, newsletter opt-in cards, and terminal install boxes designed for landing page and documentation footers.
        </p>
      </div>

      {/* CTA 1: Radial Gradient Banner */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Radial Gradient CTA Banner</h2>
          <p className="text-xs text-muted-foreground">
            Immersive glow background with primary action, secondary link, and trust micro-copy.
          </p>
        </div>

        <PreviewFrame
          title="Radial Gradient CTA"
          badge="Pro"
          code={`import { Button, Badge } from "stackedui";
import { ArrowRight, Sparkles } from "lucide-react";

export function GradientCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-indigo-950 via-background to-blue-950 p-8 sm:p-12 text-center space-y-6">
      <Badge variant="gradient">Instant Acceleration</Badge>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        Ready to supercharge your SaaS frontend?
      </h2>
      <p className="text-sm text-muted-foreground max-w-lg mx-auto">
        Join over 2,500 developers building next-generation web apps with Stacked UI primitives and templates.
      </p>
      <div className="flex justify-center gap-3">
        <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-indigo-500/20">
          Get Started Free <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" size="lg">
          Explore Templates
        </Button>
      </div>
    </div>
  );
}`}
        >
          <div className="w-full relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-indigo-950/40 via-card to-blue-950/40 p-6 sm:p-10 text-center space-y-4">
            <Badge variant="gradient" size="sm">Instant Acceleration</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground max-w-lg mx-auto">
              Ready to supercharge your SaaS frontend?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Join over 2,500 developers building next-generation web apps with Stacked UI primitives and templates.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button variant="primary" size="default" className="gap-2 shadow-md shadow-indigo-500/20">
                Get Started Free <ArrowRight className="size-3.5" />
              </Button>
              <Button variant="outline" size="default">
                Explore Templates
              </Button>
            </div>
          </div>
        </PreviewFrame>
      </section>

      {/* CTA 2: Split Newsletter Box */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Split Newsletter Capture</h2>
          <p className="text-xs text-muted-foreground">
            Two-column newsletter signup with value promise and instant access confirmation.
          </p>
        </div>

        <PreviewFrame
          title="Split Newsletter Capture"
          badge="Free"
          code={`import { Button, Input, Card } from "stackedui";
import { Mail, CheckCircle2 } from "lucide-react";

export function NewsletterCta() {
  return (
    <Card className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-xl font-bold">Stay ahead of modern UI engineering</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Weekly component releases, Tailwind v4 design patterns, and full-stack templates.
          </p>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Enter your email..." className="text-xs" />
          <Button variant="primary" size="sm" className="shrink-0">
            Subscribe
          </Button>
        </div>
      </div>
    </Card>
  );
}`}
        >
          <Card className="p-6 w-full text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-lg font-bold">Stay ahead of modern UI engineering</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Weekly component releases, Tailwind v4 design patterns, and production templates sent directly to your inbox.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input placeholder="Enter your work email..." className="text-xs" />
                  <Button variant="primary" size="default" className="shrink-0 text-xs">
                    Subscribe
                  </Button>
                </div>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-emerald-500" /> No spam. Unsubscribe at any time.
                </span>
              </div>
            </div>
          </Card>
        </PreviewFrame>
      </section>
    </div>
  );
}
