/**
 * Il Paroliere — Lemma registry (Phase 4: DB-backed)
 *
 * All reads now go through the Netlify DB (Neon) layer.
 * The file-based imports have been removed; the TS source files
 * in this directory remain as the authoritative seed source but
 * are no longer imported at runtime.
 *
 * License: MIT
 */

export {
  getLemmaFromDB as getLemma,
  getAllSlugsFromDB as getAllSlugs,
  getAllLemmasFromDB as getAllLemmas,
} from "@/lib/db";
