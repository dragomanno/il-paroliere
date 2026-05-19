// Il Paroliere — Lemma: status code
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const statusCode: LemmaEntry = {
  lemma: "status code",
  slug: "status-code",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Codice numerico a tre cifre che un server HTTP restituisce in risposta " +
    "a ogni richiesta, segnalando l'esito dell'operazione. Le classi " +
    "principali: 2xx indica successo, 3xx un reindirizzamento, 4xx un errore " +
    "lato client, 5xx un errore lato server. Per la SEO i codici più rilevanti " +
    "sono 200 (pagina raggiungibile), 301 (redirect permanente), 404 (risorsa " +
    "non trovata) e 410 (rimossa definitivamente).",

  shortDefinition:
    "Codice a tre cifre restituito dal server per indicare l'esito di una richiesta HTTP — da 200 OK a 500 errore server.",

  register: ["tecnico"],
  domains: ["SEO", "HTTP", "sviluppo web"],

  examples: [
    "Il Crawl Stats di Google Search Console mostrava centinaia di status code 404 su URL mai esistiti.",
    "La differenza tra un 404 e un 410 sembra sottile, ma per Google il 410 accelera la rimozione dall'indice.",
    "Un sito che restituisce 200 su pagine inesistenti — il soft 404 — è invisibile ai browser ma devastante per la SEO.",
  ],

  synonyms: [
    {
      term: "codice di stato HTTP",
      register: "tecnico",
      context: "traduzione formale, usata in documentazione tecnica",
    },
    {
      term: "codice di risposta",
      register: "comune",
      context: "formulazione generica, meno precisa",
    },
  ],

  relatedWords: [
    "200",
    "301",
    "302",
    "404",
    "410",
    "500",
    "soft 404",
    "redirect",
    "crawl budget",
    "HTTP",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/HTTP",
  },

  paroliereNote:
    "Gli status code sono il sistema nervoso silenzioso del web: ogni pagina " +
    "aperta, ogni immagine caricata, ogni link seguito genera una risposta con " +
    "il suo codice. Gli utenti non li vedono quasi mai. I motori di ricerca li " +
    "leggono sempre. Capire la differenza tra un 404 e un 410, o tra un 301 e " +
    "un 302, è la base del lavoro tecnico SEO.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Status code — Il Paroliere",
    description:
      "Definizione originale di 'status code': i codici HTTP che il server restituisce " +
      "per ogni richiesta. Con le classi 2xx/3xx/4xx/5xx, esempi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
