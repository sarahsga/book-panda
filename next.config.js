/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/categories',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
