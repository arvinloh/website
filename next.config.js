/** @type {import('next').NextConfig} */
const { version } = require('./package.json');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  publicRuntimeConfig: {
    version,
    basePath: '/website',
    assetPrefix: '/website',
  },
};

module.exports = nextConfig;
