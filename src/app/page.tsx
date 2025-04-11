import React from 'react'; // Ensure React is imported

// Import section components used on the page
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContentBlock } from '@/components/sections/ContentBlock';
import { NicheSection } from '@/components/sections/NicheSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { ContactFormSection } from '@/components/layout/ContactFormSection';
// Import mock data
import { mockTestimonials } from '@/lib/data/testimonials';

// Make sure this line is correct: export default function Home() { ... }
export default function Home() {
  return (
    <> {/* Use Fragment shorthand */}
      {/* === Hero Section === */}
      <HeroSection
        title="Plan Your Future with Confidence"
        subtitle="Integrated financial, healthcare, and property planning tailored for you."
        backgroundImageUrl="/images/placeholders/hero-home.jpg" // Ensure placeholder exists
        ctaButton={{ text: 'Get Started Today', href: '/contact', variant: 'default', size: 'lg' }}
      />

      {/* === Intro Section === */}
      <IntroSection
        title="Welcome to HWC"
        description="We provide comprehensive, personalized strategies..." // Truncated for brevity
        //className='className="bg-[var(--color-hwc-dark)] text-[var(--color-hwc-white)]" // Set background and text color'
        theme='dark'
      />

      {/* === Who We Are Section === */}
      <ContentBlock
        heading="Who We Are"
        text="Founded on principles of trust and expertise..." // Truncated for brevity
        imageUrl="/images/placeholders/who-we-are.jpg" // Ensure placeholder exists
        imageAlt="Team meeting discussion"
        className="bg-white"
      />

      {/* === Why Choose Us Section === */}
      <ContentBlock
        heading="Why Choose Us?"
        text="Our integrated approach sets us apart..." // Truncated for brevity
        imageUrl="/images/placeholders/why-choose-us.jpg" // Ensure placeholder exists
        imageAlt="Abstract image representing integration"
        imagePosition="left"
        className="bg-gray-50"
      />

      {/* === Niche Section === */}
      <NicheSection />

      {/* === Testimonial Section === */}
      <TestimonialSection testimonials={mockTestimonials} />

      {/* === Contact Form Section === */}
      {/* Added before the implicit Footer */}
      <ContactFormSection />

    </>
  );
} // Make sure the closing brace for the function is present
