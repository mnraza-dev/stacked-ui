// mdx-components.tsx
"use client";
import { Button } from "stackedui";
import { Check, ChevronRight } from "lucide-react";

export function useMDXComponents(_props: Record<string, any> = {}) {
  return {
    Button: (props: any) => <Button {...props} />,       // wrap Button
    Check: (props: any) => <Check {...props} />,         // wrap Check
    ChevronRight: (props: any) => <ChevronRight {...props} />, // wrap ChevronRight
    ..._props,
  };
}
