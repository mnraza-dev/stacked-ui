"use client";

import * as React from "react";
import {
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  Code2,
  Eye,
  RotateCcw,
} from "lucide-react";
import { Button, Badge } from "stackedui";
import { cn } from "@/lib/utils";

interface PreviewFrameProps {
  title?: string;
  description?: string;
  badge?: "Free" | "Pro" | "New" | string;
  code?: string;
  children: React.ReactNode;
  defaultTab?: "preview" | "code";
  align?: "center" | "start";
  className?: string;
}

export function PreviewFrame({
  title,
  description,
  badge = "Free",
  code,
  children,
  defaultTab = "preview",
  align = "center",
  className,
}: PreviewFrameProps) {
  const [tab, setTab] = React.useState<"preview" | "code">(defaultTab);
  const [viewport, setViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copied, setCopied] = React.useState(false);
  const [key, setKey] = React.useState(0);

  const copyCode = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const viewportWidths = {
    desktop: "w-full",
    tablet: "max-w-[768px]",
    mobile: "max-w-[375px]",
  };

  return (
    <div className={cn("rounded-xl border border-border bg-card shadow-xs overflow-hidden my-6", className)}>
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}
          {badge && (
            <Badge
              variant={badge === "Pro" ? "gradient" : badge === "New" ? "success" : "outline"}
              size="sm"
            >
              {badge}
            </Badge>
          )}
          {description && (
            <span className="hidden sm:inline text-xs text-muted-foreground truncate max-w-xs">
              {description}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport controls (only in preview mode) */}
          {tab === "preview" && (
            <div className="hidden sm:flex items-center rounded-lg border border-border bg-background p-0.5">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Desktop (100%)"
                className={cn(
                  "p-1.5 rounded-md text-xs transition-colors",
                  viewport === "desktop"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Monitor className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Tablet (768px)"
                className={cn(
                  "p-1.5 rounded-md text-xs transition-colors",
                  viewport === "tablet"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Tablet className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Mobile (375px)"
                className={cn(
                  "p-1.5 rounded-md text-xs transition-colors",
                  viewport === "mobile"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Smartphone className="size-3.5" />
              </button>
            </div>
          )}

          {/* Reset Preview Key */}
          {tab === "preview" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setKey((k) => k + 1)}
              title="Reset interaction state"
              className="size-7 p-0 text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="size-3.5" />
            </Button>
          )}

          {/* Tab switch: Preview vs Code */}
          <div className="flex items-center rounded-lg border border-border bg-background p-0.5">
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                tab === "preview"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Eye className="size-3" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("code")}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                tab === "code"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Code2 className="size-3" />
              <span>Code</span>
            </button>
          </div>

          {/* Copy Code */}
          {code && (
            <Button
              variant="outline"
              size="sm"
              onClick={copyCode}
              className="h-7 px-2.5 text-xs gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-green-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Content Area */}
      {tab === "preview" ? (
        <div className="bg-muted/10 p-4 sm:p-8 flex justify-center overflow-x-auto min-h-[220px]">
          <div
            key={key}
            className={cn(
              "transition-all duration-300 w-full flex flex-col",
              align === "center" ? "items-center justify-center" : "items-stretch",
              viewportWidths[viewport]
            )}
          >
            {children}
          </div>
        </div>
      ) : (
        <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs overflow-x-auto max-h-[460px]">
          <pre>
            <code>{code || "// Code snippet not provided"}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
