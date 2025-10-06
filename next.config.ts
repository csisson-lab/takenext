import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set basePath and assetPrefix so the static export works under /takenext on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/takenext' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/takenext/' : undefined,
};

export default nextConfig;
