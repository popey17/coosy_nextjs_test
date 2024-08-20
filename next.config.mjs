/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
