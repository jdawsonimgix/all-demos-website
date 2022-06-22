/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/demos/video/ixvideo',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
