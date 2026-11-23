import { Alert, AlertTitle, AlertDescription, Badge } from "stackedui";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

export default function AlertDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Alert</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Callout container for displaying critical feedback, warnings, and informational alerts.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 space-y-4">
          <Alert variant="info">
            <Info className="size-4" />
            <AlertTitle>Information Update</AlertTitle>
            <AlertDescription>
              A new minor version of the API has been released. No breaking changes detected.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircle2 className="size-4" />
            <AlertTitle>Payment Processed</AlertTitle>
            <AlertDescription>
              Your subscription renewal was processed successfully. Receipt sent via email.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="size-4" />
            <AlertTitle>Rate Limit Approaching</AlertTitle>
            <AlertDescription>
              You have used 85% of your allotted API requests for the current billing cycle.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>Database Connection Lost</AlertTitle>
            <AlertDescription>
              Unable to reach primary cluster endpoint. Automatic failover initiated.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add alert</code>
        </div>
      </section>
    </div>
  );
}
