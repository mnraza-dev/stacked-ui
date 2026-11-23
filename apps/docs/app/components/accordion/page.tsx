import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
} from "stackedui";

export default function AccordionDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Accordion</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Vertically stacked interactive disclosure headings with collapsible content panels.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-lg">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Stacked UI free to use?</AccordionTrigger>
              <AccordionContent>
                Yes! The core Stacked UI component library is completely free and open-source under the MIT license.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it compatible with Tailwind CSS v4?</AccordionTrigger>
              <AccordionContent>
                Stacked UI is built specifically on Tailwind CSS v4 and modern CSS theme variables.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does it support keyboard navigation?</AccordionTrigger>
              <AccordionContent>
                All disclosure and focus states adhere to WAI-ARIA authoring practices.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add accordion</code>
        </div>
      </section>
    </div>
  );
}
