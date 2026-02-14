import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // hostname configuration for the images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      }
    ]
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
