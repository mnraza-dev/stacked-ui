"use client";
import { useState } from "react";
import ButtonConfig from "./Config";
import ButtonPreview from "./Preview";
import { Button } from "stackedui";
import PreviewWrapper from "@/shared/PreviewWrapper";
import { generateButtonCode } from "@/shared/CodeGenerator";
import type { ButtonConfigType, IconMapType } from "@/types";
import { Check, ChevronRight } from "lucide-react";

const iconMap: IconMapType = {
  Check: <Check className="h-4 w-4 mr-2" />,
  ChevronRight: <ChevronRight className="h-4 w-4 mr-2" />,
};

export default function ButtonPlayground() {
  const [config, setConfig] = useState<ButtonConfigType>({
    variant: "primary",
    size: "default",
    disabled: false,
    fullWidth: false,
    showIcon: false,
    icon: "Check",
    customText: "Interactive Button",
    gradient: { from: "#3b82f6", to: "#6366f1" },
    rounded: "md",
    shadow: false,
    hoverEffect: true,
  });

  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto">
      <PreviewWrapper className="bg-card border border-border flex-1">
        <ButtonPreview config={config} iconMap={iconMap} />
        <div className="mt-8 w-full border-t border-border pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-sm text-muted-foreground">Generated JSX / TSX Code</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(generateButtonCode(config, iconMap));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </div>
          <pre className="bg-muted border border-border mt-3 rounded-lg p-4 text-xs font-mono overflow-auto text-foreground">
            {generateButtonCode(config, iconMap)}
          </pre>
        </div>
      </PreviewWrapper>
      <ButtonConfig config={config} setConfig={setConfig} />
    </div>
  );
}
