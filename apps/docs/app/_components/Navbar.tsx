"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Layers, Sparkles } from "lucide-react";
import { Badge } from "stackedui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Components", href: "/components/button", activePrefix: "/components" },
    { label: "Sections", href: "/sections", activePrefix: "/sections", badge: "New" },
    { label: "Blocks", href: "/blocks", activePrefix: "/blocks", badge: "New" },
    { label: "Templates", href: "/templates", activePrefix: "/templates", badge: "Pro" },
    { label: "Docs", href: "/docs/introduction", activePrefix: "/docs" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
            <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs">
              <Layers className="size-4" />
            </div>
            <span>Stacked <span className="text-primary font-normal">UI</span></span>
            <Badge variant="outline" size="sm" className="ml-1 text-[10px]">
              v0.1.0
            </Badge>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.activePrefix);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.2 text-[9px] font-semibold leading-tight",
                        link.badge === "Pro"
                          ? "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                          : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                      )}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/templates/saas-dashboard"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition-opacity"
          >
            <Sparkles className="size-3.5" />
            <span>Live SaaS Dashboard</span>
          </Link>

          <a
            href="https://github.com/mnraza-dev/stacked-ui"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Github className="size-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
