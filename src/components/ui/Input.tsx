import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative group">
        <input
          type={type}
          className={cn(
            // Base styling: full width, transparent background, and a subtle bottom border
            "flex h-10 w-full rounded-md bg-transparent px-3 py-2 text-sm",
            "border-b-2 border-gray-300",
            // Remove default focus ring for a custom focus look
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            // Placeholder transitions for subtle opacity change on hover/focus
            "placeholder:opacity-60 transition-all duration-300 ease-in-out",
            "group-hover:placeholder:opacity-80 group-focus-within:placeholder:opacity-100",
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Animated Underline */}
        <div
          className={cn(
            // Positioned at the bottom of the container to overlay the input’s border
            "absolute bottom-0 left-0 w-full h-px pointer-events-none",
            // Use the ::after pseudo-element for the animated laser underline
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full",
            "after:bg-[var(--color-hwc-white)]",
            // Start with the underline scaled to 0
            "after:origin-center after:scale-x-0",
            // Animate the transform property for a smooth scaling effect
            "after:transition-transform after:duration-300 after:ease-out",
            // On hover/focus, scale the underline to full width and add a subtle glow
            "group-hover:after:scale-x-100 group-focus-within:after:scale-x-100",
            "group-hover:after:shadow-[0_0_8px_var(--color-hwc-white)] group-focus-within:after:shadow-[0_0_8px_var(--color-hwc-white)]"
          )}
          aria-hidden="true"
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
