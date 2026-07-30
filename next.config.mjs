/**
 * Each palette builds into its own output directory so several themes can be
 * built and served side by side (see `npm run theme:build` in package.json).
 */
const DEFAULT_BUILD_THEME = "ektelio";
const theme = process.env.EKTELIO_THEME;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(theme && theme !== DEFAULT_BUILD_THEME ? { distDir: `.next-${theme}` } : {}),
};

export default nextConfig;
