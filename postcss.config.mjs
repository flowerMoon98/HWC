/** @type {import('postcss').PostCSSConfig} */
export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js', // Point to your config file
    },
  },
};