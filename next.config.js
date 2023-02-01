/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cometbft.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
