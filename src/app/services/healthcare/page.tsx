import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContactFormSection } from '@/components/layout/ContactFormSection';
//import { ContentBlock } from '@/components/sections/ContentBlock';

// Healthcare Planning Service Page Component
const HealthcarePlanningPage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Proactive Healthcare Planning"
        subtitle="Navigating healthcare costs and choices with confidence, today and in retirement."
        backgroundImageUrl="/images/placeholders/healthcare-hero.jpg"
        //backgroundColorClass="bg-gray-100"
        ctaButton={{ text: 'Plan Your Healthcare Future', href: '/contact', variant: 'default' }}
      />

      {/* === Intro Section === */}
      <IntroSection
        title="Why Healthcare Planning Matters"
        description="An introduction to how medical expenses impact long-term financial goals and why proactive planning is essential" // Truncated for brevity
        //className='className="bg-[var(--color-hwc-dark)] text-[var(--color-hwc-white)]" // Set background and text color'
        theme='light'
      />

      {/* === Content Block 1: Understanding Options === */}
      <ContactFormSection imageUrl="/images/placeholders/contact/image4.jpg" imageAlt='Healthcare image'/>
      

      {/* === Content Block 2: Long-Term Care Planning === */}
      

       {/* === Content Block 3: Health Savings Accounts (HSAs) === */}
       
    </>
  );
};

export default HealthcarePlanningPage;
