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

  // Content for the TwoColumnSection in the home page
  export const whoWeAreContent = {
    heading: "Who We Are",
    text: "Founded on principles of trust and expertise, HWC brings together seasoned professionals dedicated to your financial well-being. We believe in building long-term relationships and providing objective advice tailored to your unique situation.",
    linkHref: "/about" // Example link
  };

  export const whyChooseUsContent = {
    heading: "Why Choose Us?",
    text: "Our integrated approach sets us apart. We don't just look at one piece of the puzzle; we consider your entire financial picture, ensuring strategies across wealth, health, and property work together seamlessly. Experience the clarity and confidence that comes with holistic planning.",
    linkHref: "#" // Example link (maybe link to services?)
  };
  
  // Add content objects for other pages/sections here...
  // export const insuranceIntroContent = { ... };
  // export const insuranceContentBlocks = [ { ... }, { ... } ];
  
  