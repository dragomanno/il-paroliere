// Il Paroliere — Lemma: redirect
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const redirect: LemmaEntry = {
  lemma: "redirect",
  slug: "redirect",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Istruzione HTTP con cui un server invia browser e crawler da un URL a " +
    "un altro. Il tipo 301 — permanente — trasferisce il valore SEO all'URL " +
    "di destinazione; il 302 — temporaneo — non lo fa. Un redirect mal " +
    "configurato può disperdere autorità di pagina, generare catene di " +
    "reindirizzamento o loop che appesantiscono la scansione.",

  shortDefinition:
    "Istruzione del server che sposta browser e crawler da un URL a un altro; il tipo 301 trasferisce il valore SEO, il 302 no.",

  register: ["tecnico", "comune"],
  domains: ["SEO", "sviluppo web", "HTTP"],

  examples: [
    "Dopo la migrazione al nuovo dominio, furono configurati oltre duecento redirect 301.",
    "Un redirect 302 usato al posto del 301 durante una ristrutturazione può costare mesi di posizionamento.",
    "La catena di redirect — A verso B verso C — è uno degli errori più comuni nei siti rifatti più volte.",
  ],

  synonyms: [
    {
      term: "reindirizzamento",
      register: "comune",
      context: "traduzione italiana, usata spesso in contesti non tecnici",
    },
  ],

  relatedWords: [
    "301",
    "302",
    "308",
    "HTTP status code",
    "catena di redirect",
    "redirect loop",
    "migrazione SEO",
    "canonicalizzazione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/redirect",
  },

  paroliereNote:
    "Nel lavoro SEO, il redirect è uno degli strumenti più potenti e più " +
    "rischiosi. Usato bene, preserva anni di autorità accumulata su un URL " +
    "che scompare. Usato male — o dimenticato — disperde tutto in silenzio, " +
    "senza messaggi di errore, senza avvisi. Il traffico cala e nessuno " +
    "capisce subito perché.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Redirect — Il Paroliere",
    description:
      "Definizione originale di 'redirect': l'istruzione HTTP che sposta browser " +
      "e crawler tra URL. Con la differenza 301/302, esempi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
