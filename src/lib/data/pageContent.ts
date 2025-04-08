// Import types if needed for more complex data later
// import type { HeroProps } from '@/components/sections/HeroSection';

// Content for the About Us page Hero section
export const aboutUsHeroContent = {
    title: "Our Mission",
    subtitle: "To empower our clients with clarity and confidence through integrated financial, healthcare, and property guidance.",
    // Optional: Specify background or image URL here
     backgroundImageUrl: "/images/placeholders/about-hero.jpg",
    backgroundColorClass: "bg-gray-100",
  };
  
  // Content for the Insurance Page Hero (Example)
  export const insuranceHeroContent = {
      title: "Comprehensive Insurance Solutions",
      subtitle: "Protecting what matters most, from personal assets to business continuity.",
      backgroundColorClass: "bg-[var(--color-hwc-blue-light)]",
      ctaButton: { text: 'Request a Consultation', href: '/contact', variant: 'default' as const } // Use 'as const' for variant type safety
  };
  
  // Add content objects for other pages/sections here...
  // export const insuranceIntroContent = { ... };
  // export const insuranceContentBlocks = [ { ... }, { ... } ];
  
  