import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pos-backend-edai.onrender.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "3001",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
