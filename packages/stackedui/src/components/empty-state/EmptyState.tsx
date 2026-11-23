import * as React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty-state"
        className={cn(
          "flex flex-col items-center justify-center rounded-xl border border-dashed border-border p-8 sm:p-12 text-center",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground [&_svg]:size-6">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        {description && (
          <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
            {description}
          </p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
