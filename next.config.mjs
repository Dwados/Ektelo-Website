/**
 * Each palette builds into its own output directory so several themes can be
 * built and served side by side (see `npm run theme:build` in package.json).
 */
const DEFAULT_BUILD_THEME = "Ektelo";
const theme = process.env.Ektelo_THEME;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(theme && theme !== DEFAULT_BUILD_THEME ? { distDir: `.next-${theme}` } : {}),
};

export default nextConfig;
