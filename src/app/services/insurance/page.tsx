import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContentBlock } from '@/components/sections/ContentBlock';
// Import Button if needed for CTAs within ContentBlocks
// import { Button } from '@/components/ui/Button';
// import Link from 'next/link';

// Insurance Service Page Component
const InsurancePage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Comprehensive Insurance Solutions"
        subtitle="Protecting what matters most, from personal assets to business continuity."
        // Optional: Use a relevant background image or color
        backgroundImageUrl="/images/placeholders/insurance-hero.jpg"
        //backgroundColorClass="bg-[var(--color-hwc-blue-light)]" // Example using theme variable
        ctaButton={{ text: 'Request a Consultation', href: '/contact', variant: 'default' }}
      />

      {/* === Intro Section === */}
      <IntroSection
        title="Guidance with Purpose"
        description="We evaluate your life, health, and property coverage needs holistically, aiming  to build a personalized protection strategy that aligns with your life and goals." // Truncated for brevity
        //className='className="bg-[var(--color-hwc-dark)] text-[var(--color-hwc-white)]" // Set background and text color'
        theme='dark'/>

      {/* === Content Block 1: Personal Insurance === */}
      <ContentBlock
        heading="Personal Insurance"
        text="From life and health insurance to homeowners and auto coverage, we help you find policies that fit your individual needs and budget. Ensure your loved ones and personal property are protected against unforeseen events."
        imageUrl="/images/placeholders/personal-insurance.jpg" // Add a placeholder image
        imageAlt="Family enjoying time outdoors"
        imagePosition="right" // Default, but explicit here
        className="bg-gray-50"
      />

      {/* === Content Block 2: Business Insurance === */}
      <ContentBlock
        heading="Business Insurance"
        text="Protect your business with comprehensive coverage options, including general liability, professional liability (E&O), workers' compensation, and commercial property insurance. We help you mitigate risks and ensure business continuity."
        imageUrl="/images/placeholders/business-insurance.jpg" // Add a placeholder image
        imageAlt="Modern office building exterior"
        imagePosition="left"
        className="bg-white"
      />

       {/* === Content Block 3: Specialized Coverage === */}
       <ContentBlock
        heading="Specialized Coverage"
        text="We also assist with specialized insurance needs, such as umbrella policies for extra liability protection, long-term care insurance, and disability insurance, ensuring all aspects of your financial life are secure."
        // No image for this block example
        className="bg-gray-50"
        // Optional CTA for this block
        // ctaButton={{ text: 'Discuss Your Needs', href: '/contact', variant: 'outline' }}
      />

      {/* Note: Universal Contact form section will be added before Footer in Phase 7 */}
    </>
  );
};

export default InsurancePage;
