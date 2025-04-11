import type { TeamMember } from '@/types'; // Import the type definition

// Updated team member data based on the provided image (excluding Linda Trusler)
// TODO: Replace imageUrls with actual paths when available. Verify/correct roles.
export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "David Stevens",
    role: "Chief of Investment Committee", // Interpreted from image text
    bio: "", // Bio not available in image
    imageUrl: '/images/placeholders/David.jpg' // Placeholder
  },
  {
    id: 2,
    name: "Ken Atchison",
    role: "Advisory & Chairman Committee Member", // Interpreted from image text
    bio: "",
    imageUrl: "/images/placeholders/Ken.jpg" // Placeholder
  },
  {
    id: 3,
    name: "Glenn Fowles",
    role: "Investment Committee Member", // Interpreted from image text
    bio: "",
    imageUrl: "/images/placeholders/Glenn.jpg" // Placeholder
  },
  // Linda Trusler omitted as requested
  {
    id: 5, // Skipped 4 to maintain unique IDs if needed elsewhere
    name: "Abidal Guerinat",
    role: "Chief Executive Officer | Investment Committee Member", // Interpreted from image text
    bio: "",
    imageUrl: "/images/placeholders/Abidal.jpg" // Placeholder
  },
  {
    id: 6,
    name: "Abel Guerinat",
    role: "Chief Coaching Officer", // Interpreted from image text
    bio: "",
    imageUrl: "/images/placeholders/Abel.jpg" // Placeholder - Note potential initial conflict
  },
  {
    id: 7,
    name: "Sarah Fichera",
    role: "Investment Business Manager", // Interpreted from image text
    bio: "",
    imageUrl: "/images/placeholders/Sarah.jpg" // Placeholder
  },
  {
    id: 8,
    name: "Juan Paolo Legaspi",
    role: "Advisory Committee Member | Health", // Interpreted from image text
    bio: "",
    imageUrl: "/images/placeholders/Juan.jpg" // Placeholder
  },
];

