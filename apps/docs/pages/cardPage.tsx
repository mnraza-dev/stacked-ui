import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card/Card";
import { Button } from "stackedui";
import { X } from "lucide-react";

export default function CardPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Card
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        A versatile card component with gradient borders and hover effects, ideal for showcasing content in modern business UIs.
      </p>

      {/* Preview Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Preview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card variant="default" className="p-6">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                A clean card with subtle hover scaling.
              </CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Perfect for minimal dashboards or content displays.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Learn More</Button>
            </CardFooter>
          </Card>
          <Card variant="elevated" className="p-6">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>
                A vibrant card with gradient effects and bold hover.
              </CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Ideal for showcasing premium features or products.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Usage Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Usage
        </h2>
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <pre className="p-6 text-sm text-gray-100">
            <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "stackedui";
import { Button } from "stackedui";
import { X } from "lucide-react";

export default function Example() {
  return (
    <Card variant="elevated" className="p-6">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>
          A vibrant card with gradient effects.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Ideal for showcasing premium features.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Get Started</Button>
      </CardFooter>
    </Card>
  );
}
`}</code>
          </pre>
        </div>
      </section>

      {/* Customization Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Customization
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use the <code>className</code> prop to apply Tailwind CSS utilities for custom gradients, shadows, or other styles.
        </p>
        <div className="bg-gray-800 rounded-xl overflow-hidden mb-6">
          <pre className="p-6 text-sm text-gray-100">
            <code>{`import { Card, CardHeader, CardTitle, CardContent } from "stackedui";

export default function Example() {
  return (
    <Card
      variant="elevated"
      className="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 hover:scale-[1.04]"
    >
      <CardHeader>
        <CardTitle>Custom Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A card with a custom red-to-pink gradient.</p>
      </CardContent>
    </Card>
  );
}
`}</code>
          </pre>
        </div>
        <Card
          variant="elevated"
          className="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 hover:scale-[1.04]"
        >
          <CardHeader>
            <CardTitle>Custom Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              A card with a custom red-to-pink gradient.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}