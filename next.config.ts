import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Portofolio2.1" : "",
  assetPrefix: isProd ? "/Portofolio2.1/" : "",
};

export default nextConfig;