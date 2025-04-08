/**
 * ============================================================================
 * Shared TypeScript Types and Interfaces for the HWC Website
 * ============================================================================
 *
 * This file serves as the central export point for types that are used across
 * multiple components or modules.
 *
 * Define interfaces for complex objects, data structures, API responses, etc. here.
 * Simple component prop types that aren't reused can often be defined
 * directly within the component file.
 */

// Example: Define a type for a service offering (we might use this later)
export type ServiceOffering = {
    id: string;
    title: string;
    shortDescription: string;
    iconName?: string; // Optional: Corresponds to a lucide-react icon name
    slug: string; // For linking to the service page
  };
  
  // Example: Define possible variants for components if needed globally
  // export type ComponentVariant = 'primary' | 'secondary' | 'outline';
  
  
  // --- Add more shared types below as the project grows ---
  
  
 
   export interface Testimonial {
     id: string | number;
     quote: string;
     authorName: string;
     authorTitle?: string;
     imageUrl?: string;
   }
  
  // Example: Interface for a Team Member (from Phase 6)
  // export interface TeamMember {
  //   id: string;
  //   name: string;
  //   role: string;
  //   bio: string;
  //   imageUrl: string;
  // }
  
  // You can also re-export types from other files within this directory if needed
  // export * from './apiTypes';
  