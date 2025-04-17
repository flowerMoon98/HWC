import React from 'react';
// Import section components used on this page
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
// Import the NEW feature section component
import { InsuranceFeatureSection } from '@/components/sections/InsuranceFeatureSection';
// Import the mock data for the features
import { mockInsuranceFeatures } from '@/lib/data/insuranceFeatures';
// Import ContactFormSection if needed (or handle globally later)
import { ContactFormSection } from '@/components/layout/ContactFormSection';

// Insurance Service Page Component
const InsurancePage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Comprehensive Insurance Solutions"
        subtitle="Protecting what matters most, from personal assets to business continuity."
        // Use placeholder image - ensure it exists in /public/images/placeholders/
        backgroundImageUrl="/images/placeholders/insurance-hero.jpg"
        // Removed background color class as image is used
        ctaButton={{ text: 'Request a Consultation', href: '/contact', variant: 'default' }}
      />

      {/* === Intro Section === */}
      {/* Using the standard IntroSection component */}
      <IntroSection
        title="Guidance with Purpose"
        description="We evaluate your life, health, and property coverage needs holistically, aiming to build a personalized protection strategy that aligns with your life and goals."
        // Apply theme styles via className
        theme='dark'
      />

      {/* === Insurance Features Section === */}
      {/* Replace previous ContentBlocks with the new section component */}
      {/* Pass the mock data array to the features prop */}
      <InsuranceFeatureSection features={mockInsuranceFeatures} />

      {/* === Contact Form Section === */}
      {/* Add this section back if needed on this page */}
      { <ContactFormSection imageUrl='/images/placeholders/contact/image3.jpg' imageAlt='insurance' /> }
    </>
  );
};

// Export the page component
export default InsurancePage;
