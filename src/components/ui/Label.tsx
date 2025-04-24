import * as React from "react";
import { cn } from "@/lib/utils";

// Define props extending standard label attributes
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

// Simple Label component
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      // Basic styling - adjust as needed
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
