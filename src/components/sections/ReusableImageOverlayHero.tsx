import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Define the props based on the specification
interface ReusableImageOverlayHeroProps {
  backgroundImageUrl: string; // Required background image URL
  headingText: string; // Required heading text
  paragraphText: string | React.ReactNode; // Required paragraph text/content
  imageAltText?: string; // Optional alt text for background image (recommended)
  className?: string; // Allow passing custom classes for overrides
  // TODO: Add props for border if needed
}

// Create the ReusableImageOverlayHero component
const ReusableImageOverlayHero: React.FC<ReusableImageOverlayHeroProps> = ({
  backgroundImageUrl,
  headingText,
  paragraphText,
  imageAltText = "", // Default to empty alt for decorative images
  className,
}) => {
  return (
    // Section container: Relative positioning, white background
    // REMOVED mb-16 md:mb-0, ADDED py-12 for consistent spacing background
    <section
      className={cn(
        'relative w-full bg-white py-12', // Added vertical padding
        'md:min-h-[75vh]', // Keep min-height only on md+
        // overflow-hidden removed previously
        // TODO: Add decorative border classes here when specified
        className
      )}
    >
      {/* Image Container - Now also contains the text overlay */}
      {/* Default: Relative, Aspect Ratio. MD+: Absolute, Inset */}
      {/* UPDATED inset-y to separate top/bottom */}
      <div className={cn(
          "relative aspect-[4/3] w-full", // Default: Relative position, 4:3 aspect ratio
          // Position absolutely inset on md+, reduced bottom inset
          "md:absolute md:top-[32px] md:bottom-[16px] md:inset-x-[60px]",
          "md:w-auto md:h-auto md:aspect-auto", // Reset aspect ratio on md+
          "z-0 overflow-hidden" // Keep overflow hidden, behind overlay
          // Sharp corners (removed rounded-lg)
         )}
      >
        {/* Background Image - Fills its container */}
        <Image
          src={backgroundImageUrl}
          alt={imageAltText}
          fill
          className="object-cover" // Still covers its container
          priority
          quality={85}
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) calc(100vw - 120px), calc(50vw - 120px)" // Adjust sizes based on padding
        />

        {/* Text Overlay Component/Div - MOVED INSIDE Image Container */}
        {/* Default: Relative stacking below image (inside container). MD+: Absolute positioning */}
        <div
          className={cn(
            'relative z-10', // Ensure overlay is above image component within this container
            'mt-6 md:mt-0', // Add margin top on mobile only, remove on desktop
            'p-6', // Base padding for mobile
            'bg-[var(--color-hwc-teal-dark)]', // Background color
            'text-[var(--color-hwc-white)]', // Text color
            // Positioning and sizing for Desktop (md+) - UPDATED
            'md:absolute md:bottom-0 md:right-0', // Position bottom-right relative to parent (Image Container)
            'md:w-11/12 md:max-w-lg lg:max-w-xl xl:max-w-2xl', // Responsive width
            'md:p-8 lg:p-10', // Larger padding on desktop
             // Add rounding only on desktop overlay style (if desired, add md:rounded-lg etc.)
          )}
        >
          {/* Heading */}
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3"> {/* Responsive font size */}
            {headingText}
          </h2>
          {/* Paragraph */}
          <div className="font-body text-sm md:text-base leading-relaxed"> {/* Responsive font size */}
            {typeof paragraphText === 'string' ? <p>{paragraphText}</p> : paragraphText}
          </div>
        </div>
      </div>
      {/* Text overlay div used to be here */}
    </section>
  );
};

export { ReusableImageOverlayHero };
export type { ReusableImageOverlayHeroProps };