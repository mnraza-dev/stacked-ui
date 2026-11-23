"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Sparkles } from "lucide-react";

interface NavGroup {
  category: "docs" | "components" | "sections" | "blocks" | "templates";
  title: string;
  items: { name: string; href: string; badge?: string; isPro?: boolean }[];
}

const navGroups: NavGroup[] = [
  // Templates
  {
    category: "templates",
    title: "Application Templates",
    items: [
      { name: "Templates Gallery", href: "/templates", badge: "Overview" },
      { name: "SaaS Admin Dashboard", href: "/templates/saas-dashboard", badge: "Live App", isPro: true },
      { name: "CRM Pipeline Dashboard", href: "/templates#crm", badge: "Pro", isPro: true },
      { name: "Product Analytics", href: "/templates#analytics", badge: "Pro", isPro: true },
      { name: "Starter Dashboard", href: "/templates#starter", badge: "Free" },
    ],
  },
  // Sections
  {
    category: "sections",
    title: "Marketing Sections",
    items: [
      { name: "Sections Overview", href: "/sections", badge: "Overview" },
      { name: "Hero Sections", href: "/sections/hero", badge: "5 variants" },
      { name: "Feature Sections", href: "/sections/features", badge: "4 variants" },
      { name: "Pricing Sections", href: "/sections/pricing", badge: "4 variants" },
      { name: "Testimonials & Social", href: "/sections/testimonials", badge: "3 variants" },
      { name: "CTA Banners", href: "/sections/cta", badge: "4 variants" },
      { name: "FAQ & Footers", href: "/sections/faq-footer", badge: "3 variants" },
    ],
  },
  // Blocks
  {
    category: "blocks",
    title: "Application Blocks",
    items: [
      { name: "Blocks Overview", href: "/blocks", badge: "Overview" },
      { name: "Authentication", href: "/blocks/authentication", badge: "3 screens" },
      { name: "Profile & Settings", href: "/blocks/settings", badge: "3 panels" },
      { name: "Data Tables & Filters", href: "/blocks/tables", badge: "Interactive" },
      { name: "Billing & Plans", href: "/blocks/billing", badge: "SaaS" },
      { name: "Analytics & Metrics", href: "/blocks/analytics", badge: "Charts" },
      { name: "Onboarding Flow", href: "/blocks/onboarding", badge: "Wizard" },
    ],
  },
  // Getting Started
  {
    category: "docs",
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs/introduction" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Theming & Tokens", href: "/docs/theming" },
      { name: "CLI Tool", href: "/docs/cli" },
    ],
  },
  // Basic Components
  {
    category: "components",
    title: "Basic Components",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Badge", href: "/components/badge" },
      { name: "Avatar", href: "/components/avatar" },
      { name: "Card", href: "/components/card" },
      { name: "Separator", href: "/components/separator" },
      { name: "Skeleton", href: "/components/skeleton" },
      { name: "Spinner", href: "/components/spinner" },
      { name: "Progress", href: "/components/progress" },
      { name: "Tooltip", href: "/components/tooltip" },
    ],
  },
  // Form Components
  {
    category: "components",
    title: "Form Components",
    items: [
      { name: "Input", href: "/components/input" },
      { name: "Textarea", href: "/components/textarea" },
      { name: "Label", href: "/components/label" },
      { name: "Checkbox", href: "/components/checkbox" },
      { name: "Radio Group", href: "/components/radio-group" },
      { name: "Switch", href: "/components/switch" },
      { name: "Select", href: "/components/select" },
      { name: "Form Field", href: "/components/form-field" },
    ],
  },
  // Navigation Components
  {
    category: "components",
    title: "Navigation Components",
    items: [
      { name: "Tabs", href: "/components/tabs" },
      { name: "Breadcrumb", href: "/components/breadcrumb" },
      { name: "Pagination", href: "/components/pagination" },
      { name: "Dropdown Menu", href: "/components/dropdown-menu" },
    ],
  },
  // Overlay Components
  {
    category: "components",
    title: "Overlay Components",
    items: [
      { name: "Dialog", href: "/components/dialog" },
      { name: "Alert Dialog", href: "/components/alert-dialog" },
      { name: "Drawer", href: "/components/drawer" },
      { name: "Popover", href: "/components/popover" },
      { name: "Hover Card", href: "/components/hover-card" },
    ],
  },
  // Feedback Components
  {
    category: "components",
    title: "Feedback Components",
    items: [
      { name: "Alert", href: "/components/alert" },
      { name: "Empty State", href: "/components/empty-state" },
    ],
  },
  // Data Display
  {
    category: "components",
    title: "Data Display",
    items: [
      { name: "Table", href: "/components/table" },
      { name: "Accordion", href: "/components/accordion" },
      { name: "Collapsible", href: "/components/collapsible" },
      { name: "Stat Card", href: "/components/stat-card" },
      { name: "Timeline", href: "/components/timeline" },
      { name: "Carousel", href: "/components/carousel" },
    ],
  },
  // Layout Components
  {
    category: "components",
    title: "Layout Components",
    items: [
      { name: "Layout & Stack", href: "/components/layout" },
      { name: "Aspect Ratio", href: "/components/aspect-ratio" },
    ],
  },
];

