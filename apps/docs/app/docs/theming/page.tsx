import { Badge, Button } from "stackedui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ThemingPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Design Tokens</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Theming & Tokens</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Customizing colors, corner radiuses, and light/dark theme variables with Tailwind CSS v4.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Design Token Architecture</h2>
        <p className="text-sm text-muted-foreground">
          Stacked UI utilizes the OKLCH color space for perceptually uniform light and dark theme contrast. The core tokens map directly to Tailwind CSS utilities:
        </p>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-xs overflow-x-auto">
          <pre>{`:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --border: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.929 0.013 255.508);
  --primary-foreground: oklch(0.208 0.042 265.755);
  --border: oklch(1 0 0 / 10%);
}`}</pre>
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        <Link href="/docs/cli">
          <Button variant="primary" className="gap-2">
            Explore CLI Tool <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
