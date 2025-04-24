import * as React from "react";
import Link, { type LinkProps } from "next/link"; // Import Link and its props type
import { cn } from "@/lib/utils"; // Import utility for combining class names

// Define props for our custom link, extending standard LinkProps
// We also accept children and className explicitly
export interface AnimatedUnderlineLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

// Create the AnimatedUnderlineLink component using forwardRef
const AnimatedUnderlineLink = React.forwardRef<
  HTMLAnchorElement,
  AnimatedUnderlineLinkProps
>(({ className, children, ...props }, ref) => {
  return (
    // Use the Next.js Link component, passing down href and other LinkProps
    <Link
      ref={ref}
      className={cn(
        "text-sm font-medium text-[var(--color-hwc-dark)]", // Base link styling (can be overridden)
        "relative w-fit", // Relative for pseudo, fit content width
        // Underline Animation Setup:
        "after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-px after:w-0", // Initial state: invisible line at the right
        // --- MODIFIED LINE ---
        "after:bg-[currentColor]", // Underline color matches the current text color
        // --- END MODIFICATION ---
        "after:transition-all after:duration-300 after:ease-in-out", // Transition for the underline width
        "hover:after:w-full hover:after:left-0 hover:after:right-auto", // On hover: expand width from left
        className, // Allow overriding classes
      )}
      {...props} // Pass down remaining props like href, target, etc.
    >
      {/* Render the content passed to the component (e.g., the text) */}
      {children}
    </Link>
  );
});
// Set display name for easier debugging
AnimatedUnderlineLink.displayName = "AnimatedUnderlineLink";

// Export the component
export { AnimatedUnderlineLink };
