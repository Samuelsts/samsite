import type { NextConfig } from 'next';

// Site 100% estático: `next build` gera a pasta /out (output: 'export').
// Os headers de segurança NÃO ficam mais aqui (headers() é ignorado em export):
// vivem em public/_headers, que o Cloudflare Pages aplica no edge.
const nextConfig: NextConfig = {
  output: 'export',
  // O otimizador do next/image exige servidor. Os assets já são .webp/.svg locais.
  images: { unoptimized: true },
};

export default nextConfig;
