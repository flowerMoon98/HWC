import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSectionStacked } from '@/components/sections/IntroSectionStacked';
import { CoreServicesSection } from '@/components/sections/CoreServicesSection';
import { mockAccountingServices } from '@/lib/data/accountingServices';
import { ContactFormSection } from '@/components/layout/ContactFormSection';

// Accounting Service Page Component
const AccountingPage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Streamlined Accounting Services"
        subtitle="Accurate bookkeeping, insightful reporting, and strategic tax planning for individuals and businesses."
        backgroundImageUrl="/images/placeholders/accounting-hero.jpg"
        //backgroundColorClass="bg-gray-100" // Example background
        ctaButton={{ text: 'Discuss Your Needs', href: '/contact', variant: 'default' }}
      />

      {/* === Intro Section === */}
      <IntroSectionStacked
  tagline="Personalised Financial Review"
  title="Get a complete analysis of your financial health to help us create a strategic accounting plan that works for you."
  theme="dark" // Specify the dark theme here
/>
    <CoreServicesSection services={mockAccountingServices}/>
    <ContactFormSection imageUrl= "/images/placeholders/contact/image2.jpg" imageAlt='accounting image'/>


      

    </>
  );
};

export default AccountingPage;
