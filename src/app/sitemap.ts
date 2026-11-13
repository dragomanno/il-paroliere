import type { MetadataRoute } from "next";
import { getAllLemmasFromDB } from "@/lib/db";

const BASE_URL = "https://ilparoliere.online";

/** Editorial date (YYYY-MM-DD) of a lemma, or undefined if missing. */
function editorialDate(updatedAt?: string): string | undefined {
  return updatedAt ? updatedAt.slice(0, 10) : undefined;
}

/** Latest of a list of YYYY-MM-DD dates, or undefined if the list is empty. */
function latest(dates: (string | undefined)[]): string | undefined {
  const valid = dates.filter((d): d is string => Boolean(d)).sort();
  return valid.length ? valid[valid.length - 1] : undefined;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // <lastmod> must reflect real content changes, never the build time:
  // Google ignores lastmod when every URL carries the same timestamp.
  // Institutional pages have no tracked edit date, so they omit lastmod.

  // Static institutional routes — always present
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/progetto`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fonti`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/licenza`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contribuisci`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
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

      // Homepage lists the latest lemmas: its lastmod is the newest lemma date.
      const newest = latest(allLemmas.map((e) => editorialDate(e.updatedAt)));
      if (newest) staticRoutes[0].lastModified = newest;

      letterRoutes = lettersWithLemmi.map((l) => ({
        url: `${BASE_URL}/lettera/${l}`,
        lastModified: latest(
          allLemmas
            .filter((e) => e.lemma.toLowerCase()[0] === l)
            .map((e) => editorialDate(e.updatedAt)),
        ),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));

      lemmaRoutes = allLemmas
        .filter((entry) => entry.indexable)
        .map((entry) => ({
          url: `${BASE_URL}/parola/${entry.slug}`,
          lastModified: editorialDate(entry.updatedAt),
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
