import type { Testimonial } from '@/types'; // Import the type definition

// Define an array of mock testimonial data
export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with HWC was a game-changer for our financial planning. Their insights were invaluable, and the process was seamless.",
    authorName: "Alice Johnson",
    authorTitle: "Small Business Owner",
    // imageUrl: "https://placehold.co/40x40/EBF8FF/002225?text=AJ" // Example placeholder image
  },
  {
    id: 2,
    quote: "The team provided clear, actionable advice for our healthcare planning needs. We feel much more secure about the future.",
    authorName: "Bob Williams",
    authorTitle: "Retired Teacher",
    //imageUrl: "https://placehold.co/40x40/DBF4FC/002225?text=BW" // Example placeholder image
  },
  {
    id: 3,
    quote: "Navigating property investment seemed daunting, but HWC made it straightforward and profitable. Highly recommended!",
    authorName: "Charlie Brown",
    // authorTitle: "Investor" // Title is optional
    // No imageUrl provided, will use initials placeholder
  },
  // Add more testimonials as needed
];
