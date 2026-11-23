import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  Badge,
} from "stackedui";

export default function SelectDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Dropdown select menu for choosing single options with keyboard navigation and scroll buttons.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 max-w-xs">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
            Deployment Region
          </label>
          <Select defaultValue="us-east">
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="us-east">US East (N. Virginia)</SelectItem>
                <SelectItem value="us-west">US West (Oregon)</SelectItem>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="eu-west">EU (Frankfurt)</SelectItem>
                <SelectItem value="eu-central">EU (London)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add select</code>
        </div>
      </section>
    </div>
  );
}
