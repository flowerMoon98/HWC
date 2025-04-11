import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContentBlock } from '@/components/sections/ContentBlock';

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
      <ContentBlock
        heading="Medicare & Health Insurance Options"
        text="Choosing the right health insurance, whether through an employer, the marketplace, or Medicare (including supplements and Advantage plans), is complex. We help you evaluate plans based on cost, coverage, and provider networks."
        imageUrl="/images/placeholders/health-options.jpg" // Add placeholder
        imageAlt="Doctor consulting with patient"
        imagePosition="left"
        className="bg-gray-50"
      />

      {/* === Content Block 2: Long-Term Care Planning === */}
      <ContentBlock
        heading="Long-Term Care Planning"
        text="Plan for potential long-term care needs, which are often not covered by standard health insurance or Medicare. We explore options like long-term care insurance and strategies to fund potential care expenses."
        imageUrl="/images/placeholders/long-term-care.jpg" // Add placeholder
        imageAlt="Senior person receiving care at home"
        imagePosition="right"
        className="bg-white"
      />

       {/* === Content Block 3: Health Savings Accounts (HSAs) === */}
       <ContentBlock
        heading="Health Savings Accounts (HSAs)"
        text="Maximize the triple tax advantage of HSAs if you have a high-deductible health plan. We advise on contributions, investment options within your HSA, and strategies for using funds tax-efficiently for current and future healthcare costs."
        className="bg-gray-50"
      />
    </>
  );
};

export default HealthcarePlanningPage;
