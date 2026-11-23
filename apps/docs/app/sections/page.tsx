"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  Layout,
  DollarSign,
  MessageSquare,
  ArrowRight,
  HelpCircle,
  Megaphone,
  Check,
  Layers,
} from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "stackedui";

interface SectionCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  count: string;
  badge: "Free" | "Pro" | "New";
  href: string;
  highlights: string[];
}

const sectionCategories: SectionCard[] = [
  {
    id: "hero",
    title: "Hero Sections",
    description: "First-impression landing sections designed to hook visitors and drive immediate conversions.",
    icon: Layout,
    count: "5 Variants",
    badge: "New",
    href: "/sections/hero",
    highlights: ["SaaS Mockup Hero", "Minimal Centered", "Split-Screen Value", "Gradient Glow", "Interactive Cards"],
  },
  {
    id: "features",
    title: "Feature Showcases",
    description: "Display product capabilities with modern Bento grids, interactive cards, and feature lists.",
    icon: Sparkles,
    count: "4 Variants",
    badge: "New",
    href: "/sections/features",
    highlights: ["Modern Bento Grid", "3-Column Feature Cards", "Side-by-Side Showcase", "Icon Matrix"],
  },
  {
    id: "pricing",
    title: "Pricing Tables",
    description: "Conversion-optimized pricing cards with billing intervals, feature matrices, and FAQ integration.",
    icon: DollarSign,
    count: "4 Variants",
    badge: "Pro",
    href: "/sections/pricing",
    highlights: ["3-Tier with Interval Toggle", "Free vs Pro Minimal", "Feature Comparison Table", "Enterprise Banner"],
  },
  {
    id: "testimonials",
    title: "Social Proof & Testimonials",
    description: "Build trust with customer reviews, rating cards, and corporate customer logo clouds.",
    icon: MessageSquare,
    count: "3 Variants",
    badge: "Free",
    href: "/sections/testimonials",
    highlights: ["Customer Quote Grid", "Trust Logo Cloud", "Featured Case Study Card"],
  },
  {
    id: "cta",
    title: "Call to Action Banners",
    description: "High-impact conversion prompts, newsletter capture forms, and end-of-page signups.",
    icon: Megaphone,
    count: "4 Variants",
    badge: "New",
    href: "/sections/cta",
    highlights: ["Radial Gradient Banner", "Split Newsletter Form", "Minimal Card Prompt", "App Store Download"],
  },
  {
    id: "faq-footer",
    title: "FAQ & Footers",
    description: "Searchable accordions to address objections, paired with rich multi-column footer layouts.",
    icon: HelpCircle,
    count: "3 Variants",
    badge: "Free",
    href: "/sections/faq-footer",
    highlights: ["Category-Filtered FAQ Accordion", "4-Column Modern Footer", "Minimal 1-Row Legal Footer"],
  },
];

export default function SectionsCatalogPage() {
  const [filter, setFilter] = React.useState<"all" | "free" | "pro">("all");

  const filteredSections = React.useMemo(() => {
    if (filter === "all") return sectionCategories;
    if (filter === "free") return sectionCategories.filter((s) => s.badge === "Free");
    return sectionCategories.filter((s) => s.badge === "Pro" || s.badge === "New");
  }, [filter]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-foreground">
          <Layers className="size-3.5 text-primary" />
          <span>Website Sections Collection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready-to-Use Website Sections
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Drop-in landing page and marketing sections crafted with Tailwind CSS v4 and Stacked UI primitives. Fully responsive, accessible, and styled for both light and dark themes.
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
            All Sections ({sectionCategories.length})
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
            Pro & Featured
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSections.map((sec) => {
          const Icon = sec.icon;
          return (
            <Card key={sec.id} className="flex flex-col justify-between hover:border-primary/50 transition-all group">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-muted-foreground font-mono">{sec.count}</span>
                    <Badge variant={sec.badge === "Pro" ? "gradient" : sec.badge === "New" ? "success" : "outline"} size="sm">
                      {sec.badge}
                    </Badge>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {sec.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2 mt-1">
                    {sec.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Included Patterns:
                </span>
                <ul className="space-y-1 text-xs text-foreground/80">
                  {sec.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Link href={sec.href} className="w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between group-hover:bg-accent">
                    <span>Explore {sec.title}</span>
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
