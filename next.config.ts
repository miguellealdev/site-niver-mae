import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/site-niver-mae',
  assetPrefix: '/site-niver-mae/',
  images: {
    unoptimized: true, // Isso ajuda a evitar problemas com imagens ao exportar
  },
  distDir: 'dist',
};

export default nextConfig;
