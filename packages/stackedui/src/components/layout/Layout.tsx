import * as React from "react";
import { cn } from "@/lib/utils";

// Container
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        data-slot="container"
        className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

// Stack (Vertical or Horizontal flex with consistent gap)
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = "column", gap = "md", align = "stretch", justify = "start", ...props }, ref) => {
    const gapClasses = {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    };
    const alignClasses = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    };
    const justifyClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    };

    return (
      <div
        ref={ref}
        data-slot="stack"
        className={cn(
          "flex",
          direction === "column" ? "flex-col" : "flex-row",
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          className
        )}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

// Grid
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = "md", ...props }, ref) => {
    const colsClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
      6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
      12: "grid-cols-12",
    };
    const gapClasses = {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    };

    return (
      <div
        ref={ref}
        data-slot="grid"
        className={cn("grid", colsClasses[cols], gapClasses[gap], className)}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

// Flex
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  wrap?: boolean;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, wrap = false, align = "center", justify = "start", gap = "md", ...props }, ref) => {
    const alignClasses = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    };
    const justifyClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };
    const gapClasses = {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    };

    return (
      <div
        ref={ref}
        data-slot="flex"
        className={cn(
          "flex",
          wrap && "flex-wrap",
          alignClasses[align],
          justifyClasses[justify],
          gapClasses[gap],
          className
        )}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

// Section
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "py-6 sm:py-8",
      md: "py-12 sm:py-16",
      lg: "py-16 sm:py-24",
    };

    return (
      <section
        ref={ref}
        data-slot="section"
        className={cn("w-full", sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Container, Stack, Grid, Flex, Section };
