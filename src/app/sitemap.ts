import type { MetadataRoute } from "next";
import { getAllLemmasFromDB } from "@/lib/db";

const BASE_URL = "https://ilparoliere.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // Static institutional routes — always present
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
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // DB-dependent routes — graceful fallback if DB is unavailable at build time
  let letterRoutes: MetadataRoute.Sitemap = [];
  let lemmaRoutes: MetadataRoute.Sitemap = [];

  try {
    if (process.env.DATABASE_URL) {
      const allLemmas = await getAllLemmasFromDB();

      const lettersWithLemmi = [
        ...new Set(allLemmas.map((e) => e.lemma.toLowerCase()[0])),
      ].sort();

      letterRoutes = lettersWithLemmi.map((l) => ({
        url: `${BASE_URL}/lettera/${l}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));

      lemmaRoutes = allLemmas
        .filter((entry) => entry.indexable)
        .map((entry) => ({
          url: `${BASE_URL}/parola/${entry.slug}`,
          lastModified: entry.updatedAt ?? now,
          changeFrequency: "monthly" as const,
          priority: 0.9,
        }));
    }
  } catch {
    // DB unavailable at build time (e.g. deploy preview without DB vars).
    // Sitemap will only contain static routes — acceptable for previews.
  }

  return [...staticRoutes, ...letterRoutes, ...lemmaRoutes];
}
