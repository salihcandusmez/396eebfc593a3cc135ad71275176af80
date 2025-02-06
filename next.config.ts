import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
};

export default nextConfig;
