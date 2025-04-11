import React from 'react';
// Import section components used on this page
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutTeamSection } from '@/components/sections/AboutTeamSection'; // Import the new component
// Import static data
import { aboutUsHeroContent } from '@/lib/data/pageContent'; // Assumes hero content is here
import { mockTeamMembers } from '@/lib/data/teamMembers'; // Import mock team data

// About Us Page Component
const AboutUsPage = () => {
  // Placeholder content for the sticky left panel in AboutTeamSection
  // TODO: Replace with actual content later
  const stickyContent = {
      heading: "Our Dedicated Professionals",
      text: ( // Using JSX for potentially richer text formatting
          <>
              <p className="mb-4">
                  At HWC, our strength lies in our people. We are a collective of experienced,
                  client-focused advisors committed to the highest standards of integrity and service.
              </p>
              <p>
                  Each member brings unique expertise, allowing us to provide truly comprehensive
                  guidance across all facets of your financial life. Get to know the team dedicated
                  to your success.
              </p>
          </>
      )
  };

  return (
    // Use a React Fragment as we have multiple top-level sections
    <>
      {/* === Hero Section === */}
      {/* Using static data from pageContent.ts */}
      <HeroSection {...aboutUsHeroContent} />

      {/* === Main Content Section === */}
      {/* Replace the previous placeholder section with the actual AboutTeamSection component */}
      {/* Pass the heading, text, and mock team member data as props */}
      <AboutTeamSection
        heading={stickyContent.heading}
        text={stickyContent.text}
        teamMembers={mockTeamMembers} // Pass the imported mock data array
      />

      {/* Note: Universal Contact form section will be added before Footer in Phase 7 */}
    </>
  );
};

// Export the component as the default export for this page route
export default AboutUsPage;
