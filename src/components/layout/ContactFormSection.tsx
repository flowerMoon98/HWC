import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ContactForm } from '@/components/forms/ContactForm';

interface ContactFormSectionProps {
  className?: string;
  heading?: string;
  subtext?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  className,
  heading = "Get in touch",
  subtext = "Have questions or ready to start planning? Send us a message and we'll respond shortly.",
  imageUrl = "/images/placeholders/contact-image.jpg",
  imageAlt = "Abstract background representing connection or planning",
}) => (
  <section className={cn("bg-white", className)}>
    {/* --- Full Width Container --- */}
    <div className="flex flex-col lg:flex-row w-full items-stretch">

      {/* LEFT COLUMN: Image */}
      {/* Uses increased min-height */}
      <div className="w-full lg:w-1/2 relative min-h-[330px] sm:min-h-[440px] lg:min-h-[660px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>

      {/* RIGHT COLUMN: Form */}
      {/* REMOVED justify-center to allow content block to align left within padding */}
      {/* Kept items-center for vertical centering */}
      {/* Kept asymmetrical padding */}
      <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-background-light)]
                     p-8 md:p-12 /* Base & Medium Padding (All Sides) */
                     lg:py-16 lg:pr-16 lg:pl-8 /* Large: Keep Vertical/Right, Reduced Left */
                     xl:pr-20 xl:pl-12 /* XL: Keep Vertical (Inherited), Keep Right, Reduced Left */ ">

        {/* Inner container: still constrained by max-w, but will now align left */}
        <div className="w-full max-w-md lg:max-w-lg">
          <h2 className="text-3xl font-semibold text-[var(--color-hwc-dark)] mb-4">
            {heading}
          </h2>
          <p className="text-base text-gray-700 mb-6">
            {subtext}
          </p>
          <ContactForm />
        </div>
      </div>

    </div>
  </section>
);

export { ContactFormSection };
export type { ContactFormSectionProps };