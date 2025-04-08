import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names or class value arrays into a single string,
 * merging Tailwind CSS classes intelligently to avoid conflicts.
 * @param inputs - Class names or class value arrays to combine.
 * @returns A string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
