"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Badge,
  Card,
} from "stackedui";

export default function CarouselDocPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Carousel</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Motion carousel component powered by Embla Carousel with smooth physics and navigation buttons.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-12 flex justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((index) => (
                <CarouselItem key={index}>
                  <Card className="flex aspect-square items-center justify-center p-6 bg-muted/40">
                    <span className="text-4xl font-bold">{index}</span>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add carousel</code>
        </div>
      </section>
    </div>
  );
}
