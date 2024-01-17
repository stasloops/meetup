/** @type {import('next').NextConfig} */

const withSvgr = require('next-svgr');

const nextConfig = withSvgr({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV !== 'production'
            ? 'https://gomeetup.ru/api/:path*'
            : 'http://backend:3072/api/:path*', // Proxy to Backend
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/events',
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  output: 'standalone',
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gmtstatic.storage.yandexcloud.net',
        pathname: '/**',
      },
    ],
  },
})

module.exports = nextConfig
