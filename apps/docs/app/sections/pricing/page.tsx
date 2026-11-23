"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Switch,
} from "stackedui";
import { Check } from "lucide-react";

export default function PricingSectionsPage() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Website Sections</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">4 Pricing Patterns</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Pricing Sections</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Conversion-optimized pricing tables with billing frequency toggles, tiered feature checkmarks, and enterprise contact cards.
        </p>
      </div>

      {/* Pricing 1: 3-Tier with Billing Toggle */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Three-Tier Pricing with Billing Toggle</h2>
          <p className="text-xs text-muted-foreground">
            Complete pricing matrix with monthly/yearly interval switch, highlighted Pro tier, and itemized feature allowances.
          </p>
        </div>

        <PreviewFrame
          title="Three-Tier with Interval Toggle"
          badge="Pro"
          code={`import { useState } from "react";
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Switch } from "stackedui";
import { Check, Sparkles } from "lucide-react";

export function ThreeTierPricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="w-full py-8 text-center space-y-8">
      {/* Interval Toggle */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-xs font-medium">Monthly</span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className="text-xs font-medium">Yearly <Badge variant="gradient" size="sm">Save 20%</Badge></span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Free Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>Ideal for indie developers</CardDescription>
            <div className="pt-2">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-xs text-muted-foreground"> / month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Core UI Components</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> MIT Open Source License</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Community Support</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Pro Plan (Highlighted) */}
        <Card className="border-primary shadow-lg ring-1 ring-primary/40 relative">
          <Badge variant="gradient" className="absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
          <CardHeader>
            <CardTitle>Pro License</CardTitle>
            <CardDescription>Everything needed for commercial SaaS</CardDescription>
            <div className="pt-2">
              <span className="text-3xl font-bold">{isAnnual ? "$79" : "$99"}</span>
              <span className="text-xs text-muted-foreground"> / year</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> All 30+ Core Components</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> SaaS Admin Dashboard Template</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Full Website Sections Collection</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Application Blocks Library</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Lifetime Updates</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="w-full">Get Pro Access</Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>Custom architectures and dedicated SLA</CardDescription>
            <div className="pt-2">
              <span className="text-3xl font-bold">$299</span>
              <span className="text-xs text-muted-foreground"> / organization</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Unlimited Team Seats</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Design System Consultation</p>
            <p className="flex items-center gap-2"><Check className="size-3.5 text-emerald-500" /> Priority 24/7 SLA Support</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}`}
        >
          <div className="w-full py-6 text-center space-y-6">
            {/* Interval Toggle */}
            <div className="flex items-center justify-center gap-3">
              <span className={`text-xs ${!isAnnual ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
              <span className={`text-xs flex items-center gap-1.5 ${isAnnual ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                <span>Yearly</span>
                <Badge variant="gradient" size="sm">Save 20%</Badge>
              </span>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left w-full">
              {/* Free Plan */}
              <Card className="flex flex-col justify-between">
                <CardHeader className="space-y-1.5">
                  <CardTitle className="text-base font-bold">Starter</CardTitle>
                  <CardDescription className="text-xs">Ideal for personal hobby projects</CardDescription>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-foreground">$0</span>
                    <span className="text-xs text-muted-foreground"> / free forever</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-xs pt-2">
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> Core UI Components</p>
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> MIT Open Source License</p>
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> CLI Tool Scaffolding</p>
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> Community GitHub Support</p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Pro Plan (Highlighted) */}
              <Card className="border-primary shadow-lg ring-1 ring-primary/40 relative flex flex-col justify-between bg-card">
                <Badge variant="gradient" size="sm" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
                <CardHeader className="space-y-1.5">
                  <CardTitle className="text-base font-bold">Pro Ecosystem</CardTitle>
                  <CardDescription className="text-xs">Full access for commercial SaaS products</CardDescription>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-foreground">{isAnnual ? "$79" : "$99"}</span>
                    <span className="text-xs text-muted-foreground"> / year license</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-xs pt-2">
                  <p className="flex items-center gap-2 text-foreground/80 font-medium"><Check className="size-3.5 text-emerald-500 shrink-0" /> All 30+ Core UI Components</p>
                  <p className="flex items-center gap-2 text-foreground/80 font-medium"><Check className="size-3.5 text-emerald-500 shrink-0" /> Flagship SaaS Admin Dashboard</p>
                  <p className="flex items-center gap-2 text-foreground/80 font-medium"><Check className="size-3.5 text-emerald-500 shrink-0" /> Full Website Sections Collection</p>
                  <p className="flex items-center gap-2 text-foreground/80 font-medium"><Check className="size-3.5 text-emerald-500 shrink-0" /> Application Blocks Library</p>
                  <p className="flex items-center gap-2 text-foreground/80 font-medium"><Check className="size-3.5 text-emerald-500 shrink-0" /> Continuous Template Updates</p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="primary" size="sm" className="w-full shadow-md shadow-indigo-500/20">
                    Get Pro Access
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col justify-between">
                <CardHeader className="space-y-1.5">
                  <CardTitle className="text-base font-bold">Enterprise Team</CardTitle>
                  <CardDescription className="text-xs">Tailored design systems & dedicated SLAs</CardDescription>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-foreground">$299</span>
                    <span className="text-xs text-muted-foreground"> / organization</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-xs pt-2">
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> Unlimited Team Developers</p>
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> Custom Token Theming Guidance</p>
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> Private GitHub Advisory Repo</p>
                  <p className="flex items-center gap-2 text-foreground/80"><Check className="size-3.5 text-emerald-500 shrink-0" /> Direct Slack Channel Support</p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </PreviewFrame>
      </section>
    </div>
  );
}
