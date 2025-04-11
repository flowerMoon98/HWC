import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSectionStacked } from '@/components/sections/IntroSectionStacked';

import { ContentBlock } from '@/components/sections/ContentBlock';

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
        ctaButton={{ text: 'Schedule a Consultation', href: '/contact', variant: 'default' }}
      />

      {/* === Intro Section === */}
      <IntroSectionStacked
        tagline="Strategic Wealth Managment for a Prosperous Tomorrow"
        title="Navigate your financial journey with the insight and support of our experienced advisors"
        theme='dark'
      />

      {/* === Content Block 1: Investment Management === */}
      <ContentBlock
        heading="Investment Management"
        text="Based on your goals, risk tolerance, and time horizon, we construct and manage diversified investment portfolios designed to optimize returns while managing risk effectively. We utilize a range of asset classes and provide ongoing monitoring and adjustments."
        imageUrl="/images/placeholders/investment.jpg" // Add placeholder
        imageAlt="Stock market chart graph"
        imagePosition="right"
        className="bg-gray-50"
      />

      {/* === Content Block 2: Retirement Planning === */}
      <ContentBlock
        heading="Retirement Planning"
        text="Plan for a secure and fulfilling retirement. We help you define your retirement goals, estimate future needs, and develop strategies using retirement accounts (like IRAs, 401(k)s) and investment planning to ensure you're prepared for the future."
        imageUrl="/images/placeholders/retirement.jpg" // Add placeholder
        imageAlt="Couple enjoying retirement on a beach"
        imagePosition="left"
        className="bg-white"
      />

       {/* === Content Block 3: Estate & Legacy Planning === */}
       <ContentBlock
        heading="Estate & Legacy Planning"
        text="Ensure your assets are distributed according to your wishes and minimize potential tax burdens. We coordinate with legal professionals to help structure wills, trusts, and other estate planning tools to protect your legacy."
        className="bg-gray-50"
      />
    </>
  );
};

export default WealthManagementPage;
