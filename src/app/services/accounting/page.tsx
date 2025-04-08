import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContentBlock } from '@/components/sections/ContentBlock';

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
      <IntroSection
        text="Maintain financial clarity and compliance with our expert accounting services. We handle the complexities so you can focus on what you do best, providing timely insights to support informed decision-making."
        className="bg-white"
      />

      {/* === Content Block 1: Bookkeeping & Reporting === */}
      <ContentBlock
        heading="Bookkeeping & Financial Reporting"
        text="Accurate and organized financial records are crucial. We offer comprehensive bookkeeping services and generate clear financial reports (Balance Sheet, P&L) to give you a precise understanding of your financial position."
        imageUrl="/images/placeholders/bookkeeping.jpg" // Add placeholder
        imageAlt="Ledger and calculator"
        imagePosition="left"
        className="bg-gray-50"
      />

      {/* === Content Block 2: Tax Planning & Preparation === */}
      <ContentBlock
        heading="Tax Planning & Preparation"
        text="Navigate the complexities of tax regulations with confidence. We provide proactive tax planning strategies to minimize liabilities and ensure timely, accurate preparation and filing for individuals and businesses."
        imageUrl="/images/placeholders/tax-planning.jpg" // Add placeholder
        imageAlt="Tax forms and pen"
        imagePosition="right"
        className="bg-white"
      />

       {/* === Content Block 3: Business Advisory === */}
       <ContentBlock
        heading="Business Advisory"
        text="Beyond compliance, we offer strategic advice based on your financial data. From cash flow management to budgeting and forecasting, we help you optimize performance and plan for sustainable growth."
        className="bg-gray-50"
      />
    </>
  );
};

export default AccountingPage;
