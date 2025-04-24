import * as React from "react";
import { cn } from "@/lib/utils";
// Import the type for service items (or define it locally if not global)
import type { CoreServiceItem } from "@/lib/data/accountingServices"; // Adjust path if type moved

// Define props for the CoreServicesSection component
interface CoreServicesProps {
  title?: string; // Optional title for the section
  services: CoreServiceItem[]; // Array of service data (required)
  className?: string; // Allow passing custom classes (e.g., for padding overrides)
  // Add props for borders if needed based on final design
}

// Create the CoreServicesSection component
const CoreServicesSection: React.FC<CoreServicesProps> = ({
  title = "Core Services", // Default title
  services,
  className,
}) => {
  // Don't render if no services are provided
  if (!services || services.length === 0) {
    return null;
  }

  return (
    // Main section container
    // Assuming white background, standard padding. Add borders via className if needed.
    <section className={cn("py-16 sm:py-24 bg-white", className)}>
      {/* Container for max-width and centering */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        {/* Left-aligned, dark text, standard heading size, bottom margin */}
        <h2 className="text-3xl  tracking-tight text-left text-[var(--color-hwc-dark)] sm:text-4xl mb-12 lg:mb-16">
          {title}
        </h2>

        {/* Vertical list container for service items */}
        {/* Using space-y for vertical gap between items */}
        <div className="space-y-8">
          {services.map((service) => (
            // Container for a single service item (Divider + Content Grid)
            <div key={service.id}>
              {/* Full-width thin divider */}
              {/* Assuming light gray color, 1px height */}
              <div className="h-px w-full bg-gray-200"></div>

              {/* Grid for Service Title (Right Aligned) & Description (Left Aligned) */}
              {/* Added top margin for space below divider */}
              {/* Grid: 1 col mobile, 3 cols small+ (1 for title, 2 for desc) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-6 items-start">
                {/* Service Title Column (Right Aligned on sm+) */}
                <div className="sm:col-span-1 sm:text-right">
                  {/* Assuming text-lg, semibold, dark color */}
                  <h3 className="text-lg font-semibold text-[var(--color-hwc-dark)]">
                    {service.title}
                  </h3>
                </div>

                {/* Service Description Column (Left Aligned) */}
                <div className="sm:col-span-2">
                  {/* Assuming text-sm, gray color, relaxed leading */}
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {typeof service.description === "string" ? (
                      <p>{service.description}</p>
                    ) : (
                      service.description
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CoreServicesSection };
export type { CoreServicesProps };
