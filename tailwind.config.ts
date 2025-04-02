import type { Config } from 'tailwindcss';

const config: Config = {
  // Specifies the files where Tailwind should look for class names
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Looks in pages directory (if you use it)
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Looks in components directory
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Looks in app directory (App Router)
  ],
  // Allows customizing the default Tailwind theme
  theme: {
    // Use 'extend' to add customizations without removing Tailwind defaults
    extend: {
      // Add our project-specific colors here
      colors: {
        // Define the Teal color for CTAs (using a common Teal shade, adjust if needed)
        'hwc-teal': '#14B8A6', // You can replace this hex code if you have a specific one
        // Define the light blue for the contact form background
        'hwc-blue-light': '#EBF8FF',
        // We can add other custom colors later (e.g., for hover states)
        // 'hwc-teal-darker': '#0F766E',
      },
      // We can also extend other theme properties like fonts, spacing, etc. later
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  // Allows adding Tailwind plugins (we might use some later)
  plugins: [],
};
export default config;
