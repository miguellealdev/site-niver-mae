import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/site-niver-mae',
  assetPrefix: '/site-niver-mae/',
  images: {
    unoptimized: true, // Isso ajuda a evitar problemas com imagens ao exportar
  },
};

export default nextConfig;
