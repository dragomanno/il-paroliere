// Il Paroliere — Lemma: forfettario
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const forfettario: LemmaEntry = {
  lemma: "forfettario",
  slug: "forfettario",
  partOfSpeech: "aggettivo e sostantivo maschile",
  gender: "maschile",
  definition: "Come aggettivo, fissato in blocco con una cifra complessiva, senza calcolare le singole voci: un compenso forfettario, un rimborso forfettario. Nel fisco qualifica il regime per le partite IVA individuali con ricavi o compensi fino a 85.000 euro: il reddito si ottiene applicando ai ricavi un coefficiente fisso, con un'imposta sostitutiva del 15%, o del 5% per i primi cinque anni di attività. Come sostantivo, «i forfettari» sono i contribuenti in questo regime.",
  shortDefinition: "Fissato in blocco, con una cifra complessiva; nel fisco, il regime a imposta sostitutiva per le piccole partite IVA.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "lavoro autonomo",
  ],
  etymology: "Viene dal francese forfaitaire, aggettivo tratto da forfait «prezzo stabilito in blocco», da cui la locuzione à forfait. In italiano convivono due grafie, forfettario e forfetario: la seconda è quella dei testi normativi, la prima è la più vicina alla pronuncia corrente.",
  examples: [
    "Per la trasferta l'azienda riconosce un rimborso forfettario di 50 euro al giorno, senza ricevute.",
    "Al primo anno di attività, nel regime forfettario, l'imposta sostitutiva è del 5%.",
    "I forfettari non applicano l'IVA in fattura e non subiscono la ritenuta d'acconto.",
  ],
  synonyms: [
    {
      term: "forfetario",
      register: "tecnico-fiscale",
      context: "variante grafica dei testi normativi e dell'Agenzia delle Entrate",
    },
    {
      term: "a forfait",
      register: "comune",
      context: "locuzione francese, d'uso più generale",
    },
    {
      term: "a corpo",
      register: "tecnico",
      context: "nei contratti d'appalto, prezzo fissato per l'opera intera",
    },
  ],
  antonyms: [
    {
      term: "analitico",
      register: "tecnico-fiscale",
      context: "calcolato voce per voce, come nel regime ordinario",
    },
  ],
  relatedWords: [
    "regime-fiscale",
    "flat-tax",
    "partita-iva",
    "ritenuta-dacconto",
    "aliquota",
    "iva",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/forfetario/",
    wiktionary: "https://it.wiktionary.org/wiki/forfetario",
  },
  paroliereNote: "Forfettario o forfetario? I dizionari registrano entrambe le forme, le leggi preferiscono la seconda, il Paroliere sceglie la prima, che rispecchia la pronuncia con la doppia diffusa nell'uso. Più interessante è il senso: il regime forfettario rinuncia a calcolare le spese reali e le stima in blocco. Per questo conviene a chi ha costi bassi e penalizza chi ne ha di alti, al di là dell'aliquota.",
  seo: {
    title: "Forfettario — significato, regime forfettario | Il Paroliere",
    description: "Che cosa significa forfettario: fissato in blocco, con una cifra complessiva. Il regime per le partite IVA fino a 85.000 euro, con imposta al 15% o al 5%.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
