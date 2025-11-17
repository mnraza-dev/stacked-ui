// Providers.tsx (client)
"use client";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "stackedui";
import { Check, ChevronRight } from "lucide-react";

export function MDXProviders({ children }: { children: React.ReactNode }) {
  const components = {
    Button: (props: any) => <Button {...props} />,
    Check: (props: any) => <Check {...props} />,
    ChevronRight: (props: any) => <ChevronRight {...props} />,
  };

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
