import * as React from 'react';

import { cn } from '@/lib/utils'; // Import our utility function

// Define the props for the Card component
// Extends standard HTML div attributes
export type CardProps = React.HTMLAttributes<HTMLDivElement>;

// Create the Card component using forwardRef
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // Base styles for the card container
        'rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm',
        // Allow passing custom classes
        className
      )}
      {...props} // Pass down remaining props (like children)
    />
  )
);
Card.displayName = 'Card'; // Set display name for React DevTools

// Export the component
export { Card };

// We can add sub-components like CardHeader, CardContent, CardFooter later if needed
// For now, content will just be passed as children to the main Card div.
