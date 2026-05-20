import type { MetadataRoute } from "next";
import { getAllLemmasFromDB } from "@/lib/db";

const BASE_URL = "https://ilparoliere.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allLemmas = await getAllLemmasFromDB();
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
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Letter index pages — only letters that have at least one lemma
  const lettersWithLemmi = [
    ...new Set(allLemmas.map((e) => e.lemma.toLowerCase()[0])),
  ].sort();

  const letterRoutes: MetadataRoute.Sitemap = lettersWithLemmi.map((l) => ({
    url: `${BASE_URL}/lettera/${l}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Lemma routes — only include indexable entries
  const lemmaRoutes: MetadataRoute.Sitemap = allLemmas
    .filter((entry) => entry.indexable)
    .map((entry) => ({
      url: `${BASE_URL}/parola/${entry.slug}`,
      lastModified: entry.updatedAt ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  return [...staticRoutes, ...letterRoutes, ...lemmaRoutes];
}
