import React from 'react';
import Image from 'next/image'; // For the image panel
import { cn } from '@/lib/utils'; // Utility for class names
import { ContactForm } from '@/components/forms/ContactForm'; // Import the form component

// Define props (optional for now, could add props for text/image later)
interface ContactFormSectionProps {
  className?: string;
  // Example optional props:
   heading?: string;
   subtext?: string;
   imageUrl?: string;
   imageAlt?: string;
}

// Create the ContactFormSection component
const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  className,
  // Default content (can be overridden by props if added)
  heading = "Get in touch",
  subtext = "Have questions or ready to start planning? Send us a message and we'll respond shortly.",
  imageUrl = "/images/placeholders/contact-image.jpg", // TODO: Replace with actual image
  imageAlt = "Abstract background representing connection or planning",
}) => {
  return (
    // Section container
    <section className={cn('bg-white', className)}> {/* Default white bg for section */}
      <div className="mx-auto max-w-7xl"> {/* Constrain width */}
        {/* Use Flexbox for split-screen layout */}
        {/* Stacks vertically by default, becomes row layout on medium screens+ */}
        <div className="flex flex-col md:flex-row overflow-hidden">

          {/* Left Panel: Image */}
          {/* Takes full width on small screens, half width on medium+ */}
          {/* Added min-height for mobile view */}
          <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover" // Cover the area
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes hint
            />
          </div>

          {/* Right Panel: Form */}
          {/* Takes full width on small screens, half width on medium+ */}
          {/* Apply light blue background and padding */}
          <div className="w-full md:w-1/2 bg-[var(--color-background-light)] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-hwc-dark)] sm:text-4xl mb-4">
              {heading}
            </h2>
            {/* Subtext */}
            <p className="text-base text-gray-700 mb-8">
              {subtext}
            </p>
            {/* Render the ContactForm component */}
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export { ContactFormSection };
export type { ContactFormSectionProps };

