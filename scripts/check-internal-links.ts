#!/usr/bin/env tsx
/**
 * Il Paroliere — Internal Linking Audit Script
 *
 * Usage:
 *   npx tsx scripts/check-internal-links.ts
 *
 * What it does:
 *   1. Loads all lemmas from the DB.
 *   2. Builds a map of slug → LemmaEntry.
 *   3. For each lemma, runs two checks:
 *
 *   FORWARD check — are all synonyms/antonyms/relatedWords pointing to
 *   existing published slugs? Reports missing ones as "voci da creare".
 *
 *   BACKWARD check — does the new lemma's slug appear as synonym/antonym/
 *   relatedWord in any other lemma's data? Reports gaps as "rimandi mancanti"
 *   (lemmas that should reference this one but don't yet).
 *
 * Run this script after every new lemma commit to keep the linking graph
 * consistent. It is read-only — it never modifies the DB.
 *
 * License: MIT
 */

import { getAllLemmasFromDB } from "../src/lib/db";
import type { LemmaEntry } from "../src/lib/types";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function collectTerms(entry: LemmaEntry): string[] {
  const terms: string[] = [];
  if (entry.synonyms) terms.push(...entry.synonyms.map((s) => s.term));
  if (entry.antonyms) terms.push(...entry.antonyms.map((a) => a.term));
  if (entry.relatedWords) terms.push(...entry.relatedWords);
  return [...new Set(terms)]; // deduplicate
}

function pad(s: string, len: number) {
  return s.padEnd(len, " ");
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("❌  DATABASE_URL not set. Run with a valid .env.local.");
    process.exit(1);
  }

  console.log("\n🔍  Il Paroliere — Internal Linking Audit\n");
  console.log("Loading lemmas from DB…");

  const allLemmas = await getAllLemmasFromDB();
  const slugMap = new Map<string, LemmaEntry>(
    allLemmas.map((e) => [e.slug, e])
  );

  console.log(`   Found ${allLemmas.length} lemma(s).\n`);

  const COL = 22;
  let forwardIssues = 0;
  let backwardIssues = 0;

  // ── FORWARD CHECK ────────────────────────────────────────────────────────
  console.log("━━━  FORWARD CHECK  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("Synonyms/antonyms/relatedWords that reference a missing slug.\n");

  for (const entry of allLemmas) {
    const terms = collectTerms(entry);
    const missing = terms.filter((t) => !slugMap.has(t));

    if (missing.length > 0) {
      console.log(`  ${pad(entry.slug, COL)} → voci da creare: ${missing.join(", ")}`);
      forwardIssues += missing.length;
    }
  }

  if (forwardIssues === 0) {
    console.log("  ✅  Nessun rimando a voce mancante.\n");
  } else {
    console.log(
      `\n  ⚠️   ${forwardIssues} termine/i referenziato/i ma non ancora pubblicato/i.\n`
    );
  }

  // ── BACKWARD CHECK ───────────────────────────────────────────────────────
  console.log("━━━  BACKWARD CHECK  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(
    "Lemmas that are NOT referenced by other entries that logically should link to them.\n"
  );

  // Build reverse index: slug → set of slugs that already reference it
  const referencedBy = new Map<string, Set<string>>();
  for (const entry of allLemmas) {
    const terms = collectTerms(entry);
    for (const term of terms) {
      if (!referencedBy.has(term)) referencedBy.set(term, new Set());
      referencedBy.get(term)!.add(entry.slug);
    }
  }

  for (const entry of allLemmas) {
    const refs = referencedBy.get(entry.slug) ?? new Set();

    // Find other lemmas that share at least one term with this entry
    // but do NOT already reference it back.
    const myTerms = new Set(collectTerms(entry));
    const shouldReference: string[] = [];

    for (const other of allLemmas) {
      if (other.slug === entry.slug) continue;
      if (refs.has(other.slug)) continue; // already references us — fine

      const otherTerms = collectTerms(other);

      // Does the other lemma list our slug among its own terms?
      // (i.e. it considers us a synonym/antonym/related — we should mirror it)
      if (otherTerms.includes(entry.slug)) {
        shouldReference.push(other.slug);
      }
    }

    if (shouldReference.length > 0) {
      console.log(
        `  ${pad(entry.slug, COL)} ← rimando mancante in: ${shouldReference.join(", ")}`
      );
      backwardIssues += shouldReference.length;
    }
  }

  if (backwardIssues === 0) {
    console.log("  ✅  Tutti i rimandi bidirezionali sono presenti.\n");
  } else {
    console.log(
      `\n  ⚠️   ${backwardIssues} rimando/i mancante/i nei dati esistenti.\n`
    );
  }

  // ── SUMMARY ──────────────────────────────────────────────────────────────
  console.log("━━━  RIEPILOGO  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  Lemmi totali          : ${allLemmas.length}`);
  console.log(`  Forward issues        : ${forwardIssues}`);
  console.log(`  Backward issues       : ${backwardIssues}`);
  const total = forwardIssues + backwardIssues;
  console.log(
    `  Stato                 : ${total === 0 ? "✅  Grafo interno coerente" : `⚠️   ${total} problema/i da risolvere`}`
  );
  console.log("");

  process.exit(total > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Errore durante l'audit:", err);
  process.exit(1);
});
