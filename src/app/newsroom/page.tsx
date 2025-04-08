import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ContentBlock } from '@/components/sections/ContentBlock'; // Using as placeholder

// Newsroom Page Component
const NewsroomPage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Insights & Updates"
        subtitle="Stay informed with the latest news, analysis, and perspectives from HWC."
        backgroundImageUrl='/images/placeholders/newsroom-hero.jpg'
        backgroundColorClass="bg-gray-100"
      />

      {/* === Placeholder for Article Grid === */}
      {/* TODO: Replace this with an actual article grid/list component later */}
      {/* For now, using ContentBlocks as placeholders for articles */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-hwc-dark)]">Latest Articles</h2>

        <ContentBlock
          heading="Market Update: Q2 2025"
          text="A brief overview of recent market trends and our outlook for the coming quarter..."
          ctaButton={{ text: 'Read More', href: '#', variant: 'outline', size: 'sm' }} // Placeholder link
          className="py-0" // Remove default section padding
        />
         <hr/>
         <ContentBlock
          heading="Navigating Tax Changes for Small Businesses"
          text="Understanding the latest legislative updates and how they might impact your business's tax strategy..."
          ctaButton={{ text: 'Read More', href: '#', variant: 'outline', size: 'sm' }} // Placeholder link
          className="py-0"
        />
         <hr/>
         <ContentBlock
          heading="The Importance of Reviewing Insurance Annually"
          text="Why regular policy reviews are crucial to ensure your coverage keeps pace with life changes..."
          ctaButton={{ text: 'Read More', href: '#', variant: 'outline', size: 'sm' }} // Placeholder link
          className="py-0"
        />
      </div>

    </>
  );
};

export default NewsroomPage;
