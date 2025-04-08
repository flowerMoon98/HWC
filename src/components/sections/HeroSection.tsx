import * as React from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimized images
import { cn } from '@/lib/utils'; // Utility for combining class names
import { Button, type ButtonProps } from '@/components/ui/Button'; // Import our Button component
import Link from 'next/link';

// Define the props for the HeroSection component
interface HeroProps {
  title: string; // Main headline (required)
  subtitle?: string; // Optional subtitle or introductory paragraph
  backgroundImageUrl?: string; // Optional URL for a background image
  backgroundColorClass?: string; // Optional Tailwind background color class
  ctaButton?: { // Optional Call-to-Action button details
    text: string;
    href: string;
    variant?: ButtonProps['variant']; // Use Button variant types
    size?: ButtonProps['size'];
  };
  className?: string; // Allow passing custom classes to the section
  children?: React.ReactNode; // Allow passing additional custom content
}

// Create the HeroSection component
const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  backgroundColorClass = 'bg-gray-100', // Default background if no image
  ctaButton,
  className,
  children,
}) => {
  // Determine text color based on whether a background image is present
  const textColorClass = backgroundImageUrl ? 'text-[var(--color-hwc-white)]' : 'text-[var(--color-hwc-dark)]';
  const subtitleColorClass = backgroundImageUrl ? 'text-gray-200' : 'text-gray-600';
  // Determine button variant based on background
  const defaultButtonVariant = backgroundImageUrl ? 'light' : 'default';

  return (
    // Section element: Relative positioning, min-height of screen
    // ADDED -mt-16 to pull section up behind sticky header
    <section
      className={cn(
        'relative overflow-hidden min-h-screen -mt-16', // Pull up by header height (h-16 = 4rem)
        !backgroundImageUrl && backgroundColorClass, // Apply bg color class only if no image
        className // Allow overriding classes
      )}
    >
      {/* Background Image (Optional) */}
      {backgroundImageUrl && (
        <>
          <Image
            src={backgroundImageUrl}
            alt="" // Decorative background image
            fill // Fill the section container
            className="object-cover z-0" // Ensure image is behind content
            priority // Load high-priority images faster
            quality={80}
          />
          {/* Dark Overlay for text readability */}
          <div
            className="absolute inset-0 bg-black/50 z-10" // Overlay above image, below content
            aria-hidden="true"
          />
        </>
      )}

      {/* Content Container */}
      {/* Relative positioning and z-index to appear above background/overlay */}
      {/* Flex centering within padded area, pt-32 ensures content starts below header */}
      <div className={cn(
          "relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-20",
          "flex flex-col items-center justify-center min-h-screen", // Use flex centering *here* within the screen height
          "pt-32 pb-16" // Keep padding top (pushes content below header) and bottom
          )}>
        {/* Title */}
        <h1
          className={cn(
            'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
            textColorClass // Apply dynamic text color
          )}
        >
          {title}
        </h1>

        {/* Subtitle (Optional) */}
        {subtitle && (
          <p
            className={cn(
              'mt-6 text-lg leading-8 max-w-2xl mx-auto', // Max width for readability
               subtitleColorClass // Apply dynamic subtitle color
            )}
          >
            {subtitle}
          </p>
        )}

        {/* CTA Button (Optional) */}
        {ctaButton && (
          <div className="mt-10">
            <Button
              variant={ctaButton.variant || defaultButtonVariant} // Use smart default variant
              size={ctaButton.size || 'lg'}
              asChild
            >
              <Link href={ctaButton.href}>{ctaButton.text}</Link>
            </Button>
          </div>
        )}

        {/* Children Prop for additional content */}
        {children && <div className={cn("mt-10", textColorClass)}>{children}</div>}
      </div>
    </section>
  );
};

export { HeroSection }; // Export the component
export type { HeroProps }; // Export the props type if needed elsewhere
