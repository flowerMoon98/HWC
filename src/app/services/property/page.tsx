import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContentBlock } from '@/components/sections/ContentBlock';

// Property Service Page Component
const PropertyPage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Strategic Property Guidance"
        subtitle="Informed decisions for your real estate investments and primary residence."
        backgroundImageUrl="/images/placeholders/property-hero.jpg"
        backgroundColorClass="bg-[var(--color-hwc-blue-light)]"
        ctaButton={{ text: 'Discuss Property Goals', href: '/contact', variant: 'default' }}
      />

      {/* === Intro Section === */}
      <IntroSection
        text="Real estate often represents a significant portion of personal wealth. We provide guidance on property acquisition, investment analysis, financing options, and integrating real estate into your broader financial portfolio."
        className="bg-white"
      />

      {/* === Content Block 1: Investment Property Analysis === */}
      <ContentBlock
        heading="Investment Property Analysis"
        text="Considering an investment property? We help analyze potential returns, cash flow projections, financing structures, and tax implications to ensure your investment aligns with your financial objectives."
        imageUrl="/images/placeholders/property-investment.jpg" // Add placeholder
        imageAlt="Row of investment houses"
        imagePosition="right"
        className="bg-gray-50"
      />

      {/* === Content Block 2: Primary Residence Decisions === */}
      <ContentBlock
        heading="Primary Residence Decisions"
        text="Guidance on buying vs. renting, mortgage analysis, refinancing options, and understanding the financial impact of homeownership within your overall plan."
        imageUrl="/images/placeholders/home-buying.jpg" // Add placeholder
        imageAlt="Couple looking at house plans"
        imagePosition="left"
        className="bg-white"
      />

       {/* === Content Block 3: Real Estate Portfolio Integration === */}
       <ContentBlock
        heading="Portfolio Integration"
        text="We help you understand how your real estate holdings fit within your diversified investment strategy, considering factors like liquidity, risk, and long-term appreciation potential."
        className="bg-gray-50"
      />
    </>
  );
};

export default PropertyPage;
