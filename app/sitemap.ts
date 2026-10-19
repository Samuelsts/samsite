import { MetadataRoute } from "next";

// Obrigatório com output: "export" (a rota é resolvida em build time).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.samlabs.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}