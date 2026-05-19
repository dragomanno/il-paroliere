import type { MetadataRoute } from "next";
import { allLemmas } from "@/content/lemmas";

const BASE_URL = "https://ilparoliere.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static institutional routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/progetto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fonti`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/licenza`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contribuisci`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Lemma routes — only include indexable entries
  // Currently all lemmas are indexable: false (Phase 1-2 policy)
  // When a lemma is promoted to indexable: true, it will automatically
  // appear in the sitemap on next deploy.
  const lemmaRoutes: MetadataRoute.Sitemap = allLemmas
    .filter((entry) => entry.indexable)
    .map((entry) => ({
      url: `${BASE_URL}/parola/${entry.slug}`,
      lastModified: entry.updatedAt ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  return [...staticRoutes, ...lemmaRoutes];
}
