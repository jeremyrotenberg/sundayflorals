import type { NextConfig } from "next";

// GitHub Pages serves static files with no Node.js server, and this repo's
// Pages site is a project page (jeremyrotenberg.github.io/sundayflorals),
// not a custom domain — so the app is exported to static HTML and every
// asset URL is prefixed with the repo name.
const repoName = "sundayflorals";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
