"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Button,
  Badge,
} from "stackedui";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsibleDocPage() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Collapsible</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Interactive disclosure element that expands and collapses content panels.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-sm">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-sm font-semibold">@mnraza starred 3 repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown className="size-4" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border border-border px-4 py-2 font-mono text-xs">
              stacked-ui/react
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border border-border px-4 py-2 font-mono text-xs">
                radix-ui/primitives
              </div>
              <div className="rounded-md border border-border px-4 py-2 font-mono text-xs">
                tailwindlabs/tailwindcss
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add collapsible</code>
        </div>
      </section>
    </div>
  );
}
