import * as React from 'react';
import Image from 'next/image'; // Import Next.js Image for optimized images
import { cn } from '@/lib/utils'; // Utility for combining class names
import { Card } from '@/components/ui/Card'; // Import the Card component we created
import type { Testimonial } from '@/types'; // Import the TestimonialItem type definition

// Define props for the TestimonialSection component
interface TestimonialSectionProps {
  heading?: string; // Optional section heading
  testimonials: Testimonial[]; // Array of testimonial data (required)
  className?: string; // Optional className for the section container
}

// Create the TestimonialSection component
const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  heading = "What Our Clients Say", // Default heading if none provided
  testimonials, // The array of testimonial data
  className, // Custom classes for the section
}) => {
  // Prevent rendering the section if there are no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    // Section container with background and padding
    <section className={cn('py-16 sm:py-24 bg-gray-50', className)}>
      {/* Centered container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl  tracking-tight text-center text-[var(--color-hwc-dark)] sm:text-4xl mb-12 lg:mb-16">
          {heading}
        </h2>

        {/* Grid layout for testimonials */}
        {/* Adjust columns for different screen sizes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Map over the testimonials array */}
          {testimonials.map((testimonial) => (
            // Use the Card component for each testimonial item
            <Card key={testimonial.id} className="flex flex-col p-6"> {/* Add padding inside card */}
              {/* Testimonial Quote */}
              <blockquote className="flex-grow text-gray-700 italic mb-4">
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>

              {/* Author Information */}
              <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                {/* Author Image (Optional) */}
                {testimonial.imageUrl && (
                  <Image
                    src={testimonial.imageUrl}
                    alt={`Photo of ${testimonial.authorName}`}
                    width={40} // Specify avatar width
                    height={40} // Specify avatar height
                    className="rounded-full object-cover flex-shrink-0" // Styling for avatar
                  />
                )}
                {/* Placeholder if no image URL is provided */}
                {!testimonial.imageUrl && (
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-500 flex-shrink-0">
                     {/* Simple initials placeholder logic */}
                     {testimonial.authorName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                   </div>
                )}
                {/* Author Name and Title */}
                <div>
                  <p className="font-semibold text-sm text-[var(--color-hwc-dark)]">
                    {testimonial.authorName}
                  </p>
                  {/* Optional Author Title */}
                  {testimonial.authorTitle && (
                    <p className="text-xs text-gray-500">
                      {testimonial.authorTitle}
                    </p>
                  )}
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the component and its props type
export { TestimonialSection };
export type { TestimonialSectionProps };
