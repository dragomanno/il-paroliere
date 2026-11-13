// Il Paroliere — Lemma: imposta
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const imposta: LemmaEntry = {
  lemma: "imposta",
  slug: "imposta",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition: "Tributo che lo Stato o un ente locale preleva in base alla ricchezza del contribuente, cioè al reddito che guadagna, al patrimonio che possiede o ai consumi che fa, senza dargli in cambio un servizio specifico. Il gettito finanzia la spesa pubblica nel suo insieme, dalla sanità alle strade. Si dice diretta quando colpisce reddito o patrimonio, come l'IRPEF, indiretta quando colpisce scambi e consumi, come l'IVA.",
  shortDefinition: "Tributo prelevato in base alla ricchezza di chi paga, cioè reddito, patrimonio o consumi, senza un servizio specifico in cambio.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "economia",
  ],
  etymology: "Participio passato femminile sostantivato di imporre, dal latino imponere «porre sopra»: è il peso che l'autorità mette sulle spalle del contribuente. Ha la stessa forma dell'imposta della finestra, anch'essa participio di imporre.",
  examples: [
    "L'imposta sul reddito si calcola per scaglioni, con aliquote che salgono insieme al reddito.",
    "Sulle sigarette gran parte del prezzo è fatta di imposte.",
    "Il governo ha annunciato un taglio delle imposte sul lavoro.",
  ],
  synonyms: [
    {
      term: "tributo",
      register: "tecnico-fiscale",
      context: "termine più generale, che comprende anche tasse e contributi",
    },
    {
      term: "tassa",
      register: "comune",
      context: "uso improprio, ma diffusissimo nel parlato",
    },
  ],
  antonyms: [
    {
      term: "esenzione",
      register: "tecnico-fiscale",
      context: "esonero dal pagamento previsto dalla legge",
    },
  ],
  relatedWords: [
    "tributo",
    "tassa",
    "iva",
    "irpef",
    "capacita-contributiva",
    "progressivita",
    "aliquota",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/imposta2/",
    wiktionary: "https://it.wiktionary.org/wiki/imposta",
  },
  paroliereNote: "L'articolo 53 della Costituzione dice che tutti sono tenuti a concorrere alle spese pubbliche «in ragione della loro capacità contributiva»: è la definizione più compatta di che cosa sia un'imposta. Per questo dire «tassa sul reddito» è un errore diffuso, ma comprensibile. Chi paga l'→ IRPEF non riceve nulla di preciso in cambio: è proprio questo che la rende un'imposta e non una → tassa.",
  seo: {
    title: "Imposta — significato, imposte dirette e indirette | Il Paroliere",
    description: "Che cos'è un'imposta: il tributo prelevato in base a reddito, patrimonio o consumi, senza un servizio in cambio. Dirette e indirette, con esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
