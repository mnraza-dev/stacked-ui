"use client";

import * as React from "react";
import { Progress, Button, Badge } from "stackedui";

export default function ProgressDocPage() {
  const [val, setVal] = React.useState(45);

  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Linear visual progress bar indicator with smooth transition animations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Syncing repository</span>
              <span>{val}%</span>
            </div>
            <Progress value={val} />
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setVal(Math.max(0, val - 15))}>
              -15%
            </Button>
            <Button size="sm" variant="outline" onClick={() => setVal(Math.min(100, val + 15))}>
              +15%
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add progress</code>
        </div>
      </section>
    </div>
  );
}
