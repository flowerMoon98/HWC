import * as React from 'react';
import { cn } from '@/lib/utils';

// Define or import the type for feature data
// Assuming structure matches mock data file
export interface HealthcareFeatureProps {
  heading: string;
  text: string | React.ReactNode;
  bgColorClass: string;
  textColorClass: string;
}

// Define the props for the main section component
interface HealthcareFeatureSectionProps {
  features: HealthcareFeatureProps[]; // Array of exactly 2 features
  className?: string; // Optional className for the section
}

// Create the HealthcareFeatureSection component
const HealthcareFeatureSection: React.FC<HealthcareFeatureSectionProps> = ({
  features,
  className,
}) => {
  // Ensure we always have exactly 2 features for this layout
  if (!features || features.length !== 2) {
    console.warn('HealthcareFeatureSection requires exactly 2 features.');
    return null;
  }

  return (
    // Main section container - Takes full width by default
    // Background color will be determined by columns
    <section className={cn('w-full', className)}>
      {/*
        Grid Layout:
        - Mobile (default): 1 column (grid-cols-1)
        - Tablet/Desktop (md+): 2 columns (md:grid-cols-2)
        - gap-0: No gap between columns
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Map over the features data */}
        {features.map((feature, index) => (
          // Column Div for each feature
          <div
            key={index} // Use a unique ID from data if available
            className={cn(
              'p-8 md:p-10 lg:p-16', // Padding inside each column (Assumption)
              'flex flex-col justify-center', // Center content vertically (Assumption)
              'min-h-[300px]', // Minimum height for content (Assumption)
              feature.bgColorClass, // Apply background color class from props
              feature.textColorClass // Apply text color class from props
            )}
          >
            {/* Content Wrapper (Constrain width for readability) */}
            <div className="max-w-md">
              {' '}
              {/* Constrain text width */}
              {/* Heading */}
              {/* Assuming text-3xl, font-heading (Nib Pro), bold, mb-4 */}
              <h3 className="font-heading text-3xl  mb-4">{feature.heading}</h3>
              {/* Description */}
              {/* Assuming text-base, font-body (FK Grotesk), leading-relaxed */}
              <div className="font-body text-base leading-relaxed">
                {typeof feature.text === 'string' ? (
                  <p>{feature.text}</p>
                ) : (
                  feature.text
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { HealthcareFeatureSection };
export type {
  HealthcareFeatureSectionProps,
  HealthcareFeatureProps as HealthcareFeatureColumnProps,
}; // Export types
