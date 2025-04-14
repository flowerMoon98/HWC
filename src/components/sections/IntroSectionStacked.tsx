import * as React from 'react';
import { cn } from '@/lib/utils'; // Utility for combining class names

// Define the props for the Stacked IntroSection layout
interface IntroSectionStackedProps {
  tagline?: string; // Optional tagline above title
  title: string; // Main Headline/Title (required)
  theme?: 'light' | 'dark'; // Add theme prop
  className?: string; // Allow passing custom classes for extra padding etc.
}

// Create the IntroSectionStacked component
const IntroSectionStacked: React.FC<IntroSectionStackedProps> = ({
  tagline,
  title,
  theme = 'light', // Default to light theme
  className,
}) => {
  // Determine colors based on theme prop
  const sectionBgClass = theme === 'dark' ? 'bg-[var(--color-hwc-dark)]' : 'bg-white';
  const titleColorClass = theme === 'dark' ? 'text-[var(--color-hwc-white)]' : 'text-[var(--color-hwc-dark)]';
  // Tagline uses teal, which should contrast on both light and dark backgrounds
  const taglineColorClass = 'text-[var(--color-hwc-white)]';

  return (
    // Apply base padding, text-center, conditional background color, and custom classes
    <section className={cn('py-16 sm:py-24', sectionBgClass, className)}>
      {/* Container for max-width and centering */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">

        {/* Optional Tagline */}
        {tagline && (
          // Apply tagline color
          <p className={cn("text-base  uppercase tracking-wide mb-3", taglineColorClass)}>
            {tagline}
          </p>
        )}

        {/* Title (Headline) */}
        {/* Apply conditional text color */}
        <h2 className={cn(
            "text-3xl  tracking-tight sm:text-4xl lg:text-5xl",
            titleColorClass
          )}
        >
          {title}
        </h2>

        {/* No Subtitle, Divider, or Description in this layout */}

      </div>
    </section>
  );
};

// Export the component
export { IntroSectionStacked };
// Export the props type if needed elsewhere
export type { IntroSectionStackedProps };

