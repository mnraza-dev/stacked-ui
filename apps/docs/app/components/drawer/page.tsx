"use client";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Button,
  Badge,
} from "stackedui";

export default function DrawerDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Drawer</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Slide-over drawer panel anchored to any screen edge (left, right, top, bottom).
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-12 flex items-center justify-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Side Drawer</Button>
            </DrawerTrigger>
            <DrawerContent side="right">
              <DrawerHeader>
                <DrawerTitle>Configuration Panel</DrawerTitle>
                <DrawerDescription>
                  Adjust dynamic parameters and view real-time changes.
                </DrawerDescription>
              </DrawerHeader>
              <div className="py-6 text-sm text-muted-foreground">
                Side drawer content renders here seamlessly.
              </div>
              <DrawerFooter>
                <Button variant="primary">Apply Settings</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add drawer</code>
        </div>
      </section>
    </div>
  );
}
