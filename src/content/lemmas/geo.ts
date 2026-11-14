// Il Paroliere — Lemma: GEO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const geo: LemmaEntry = {
  lemma: "GEO",
  slug: "geo",
  partOfSpeech: "sostantivo femminile (sigla)",
  gender: "femminile",
  definition: "Insieme delle pratiche con cui si cerca di rendere un contenuto visibile, citato e rappresentato correttamente nelle risposte dei motori di ricerca generativi e degli assistenti basati su modelli linguistici. Dove la SEO punta alla posizione di una pagina fra i risultati, la GEO punta a far scegliere il contenuto come fonte di una risposta già scritta. La sigla sta per l'inglese generative engine optimization.",
  shortDefinition: "Pratiche per rendere un contenuto citato e ben rappresentato nelle risposte dei motori di ricerca generativi.",
  register: [
    "tecnico",
    "neologismo",
  ],
  domains: [
    "SEO",
    "marketing digitale",
    "intelligenza artificiale",
  ],
  etymology: "Acronimo dell'inglese generative engine optimization, «ottimizzazione per i motori generativi», costruito sul modello di SEO. È stato proposto in un articolo di Pranjal Aggarwal e colleghi, fra Princeton e altri centri di ricerca, pubblicato su arXiv nel novembre 2023.",
  examples: [
    "Con la GEO non basta essere primi su Google: bisogna essere la fonte che l'assistente sceglie di citare.",
    "Il lavoro di GEO è partito da una domanda semplice: che cosa rispondono i motori generativi quando qualcuno chiede del nostro prodotto?",
    "Molti consigli di GEO sono buona SEO con un nome nuovo: testi chiari, fonti citate, dati verificabili.",
  ],
  synonyms: [
    {
      term: "AEO",
      register: "tecnico",
      context: "answer engine optimization",
      note: "Sigla concorrente, con l'accento sulle risposte dirette.",
    },
    {
      term: "ottimizzazione per i motori generativi",
      register: "tecnico",
      context: "resa italiana descrittiva",
    },
    {
      term: "AI SEO",
      register: "gergale",
      context: "formula commerciale generica",
    },
  ],
  antonyms: [],
  relatedWords: [
    "seo",
    "llm",
    "rag",
    "search-intent",
    "ranking",
    "keyword",
    "e-e-a-t",
    "autorevolezza",
    "knowledge-graph",
    "allucinazione-ai",
    "modello-linguistico",
  ],
  sourceLinks: {},
  paroliereNote: "Sigla giovane e ancora contesa con AEO e altre formule. Il cambiamento che descrive è reale: quando la risposta arriva già scritta, spesso nessuno clicca, e la visibilità si misura in citazioni più che in visite. Molto di ciò che funziona coincide con la buona → SEO, perché i sistemi generativi recuperano le fonti attraverso i motori di ricerca (→ RAG) e premiano chiarezza, struttura e → autorevolezza. Attenzione all'omografo: in astronautica GEO è l'orbita geostazionaria, e geo- è il prefisso della terra; il contesto, di solito, scioglie ogni dubbio.",
  seo: {
    title: "GEO — significato di generative engine optimization | Il Paroliere",
    description: "Che cos'è la GEO: le pratiche per farsi citare dai motori di ricerca generativi. Origine della sigla, differenza con SEO e AEO, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
