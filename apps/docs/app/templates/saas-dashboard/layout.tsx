"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FolderKanban,
  CreditCard,
  UserCheck,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Layers,
  Menu,
  X,
  Plus,
} from "lucide-react";
import {
  Button,
  Badge,
  Avatar,
  AvatarFallback,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "stackedui";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/app/_components/ThemeToggle";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: NavItem[] = [
  { name: "Overview", href: "/templates/saas-dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/templates/saas-dashboard/users", icon: Users, badge: "1.8k" },
  { name: "Analytics", href: "/templates/saas-dashboard/analytics", icon: BarChart3 },
  { name: "Projects", href: "/templates/saas-dashboard/projects", icon: FolderKanban, badge: "12" },
  { name: "Billing", href: "/templates/saas-dashboard/billing", icon: CreditCard },
  { name: "Team", href: "/templates/saas-dashboard/team", icon: UserCheck },
  { name: "Settings", href: "/templates/saas-dashboard/settings", icon: Settings },
];

export default function SaasDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const notifications = [
    { id: 1, title: "New Enterprise signup", desc: "NexusLab upgraded to Pro Tier ($299)", time: "12m ago", type: "success" },
    { id: 2, title: "High API usage alert", desc: "Endpoint /v2/query reached 85% of monthly quota", time: "1h ago", type: "warning" },
    { id: 3, title: "Database backup completed", desc: "Automated snapshot verified across 3 regions", time: "3h ago", type: "info" },
  ];

  // Get current page name for breadcrumb
  const currentPage = navItems.find((item) => item.href === pathname) || { name: "Dashboard" };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-card shrink-0">
        {/* Workspace Switcher */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between p-2 rounded-xl border border-border/80 bg-muted/40 hover:bg-muted transition-colors cursor-pointer">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                AC
              </div>
              <div className="text-left">
                <p className="text-xs font-bold leading-tight text-foreground truncate max-w-[120px]">Acme Labs Inc.</p>
                <span className="text-[10px] text-muted-foreground">Pro Team Plan</span>
              </div>
            </div>
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1 block">
            Platform
          </span>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="size-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded font-semibold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Usage Box */}
        <div className="p-3 border-t border-border">
          <div className="p-3 rounded-xl border border-border/60 bg-muted/30 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-foreground">API Storage</span>
              <span className="text-muted-foreground font-mono">68%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[68%] rounded-full" />
            </div>
            <p className="text-[10px] text-muted-foreground">13.6 GB of 20 GB used</p>
          </div>
        </div>

        {/* User Card */}
        <div className="p-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Avatar className="size-8">
              <AvatarFallback className="bg-primary/20 text-primary font-bold text-xs">MR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-bold leading-tight text-foreground">MN Raza</p>
              <span className="text-[10px] text-muted-foreground">raza@stacked-ui.com</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-14 border-b border-border bg-card/60 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between shrink-0">
          {/* Left: Mobile Toggle & Breadcrumbs */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground"
              aria-label="Toggle mobile sidebar"
            >
              <Menu className="size-5" />
            </button>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Acme Labs</span>
              <span className="text-muted-foreground">/</span>
              <span className="font-semibold text-foreground">{currentPage.name}</span>
            </div>
          </div>

          {/* Right: Search, Notifications, Actions */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative hidden sm:block w-48 md:w-64">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search app... (⌘K)"
                className="w-full rounded-lg border border-input bg-background pl-8 pr-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Notifications Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="View notifications"
                >
                  <Bell className="size-4" />
                  <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary ring-2 ring-background" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 shadow-lg" align="end">
                <div className="p-3 border-b border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">Notifications</span>
                  <Badge variant="outline" size="sm">3 unread</Badge>
                </div>
                <div className="divide-y divide-border max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-3 hover:bg-muted/40 transition-colors text-left space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-foreground">{n.title}</span>
                        <span className="text-[10px] text-muted-foreground">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Quick Action */}
            <Link href="/templates/saas-dashboard/users">
              <Button variant="primary" size="sm" className="h-8 text-xs gap-1.5 shadow-sm">
                <Plus className="size-3.5" />
                <span className="hidden sm:inline">Invite Member</span>
              </Button>
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden bg-background/80 backdrop-blur-sm">
            <div className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border p-4 flex flex-col justify-between shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <div className="size-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
                      <Layers className="size-3.5" />
                    </div>
                    <span>Stacked UI</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-1 rounded text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium",
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="size-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] bg-muted px-1.5 py-0.2 rounded font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Exit to Docs</span>
                <Link href="/templates">
                  <Button variant="outline" size="sm" className="text-xs">
                    Exit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Scrollable Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
