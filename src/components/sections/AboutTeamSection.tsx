import React from "react";
import Image from "next/image"; // For team member images
import { cn } from "@/lib/utils"; // Utility for class names
import type { TeamMember } from "@/types"; // Import the TeamMember type definition

// Define props for the component
interface AboutTeamSectionProps {
  heading: string; // Heading for the sticky left panel
  text: string | React.ReactNode; // Text content for the sticky left panel
  teamMembers: TeamMember[]; // Array of team member data (required)
  className?: string; // Optional className for the section
}

// Create the AboutTeamSection component
const AboutTeamSection: React.FC<AboutTeamSectionProps> = ({
  heading,
  text,
  teamMembers,
  className,
}) => {
  return (
    // Main section container
    <section className={cn("py-16 sm:py-24 bg-white", className)}>
      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout for the two panels */}
        {/* Using 5 columns: 2 for sticky text, 3 for team grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Panel: Sticky Copywriting */}
          {/* Spans 2 columns on medium+, sticky positioning */}
          <div className="md:col-span-2 md:sticky top-24 self-start">
            {" "}
            {/* Adjust top-X based on header height */}
            <h2 className="text-3xl  tracking-tight text-[var(--color-hwc-dark)] sm:text-4xl mb-6">
              {heading}
            </h2>
            {/* Text content passed via props */}
            {/* Using prose for basic text formatting */}
            {/* Ensure @tailwindcss/typography plugin is installed/configured if using */}
            <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
              {typeof text === "string" ? <p>{text}</p> : text}
            </div>
          </div>

          {/* Right Panel: Team Member Grid */}
          {/* Spans 3 columns on medium+ */}
          <div className="md:col-span-3">
            {/* Grid for team members: 1 col default, 2 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {/* Map over the teamMembers data array passed via props */}
              {teamMembers.map((member) => (
                // Container for each team member card
                // Added 'group' for potential hover effects later
                <div key={member.id} className="text-center group">
                  {/* Image container: relative for Image fill, rounded, shadow */}
                  <div className="relative h-48 w-48 mx-auto mb-4  overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                    {" "}
                    {/* Example hover effect */}
                    <Image
                      src={member.imageUrl} // Image URL from data
                      alt={`Photo of ${member.name}`} // Alt text
                      fill // Fill the container div
                      className="object-cover" // Cover the area, potentially cropping
                      sizes="(max-width: 640px) 100vw, 12rem" // Responsive image sizes hint
                    />
                  </div>
                  {/* Member Name */}
                  <h3 className="text-lg font-semibold text-[var(--color-hwc-dark)]">
                    {member.name}
                  </h3>
                  {/* Member Role */}
                  <p className="text-sm text-[var(--color-hwc-teal)]">
                    {" "}
                    {/* Use theme teal color */}
                    {member.role}
                  </p>
                  {/* Optional Member Bio */}
                  {member.bio && (
                    <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component and its props type
export { AboutTeamSection };
export type { AboutTeamSectionProps };
