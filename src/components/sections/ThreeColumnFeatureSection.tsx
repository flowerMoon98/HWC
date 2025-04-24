import * as React from "react";
import { cn } from "@/lib/utils";

// Define the structure for the feature data prop
// REMOVED 'export' from this interface definition
interface FeatureColumnProps {
  heading: string;
  text: string | React.ReactNode;
  bgColorClass: string; // Expecting Tailwind class string e.g., 'bg-white' or 'bg-[var(--color-hwc-dark)]'
  textColorClass: string; // Expecting Tailwind class string e.g., 'text-black' or 'text-[var(--color-hwc-white)]'
}

// Define the props for the main section component
interface ThreeColumnFeatureProps {
  features: FeatureColumnProps[]; // Array of exactly 3 features
  className?: string; // Optional className for the section
  // Add props for section title or borders if needed later
}

// Create the ThreeColumnFeatureSection component
const ThreeColumnFeatureSection: React.FC<ThreeColumnFeatureProps> = ({
  features,
  className,
}) => {
  // Ensure we always have exactly 3 features for the layout logic
  if (!features || features.length !== 3) {
    console.warn("ThreeColumnFeatureSection requires exactly 3 features.");
    return null; // Render nothing if data is incorrect
  }

  return (
    // Main section container - Full width, no internal padding
    <section className={cn("w-full", className)}>
      {/*
        Grid Layout:
        - Mobile (default): 1 column (grid-cols-1)
        - Tablet (md): 2 columns (md:grid-cols-2). 3rd item wraps full width by default.
        - Desktop (lg): 3 columns (lg:grid-cols-3)
        - gap-0: No gap between columns
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {/* Map over the features data */}
        {features.map((feature, index) => (
          // Column Div for each feature
          <div
            // Using heading as key assumes headings are unique, prefer feature.id if available
            key={feature.heading || index}
            className={cn(
              "p-8 md:p-10 lg:p-12", // Padding inside each column
              "aspect-square", // Make the column square
              "flex flex-col justify-between", // Use flex to distribute content vertically
              feature.bgColorClass, // Apply background color class from props
              feature.textColorClass, // Apply text color class from props
            )}
          >
            {/* Content Wrapper */}
            <div>
              {/* Heading - Defaults to left align */}
              <h3 className="text-2xl font-semibold mb-4">
                {" "}
                {/* Adjusted font weight */}
                {feature.heading}
              </h3>
              {/* Description - Defaults to left align */}
              <div className="text-base leading-relaxed">
                {typeof feature.text === "string" ? (
                  <p>{feature.text}</p>
                ) : (
                  feature.text
                )}
              </div>
            </div>
            {/* Empty div helps justify-between push content up */}
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the component and types (FeatureColumnProps is only exported here now)
export { ThreeColumnFeatureSection };
export type { ThreeColumnFeatureProps, FeatureColumnProps };
