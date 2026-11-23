import Link from "next/link";
import { Button, Badge } from "stackedui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Documentation</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Stacked UI is an accessible, beautifully crafted React component library engineered for velocity and production reliability.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Philosophy</h2>
        <p className="text-muted-foreground leading-relaxed">
          Building user interfaces shouldn&apos;t require choosing between accessibility, design flexibility, and developer experience. Stacked UI bridges this gap by combining:
        </p>
        <ul className="space-y-3 pt-2">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Uncompromised Accessibility:</strong> Built upon Radix UI primitives, ensuring screen reader friendliness, keyboard navigation, and full ARIA conformity.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Tailwind CSS v4 Native:</strong> Built for modern CSS architecture with OKLCH theme variables, zero-runtime overhead, and effortless theme switching.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">Strict TypeScript & Ref Forwarding:</strong> Full type safety, predictable prop auto-completion, and native element ref forwarding on every single component.
            </div>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        <Link href="/docs/installation">
          <Button variant="primary" className="gap-2">
            Proceed to Installation <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
