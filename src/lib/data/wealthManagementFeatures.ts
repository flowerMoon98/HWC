// Define the structure for the feature data
// Matches props needed by ThreeColumnFeatureSection component
export interface WealthFeature {
    id: number | string;
    heading: string;
    text: string | React.ReactNode;
    bgColorClass: string; // Tailwind class for background (using CSS vars)
    textColorClass: string; // Tailwind class for text (using CSS vars)
  }
  
  // Mock data for the three feature columns
  // TODO: Replace with actual content
  export const mockWealthManagementFeatures: WealthFeature[] = [
    {
      id: 1,
      heading: "Retirement Planning", // Example Heading
      text:"Our advisors evaluate your current finances and future income needs, crafting a retirement plan that ensures a secure and fulfilling post-career life. We help you adjust along the way to keep on track.",
      bgColorClass: "bg-white", // Column 1: White BG
      textColorClass: "text-[var(--color-hwc-dark)]", // Column 1: Dark Text
    },
    {
      id: 2,
      heading: "Portfolio Structuring", // Example Heading
      text: "We take a strategic approach to diversify and allocate your assets, reducing risks and helping you achieve stable, long-term growth through carefully balanced investments.",
      bgColorClass: "bg-[var(--color-hwc-blue-light)]", // Column 2: Pale Blue BG
      textColorClass: "text-[var(--color-hwc-dark)]", // Column 2: Dark Text
    },
    {
      id: 3,
      heading: "Legacy and Estate Planning", // Example Heading
      text:"We provide a clear roadmap for protecting and passing on your assets, ensuring that your estate is structured to maximize benefits for your heirs while minimizing potential tax impacts.",
      bgColorClass: "bg-[var(--color-hwc-teal-dark)]", // Column 3: Dark Teal BG (#005961)
      textColorClass: "text-[var(--color-hwc-white)]", // Column 3: Light Text (Seasalt)
    },
  ];
  