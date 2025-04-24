// Use the props type defined in the component, or create a shared type
// For simplicity, defining structure here. Ideally, share type from component/types file.
interface InsuranceFeature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  layoutOrder?: "text-top" | "image-top";
}

// Mock data for the insurance features section
// TODO: Replace with actual content and image paths
export const mockInsuranceFeatures: InsuranceFeature[] = [
  {
    id: 1,
    title: "Personal Insurance",
    description:
      "From life and health insurance to homeowners and auto coverage, we help you find policies that fit your individual needs and budget.",
    imageUrl: "/images/placeholders/insurance/life-insurance.jpg", // Use paths from /public
    altText: "Family enjoying time outdoors",
    layoutOrder: "text-top", // Text appears above image
  },
  {
    id: 2,
    title: "Business Insurance",
    description:
      "Protect your business with comprehensive coverage options, including general liability, professional liability (E&O), and commercial property insurance.",
    imageUrl: "/images/placeholders/insurance/health-insurance.jpg", // Use paths from /public
    altText: "Modern office building exterior",
    layoutOrder: "image-top", // Image appears above text
  },
  {
    id: 3,
    title: "Specialized Coverage",
    description:
      "We also assist with specialized insurance needs, such as umbrella policies, long-term care insurance, and disability insurance.",
    imageUrl: "/images/placeholders/insurance/property-insurance.jpg", // Use paths from /public
    altText: "Abstract representing security shield",
    layoutOrder: "text-top", // Text appears above image
  },
];
