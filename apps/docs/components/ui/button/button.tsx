import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:brightness-110 hover:scale-105",
        primary:
          "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-md hover:shadow-lg hover:brightness-105 hover:scale-102",
        secondary:
          "bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-white shadow-sm hover:shadow-md hover:brightness-110",
        success:
          "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md hover:shadow-lg hover:brightness-105 hover:scale-102",
        danger:
          "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md hover:shadow-lg hover:brightness-105 hover:scale-102",
        warning:
          "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md hover:shadow-lg hover:brightness-105 hover:scale-102",
        outline:
          "border-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-900 hover:text-gray-900 dark:hover:text-white",
        ghost:
          "bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-900 hover:shadow-sm",
        link:
          "bg-transparent text-indigo-600 dark:text-indigo-400 underline-offset-4 hover:underline hover:text-indigo-800 dark:hover:text-indigo-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };