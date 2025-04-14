import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Props for the card component
export interface InsuranceColumnCardProps {
  title: string;
  description: string | React.ReactNode;
  imageUrl: string;
  altText: string;
  layoutOrder?: 'text-top' | 'image-top'; // Default to text-top
  className?: string;
}

// Reusable card component for the insurance features grid
const InsuranceColumnCard: React.FC<InsuranceColumnCardProps> = ({
  title,
  description,
  imageUrl,
  altText,
  layoutOrder = 'text-top', // Default order
  className,
}) => {
  // Content blocks rendering
  const TextContentBlock = (
    // Assuming p-6 padding, light blue background, dark text
    <div className="bg-[var(--color-hwc-blue-light)] p-6 text-[var(--color-hwc-dark)]">
      {/* Assuming text-xl bold heading, mb-2 */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* Assuming text-sm description */}
      <div className="text-sm">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    </div>
  );

  const ImageBlock = (
    // Assuming aspect-video for image container, adjust as needed
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover" // Cover the area
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes
      />
    </div>
  );

  return (
    // Main container using flex column with 8px gap (gap-2)
    <div className={cn('flex flex-col gap-2 overflow-hidden', className)}>
      {/* Conditional rendering based on layoutOrder */}
      {layoutOrder === 'text-top' ? (
        <>
          {TextContentBlock}
          {ImageBlock}
        </>
      ) : (
        <>
          {ImageBlock}
          {TextContentBlock}
        </>
      )}
    </div>
  );
};

export { InsuranceColumnCard };

