// Il Paroliere — Lemma: aliquota
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const aliquota: LemmaEntry = {
  lemma: "aliquota",
  slug: "aliquota",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition: "Percentuale che, applicata alla base imponibile, stabilisce l'importo di un'imposta: con un'aliquota del 23% su 10.000 euro di imponibile, l'imposta è di 2.300 euro. Nei sistemi progressivi si distingue l'aliquota marginale, che colpisce l'ultimo euro guadagnato, dall'aliquota media, cioè il rapporto tra imposta pagata e reddito, che non supera mai la marginale. In aritmetica, «parte aliquota» indica invece un divisore di un numero diverso dal numero stesso.",
  shortDefinition: "Percentuale che, applicata alla base imponibile, stabilisce quanto si paga di imposta.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "matematica",
  ],
  etymology: "Nasce dall'accorciamento di «parte aliquota», espressione dei matematici costruita sul latino aliquot «alcuni, un certo numero»: in origine la parte contenuta un numero esatto di volte in un intero, poi la quota proporzionale dovuta al fisco. L'accento cade sulla seconda sillaba: alìquota.",
  examples: [
    "Dal 2026 l'aliquota IRPEF sul secondo scaglione è scesa dal 35 al 33%.",
    "Hai guadagnato qualcosa in più, ma non preoccuparti: l'aliquota più alta si applica solo alla parte che supera la soglia, non a tutto il reddito.",
    "Ogni regione può ritoccare, entro i limiti fissati dalla legge, l'aliquota dell'IRAP.",
    "Un'aliquota marginale del 43% fa impressione, ma l'aliquota media di quel contribuente è molto più bassa.",
  ],
  synonyms: [
    {
      term: "tasso d'imposta",
      register: "tecnico",
      context: "formulazione descrittiva, frequente nella letteratura economica",
    },
    {
      term: "percentuale",
      register: "comune",
      context: "generico, senza il riferimento fiscale",
    },
  ],
  antonyms: [],
  relatedWords: [
    "scaglione",
    "imponibile",
    "progressivita",
    "flat-tax",
    "irpef",
    "irap",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/aliquota/",
    wiktionary: "https://it.wiktionary.org/wiki/aliquota",
  },
  paroliereNote: "Aliquota è una delle parole fiscali pronunciate più spesso con l'accento sbagliato: si dice alìquota, non aliquòta. L'equivoco più costoso, però, non è di pronuncia: è credere che passare allo scaglione successivo faccia pagare l'aliquota più alta su tutto il reddito. In un sistema a scaglioni l'aliquota superiore colpisce solo la parte che eccede la soglia. Nessun aumento lordo può diventare un netto più basso per effetto delle sole aliquote.",
  seo: {
    title: "Aliquota — significato, aliquota marginale e media | Il Paroliere",
    description: "Che cos'è l'aliquota: la percentuale che trasforma l'imponibile in imposta. Differenza tra aliquota marginale e media, etimologia e pronuncia corretta.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
