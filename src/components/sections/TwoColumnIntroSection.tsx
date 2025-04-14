import * as React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedUnderlineLink } from '@/components/ui/AnimatedUnderlineLink';

// Define the structure for the content of each column
interface ColumnContent {
  heading: string;
  text: string | React.ReactNode;
  linkHref: string;
}

// Define the props for the TwoColumnIntroSection component
interface TwoColumnIntroProps {
  leftColumn: ColumnContent; // Content for the left column
  rightColumn: ColumnContent; // Content for the right column
  className?: string; // Allow passing custom classes
}

// Create the TwoColumnIntroSection component
const TwoColumnIntroSection: React.FC<TwoColumnIntroProps> = ({
  leftColumn,
  rightColumn,
  className,
}) => {
  // Helper function to render a column's content
  const renderColumn = (content: ColumnContent) => (
    <div className="flex flex-col h-full">
      <h3 className="text-2xl mb-4">{content.heading}</h3>
      <div className="prose prose-lg max-w-none text-inherit flex-grow">
         {typeof content.text === 'string' ? <p>{content.text}</p> : content.text}
      </div>
      <div className="mt-auto pt-4">
        <AnimatedUnderlineLink href={content.linkHref} className="text-sm font-medium text-inherit">
            More info
        </AnimatedUnderlineLink>
      </div>
    </div>
  );

  return (
    // Main section container - Added relative positioning
    <section className={cn(
        'relative', // Needed for absolute positioning of divider
        'py-16 sm:py-24',
        'bg-[var(--color-hwc-blue-light)] text-[var(--color-hwc-dark)]', // Theme colors
        'border-b border-[var(--color-hwc-dark)]', // Black bottom border
        className
      )}
    >
      {/* Absolutely Positioned Full Height Divider */}
      {/* Positioned relative to the section, centered horizontally */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[var(--color-hwc-dark)]">
         {/* This div IS the divider */}
      </div>

      {/* Container for max-width and centering content */}
      {/* Content is now relative to this container, divider is behind/outside */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10"> {/* Added relative z-10 to ensure content is above divider */}
        {/* Grid layout: Changed back to 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start"> {/* Increased gap again */}
          {/* Left Column */}
          <div>{renderColumn(leftColumn)}</div>

          {/* Right Column */}
          <div>{renderColumn(rightColumn)}</div>

          {/* Middle Divider Column REMOVED from grid */}
        </div>
      </div>
    </section>
  );
};

export { TwoColumnIntroSection };
export type { TwoColumnIntroProps };

