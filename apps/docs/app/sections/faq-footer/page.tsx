"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import { Badge, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "stackedui";
import { Layers } from "lucide-react";
import Link from "next/link";

export default function FaqFooterPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Website Sections</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">3 Patterns</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">FAQ & Footers</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Searchable accordions to resolve customer pre-purchase questions, paired with structured 4-column footer layouts.
        </p>
      </div>

      {/* Section 1: FAQ Accordion */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. Interactive FAQ Accordion</h2>
          <p className="text-xs text-muted-foreground">
            Frequently asked questions organized with smooth collapsible Radix accordion items.
          </p>
        </div>

        <PreviewFrame
          title="Interactive FAQ Accordion"
          badge="Free"
          code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "stackedui";

export function FaqSection() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Stacked UI?</AccordionTrigger>
          <AccordionContent>
            Stacked UI is a production-ready React component library, marketing sections collection, and dashboard template ecosystem built with Tailwind CSS v4 and Radix UI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I use Stacked UI in commercial projects?</AccordionTrigger>
          <AccordionContent>
            Yes. The core library is released under the MIT license, and premium templates include commercial royalty-free project usage.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Does Stacked UI support React 19 and Next.js 15?</AccordionTrigger>
          <AccordionContent>
            Yes, Stacked UI is fully tested and verified against React 19 and Next.js 15 with zero peer-dependency warnings.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`}
        >
          <div className="w-full max-w-xl mx-auto space-y-4 text-left">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes Stacked UI different from shadcn/ui?</AccordionTrigger>
                <AccordionContent>
                  Stacked UI goes beyond raw component primitives: it includes ready-to-use marketing sections, complete application blocks, and fully functional multi-page SaaS dashboard templates with live client-side state.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use Stacked UI in commercial client projects?</AccordionTrigger>
                <AccordionContent>
                  Yes! The core library is open-source under the MIT license. You can use components and templates in unlimited personal and commercial client deliverables.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does Stacked UI support Tailwind CSS v4?</AccordionTrigger>
                <AccordionContent>
                  Yes, Stacked UI is natively architected for Tailwind CSS v4, utilizing CSS variables, the modern @theme directive, and OKLCH color spaces.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I install components?</AccordionTrigger>
                <AccordionContent>
                  You can either install the bundled npm package (<code>pnpm add stackedui</code>) or use our official CLI (<code>npx stackedui-cli add &lt;component&gt;</code>) to copy components directly into your project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </PreviewFrame>
      </section>

      {/* Section 2: 4-Column Modern Footer */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Modern 4-Column Footer</h2>
          <p className="text-xs text-muted-foreground">
            Complete footer layout with branding, product links, resources, company info, and legal copyright.
          </p>
        </div>

        <PreviewFrame
          title="4-Column Modern Footer"
          badge="Free"
          code={`import { Layers, Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-card/60 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-sm font-bold">Stacked UI</h4>
          <p className="text-xs text-muted-foreground mt-2">The complete UI ecosystem for modern developers.</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase text-muted-foreground">Product</h5>
          <ul className="text-xs space-y-1.5 mt-2">
            <li>Components</li>
            <li>Sections</li>
            <li>Templates</li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase text-muted-foreground">Resources</h5>
          <ul className="text-xs space-y-1.5 mt-2">
            <li>Documentation</li>
            <li>CLI Scaffolding</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase text-muted-foreground">Legal</h5>
          <ul className="text-xs space-y-1.5 mt-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>MIT License</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}`}
        >
          <div className="w-full border border-border rounded-xl bg-card p-6 text-left space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-2 md:col-span-1 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <div className="size-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                    <Layers className="size-3.5" />
                  </div>
                  <span>Stacked UI</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  The complete UI ecosystem for modern developers. From components to full templates.
                </p>
              </div>

              <div>
                <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Product</h5>
                <ul className="text-xs space-y-1.5 mt-2 text-foreground/80">
                  <li><Link href="/components/button" className="hover:text-primary">Components</Link></li>
                  <li><Link href="/sections" className="hover:text-primary">Sections</Link></li>
                  <li><Link href="/blocks" className="hover:text-primary">Blocks</Link></li>
                  <li><Link href="/templates" className="hover:text-primary">Templates</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Resources</h5>
                <ul className="text-xs space-y-1.5 mt-2 text-foreground/80">
                  <li><Link href="/docs/introduction" className="hover:text-primary">Documentation</Link></li>
                  <li><Link href="/docs/installation" className="hover:text-primary">Installation</Link></li>
                  <li><Link href="/docs/theming" className="hover:text-primary">Theming</Link></li>
                  <li><Link href="/docs/cli" className="hover:text-primary">CLI Scaffolding</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Ecosystem</h5>
                <ul className="text-xs space-y-1.5 mt-2 text-foreground/80">
                  <li><span className="text-emerald-500 font-medium">● System Status: 100%</span></li>
                  <li><span>MIT Open Source</span></li>
                  <li><span>React 19 & Tailwind v4</span></li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>&copy; 2026 Stacked UI. Built by MN Raza.</span>
              <div className="flex items-center gap-4">
                <a href="https://github.com/mnraza-dev/stacked-ui" target="_blank" rel="noreferrer" className="hover:text-foreground">
                  GitHub
                </a>
                <span>MIT License</span>
              </div>
            </div>
          </div>
        </PreviewFrame>
      </section>
    </div>
  );
}
