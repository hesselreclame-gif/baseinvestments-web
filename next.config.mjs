/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from /<repo>/, so we need a basePath.
// GITHUB_ACTIONS is automatically "true" during the Pages build, and unset locally.
const repo = "baseinvestments-web";
const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
};

export default nextConfig;
