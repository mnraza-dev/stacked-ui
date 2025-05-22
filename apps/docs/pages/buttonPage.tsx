import { Button } from "stackedui";
import { Check, ChevronRight } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Button
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        A versatile button component with multiple variants and sizes, styled with vibrant gradients and smooth hover effects.
      </p>

      {/* Preview Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Preview
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="default">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" size="icon">
              <Check className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Usage
        </h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <pre className="p-6 text-sm text-gray-100">
            <code>{`import { Button } from "stackedui";
import { Check, ChevronRight } from "lucide-react";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Basic Usage */}
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>

      {/* With Icon */}
      <Button variant="primary" size="lg">
        <ChevronRight className="mr-2 h-5 w-5" />
        Continue
      </Button>

      {/* Icon Only */}
      <Button variant="success" size="icon">
        <Check className="h-5 w-5" />
      </Button>

      {/* Disabled */}
      <Button variant="danger" disabled>
        Disabled
      </Button>

      {/* Custom Styles */}
      <Button variant="primary" className="bg-gradient-to-r from-red-500 to-pink-500">
        Custom Gradient
      </Button>
    </div>
  );
}
`}</code>
          </pre>
        </div>
      </section>

      {/* Customization Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Customization
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The Button component supports Tailwind CSS utilities via the <code>className</code> prop for custom styling. You can override gradients, colors, or add additional effects.
        </p>
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
          <pre className="p-6 text-sm text-gray-100">
            <code>{`// Custom gradient and shadow
<Button
  variant="primary"
  className="bg-gradient-to-r from-red-500 to-pink-500 shadow-xl hover:shadow-2xl"
>
  Custom Button
</Button>

// Custom text color and border
<Button
  variant="outline"
  className="text-purple-600 border-purple-600 hover:bg-purple-100"
>
  Styled Outline
</Button>
`}</code>
          </pre>
        </div>
        <div className="flex gap-4">
          <Button
            variant="primary"
            className="bg-gradient-to-r from-red-500 to-pink-500 shadow-xl hover:shadow-2xl"
          >
            Custom Button
          </Button>
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600 hover:bg-purple-100"
          >
            Styled Outline
          </Button>
        </div>
      </section>
    </div>
  );
}