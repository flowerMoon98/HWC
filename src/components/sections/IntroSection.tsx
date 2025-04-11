import * as React from 'react';
import { cn } from '@/lib/utils'; // Utility for combining class names

// Define the props for the IntroSection component
interface IntroProps {
  title: string; // Headline/Title is required
  subtitle?: string; // Optional subtitle
  description: string | React.ReactNode; // Main description text/content (required)
  theme?: 'light' | 'dark'; // Theme prop to control colors
  className?: string; // Allow passing custom classes for extra padding etc.
}

// Create the refactored IntroSection component
const IntroSection: React.FC<IntroProps> = ({
  title,
  subtitle,
  description,
  theme = 'light', // Default to light theme
  className,
}) => {
  // Determine base classes based on theme prop
  // Apply background AND base text color to the section
  const themeClasses = theme === 'dark'
    ? 'bg-[var(--color-hwc-dark)] text-[var(--color-hwc-white)]'
    : 'bg-white text-[var(--color-hwc-dark)]'; // Light theme uses dark text

  // Subtitle color: slightly less prominent than main text
  const subtitleColorClass = theme === 'dark' ? 'text-gray-400' : 'text-[var(--color-hwc-dark)] opacity-80';

  // Prose inversion for dark mode text colors within description
  const descriptionProseClass = theme === 'dark' ? 'prose-invert' : '';

  return (
    // Apply base padding, conditional theme classes, and custom classes
    <section className={cn('py-16 sm:py-24', themeClasses, className)}>
      {/* Container for max-width and centering */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">

        {/* Title (Headline) - Left Aligned */}
        {/* Inherits text color from section */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-left mb-4">
          {title}
        </h2>

        {/* Divider Line - Full Width */}
        {/* Divider color is always teal */}
        <div className="w-full h-px bg-[var(--color-divider-teal)] my-6"></div>


        {/* Optional Subtitle - Right Aligned */}
        {subtitle && (
          // Apply specific subtitle color class
          <p className={cn("text-lg text-right mb-6", subtitleColorClass)}>
            {subtitle}
          </p>
        )}

        {/* Description Text/Content - Right Aligned */}
        {/* Apply conditional prose inversion */}
        {/* Text color should be inherited correctly now from section */}
        <div className={cn("prose prose-lg max-w-none text-right", descriptionProseClass)}>
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>

      </div>
    </section>
  );
};

// Export the component
export { IntroSection };
// Export the props type if needed elsewhere
export type { IntroProps };

