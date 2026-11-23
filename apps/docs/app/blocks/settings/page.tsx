"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import {
  Button,
  Input,
  Textarea,
  Label,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Avatar,
  AvatarFallback,
} from "stackedui";
import { Shield, Smartphone, Laptop } from "lucide-react";

export default function SettingsBlocksPage() {
  const [twoFactor, setTwoFactor] = React.useState(true);

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Application Blocks</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">3 Settings Panels</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Profile & Settings Blocks</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Polished configuration panels for user profile information, two-factor authentication controls, active session management, and notification toggles.
        </p>
      </div>

      {/* Block 1: Profile Details */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. User Profile Settings</h2>
          <p className="text-xs text-muted-foreground">
            Personal identity card with avatar management, full name, username slug, and biography textarea.
          </p>
        </div>

        <PreviewFrame
          title="User Profile Form"
          badge="Free"
          code={`import { Button, Input, Textarea, Label, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Avatar, AvatarFallback } from "stackedui";

export function ProfileSettingsPanel() {
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
        <CardDescription>Update your personal information and public bio.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <AvatarFallback className="bg-primary text-primary-foreground font-bold">MR</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <Button variant="outline" size="sm">Change Avatar</Button>
            <p className="text-[11px] text-muted-foreground">JPG, GIF or PNG. Max size 2MB.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" defaultValue="MN Raza" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="mnraza" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us a little bit about yourself..." defaultValue="Building Stacked UI design system and modern developer tools." />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-xl mx-auto text-left bg-card">
            <CardHeader className="space-y-1">
              <CardTitle className="text-base font-bold">Profile Details</CardTitle>
              <CardDescription className="text-xs">
                Update your personal information, public avatar, and biography.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-14">
                  <AvatarFallback className="bg-indigo-600 text-white font-bold text-sm">MR</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs">Change Avatar</Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive">Remove</Button>
                  </div>
                  <p className="text-[10px] text-muted-foreground">JPG or PNG. Max size 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="prof-name" className="text-xs">Full Name</Label>
                  <Input id="prof-name" defaultValue="MN Raza" className="text-xs" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="prof-user" className="text-xs">Username</Label>
                  <Input id="prof-user" defaultValue="mnraza" className="text-xs" />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="prof-bio" className="text-xs">Bio</Label>
                <Textarea
                  id="prof-bio"
                  rows={3}
                  defaultValue="Principal Engineer & Designer building Stacked UI and modern developer tools."
                  className="text-xs"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t border-border pt-4">
              <Button variant="outline" size="sm" className="text-xs">Cancel</Button>
              <Button variant="primary" size="sm" className="text-xs">Save Changes</Button>
            </CardFooter>
          </Card>
        </PreviewFrame>
      </section>

      {/* Block 2: Security & 2FA */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">2. Security & Two-Factor Authentication</h2>
          <p className="text-xs text-muted-foreground">
            Manage two-factor authentication, active devices, and security credentials.
          </p>
        </div>

        <PreviewFrame
          title="Security & 2FA Panel"
          badge="Pro"
          code={`import { Button, Switch, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "stackedui";
import { Shield, Smartphone, Laptop } from "lucide-react";

export function SecuritySettings() {
  return (
    <Card className="w-full max-w-xl mx-auto space-y-4 p-6">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Shield className="size-5 text-primary" />
          <div>
            <h4 className="text-sm font-semibold">Two-Factor Authentication (2FA)</h4>
            <p className="text-xs text-muted-foreground">Protect your account with an extra layer of security.</p>
          </div>
        </div>
        <Switch defaultChecked />
      </div>

      <div className="space-y-3">
        <h5 className="text-xs font-semibold uppercase text-muted-foreground">Active Sessions</h5>
        <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <Laptop className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs font-medium">MacBook Pro — San Francisco, US</p>
              <span className="text-[10px] text-emerald-500 font-semibold">Current session</span>
            </div>
          </div>
          <Badge variant="outline" size="sm">Active</Badge>
        </div>
      </div>
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-xl mx-auto text-left bg-card p-5 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Shield className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Two-Factor Authentication (2FA)</h4>
                  <p className="text-xs text-muted-foreground">Authenticate using an authenticator app (TOTP).</p>
                </div>
              </div>
              <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Active Logged-In Sessions
                </h5>
                <Button variant="ghost" size="sm" className="h-6 text-[11px] text-destructive hover:text-destructive">
                  Log out all other devices
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20">
                  <div className="flex items-center gap-3">
                    <Laptop className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-semibold text-foreground">MacBook Pro 16&quot; • macOS</p>
                      <span className="text-[10px] text-emerald-500 font-medium">Chrome • San Francisco, US (Current)</span>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20">
                  <div className="flex items-center gap-3">
                    <Smartphone className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-semibold text-foreground">iPhone 15 Pro • iOS</p>
                      <span className="text-[10px] text-muted-foreground">Stacked App • Last active 2 hours ago</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-[10px]">Revoke</Button>
                </div>
              </div>
            </div>
          </Card>
        </PreviewFrame>
      </section>
    </div>
  );
}
