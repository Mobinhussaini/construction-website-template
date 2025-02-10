import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images:{
  remotePatterns: [
    {
      protocol: "https",
      hostname: "readymadeui.com"
    }
  ]
  }
};

export default nextConfig;
