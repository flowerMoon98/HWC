import * as React from 'react';
import Link from 'next/link'; // Keep for Social Icons
import { Linkedin, Twitter } from 'lucide-react'; // Use Lucide icons
import { cn } from '@/lib/utils';
import { ContactForm } from '@/components/forms/ContactForm'; // Import the form component

// Define props (optional for now)
interface ContactPageContentSectionProps {
  className?: string;
}

// Create the ContactPageContentSection component
const ContactPageContentSection: React.FC<ContactPageContentSectionProps> = ({
  className,
}) => {
  // Placeholder data for contact info & social links
  // TODO: Move to lib/data or fetch from CMS/API
  const contactInfo = {
    subheading: 'Our concierge service is at the ready.',
    phone: '+61 451 929 585',
    addressLine1: '2-4 Ross Place',
    addressLine2: 'South Melbourne, 3205',
  };
  const socialLinks = [
    { href: '#', label: 'LinkedIn', icon: Linkedin }, // TODO: Add actual URLs
    { href: '#', label: 'Twitter', icon: Twitter },
  ];

  return (
    // Main section container
    <section className={cn('py-16 sm:py-24 bg-white', className)}>
      {/* Container for max-width, centering, and SPECIFIC PADDING */}
      <div
        className="
        container mx-auto
        px-4        /* 16 px per side on the tiniest screens            */
        sm:px-6     /* 24 px ≥ 640 px                                    */
        md:px-8     /* 32 px ≥ 768 px                                    */
        lg:px-12    /* 48 px ≥ 1024 px                                   */
        xl:px-16    /* 64 px ≥ 1280 px                                   */
        2xl:px-20   /* 80 px ≥ 1536 px                                   */
        max-w-screen-lg md:max-w-screen-xl xl:max-w-[140rem]
        "
      >
        {' '}
        {/* Changed padding to px-6 */}
        {/* Section Title */}
        <h1 className="text-3xl tracking-tight text-left text-[var(--color-hwc-dark)] sm:text-4xl lg:text-5xl">
          Get in touch
        </h1>
        {/* Divider Line - Spans full container width */}
        <div className="w-full h-px bg-[var(--color-divider-teal)] my-6"></div>
        {/* Grid layout for content */}
        {/* Stacks on mobile, 2 columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--color-hwc-dark)]">
              {contactInfo.subheading}
            </h2>
            <address className="not-italic text-base text-gray-700 space-y-1">
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.addressLine1}</p>
              <p>{contactInfo.addressLine2}</p>
            </address>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-[var(--color-hwc-teal)] transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            {/* Render the ContactForm component */}
            {/* Pass appropriate className if Input needs different styling here */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactPageContentSection };
export type { ContactPageContentSectionProps };
