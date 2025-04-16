import * as React from 'react';
import { cn } from '@/lib/utils';

// Define props including optional label and new variant prop
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'dark' | 'white';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, variant = 'dark', ...props }, ref) => {
    // Ensure there's an ID for label association
    const generatedId = React.useId();
    const inputId = id || generatedId;

    // Define variant-specific classes
    // NOTE: labelInitial is NO LONGER used here for initial color setting below.
    //       It's kept here conceptually, but overridden in the label className.
    const variantClasses = {
      dark: {
        inputText: "text-[var(--color-hwc-dark)]",
        labelInitial: "text-gray-500", // Original dark initial color (now overridden below)
        labelFocus:
          "peer-focus:text-[var(--color-hwc-dark)] peer-[:not(:placeholder-shown)]:text-[var(--color-hwc-dark)]",
        underline: "after:bg-[var(--color-hwc-dark)]",
      },
      white: {
        inputText: "text-[var(--color-hwc-white)]",
        labelInitial: "text-white", // Original white initial color (now overridden below)
        labelFocus:
          "peer-focus:text-[var(--color-hwc-white)] peer-[:not(:placeholder-shown)]:text-[var(--color-hwc-white)]",
        underline: "after:bg-[var(--color-hwc-white)]",
      },
    }[variant];

    return (
      // Outer container remains relative group
      <div className="relative group">
        {/* Input Element (previous modifications retained) */}
        <input
          type={type}
          id={inputId} // Use the determined ID
          className={cn(
            // Base styling
            "flex h-[50px] w-full rounded-none border-0 bg-transparent px-0 pb-1 pt-5",
            "border-t-transparent border-l-transparent border-r-transparent",
            // Default static bottom border color
            "border-b border-b-[var(--color-neutralstaupe-greyneutral-5)]",
            // Hover/focus static bottom border color
            "group-hover:border-b-[var(--color-hwc-white)] group-focus-within:border-b-[var(--color-hwc-white)]",
            // Default placeholder text color
            "placeholder:text-[var(--color-neutralstaupe-greyneutral-5)]",
            // Hover/focus placeholder text color
            "group-hover:placeholder:text-[var(--color-hwc-white)] group-focus-within:placeholder:text-[var(--color-hwc-white)]",
            // Typed text color (uses variant)
            "text-sm",
            variantClasses.inputText,
            "focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0",
            "peer",
            // Allow overriding classes
            className
          )}
          ref={ref}
          placeholder={label ? " " : props.placeholder || " "}
          {...props}
        />

        {/* Floating Label Element */}
        {label && ( // Only render label if provided
          <label
            htmlFor={inputId} // Associate label with input
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2", // Initial position
              "cursor-text",
              "text-sm", // Maintain text size
              // --- START: MODIFICATION ---
              // Set initial color to match default border color, overriding variant for initial state
              "text-[var(--color-neutralstaupe-greyneutral-5)]",
              // --- END: MODIFICATION ---
              "transition-all duration-200 ease-out", // Smooth transition
              // Float up/shrink/change color on focus or when input has value;
              "peer-focus:-translate-y-[110%] peer-focus:scale-75",
              "peer-[:not(:placeholder-shown)]:-translate-y-[110%]",
              "peer-[:not(:placeholder-shown)]:scale-75",
              // Color WHEN FLOATED still uses variant logic:
              variantClasses.labelFocus,
              "pointer-events-none" // Allow clicks through
            )}
          >
            {label}
          </label>
        )}

        {/* Animated Underline Container (unchanged) */}
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full h-px", // Positioned at bottom
            "pointer-events-none",
            // ::after pseudo-element for the animated "laser" line
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full",
            variantClasses.underline, // Variant underline color (animation remains intact)
            "after:origin-left after:scale-x-0", // Animate from left
            "after:transition-transform after:duration-400 after:ease-out", // Transition transform
            "group-hover:after:scale-x-100 group-focus-within:after:scale-x-100" // Scale on hover/focus-within
          )}
          aria-hidden="true"
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };