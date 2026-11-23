import * as React from "react";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  description?: string;
  change?: number;
  changePeriod?: string;
  icon?: React.ReactNode;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, title, value, description, change, changePeriod = "vs last period", icon, ...props }, ref) => {
    const isPositive = typeof change === "number" && change > 0;
    const isNegative = typeof change === "number" && change < 0;
    const isNeutral = typeof change === "number" && change === 0;

    return (
      <div
        ref={ref}
        data-slot="stat-card"
        className={cn(
          "rounded-xl border border-border bg-card p-6 shadow-xs text-card-foreground transition-all hover:shadow-md",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          {icon && (
            <div className="flex size-9 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground">
              {icon}
            </div>
          )}
        </div>

        <div className="mt-3">
          <div className="text-3xl font-bold tracking-tight">{value}</div>
        </div>

        {(change !== undefined || description) && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            {change !== undefined && (
              <span
                className={cn(
                  "inline-flex items-center font-semibold rounded px-1 py-0.5",
                  isPositive && "bg-green-500/10 text-green-600 dark:text-green-400",
                  isNegative && "bg-destructive/10 text-destructive",
                  isNeutral && "bg-muted text-muted-foreground"
                )}
              >
                {isPositive && <ArrowUp className="size-3 mr-0.5" />}
                {isNegative && <ArrowDown className="size-3 mr-0.5" />}
                {isNeutral && <Minus className="size-3 mr-0.5" />}
                {Math.abs(change)}%
              </span>
            )}
            {description && <span>{description}</span>}
            {change !== undefined && !description && <span>{changePeriod}</span>}
          </div>
        )}
      </div>
    );
  }
);
StatCard.displayName = "StatCard";

export { StatCard };
