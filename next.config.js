const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV !== 'production'
            ? 'https://gomeetup.ru/api/:path*'
            : 'http://localhost:3072/api/:path*', // Proxy to Backend
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
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gmtstatic.storage.yandexcloud.net',
        pathname: '/**',
      },
    ],
    domains: ['storage.yandexcloud.net'],
  },
});
