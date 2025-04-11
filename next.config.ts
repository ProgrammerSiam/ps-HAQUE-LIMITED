import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Allow Cloudinary image URLs

    remotePatterns: [],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://haque-api.vercel.app/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
