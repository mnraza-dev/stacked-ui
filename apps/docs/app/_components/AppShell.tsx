"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "stackedui";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // SaaS Dashboard template has its own full-screen application shell
  const isTemplateApp = pathname.startsWith("/templates/saas-dashboard");
  const isHomePage = pathname === "/";

  if (isTemplateApp) {
    return (
      <div className="relative min-h-screen bg-background">
        {/* Floating return pill */}
        <div className="fixed top-3 right-4 z-50">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md hover:bg-accent transition-all"
          >
            <ArrowLeft className="size-3.5 text-primary" />
            <span>Exit Dashboard Preview</span>
            <Badge variant="gradient" size="sm" className="ml-1 text-[10px]">
              Flagship Template
            </Badge>
          </Link>
        </div>
        {children}
      </div>
    );
  }

  if (isHomePage) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 sm:p-10 max-w-6xl overflow-y-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
