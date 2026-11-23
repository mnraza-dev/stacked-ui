import * as React from "react";
import { Label } from "../label";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, description, error, required, children, ...props }, ref) => {
    const id = React.useId();

    return (
      <div
        ref={ref}
        data-slot="form-field"
        className={cn("space-y-1.5", className)}
        {...props}
      >
        {label && (
          <div className="flex items-center justify-between">
            <Label htmlFor={id} className="text-sm font-medium">
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </Label>
          </div>
        )}
        <div data-slot="form-control">{children}</div>
        {description && !error && (
          <p
            data-slot="form-description"
            className="text-xs text-muted-foreground"
          >
            {description}
          </p>
        )}
        {error && (
          <p
            data-slot="form-message"
            className="text-xs font-medium text-destructive animate-in fade-in-50"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export { FormField };
