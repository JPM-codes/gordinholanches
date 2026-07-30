/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
  basePath: isProd ? "gordinholanches" : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  },
  compress: true,
  output: 'export',
  distDir: 'dist'
};

module.exports = nextConfig;
