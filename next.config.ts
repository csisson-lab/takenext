import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set basePath and assetPrefix so the static export works under /takenext on GitHub Pages
  basePath: '/takenext',
  assetPrefix: '/takenext/',
};

export default nextConfig;
