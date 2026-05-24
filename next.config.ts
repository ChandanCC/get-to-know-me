import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static export for GitHub Pages
  output: "export",
  // Repo name as base path — matches github.com/ChandanCC/get-to-know-me
  basePath: "/get-to-know-me",
  // Required for static export with Next.js image optimisation disabled
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
