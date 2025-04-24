import type { ReactNode } from "react";

// Define a simple type for the hero data items on the property page
interface PropertyHeroItem {
  backgroundImageUrl: string;
  headingText: string;
  paragraphText: string | ReactNode;
  imageAltText?: string;
}

// Export the hero data array
// TODO: Replace placeholder text and image paths with actual content
export const heroData: PropertyHeroItem[] = [
  {
    backgroundImageUrl: "/images/placeholders/property/propertyImage1.jpg",
    headingText: "Real Estate Investment Advisory",
    paragraphText:
      "Strategic insights and analysis for maximizing your property portfolio returns.",
    imageAltText: "Modern building exterior with blue sky",
  },
  {
    backgroundImageUrl: "/images/placeholders/property/propertyImage2.jpg",
    headingText: "Primary Residence Consultation",
    paragraphText:
      "Navigating the complexities of buying, selling, and financing your home.",
    imageAltText: "Couple looking at house blueprints with agent",
  },
  {
    backgroundImageUrl: "/images/placeholders/property/propertyImage3.jpg",
    headingText: "Property Management Integration",
    paragraphText:
      "Aligning property ownership with your overall financial goals and wealth strategy.",
    imageAltText: "Keys on top of architectural drawings",
  },
];

// Add other static content for the property page here if needed
