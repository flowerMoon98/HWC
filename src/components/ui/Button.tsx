import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define button variants using cva
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-hwc-teal)] text-[var(--color-hwc-white)] hover:opacity-90 border-[var(--color-hwc-teal)]",
        // REMOVED hover:bg, kept data-state style and text colors
        pill: "bg-transparent text-[var(--color-hwc-white)] data-[state=open]:bg-[var(--color-hwc-blue-light)] data-[state=open]:text-[var(--color-hwc-dark)] border-transparent transition-colors duration-300 ease-in-out", // Keep transition for text/active bg
        light:
          "bg-[var(--color-hwc-white)] text-[var(--color-hwc-dark)] border-[var(--color-hwc-dark)] hover:bg-gray-100",
        dark: "bg-[var(--color-hwc-dark)] text-[var(--color-hwc-white)] hover:opacity-90 border-[var(--color-hwc-dark)]",
        info: "bg-[var(--color-hwc-blue-light)] text-[var(--color-hwc-dark)] hover:opacity-90 border-[var(--color-hwc-blue-light)]",
        "teal-dark":
          "bg-[var(--color-hwc-teal-dark)] text-[var(--color-hwc-white)] hover:opacity-90 border-[var(--color-hwc-teal-dark)]",
        destructive: "bg-red-600 text-white hover:bg-red-600/90 border-red-700",
        outline:
          "border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-800 text-gray-800",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-200/80 border-gray-300",
        ghost: "hover:bg-gray-100 hover:text-gray-800 border-transparent",
        link: "text-blue-600 underline-offset-4 hover:underline rounded-none h-auto px-1 py-0 border-transparent",
      },
      size: {
        default: "h-9 px-6",
        sm: "h-8 rounded-full px-4", // Pill size
        lg: "h-11 rounded-full px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Define ButtonProps interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Button component implementation
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

// Export the component and variants
export { Button, buttonVariants };
