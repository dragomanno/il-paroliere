/**
 * Il Paroliere — /api/search Edge Route
 *
 * Phase 5: FTS endpoint used by SearchBar.
 *
 * GET /api/search?q=resilienza
 *   → { hits: SearchableEntry[], query: string }
 *
 * SearchableEntry is a lightweight projection of LemmaEntry —
 * only the fields needed by the dropdown UI.
 *
 * Edge runtime: low latency, runs close to the user on Netlify Edge.
 *
 * License: MIT
 */

import { NextRequest, NextResponse } from "next/server";
import { searchLemmasFromDB } from "@/lib/db/queries";

export const runtime = "edge";

export type SearchHit = {
  slug: string;
  lemma: string;
  shortDefinition: string;
  partOfSpeech: string;
  register: string[];
  domains: string[];
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") ?? "").trim();

  if (q.length < 2) {
    return NextResponse.json({ hits: [], query: q });
  }

  try {
    const results = await searchLemmasFromDB(q, 8);

    const hits: SearchHit[] = results.map((entry) => ({
      slug: entry.slug,
      lemma: entry.lemma,
      shortDefinition: entry.shortDefinition,
      partOfSpeech: entry.partOfSpeech ?? "",
      register: entry.register ?? [],
      domains: entry.domains ?? [],
    }));

    return NextResponse.json(
      { hits, query: q },
      {
        headers: {
          // Cache for 60s on CDN — search results are stable enough
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (err) {
    console.error("[/api/search] error:", err);
    return NextResponse.json(
      { hits: [], query: q, error: "search_unavailable" },
      { status: 500 }
    );
  }
}
