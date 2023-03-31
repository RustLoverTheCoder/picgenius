/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.midjourney.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
