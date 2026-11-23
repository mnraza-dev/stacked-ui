"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import { Badge, Card } from "stackedui";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Website Sections</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">3 Social Proof Patterns</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Testimonials & Trust</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Build customer confidence with real customer quotes, company role verification, star ratings, and partner logo trust clouds.
        </p>
      </div>

      {/* Testimonials 1: 3-Column Review Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Customer Review Grid</h2>
          <p className="text-xs text-muted-foreground">
            3-card testimonial grid featuring verified ratings, author avatar pills, and role details.
          </p>
        </div>

        <PreviewFrame
          title="Customer Review Grid"
          badge="Free"
          code={`import { Card, CardContent } from "stackedui";
import { Star } from "lucide-react";

export function ReviewGrid() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "Head of Product at NexusLab",
      quote: "Stacked UI saved our frontend team at least 6 weeks of sprint work. The SaaS dashboard template gave us our complete admin panel on day one.",
      rating: 5,
    },
    {
      name: "Marcus Miller",
      role: "Founder at MetricFlow",
      quote: "The combination of Radix accessibility primitives and Tailwind CSS v4 design tokens is the cleanest architecture I have used in years.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Staff Frontend Engineer",
      quote: "Zero runtime bloat, strict TypeScript types, and truly beautiful components. We replaced three different disjointed libraries with Stacked UI.",
      rating: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((r, i) => (
        <Card key={i} className="p-6 space-y-4">
          <div className="flex gap-1 text-amber-500">
            {[...Array(r.rating)].map((_, idx) => (
              <Star key={idx} className="size-4 fill-current" />
            ))}
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">"{r.quote}"</p>
          <div>
            <h4 className="text-xs font-bold text-foreground">{r.name}</h4>
            <span className="text-[10px] text-muted-foreground">{r.role}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
            <Card className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground italic">
                  &ldquo;Stacked UI saved our frontend team at least 6 weeks of sprint work. The SaaS dashboard template gave us our complete admin panel on day one.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-border">
                <div className="size-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">SC</div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Sarah Chen</h4>
                  <span className="text-[10px] text-muted-foreground">Head of Product, NexusLab</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground italic">
                  &ldquo;The combination of Radix accessibility primitives and Tailwind CSS v4 design tokens is the cleanest architecture I have used in years.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-border">
                <div className="size-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">MM</div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Marcus Miller</h4>
                  <span className="text-[10px] text-muted-foreground">Founder, MetricFlow</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground italic">
                  &ldquo;Zero runtime bloat, strict TypeScript types, and truly beautiful components. We replaced three disjointed libraries with Stacked UI.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-border">
                <div className="size-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">ER</div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Elena Rostova</h4>
                  <span className="text-[10px] text-muted-foreground">Staff Engineer, ScaleGrid</span>
                </div>
              </div>
            </Card>
          </div>
        </PreviewFrame>
      </section>

      {/* Testimonials 2: Trust Logo Cloud */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Partner Trust Cloud</h2>
          <p className="text-xs text-muted-foreground">
            Monochrome customer and sponsor logos with subtle hover brightness.
          </p>
        </div>

        <PreviewFrame
          title="Partner Logo Cloud"
          badge="Free"
          code={`export function LogoCloud() {
  const partners = ["ACME Corp", "Vortex AI", "CloudSphere", "Synthetix", "HyperBase"];

  return (
    <div className="py-8 text-center space-y-4">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Trusted by engineers at modern tech companies
      </span>
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-75">
        {partners.map((p, i) => (
          <span key={i} className="font-bold text-base tracking-tight hover:opacity-100 transition-opacity">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}`}
        >
          <div className="py-6 text-center space-y-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted by engineering teams across high-growth startups
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 pt-2">
              <span className="font-bold text-sm tracking-tight text-foreground hover:text-primary transition-colors">ACME CORP</span>
              <span className="font-bold text-sm tracking-tight text-foreground hover:text-primary transition-colors">VORTEX AI</span>
              <span className="font-bold text-sm tracking-tight text-foreground hover:text-primary transition-colors">CLOUDSPHERE</span>
              <span className="font-bold text-sm tracking-tight text-foreground hover:text-primary transition-colors">SYNTHETIX</span>
              <span className="font-bold text-sm tracking-tight text-foreground hover:text-primary transition-colors">HYPERBASE</span>
            </div>
          </div>
        </PreviewFrame>
      </section>
    </div>
  );
}
