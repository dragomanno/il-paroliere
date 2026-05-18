// Il Paroliere — Core type definitions
// License: MIT

export type LemmaEntry = {
  /** Canonical lexical form. E.g. "resilienza" */
  lemma: string;

  /** URL-friendly version. E.g. "resilienza" — used for /parola/[lemma] */
  slug: string;

  /** Grammatical category. E.g. "sostantivo", "verbo", "aggettivo" */
  partOfSpeech: string;

  /** Optional grammatical gender. E.g. "maschile", "femminile", "invariabile" */
  gender?: string;

  /**
   * Primary original definition written specifically for Il Paroliere.
   * IMPORTANT: must never contain copied proprietary definitions.
   */
  definition: string;

  /**
   * Compact definition for search previews, cards, metadata and snippets.
   * Max ~140 characters.
   */
  shortDefinition: string;

  /**
   * Usage register labels.
   * E.g. ["comune"], ["letterario", "formale"], ["colloquiale"], ["tecnico"]
   */
  register: string[];

  /**
   * Semantic or disciplinary domains.
   * E.g. ["informatica"], ["psicologia", "società"]
   */
  domains: string[];

  /** Short etymological note. Must remain concise and editorially verified. */
  etymology?: string;

  /**
   * Original example sentences.
   * Rules: natural Italian, useful usage context, no copied examples from
   * proprietary dictionaries.
   */
  examples: string[];

  /** Structured synonyms — supports register labels and contextual nuances. */
  synonyms?: {
    term: string;
    register?: string;
    context?: string;
    note?: string;
  }[];

  /** Structured antonyms — same editorial principles as synonyms. */
  antonyms?: {
    term: string;
    register?: string;
    context?: string;
    note?: string;
  }[];

  /** Related lexical concepts — may later support semantic graphs. */
  relatedWords?: string[];

  /**
   * External authoritative dictionary links.
   * Links are allowed — proprietary definitions must NOT be copied.
   */
  sourceLinks: {
    treccani?: string;
    demauro?: string;
    sabatiniColetti?: string;
    devotoOli?: string;
    wiktionary?: string;
  };

  /**
   * Editorial note written specifically for Il Paroliere.
   * Purpose: contextualisation, nuance, usage guidance, semantic commentary.
   */
  paroliereNote: string;

  /** Editorial workflow status */
  editorialStatus: "stub" | "draft" | "reviewed" | "published";

  /**
   * Controls search engine indexing.
   * Only editorially useful, human-reviewed entries should be indexable.
   */
  indexable: boolean;

  /** SEO metadata */
  seo: {
    title: string;
    description: string;
  };

  /** ISO 8601 creation date */
  createdAt?: string;

  /** ISO 8601 last editorial update */
  updatedAt?: string;
};
