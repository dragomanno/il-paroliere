// Il Paroliere — Lemma: effervescente
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const effervescente: LemmaEntry = {
  lemma: "effervescente",
  slug: "effervescente",
  partOfSpeech: "aggettivo",

  definition:
    "In chimica, detto di un liquido che sviluppa e rilascia bollicine di gas. " +
    "Per estensione — e nell'uso comune è questo il senso più frequente — si " +
    "dice di persona o ambiente capace di irradiare energia e movimento: chi " +
    "è effervescente entra in un posto e lo cambia, spesso senza accorgersene.",

  shortDefinition:
    "In chimica, liquido che produce bollicine; nel parlato comune, persona o ambiente carico di energia viva e comunicativa.",

  register: ["comune"],
  domains: ["carattere", "stile"],

  examples: [
    "Era effervescente in modo quasi stancante: ogni conversazione diventava un progetto.",
    "L'ambiente della startup era effervescente, caotico, pieno di idee che si sovrapponevano.",
    "L'acqua effervescente e il carattere effervescente condividono la stessa immagine: qualcosa che non sta fermo.",
  ],

  synonyms: [
    {
      term: "vivace",
      register: "comune",
      context: "più generico, meno intenso",
    },
    {
      term: "esuberante",
      register: "comune",
      context: "con sfumatura di eccesso che effervescente non ha necessariamente",
    },
    {
      term: "frizzante",
      register: "comune",
      context: "stessa radice metaforica delle bollicine, più leggero",
    },
  ],

  antonyms: [
    {
      term: "apatico",
      register: "comune",
      context: "privo di energia e reazione",
    },
    {
      term: "flemmatico",
      register: "comune",
      context: "calmo al punto da sembrare indifferente",
    },
  ],

  relatedWords: [
    "effervescenza",
    "vivace",
    "frizzante",
    "esuberante",
    "dinamico",
    "energia",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/effervescente",
  },

  paroliereNote:
    "Effervescente è una di quelle parole che funzionano per trasferimento " +
    "sensoriale: le bollicine che salgono in un bicchiere diventano la metafora " +
    "di un'energia che non riesce a stare ferma. Il meccanismo è così diretto " +
    "che la parola non ha mai perso vitalità — né nella chimica né nel parlato " +
    "comune.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Effervescente — Il Paroliere",
    description:
      "Definizione originale di 'effervescente': dalla chimica al carattere, " +
      "energia che non sta ferma. Con esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
