"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "stackedui";
import { Check, ChevronRight } from "lucide-react";

const components = {
  Button: (props: React.ComponentProps<typeof Button>) => <Button {...props} />,
  Check: (props: React.ComponentProps<typeof Check>) => <Check {...props} />,
  ChevronRight: (props: React.ComponentProps<typeof ChevronRight>) => <ChevronRight {...props} />,
};

export function MDXWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  );
}
