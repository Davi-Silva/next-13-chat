/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT,
  },
};

module.exports = nextConfig;
