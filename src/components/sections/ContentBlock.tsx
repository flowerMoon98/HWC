import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/Button';

// Define props for the ContentBlock component
interface ContentBlockProps {
  heading?: string;
  text: string | React.ReactNode; // Allow string or more complex JSX
  imageUrl?: string; // Optional image URL
  imageAlt?: string; // Required if imageUrl is provided
  imagePosition?: 'left' | 'right'; // Default to 'right'
  ctaButton?: {
    text: string;
    href: string;
    variant?: ButtonProps['variant'];
    size?: ButtonProps['size'];
  };
  className?: string;
  textClassName?: string; // Allow custom styling for the text container
  imageClassName?: string; // Allow custom styling for the image container
}

// Create the ContentBlock component
const ContentBlock: React.FC<ContentBlockProps> = ({
  heading,
  text,
  imageUrl,
  imageAlt = '', // Default alt text, should be overridden if image is meaningful
  imagePosition = 'right', // Default image position
  ctaButton,
  className,
  textClassName,
  imageClassName,
}) => {
  const hasImage = !!imageUrl;

  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use CSS Grid for layout if image exists, otherwise simpler layout */}
        <div
          className={cn(
            'items-center', // Vertically align items in grid
            hasImage ? 'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24' : 'max-w-3xl mx-auto text-center' // Use grid for image+text, simpler layout for text only
          )}
        >
          {/* Image Column (conditionally rendered and positioned) */}
          {hasImage && (
            <div
              className={cn(
                'w-full',
                imagePosition === 'left' ? 'md:order-first' : 'md:order-last', // Control order on medium+ screens
                imageClassName
              )}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={600} // Provide appropriate default width
                height={400} // Provide appropriate default height
                className="rounded-lg object-cover shadow-md w-full h-auto" // Basic image styling
              />
            </div>
          )}

          {/* Text Content Column */}
          <div
            className={cn(
              hasImage ? 'md:order-first' : '', // Ensure text is first if image is on right
              !hasImage ? '' : (imagePosition === 'left' ? '' : ''), // No specific order needed if text only or image right
              textClassName
            )}
          >
            {/* Optional Heading */}
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-hwc-dark)] sm:text-4xl mb-6">
                {heading}
              </h2>
            )}
            {/* Text Content */}
            <div className="prose prose-lg text-gray-600 max-w-none"> {/* Basic prose styling for text */}
              {typeof text === 'string' ? <p>{text}</p> : text}
            </div>
            {/* Optional CTA Button */}
            {ctaButton && (
              <div className={cn('mt-8', !hasImage ? 'flex justify-center' : '')}> {/* Center button if text-only */}
                <Button
                  variant={ctaButton.variant || 'default'}
                  size={ctaButton.size || 'default'}
                  asChild
                >
                  <Link href={ctaButton.href}>{ctaButton.text}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContentBlock };
export type { ContentBlockProps };

