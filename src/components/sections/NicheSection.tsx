"use client";

import React from "react";
import Image from "next/image";
// Removed standard Link import, using custom component below
// import Link from 'next/link';
import { cn } from "@/lib/utils";
// Import the reusable animated link component
import { AnimatedUnderlineLink } from "@/components/ui/AnimatedUnderlineLink";

// Define props
interface NicheSectionProps {
  className?: string;
}

// Service data
const nicheServices = [
  {
    id: "ins",
    title: "Insurance Planning",
    description:
      "Placeholder description for Insurance Planning services. Lorem ipsum dolor sit amet.",
    href: "/services/insurance",
  },
  {
    id: "acc",
    title: "Accounting",
    description:
      "Placeholder description for Accounting services. Pellentesque cursus auctor dolor.",
    href: "/services/accounting",
  },
  {
    id: "wm",
    title: "Wealth Management",
    description:
      "Placeholder description for Wealth Management services. Vestibulum porttitor libero.",
    href: "/services/wealth-management",
  },
  {
    id: "hc",
    title: "Healthcare Planning",
    description:
      "Placeholder description for Healthcare Planning services. Etiam mollis urna erat.",
    href: "/services/healthcare-planning",
  },
  {
    id: "prop",
    title: "Property Guidance",
    description:
      "Placeholder description for Property Guidance services. Et dignissim odio imperdiet non.",
    href: "/services/property",
  },
];

// NicheSection component
const NicheSection: React.FC<NicheSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-16 sm:py-24 bg-white", className)}>
      {/* Grid layout - No container wrapper for full bleed */}
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-5 items-start",
          "gap-y-12 md:gap-x-10", // Keep gaps
        )}
      >
        {/* Left Panel: Image - Spans 3 columns, with left padding */}
        <div className="w-full md:col-span-3 md:sticky top-24 self-start pl-4 sm:pl-6 lg:pl-8">
          <Image
            src="/images/placeholders/niche-section-image.jpg" // TODO: Replace placeholder
            alt="Financial consultation meeting"
            width={800} // User updated width
            height={550} // User updated height
            className="rounded-lg object-cover shadow-md w-full h-auto"
          />
        </div>

        {/* Right Panel: Static Service Sections Container - Spans 2 columns */}
        <div
          className={cn(
            "md:col-span-2",
            "space-y-0",
            "h-[42rem]", // Container height
            "overflow-y-auto", // Allow scrolling
          )}
        >
          {nicheServices.map((service, index) => (
            // Service Block Div
            <div
              key={service.id}
              className={cn(
                "group relative overflow-hidden",
                "bg-white",
                "border-t border-b border-l border-[var(--color-hwc-dark)]", // T, B, L borders only
                "rounded-none", // Sharp corners
                "py-6 pl-6 pr-0", // Padding: T/B=6, L=6, R=0
                "transition-colors duration-200 ease-in-out",
                "hover:bg-[var(--color-hwc-blue-light)]",
                "h-80", // Keep fixed height
                "flex flex-col",
                index !== 0 ? "-mt-px" : "", // Overlapping borders
              )}
            >
              {/* Wrapper for H3 and P */}
              <div className="flex-grow flex flex-col pr-6">
                {" "}
                {/* Keep right padding for text */}
                {/* Heading */}
                <h3 className="font-semibold text-xl mb-2 text-[var(--color-hwc-dark)] flex-shrink-0">
                  {service.title}
                </h3>
                {/* Description */}
                <p
                  className={cn(
                    "text-sm text-gray-600 overflow-hidden",
                    "mt-auto", // Push to bottom
                    "transition-transform duration-300 ease-in-out",
                    "group-hover:-translate-y-5", // Push up on hover
                  )}
                >
                  {service.description}
                </p>
              </div>

              {/* "More info" link - Using AnimatedUnderlineLink */}
              {/* Wrapper div still handles absolute positioning and reveal */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 z-10", // Positioning
                  "px-6 pb-4 pt-2", // Padding for link area
                  "opacity-0 group-hover:opacity-100", // Reveal logic
                  "transition-opacity duration-300 ease-in-out", // Fade transition
                )}
              >
                {/* Use the reusable component */}
                {/* Pass href and children */}
                {/* className here can override base styles if needed, but defaults should work */}
                <AnimatedUnderlineLink href={service.href} className="w-fit">
                  More info
                </AnimatedUnderlineLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NicheSection };
export type { NicheSectionProps };
