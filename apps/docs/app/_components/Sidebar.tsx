"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface NavGroup {
  title: string;
  items: { name: string; href: string; badge?: string }[];
}

const navGroups: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs/introduction" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Theming & Tokens", href: "/docs/theming" },
      { name: "CLI Tool", href: "/docs/cli" },
    ],
  },
  {
    title: "Basic",
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
  {
    title: "Form",
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
  {
    title: "Navigation",
    items: [
      { name: "Tabs", href: "/components/tabs" },
      { name: "Breadcrumb", href: "/components/breadcrumb" },
      { name: "Pagination", href: "/components/pagination" },
      { name: "Dropdown Menu", href: "/components/dropdown-menu" },
    ],
  },
  {
    title: "Overlay",
    items: [
      { name: "Dialog", href: "/components/dialog" },
      { name: "Alert Dialog", href: "/components/alert-dialog" },
      { name: "Drawer", href: "/components/drawer" },
      { name: "Popover", href: "/components/popover" },
      { name: "Hover Card", href: "/components/hover-card" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { name: "Alert", href: "/components/alert" },
      { name: "Empty State", href: "/components/empty-state" },
    ],
  },
  {
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
  {
    title: "Layout",
    items: [
      { name: "Layout & Stack", href: "/components/layout" },
      { name: "Aspect Ratio", href: "/components/aspect-ratio" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");

  const filteredGroups = React.useMemo(() => {
    if (!query.trim()) return navGroups;
    const lower = query.toLowerCase();
    return navGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.name.toLowerCase().includes(lower)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <aside className="w-64 shrink-0 border-r border-border bg-sidebar text-sidebar-foreground h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto p-4 hidden md:block">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search docs..."
          className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <nav className="space-y-6">
        {filteredGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-2">
              {group.title}
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
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="rounded bg-primary/10 px-1 py-0.2 text-[9px] text-primary">
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
