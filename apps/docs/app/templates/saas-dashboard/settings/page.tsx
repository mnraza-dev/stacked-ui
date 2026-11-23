"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Card,
  Input,
  Label,
  Textarea,
  Switch,
  Avatar,
  AvatarFallback,
} from "stackedui";
import {
  Settings,
  User,
  Palette,
  Bell,
  Shield,
  Laptop,
  Check,
} from "lucide-react";

export default function DashboardSettingsPage() {
  const [activeTab, setActiveTab] = React.useState<"general" | "profile" | "appearance" | "notifications" | "security">("general");

  // General settings state
  const [wsName, setWsName] = React.useState("Acme Labs Inc.");
  const [wsSlug, setWsSlug] = React.useState("acme-labs");

  // Appearance settings state
  const [accentColor, setAccentColor] = React.useState("indigo");

  // Notification toggles
  const [emailAlerts, setEmailAlerts] = React.useState(true);
  const [deployNotifications, setDeployNotifications] = React.useState(true);
  const [marketingDigests, setMarketingDigests] = React.useState(false);

  // Security state
  const [twoFactor, setTwoFactor] = React.useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Workspace Settings</h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Configure organization identity, team profile, theme preferences, and security enforcement.
        </p>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-xl w-fit text-xs font-medium">
        {[
          { id: "general", label: "General", icon: Settings },
          { id: "profile", label: "Profile", icon: User },
          { id: "appearance", label: "Appearance", icon: Palette },
          { id: "notifications", label: "Notifications", icon: Bell },
          { id: "security", label: "Security", icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as "general" | "profile" | "appearance" | "notifications" | "security")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-background text-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: General */}
      {activeTab === "general" && (
        <Card className="max-w-2xl p-6 space-y-6">
          <div className="space-y-1 pb-4 border-b border-border">
            <h2 className="text-base font-bold text-foreground">Organization Profile</h2>
            <p className="text-xs text-muted-foreground">General settings for your Acme Labs organization.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="set-name" className="text-xs">Organization Name</Label>
              <Input
                id="set-name"
                value={wsName}
                onChange={(e) => setWsName(e.target.value)}
                className="text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="set-slug" className="text-xs">Organization URL Slug</Label>
              <div className="flex items-center rounded-md border border-input bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground font-mono">
                <span>app.stacked-ui.com/</span>
                <input
                  type="text"
                  value={wsSlug}
                  onChange={(e) => setWsSlug(e.target.value)}
                  className="bg-transparent text-foreground focus:outline-none ml-1 w-full"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="set-domain" className="text-xs">Custom Domain</Label>
              <Input id="set-domain" placeholder="dashboard.acme.com" className="text-xs" />
              <p className="text-[10px] text-muted-foreground">Requires CNAME DNS verification record.</p>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-border">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Save General Settings</Button>
          </div>
        </Card>
      )}

      {/* Tab 2: Profile */}
      {activeTab === "profile" && (
        <Card className="max-w-2xl p-6 space-y-6">
          <div className="space-y-1 pb-4 border-b border-border">
            <h2 className="text-base font-bold text-foreground">User Profile</h2>
            <p className="text-xs text-muted-foreground">Your personal identity across Stacked UI workspaces.</p>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="size-16">
              <AvatarFallback className="bg-primary/20 text-primary font-bold text-base">MR</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-7 text-xs">Upload New Photo</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive">Remove</Button>
              </div>
              <p className="text-[10px] text-muted-foreground">Recommended size: 400x400px. JPG or PNG.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="set-prof-name" className="text-xs">Your Name</Label>
              <Input id="set-prof-name" defaultValue="MN Raza" className="text-xs" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="set-prof-email" className="text-xs">Email Address</Label>
              <Input id="set-prof-email" defaultValue="raza@stacked-ui.com" className="text-xs" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="set-prof-bio" className="text-xs">Biography</Label>
            <Textarea
              id="set-prof-bio"
              rows={3}
              defaultValue="Principal Engineer & Architect building Stacked UI."
              className="text-xs"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-border">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Update Profile</Button>
          </div>
        </Card>
      )}

      {/* Tab 3: Appearance */}
      {activeTab === "appearance" && (
        <Card className="max-w-2xl p-6 space-y-6">
          <div className="space-y-1 pb-4 border-b border-border">
            <h2 className="text-base font-bold text-foreground">Appearance & Theming</h2>
            <p className="text-xs text-muted-foreground">Customize color accents and theme behavior.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs">Primary Accent Color</Label>
              <div className="flex items-center gap-3">
                {[
                  { name: "indigo", color: "bg-indigo-600" },
                  { name: "blue", color: "bg-blue-600" },
                  { name: "purple", color: "bg-purple-600" },
                  { name: "emerald", color: "bg-emerald-600" },
                  { name: "amber", color: "bg-amber-600" },
                ].map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setAccentColor(c.name)}
                    className={`size-7 rounded-full ${c.color} flex items-center justify-center text-white transition-transform ${
                      accentColor === c.name ? "ring-2 ring-foreground ring-offset-2 scale-110" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {accentColor === c.name && <Check className="size-3.5" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-border">
            <Button variant="primary" size="sm">Save Preferences</Button>
          </div>
        </Card>
      )}

      {/* Tab 4: Notifications */}
      {activeTab === "notifications" && (
        <Card className="max-w-2xl p-6 space-y-6">
          <div className="space-y-1 pb-4 border-b border-border">
            <h2 className="text-base font-bold text-foreground">Notification Preferences</h2>
            <p className="text-xs text-muted-foreground">Control when and how you receive alerts.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-foreground">Critical Security & API Alerts</h4>
                <p className="text-[11px] text-muted-foreground">Instant emails if quota exceeds 85% or unusual logins are detected.</p>
              </div>
              <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-foreground">Deployment Notifications</h4>
                <p className="text-[11px] text-muted-foreground">Receive notifications when production deployments succeed or fail.</p>
              </div>
              <Switch checked={deployNotifications} onCheckedChange={setDeployNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-foreground">Weekly Digest & Product News</h4>
                <p className="text-[11px] text-muted-foreground">Curated summary of new components and ecosystem templates.</p>
              </div>
              <Switch checked={marketingDigests} onCheckedChange={setMarketingDigests} />
            </div>
          </div>
        </Card>
      )}

      {/* Tab 5: Security */}
      {activeTab === "security" && (
        <Card className="max-w-2xl p-6 space-y-6">
          <div className="space-y-1 pb-4 border-b border-border">
            <h2 className="text-base font-bold text-foreground">Security Controls</h2>
            <p className="text-xs text-muted-foreground">Configure two-factor authentication and active session policies.</p>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3">
              <Shield className="size-5 text-indigo-500" />
              <div>
                <h4 className="text-xs font-semibold text-foreground">Two-Factor Authentication (2FA)</h4>
                <p className="text-[11px] text-muted-foreground">Require an authenticator app code on every login.</p>
              </div>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Active Authorized Devices
            </h4>

            <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3">
                <Laptop className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-xs font-semibold text-foreground">MacBook Pro 16&quot; • Chrome</p>
                  <span className="text-[10px] text-emerald-500 font-medium">San Francisco, US (Current Session)</span>
                </div>
              </div>
              <Badge variant="success" size="sm">Active</Badge>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
