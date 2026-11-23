"use client";

import * as React from "react";
import { PreviewFrame } from "@/app/_components/PreviewFrame";
import {
  Button,
  Input,
  Label,
  Card,
  Badge,
} from "stackedui";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export default function OnboardingBlocksPage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [workspaceName, setWorkspaceName] = React.useState("Acme Labs");
  const [selectedRole, setSelectedRole] = React.useState("Frontend Engineer");

  const roles = ["Frontend Engineer", "Fullstack Developer", "Product Designer", "Engineering Manager"];

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="sm">Application Blocks</Badge>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Interactive Wizard</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Onboarding Flows</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Multi-step account onboarding wizard that guides newly signed-up users through workspace creation, persona identification, and team invitations.
        </p>
      </div>

      {/* Main Wizard */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">1. 3-Step Workspace Setup Wizard</h2>
          <p className="text-xs text-muted-foreground">
            Test the interactive steps below: advance through Workspace Name, Role Selection, and Team Invite.
          </p>
        </div>

        <PreviewFrame
          title="Interactive Onboarding Wizard"
          badge="New"
          code={`import { useState } from "react";
import { Button, Input, Label, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge } from "stackedui";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export function OnboardingWizard() {
  const [step, setStep] = useState(1);
  // Full stateful wizard logic...
}`}
        >
          <Card className="w-full max-w-lg mx-auto text-left bg-card p-6 space-y-6 shadow-md">
            {/* Step Indicators */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
              {[
                { num: 1, label: "Workspace" },
                { num: 2, label: "Persona" },
                { num: 3, label: "Invite Team" },
              ].map((s) => {
                const isPassed = currentStep > s.num;
                const isCurrent = currentStep === s.num;
                return (
                  <div key={s.num} className="flex items-center gap-2">
                    <div
                      className={`size-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        isPassed
                          ? "bg-emerald-500 text-white"
                          : isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isPassed ? <Check className="size-3.5" /> : s.num}
                    </div>
                    <span className={`text-xs ${isCurrent ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Step Content */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-foreground">Create your workspace</h3>
                  <p className="text-xs text-muted-foreground">This is where your team will collaborate on Stacked UI projects.</p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ws-name" className="text-xs">Workspace Name</Label>
                  <Input
                    id="ws-name"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    className="text-xs"
                  />
                  <span className="text-[10px] text-muted-foreground font-mono">
                    URL: app.stacked-ui.com/{workspaceName.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-foreground">What is your primary role?</h3>
                  <p className="text-xs text-muted-foreground">We will personalize your component recommendations based on your discipline.</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {roles.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRole(r)}
                      className={`p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                        selectedRole === r
                          ? "border-primary bg-primary/10 text-primary font-semibold ring-1 ring-primary/40"
                          : "border-border bg-muted/20 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-foreground">Invite team members</h3>
                  <p className="text-xs text-muted-foreground">Collaborate seamlessly with colleagues by adding their emails.</p>
                </div>
                <div className="space-y-2">
                  <Input placeholder="sarah@company.com" className="text-xs" />
                  <Input placeholder="marcus@company.com" className="text-xs" />
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className="text-xs gap-1"
                >
                  <ArrowLeft className="size-3" /> Back
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setCurrentStep((s) => s + 1)}
                  className="text-xs gap-1 shadow-sm"
                >
                  Continue <ArrowRight className="size-3" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs gap-1 shadow-sm bg-emerald-600 hover:bg-emerald-500"
                >
                  Finish Setup <Check className="size-3" />
                </Button>
              )}
            </div>
          </Card>
        </PreviewFrame>
      </section>
    </div>
  );
}
