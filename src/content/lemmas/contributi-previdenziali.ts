// Il Paroliere — Lemma: contributi previdenziali
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const contributiPrevidenziali: LemmaEntry = {
  lemma: "contributi previdenziali",
  slug: "contributi-previdenziali",
  partOfSpeech: "locuzione sostantivale plurale",
  gender: "maschile",
  definition: "Somme che lavoratori e datori di lavoro versano per legge a un ente previdenziale, come l'INPS o una cassa professionale, per finanziare pensioni e altre prestazioni, dall'invalidità ai trattamenti per i superstiti. Per un dipendente del settore privato l'aliquota per la pensione è del 33% della retribuzione imponibile, divisa tra datore e lavoratore, con la parte maggiore a carico del datore. A differenza delle imposte, danno diritto a una prestazione futura e si deducono dal reddito.",
  shortDefinition: "Somme versate per legge a un ente previdenziale per finanziare pensioni e altre prestazioni.",
  register: [
    "tecnico-previdenziale",
    "comune",
  ],
  domains: [
    "previdenza",
    "lavoro",
    "fisco",
  ],
  etymology: "Contributo viene dal latino contributum, participio di contribuere «mettere insieme, versare la propria parte». Previdenziale deriva da previdenza, dal latino praevidentia «capacità di vedere prima», da praevidere: il contributo è una parte di oggi messa da parte per domani.",
  examples: [
    "In busta paga i contributi previdenziali a carico del lavoratore vengono trattenuti ogni mese.",
    "Con la partita IVA i contributi previdenziali si pagano da sé e spesso sono la voce più pesante dell'anno.",
    "Per raggiungere la pensione di vecchiaia servono almeno vent'anni di contributi previdenziali.",
  ],
  synonyms: [
    {
      term: "contributi",
      register: "comune",
      context: "forma abbreviata d'uso corrente",
    },
    {
      term: "oneri previdenziali",
      register: "tecnico-previdenziale",
      context: "spec. dal punto di vista del costo del lavoro per l'impresa",
    },
  ],
  antonyms: [],
  relatedWords: [
    "fondo-pensione",
    "reddito-lordo",
    "reddito-imponibile",
    "partita-iva",
    "sostituto-dimposta",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/contributo/",
    wiktionary: "https://it.wiktionary.org/wiki/contributo",
  },
  paroliereNote: "Contributi e imposte escono dalla stessa busta paga, ma non sono la stessa cosa. L'imposta finanzia la spesa pubblica senza promettere nulla in cambio a chi la paga; il contributo, invece, costruisce una posizione personale, che un giorno tornerà indietro sotto forma di pensione. Per questo la legge li tratta in modo diverso: i contributi obbligatori si sottraggono dal reddito prima di calcolare l'IRPEF.",
  seo: {
    title: "Contributi previdenziali — significato, INPS, esempi | Il Paroliere",
    description: "Che cosa sono i contributi previdenziali: le somme versate per legge all'INPS o a una cassa per le pensioni. Aliquota del 33% e differenza con le imposte.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
