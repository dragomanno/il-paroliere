/**
 * Il Paroliere — DB query helpers
 *
 * Drop-in replacements for the current file-based getLemma / getAllSlugs
 * functions. Signature-compatible so page.tsx requires zero changes.
 *
 * Phase 4 activation: swap the imports in src/content/lemmas/index.ts
 * from the file-based functions to these.
 *
 * License: MIT
 */

import { getDb } from "@/lib/db/client";
import { lemmas } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { LemmaEntry } from "@/lib/types";

/**
 * Map a DB row to the LemmaEntry type used throughout the app.
 * Keeps the rest of the codebase unaware of the DB layer.
 */
function rowToLemmaEntry(row: typeof lemmas.$inferSelect): LemmaEntry {
  return {
    lemma: row.lemma,
    slug: row.slug,
    partOfSpeech: row.partOfSpeech,
    gender: row.gender ?? undefined,
    definition: row.definition,
    shortDefinition: row.shortDefinition,
    register: (row.register as string[]) ?? [],
    domains: (row.domains as string[]) ?? [],
    etymology: row.etymology ?? undefined,
    examples: (row.examples as string[]) ?? [],
    synonyms: (row.synonyms as LemmaEntry["synonyms"]) ?? [],
    antonyms: (row.antonyms as LemmaEntry["antonyms"]) ?? [],
    relatedWords: (row.relatedWords as string[]) ?? [],
    sourceLinks: (row.sourceLinks as LemmaEntry["sourceLinks"]) ?? {},
    paroliereNote: row.paroliereNote,
    editorialStatus: row.editorialStatus as LemmaEntry["editorialStatus"],
    indexable: row.indexable,
    seo: {
      title: row.seoTitle,
      description: row.seoDescription,
    },
    createdAt: row.createdAt?.toISOString(),
    updatedAt: row.updatedAt?.toISOString(),
  };
}

/** Get a single lemma by slug. Returns undefined if not found. */
export async function getLemmaFromDB(
  slug: string
): Promise<LemmaEntry | undefined> {
  const db = getDb();
  const rows = await db
    .select()
    .from(lemmas)
    .where(eq(lemmas.slug, slug))
    .limit(1);

  if (rows.length === 0) return undefined;
  return rowToLemmaEntry(rows[0]);
}

/** Get all slugs — used by generateStaticParams at build time. */
export async function getAllSlugsFromDB(): Promise<string[]> {
  const db = getDb();
  const rows = await db.select({ slug: lemmas.slug }).from(lemmas);
  return rows.map((r) => r.slug);
}

/** Get all published lemmas — used by search index and homepage chips. */
export async function getAllLemmasFromDB(): Promise<LemmaEntry[]> {
  const db = getDb();
  const rows = await db.select().from(lemmas);
  return rows.map(rowToLemmaEntry);
}
