import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iteamproject.it/",
      lastModified: "2026-03-17",
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          it: "https://iteamproject.it/",
          en: "https://iteamproject.it/",
        },
      },
    },
  ];
}