type CategoryFilter = "all" | "components" | "sections" | "blocks" | "templates";

export default function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");

  // Determine active category filter based on pathname
  const initialCategory: CategoryFilter = React.useMemo(() => {
    if (pathname.startsWith("/sections")) return "sections";
    if (pathname.startsWith("/blocks")) return "blocks";
    if (pathname.startsWith("/templates")) return "templates";
    if (pathname.startsWith("/components")) return "components";
    if (pathname.startsWith("/docs")) return "all";
    return "all";
  }, [pathname]);

  const [activeCategory, setActiveCategory] = React.useState<CategoryFilter>(initialCategory);

  React.useEffect(() => {
    if (pathname.startsWith("/sections")) setActiveCategory("sections");
    else if (pathname.startsWith("/blocks")) setActiveCategory("blocks");
    else if (pathname.startsWith("/templates")) setActiveCategory("templates");
    else if (pathname.startsWith("/components")) setActiveCategory("components");
  }, [pathname]);

  const filteredGroups = React.useMemo(() => {
    let groups = navGroups;
    if (activeCategory !== "all") {
      groups = groups.filter((g) => g.category === activeCategory || (activeCategory === "components" && g.category === "docs"));
    }

    if (!query.trim()) return groups;
    const lower = query.toLowerCase();
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.name.toLowerCase().includes(lower)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, activeCategory]);

  return (
    <aside className="w-64 shrink-0 border-r border-border bg-sidebar text-sidebar-foreground h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto p-4 hidden md:block">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1 p-1 bg-muted/60 rounded-lg mb-3 text-[11px] font-medium">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "flex-1 py-1 px-1.5 rounded-md text-center transition-colors truncate",
            activeCategory === "all"
              ? "bg-background text-foreground shadow-xs font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory("components")}
          className={cn(
            "flex-1 py-1 px-1.5 rounded-md text-center transition-colors truncate",
            activeCategory === "components"
              ? "bg-background text-foreground shadow-xs font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          UI
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory("sections")}
          className={cn(
            "flex-1 py-1 px-1.5 rounded-md text-center transition-colors truncate",
            activeCategory === "sections"
              ? "bg-background text-foreground shadow-xs font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Sections
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory("blocks")}
          className={cn(
            "flex-1 py-1 px-1.5 rounded-md text-center transition-colors truncate",
            activeCategory === "blocks"
              ? "bg-background text-foreground shadow-xs font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Blocks
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory("templates")}
          className={cn(
            "flex-1 py-1 px-1.5 rounded-md text-center transition-colors truncate",
            activeCategory === "templates"
              ? "bg-background text-foreground shadow-xs font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Apps
        </button>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter library..."
          className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <nav className="space-y-6">
        {filteredGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-2 flex items-center justify-between">
              <span>{group.title}</span>
              {group.category === "templates" && (
                <Sparkles className="size-3 text-indigo-500" />
              )}
            </h4>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        isActive
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      <span className="truncate">{item.name}</span>
                      {item.badge && (
                        <span
                          className={cn(
                            "rounded px-1.5 py-0.2 text-[9px] font-semibold leading-tight shrink-0",
                            item.badge === "Live App" || item.isPro
                              ? "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                              : item.badge === "Free"
                              ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
