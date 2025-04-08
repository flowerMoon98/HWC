import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Protocol used by placehold.co
        hostname: 'placehold.co', // The allowed domain
        port: '', // Default port (usually empty)
        pathname: '/**', // Allow any path on this domain
      },
      // Add other domains here if needed later
      // {
      //   protocol: 'https',
      //   hostname: 'your-cms-domain.com',
      //   port: '',
      //   pathname: '/images/**',
      // },
    ],
  },
};

export default nextConfig;
