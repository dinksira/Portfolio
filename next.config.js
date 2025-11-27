/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.placeholder.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig