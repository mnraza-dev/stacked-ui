import { Button } from "stackedui";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">StackedUI</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </main>
  )
}