import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ReusableImageOverlayHeroProps {
  backgroundImageUrl: string
  headingText: string
  paragraphText: string | React.ReactNode
  imageAltText?: string
  className?: string
}

export const ReusableImageOverlayHero: React.FC<ReusableImageOverlayHeroProps> = ({
  backgroundImageUrl,
  headingText,
  paragraphText,
  imageAltText = '',
  className,
}) => (
  <section
    className={cn('relative w-full bg-white py-12 md:min-h-[75vh]', className)}
  >
    <div
      className={cn(
        'relative aspect-[4/3] w-full z-0 overflow-hidden',
        'md:absolute md:top-[32px] md:bottom-[16px] md:inset-x-[60px] md:w-auto md:h-auto md:aspect-auto'
      )}
    >
      <Image
        src={backgroundImageUrl}
        alt={imageAltText}
        //unoptimized
        fill
        //priority
        quality={100}
        className="object-cover"
        sizes={`
          (max-width: 767px) 100vw,
          (max-width: 1024px) calc(100vw - 120px),
          calc(50vw - 120px)
        `}
      />

      <div
        className={cn(
          'relative z-10 mt-6 p-6 bg-[var(--color-hwc-teal-dark)] text-white',
          'md:mt-0 md:absolute md:bottom-0 md:right-0',
          'md:w-11/12 md:max-w-lg lg:max-w-xl xl:max-w-2xl md:p-8 lg:p-10'
        )}
      >
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          {headingText}
        </h2>
        <div className="font-body text-sm md:text-base leading-relaxed">
          {typeof paragraphText === 'string' ? <p>{paragraphText}</p> : paragraphText}
        </div>
      </div>
    </div>
  </section>
)