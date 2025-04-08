import type { Config } from 'tailwindcss';

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        'hwc-teal': '#0098A6',
        'hwc-teal-dark': '#005961',
        'hwc-blue-light': '#DBF4FC',
        'hwc-dark': '#002225',
        'hwc-white': '#FAFAF9',
      },
    },
  },
  plugins: [],
};

export default config;