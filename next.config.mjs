/**
 * Each palette builds into its own output directory so several themes can be
 * built and served side by side (see `npm run theme:build` in package.json).
 */
const theme = process.env.EKTELO_THEME;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(theme && theme !== "signature" ? { distDir: `.next-${theme}` } : {}),
};

export default nextConfig;
