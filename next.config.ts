import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // keep your existing remotePatterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],

    // ← add these two arrays to cover every DPR / screen width
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1440, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],

    // optional: tell Next to emit modern formats first
    
  },
};

export default nextConfig;