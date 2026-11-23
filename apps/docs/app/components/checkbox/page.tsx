"use client";

import * as React from "react";
import { Checkbox, Badge } from "stackedui";

export default function CheckboxDocPage() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Accessible binary checkbox control for form selection and multi-choice lists.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md space-y-4">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <Checkbox checked={checked} onCheckedChange={(val) => setChecked(!!val)} />
            <span className="text-sm font-medium">Accept terms and conditions</span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add checkbox</code>
        </div>
      </section>
    </div>
  );
}
