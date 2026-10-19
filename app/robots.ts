import { MetadataRoute } from 'next';

// Obrigatório com output: "export" (a rota é resolvida em build time).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.samlabs.com.br/sitemap.xml',
  };
}
