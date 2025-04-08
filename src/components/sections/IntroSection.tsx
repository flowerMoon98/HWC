import * as React from 'react';
import { cn } from '@/lib/utils'; // Utility for combining class names

// Define the props for the IntroSection component
interface IntroProps {
  heading?: string; // Optional heading
  text: string | React.ReactNode; // Main text content (required, can be string or JSX)
  className?: string; // Allow passing custom classes to the section
}

// Create the IntroSection component
const IntroSection: React.FC<IntroProps> = ({
  heading,
  text,
  className,
}) => {
  // Basic structure: a section with padding and a centered content container
  return (
    <section className={cn('py-16 sm:py-24', className)}> {/* Vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center"> {/* Centered, max-width container */}
        {/* Optional Heading */}
        {heading && (
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-hwc-dark)] sm:text-4xl mb-6">
            {heading}
          </h2>
        )}
        {/* Main Text Content */}
        <div className="text-lg leading-8 text-gray-600"> {/* Styling for paragraph text */}
          {typeof text === 'string' ? <p>{text}</p> : text} {/* Render string in <p> or JSX directly */}
        </div>
      </div>
    </section>
  );
};

// Export the component
export { IntroSection };
// Export the props type if needed elsewhere
export type { IntroProps };
