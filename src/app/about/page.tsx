import React from 'react';
// Import the HeroSection component
import { HeroSection } from '@/components/sections/HeroSection';
// Import the static data object for the hero section content
import { aboutUsHeroContent } from '@/lib/data/pageContent';
// We might use ContentBlock later, or the specific Phase 6 component
// import { ContentBlock } from '@/components/sections/ContentBlock';

// Define the About Us Page Component
const AboutUsPage = () => {
  return (
    // Use a React Fragment as we have multiple top-level sections
    <>
      {/* === Hero Section === */}
      {/* Render the HeroSection component, spreading the imported content object as props */}
      {/* This passes title, subtitle, backgroundColorClass etc. from pageContent.ts */}
      <HeroSection {...aboutUsHeroContent} />

      {/* === Main Content Section Placeholder === */}
      {/* This section will be replaced later with a custom component */}
      {/* as per the plan (Phase 6, Task 2), featuring a sticky description */}
      {/* panel and a team member grid. */}
      <section className="py-16 sm:py-24">
        {/* Standard container for consistent spacing */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder heading */}
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-hwc-dark)]">
            Meet Our Team
          </h2>
          {/* Placeholder content indicating future development */}
          <div className="text-center text-lg text-gray-600 bg-yellow-100 p-8 rounded-md max-w-4xl mx-auto">
            <p className="font-semibold">Coming Soon (Phase 6)!</p>
            <p>
              This section will feature our dedicated team members in a special
              two-panel layout.
            </p>
          </div>
          {/* Placeholder comment for the actual component to be added later */}
          {/* <AboutTeamSection /> */}
        </div>
      </section>

      {/* Note: Universal Contact form section will be added before Footer in Phase 7 */}
    </>
  );
};

// Export the component as the default export for this page route
export default AboutUsPage;
