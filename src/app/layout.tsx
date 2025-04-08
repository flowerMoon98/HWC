import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import the Inter font
import '@/styles/globals.css'; // Import global styles (includes Tailwind)

// Import Header and Footer components using correct lowercase 'layout' path
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Configure the Inter font
const inter = Inter({
  subsets: ['latin'], // Specify character subsets if needed
  display: 'swap', // Use 'swap' for better perceived performance
  variable: '--font-inter', // Optional: Define a CSS variable for the font
});

// Define website metadata (good for SEO and browser tabs)
export const metadata: Metadata = {
  title: 'HWC Financial Planning', // Adjust title as needed
  description: 'Comprehensive planning for healthcare, wealth, and property.', // Adjust description
};

// The RootLayout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={`${inter.variable} font-sans bg-white text-gray-900 antialiased flex flex-col min-h-screen`}>
        {/* Render the Header component */}
        <Header />

        {/* The main content area where page components are rendered */}
        {/* Added flex-grow to make main content take available space */}
        <main className="flex-grow">{children}</main>

        {/* Render the Footer component */}
        <Footer />
      </body>
    </html>
  );
}
