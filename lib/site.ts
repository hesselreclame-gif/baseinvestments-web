// Base path for the deployment. Empty locally; set to "/baseinvestments-web"
// during the GitHub Pages build (see .github/workflows/deploy.yml).
// next/image does NOT prepend basePath to `src` when images are unoptimized,
// so we prefix image/asset URLs manually with this helper.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative public asset path with the deployment base path. */
export const asset = (path: string) => `${basePath}${path}`;
