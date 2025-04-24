import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSectionStacked } from '@/components/sections/IntroSectionStacked';
import { ThreeColumnFeatureSection } from '@/components/sections/ThreeColumnFeatureSection';
import { mockWealthManagementFeatures } from '@/lib/data/wealthManagementFeatures';
import { ContactFormSection } from '@/components/layout/ContactFormSection';

//import { ContentBlock } from '@/components/sections/ContentBlock';

// Wealth Management Service Page Component
const WealthManagementPage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Strategic Wealth Management"
        subtitle="Building and preserving your wealth through personalized investment strategies and comprehensive financial planning."
        backgroundImageUrl="/images/placeholders/wealth-hero.jpg"
        //backgroundColorClass="bg-[var(--color-hwc-blue-light)]"
        ctaButton={{
          text: 'Schedule a Consultation',
          href: '/contact',
          variant: 'default',
        }}
      />

      {/* === Intro Section === */}
      <IntroSectionStacked
        tagline="Strategic Wealth Managment for a Prosperous Tomorrow"
        title="Navigate your financial journey with the insight and support of our experienced advisors"
        theme="dark"
      />
      <ContactFormSection
        imageUrl="/images/placeholders/contact/image3.jpg"
        imageAlt="accounting image"
      />

      <ThreeColumnFeatureSection features={mockWealthManagementFeatures} />

      {/* === Content Block 1: Investment Management === */}

      {/* === Content Block 2: Retirement Planning === */}

      {/* === Content Block 3: Estate & Legacy Planning === */}
    </>
  );
};

export default WealthManagementPage;
