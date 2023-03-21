/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname:
          'tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/**',
      },
    ],
  },
};

module.exports = nextConfig;
