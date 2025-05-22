import { Input } from "stackedui";

export default function InputPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Input
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        A premium input component with animated focus states and glowing gradient effects, perfect for modern business forms.
      </p>

      {/* Preview Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Preview
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 space-y-4">
          <Input variant="default" placeholder="Default Input" />
          <Input variant="glowing" placeholder="Glowing Input" />
          <Input variant="default" placeholder="Disabled Input" disabled />
        </div>
      </section>

      {/* Usage Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Usage
        </h2>
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <pre className="p-6 text-sm text-gray-100">
            <code>{`import { Input } from "stackedui";

export default function Example() {
  return (
    <div className="space-y-4">
      <Input variant="default" placeholder="Default Input" />
      <Input variant="glowing" placeholder="Glowing Input" />
      <Input variant="default" placeholder="Disabled Input" disabled />
      {/* Custom Styles */}
      <Input
        variant="glowing"
        className="bg-gradient-to-r from-red-600/10 to-pink-600/10 focus:ring-red-500 hover:scale-[1.02]"
        placeholder="Custom Input"
      />
    </div>
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
          Use the <code>className</code> prop to apply Tailwind CSS utilities for custom gradients, focus rings, or other styles.
        </p>
        <div className="bg-gray-800 rounded-xl overflow-hidden mb-6">
          <pre className="p-6 text-sm text-gray-100">
            <code>{`// Custom gradient and focus ring
<Input
  variant="glowing"
  className="bg-gradient-to-r from-red-600/10 to-pink-600/10 focus:ring-red-500 hover:scale-[1.02]"
  placeholder="Custom Input"
/>

// Custom border and text
<Input
  variant="default"
  className="border-purple-500 text-purple-600 placeholder:text-purple-400 hover:bg-purple-50"
  placeholder="Styled Input"
/>
`}</code>
          </pre>
        </div>
        <div className="space-y-4">
          <Input
            variant="glowing"
            className="bg-gradient-to-r from-red-600/10 to-pink-600/10 focus:ring-red-500 hover:scale-[1.02]"
            placeholder="Custom Input"
          />
          <Input
            variant="default"
            className="border-purple-500 text-purple-600 placeholder:text-purple-400 hover:bg-purple-50"
            placeholder="Styled Input"
          />
        </div>
      </section>
    </div>
  );
}