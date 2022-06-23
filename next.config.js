/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/demos/video/videoDemos',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
