// Reusing the FeatureColumnProps structure type, assuming it's exported
// from ThreeColumnFeatureSection or a shared types file.
// If not, define it here or import appropriately.
// Example: import type { FeatureColumnProps } from '@/components/sections/ThreeColumnFeatureSection';
export interface HealthcareFeature {
  id: number | string;
  heading: string;
  text: string | React.ReactNode;
  bgColorClass: string;
  textColorClass: string;
}

// Mock data for the two feature columns
// TODO: Replace with actual content
export const mockHealthcareFeatures: HealthcareFeature[] = [
  {
    id: 1,
    heading: 'Medical Budgeting',
    text: 'We create a healthcare financial plan that accounts for your unique needs, from annual checkups to unexpected emergencies, so you can focus on health without financial strain.',
    // Column 1 Style Props (Pale Blue BG, Dark Text)
    bgColorClass: 'bg-[var(--color-hwc-blue-light)]',
    textColorClass: 'text-[var(--color-hwc-dark)]',
  },
  {
    id: 2,
    heading: 'Long-Term Care Preparation',
    text: "Our advisors develop personalized long-term care strategies, making sure you're financially ready for potential future health needs, including elder care and assisted living support.",
    // Column 2 Style Props (Dark Teal BG, Light Text)
    bgColorClass: 'bg-[var(--color-hwc-teal-dark)]', // Dark Teal
    textColorClass: 'text-[var(--color-hwc-white)]', // Light Text
  },
];
