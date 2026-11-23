import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Button,
} from "stackedui";
import { X } from "lucide-react";

export default function CardPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-3">Card</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Versatile content card with structured slots for header, title, description, actions, content body, and footer.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
              <CardDescription>
                Clean card layout with header and dismiss action.
              </CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon" aria-label="Dismiss">
                  <X className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Structured content container suitable for summaries, analytics, and settings.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Gradient Card</CardTitle>
              <CardDescription>
                Vibrant gradient border styling with hover elevation.
              </CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon" aria-label="Dismiss">
                  <X className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ideal for highlighting premium features, active tiers, or key value drivers.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <div className="bg-muted border border-border rounded-xl overflow-hidden">
          <pre className="p-6 text-sm font-mono overflow-x-auto">
            <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button
} from "stackedui";

export default function Example() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Feature Spotlight</CardTitle>
        <CardDescription>Highlight your key product features.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Explore</Button>
      </CardFooter>
    </Card>
  );
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
