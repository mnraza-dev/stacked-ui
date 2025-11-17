'use client';

import { MDXProvider } from '@mdx-js/react';
import { Button } from 'stackedui';
import { Check, ChevronRight } from 'lucide-react';

const components = {
  Button: (props: any) => <Button {...props} />,
  Check: (props: any) => <Check {...props} />,
  ChevronRight: (props: any) => <ChevronRight {...props} />,
};

export function MDXWrapper({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
