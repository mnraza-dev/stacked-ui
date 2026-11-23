"use client";

import * as React from "react";
import { Switch, Badge } from "stackedui";

export default function SwitchDocPage() {
  const [airplaneMode, setAirplaneMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Two-state toggle switch for enabling or disabling settings and preferences.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Airplane Mode</span>
            <Switch checked={airplaneMode} onCheckedChange={setAirplaneMode} />
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm font-medium">Push Notifications</span>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add switch</code>
        </div>
      </section>
    </div>
  );
}
