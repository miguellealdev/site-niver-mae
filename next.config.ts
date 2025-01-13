import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, // Isso ajuda a evitar problemas com imagens ao exportar
  },
};

export default nextConfig;
