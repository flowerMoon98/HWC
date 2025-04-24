import React from "react"; // Ensure React is imported

// Import section components used on the page
import { HeroSection } from "@/components/sections/HeroSection";
//import { ContentBlock } from '@/components/sections/ContentBlock';
import { NicheSection } from "@/components/sections/NicheSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactFormSection } from "@/components/layout/ContactFormSection";
import { TwoColumnIntroSection } from "@/components/sections/TwoColumnIntroSection";
// Import mock data
import { mockTestimonials } from "@/lib/data/testimonials";
import { whoWeAreContent, whyChooseUsContent } from "@/lib/data/pageContent";

// Make sure this line is correct: export default function Home() { ... }
export default function Home() {
  return (
    <>
      {" "}
      {/* Use Fragment shorthand */}
      {/* === Hero Section === */}
      <HeroSection
        title="Plan Your Future with Confidence"
        subtitle="Integrated financial, healthcare, and property planning tailored for you."
        backgroundImageUrl="/images/placeholders/hero-home.jpg" // Ensure placeholder exists
        ctaButton={{
          text: "Get Started Today",
          href: "/contact",
          variant: "default",
          size: "lg",
        }}
      />
      {/* === Intro Section === */}
      <TwoColumnIntroSection
        leftColumn={whoWeAreContent}
        rightColumn={whyChooseUsContent}
        // Background color (light blue) is set within the component itself
      />
      {/* === Who We Are Section === */}
      {/* === Why Choose Us Section === */}
      {/* === Niche Section === */}
      <NicheSection />
      {/* === Testimonial Section === */}
      <TestimonialSection testimonials={mockTestimonials} />
      {/* === Contact Form Section === */}
      {/* Added before the implicit Footer */}
      <ContactFormSection imageUrl="/images/placeholders/contact/image1.jpg" />
    </>
  );
} // Make sure the closing brace for the function is present
