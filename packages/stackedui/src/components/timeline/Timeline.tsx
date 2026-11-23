import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    data-slot="timeline"
    className={cn("relative border-l border-border pl-6 space-y-6", className)}
    {...props}
  />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-slot="timeline-item"
    className={cn("relative", className)}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const TimelinePoint = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="timeline-point"
    className={cn(
      "absolute -left-[31px] top-1 flex size-3 items-center justify-center rounded-full border-2 border-background bg-primary ring-4 ring-background",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
TimelinePoint.displayName = "TimelinePoint";

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="timeline-content"
    className={cn("space-y-1", className)}
    {...props}
  />
));
TimelineContent.displayName = "TimelineContent";

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    data-slot="timeline-title"
    className={cn("text-sm font-semibold text-foreground", className)}
    {...props}
  />
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineTime = React.forwardRef<
  HTMLTimeElement,
  React.TimeHTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
  <time
    ref={ref}
    data-slot="timeline-time"
    className={cn("block text-xs font-normal text-muted-foreground", className)}
    {...props}
  />
));
TimelineTime.displayName = "TimelineTime";

export {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTitle,
  TimelineTime,
};
