/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 启用图片优化以提高加载速度
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub.timedg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'recipe1.ezmember.co.kr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pinchmegood.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgcache.dealmoon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'foodyschmoodyblog.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'forktospoon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
