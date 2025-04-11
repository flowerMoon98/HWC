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

    // Define variant-specific classes (only for text color, label, and underline)
    const variantClasses = {
      dark: {
        inputText: "text-[var(--color-hwc-dark)]",
        labelInitial: "text-gray-500",
        labelFocus:
          "peer-focus:text-[var(--color-hwc-dark)] peer-[:not(:placeholder-shown)]:text-[var(--color-hwc-dark)]",
        underline: "after:bg-[var(--color-hwc-dark)]",
      },
      white: {
        inputText: "text-[var(--color-hwc-white)]",
        labelInitial: "text-white",
        labelFocus:
          "peer-focus:text-[var(--color-hwc-white)] peer-[:not(:placeholder-shown)]:text-[var(--color-hwc-white)]",
        underline: "after:bg-[var(--color-hwc-white)]",
      },
    }[variant];

    return (
      // Outer container remains relative group
      <div className="relative group">
        {/* Input Element */}
        <input
          type={type}
          id={inputId} // Use the determined ID
          className={cn(
            // Base styling
            "flex h-[50px] w-full rounded-none border-0 bg-transparent px-0 pb-1 pt-5", // Keep pt-5 for label space
            // Apply static bottom border directly to input
            "border-b border-gray-300", // Use visible light gray static border
            "border-t-transparent border-l-transparent border-r-transparent", // Ensure other borders off
            // Set text color for typed input with variant override and text size
            "text-sm",
            variantClasses.inputText,
            "placeholder-transparent", // Hide placeholder visually
            "focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0", // Focus styles
            "peer", // Peer class for label interaction
            // Allow overriding classes
            className
          )}
          ref={ref}
          placeholder={label ? " " : props.placeholder || " "} // Use space placeholder only if label exists
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
              variantClasses.labelInitial, // Variant initial label color
              "transition-all duration-200 ease-out", // Smooth transition
              // Float up/shrink/change color on focus or when input has value;
              // only the color parts come from the variantClasses (below)
              "peer-focus:-translate-y-[110%] peer-focus:scale-75",
              "peer-[:not(:placeholder-shown)]:-translate-y-[110%]",
              "peer-[:not(:placeholder-shown)]:scale-75",
              variantClasses.labelFocus, // Variant label color on focus/value
              "pointer-events-none" // Allow clicks through
            )}
          >
            {label}
          </label>
        )}

        {/* Animated Underline Container */}
        {/* This div only handles the ::after animation now */}
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full h-px", // Positioned at bottom
            "pointer-events-none",
            // No background needed here for static line
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
