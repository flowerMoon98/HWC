/**
 * ============================================================================
 * Shared TypeScript Types and Interfaces for the HWC Website
 * ============================================================================
 *
 * This file serves as the central export point for types that are used across
 * multiple components or modules.
 */

// Example: Define a type for a service offering (we might use this later)
export type ServiceOffering = {
    id: string;
    title: string;
    shortDescription: string;
    iconName?: string; // Optional: Corresponds to a lucide-react icon name
    slug: string; // For linking to the service page
  };
  
  // Interface for a single Testimonial item
  export interface Testimonial{
    id: string | number; // Unique identifier
    quote: string; // The testimonial text
    authorName: string; // Name of the person giving the testimonial
    authorTitle?: string; // Optional title/company of the author
    imageUrl?: string;   // Optional URL for the author's image
  }
  
  // --- ADD/UNCOMMENT THIS INTERFACE ---
  // Interface for a Team Member
  export interface TeamMember {
    id: string | number;
    name: string;
    role: string;
    bio?: string; // Optional short bio
    imageUrl: string; // Image URL for the member's photo
  }
  // --- END OF ADDITION ---
  
  // You can also re-export types from other files within this directory if needed
  // export * from './apiTypes';
  