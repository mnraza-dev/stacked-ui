"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Layers } from "lucide-react";
import { Badge } from "stackedui";

export function Navbar() {
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

          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
            <Link href="/docs/introduction" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/components/button" className="hover:text-foreground transition-colors">
              Components
            </Link>
            <Link href="/docs/theming" className="hover:text-foreground transition-colors">
              Theming
            </Link>
            <Link href="/docs/cli" className="hover:text-foreground transition-colors">
              CLI
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
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
