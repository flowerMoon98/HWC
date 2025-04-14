import * as React from 'react';
import { cn } from '@/lib/utils';
// Import the card component and its props type
import { InsuranceColumnCard, type InsuranceColumnCardProps } from '@/components/ui/InsuranceColumnCard';

// Define props for the main section component
interface InsuranceFeatureSectionProps {
  title?: string; // Optional title for the whole section
  features: InsuranceColumnCardProps[]; // Array of feature data (matches card props)
  className?: string;
  // TODO: Add props for decorative border if needed
}

// Create the InsuranceFeatureSection component
const InsuranceFeatureSection: React.FC<InsuranceFeatureSectionProps> = ({
  title = "Types of Insurance We Recommend", // Default title
  features,
  className,
}) => {
  // Don't render if no features
  if (!features || features.length === 0) {
    return null;
  }

  return (
    // Main section with white background and padding
    // TODO: Add decorative border classes if specified
    <section className={cn('py-16 sm:py-24 bg-white', className)}>
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-3xl  tracking-tight text-left text-[var(--color-hwc-dark)] sm:text-4xl mb-12 lg:mb-16">
          {title}
        </h2>

        {/* Grid Layout Component */}
        {/* 1 column default, 3 columns on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Map over features data and render a card for each */}
          {features.map((feature, index) => (
            <InsuranceColumnCard
              key={index} // Use a more stable key if available (like feature.id)
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              altText={feature.altText}
              layoutOrder={feature.layoutOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { InsuranceFeatureSection };
export type { InsuranceFeatureSectionProps };

