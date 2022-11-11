/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // app directory is still an experimental feature, so we need to set a flag in the next.config.js file in order to use it:
  //experimental: { appDir: true },
};

module.exports = nextConfig
