import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Infomaniak nginx intercepts /_next/ before Node.js.
  // Prefix assets with /xk so they bypass the proxy.
  assetPrefix: process.env.NODE_ENV === "production" ? "/xk" : "",
};

export default nextConfig;
