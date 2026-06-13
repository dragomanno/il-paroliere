/**
 * Il Paroliere — Drizzle ORM schema
 *
 * Single-table design with JSONB columns for nested structures.
 * Rationale: at 100–500 lemmas, a flat table with JSONB is simpler to
 * maintain than 7 normalised tables, and Postgres JSONB supports indexing
 * and querying well enough for our editorial scale.
 *
 * Phase 5: added search_vector (tsvector) for FTS + pg_trgm index.
 *
 * License: MIT
 */

import {
  pgTable,
  text,
  boolean,
  timestamp,
  jsonb,
  index,
  uniqueIndex,
  customType,
} from "drizzle-orm/pg-core";

// ─── Custom tsvector type (Drizzle doesn't ship one) ─────────────────────────

const tsvector = customType<{ data: string }>({
  dataType() {
    return "tsvector";
  },
});

// ─── JSONB sub-types (not stored in DB directly, just for TypeScript) ─────────

export type SynonymRecord = {
  term: string;
  register?: string;
  context?: string;
  note?: string;
};

export type SourceLinksRecord = {
  treccani?: string;
  demauro?: string;
  sabatiniColetti?: string;
  devotoOli?: string;
  wiktionary?: string;
};

/** Structured relatedWords entry — supports both plain strings and interlinking objects. */
export type RelatedWordRecord =
  | string
  | {
      slug?: string;
      label?: string;
      term?: string;
      relation?: string;
    };

// ─── Main table ───────────────────────────────────────────────────────────────

export const lemmas = pgTable(
  "lemmas",
  {
    // Identity
    slug: text("slug").primaryKey(),
    lemma: text("lemma").notNull(),

    // Grammar
    partOfSpeech: text("part_of_speech").notNull(),
    gender: text("gender"),

    // Core content
    definition: text("definition").notNull(),
    shortDefinition: text("short_definition").notNull(),
    etymology: text("etymology"),
    paroliereNote: text("paroliere_note").notNull(),

    // Arrays stored as JSONB — simple string arrays
    register: jsonb("register").$type<string[]>().notNull().default([]),
    domains: jsonb("domains").$type<string[]>().notNull().default([]),
    examples: jsonb("examples").$type<string[]>().notNull().default([]),
    relatedWords: jsonb("related_words").$type<RelatedWordRecord[]>().default([]),

    // Structured JSONB arrays
    synonyms: jsonb("synonyms").$type<SynonymRecord[]>().default([]),
    antonyms: jsonb("antonyms").$type<SynonymRecord[]>().default([]),

    // External links
    sourceLinks: jsonb("source_links")
      .$type<SourceLinksRecord>()
      .notNull()
      .default({}),

    // Editorial workflow
    editorialStatus: text("editorial_status")
      .$type<"stub" | "draft" | "reviewed" | "published">()
      .notNull()
      .default("draft"),
    indexable: boolean("indexable").notNull().default(false),

    // SEO
    seoTitle: text("seo_title").notNull(),
    seoDescription: text("seo_description").notNull(),

    // Phase 5: FTS vector — maintained by DB trigger, never set by app code
    searchVector: tsvector("search_vector"),

    // Timestamps
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    uniqueIndex("lemmas_slug_idx").on(table.slug),
    index("lemmas_lemma_idx").on(table.lemma),
    index("lemmas_editorial_status_idx").on(table.editorialStatus),
    index("lemmas_indexable_idx").on(table.indexable),
    // GIN indexes defined in migration SQL (not expressible in Drizzle for tsvector/trgm)
  ]
);

export type LemmaRow = typeof lemmas.$inferSelect;
export type NewLemmaRow = typeof lemmas.$inferInsert;
