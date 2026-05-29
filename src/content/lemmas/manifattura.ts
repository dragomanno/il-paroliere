// Il Paroliere — Lemma: manifattura
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const manifattura: LemmaEntry = {
  lemma: "manifattura",
  slug: "manifattura",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Processo di trasformazione di materie prime in prodotti finiti attraverso il " +
    "lavoro — originariamente a mano, poi con l'ausilio di macchine. In senso storico " +
    "designa anche le grandi fabbriche dei secoli XVII–XIX, come le Manifatture Reali " +
    "istituite dalle monarchie europee. Oggi, nel linguaggio economico, indica il " +
    "complesso delle attività produttive che generano beni tangibili, spesso " +
    "contrapposto al settore dei servizi.",

  shortDefinition:
    "Produzione di beni attraverso il lavoro umano e industriale; in senso storico, " +
    "la grande fabbrica dei secoli moderni.",

  register: ["comune", "tecnico"],
  domains: ["economia", "storia"],

  etymology:
    "Dal francese manufacture, a sua volta dal latino medievale manu factura: fatto a " +
    "mano. Il termine entra in italiano nel XVII secolo con le prime grandi " +
    "manifatture statali europee.",

  synonyms: [
    { term: "produzione", register: "comune", context: "più ampio, include anche servizi e produzione digitale" },
    { term: "fabbrica", register: "comune", context: "si riferisce al luogo fisico della produzione industriale" },
    { term: "industria", register: "comune", context: "il sistema produttivo nel suo complesso, non il singolo stabilimento" },
    { term: "artigianato", register: "comune", context: "produzione a mano in piccola scala, il precursore storico della manifattura" }
  ],

  antonyms: [
    { term: "servizi", register: "tecnico", context: "il settore dell'economia che non produce beni fisici" },
    { term: "estrazione", register: "tecnico", context: "l'industria primaria che preleva risorse senza trasformarle significativamente" }
  ],

  relatedWords: [
    "manifatturiero",
    "industria",
    "produzione",
    "fabbrica",
    "artigianato",
    "filiera",
    "lavorazione"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/manifattura"
  },

  paroliereNote:
    "Le Manifatture Reali — da quelle dei Gobelins a Parigi alle Manifatture Toscane " +
    "dei Medici — furono tra i primi esempi di impresa di Stato: produzione " +
    "centralizzata, controllo della qualità, marchio di origine. L'idea che un " +
    "oggetto fatto con cura e con metodo possa diventare simbolo di un'identità " +
    "nazionale è nata lì. Non è un caso che la parola manifattura sopravviva oggi nel " +
    "lessico del lusso e del made in Italy come garanzia di qualità, oltre che come " +
    "categoria economica.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "Manifattura — Il Paroliere",
    description:
      "Produzione di beni attraverso il lavoro umano e industriale; in senso storico, " +
      "la grande fabbrica dei secoli moderni.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};