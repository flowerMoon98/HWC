import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ReusableImageOverlayHero } from '@/components/sections/ReusableImageOverlayHero';
import { heroData } from '@/lib/data/propertyPageContent';

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
        title="A Strategic Approach to Property Investments"
        description='We provide insights and guidance on property decisions that are aligned with your financial goals, enabling you to invest in real estate confidently.'
        theme='light'
        />

      {/* === Content Block 1: Investment Property Analysis === */}
      {heroData.map((hero, index) => (
        <ReusableImageOverlayHero
          // Use a unique key if hero items have IDs, otherwise index is fallback
          key={hero.headingText || index}
          backgroundImageUrl={hero.backgroundImageUrl}
          headingText={hero.headingText}
          paragraphText={hero.paragraphText}
          imageAltText={hero.imageAltText}
        />
      ))}
      

      {/* === Content Block 2: Primary Residence Decisions === */}
      

       {/* === Content Block 3: Real Estate Portfolio Integration === */}
       
    </>
  );
};

export default PropertyPage;
