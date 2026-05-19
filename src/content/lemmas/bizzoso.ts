// Il Paroliere — Lemma: bizzoso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bizzoso: LemmaEntry = {
  lemma: "bizzoso",
  slug: "bizzoso",
  partOfSpeech: "aggettivo",

  definition:
    "Di persona dal carattere instabile, che passa dall'irritazione alla calma senza che nessuno abbia " +
    "capito bene perché. Non è cattiveria: è una specie di meteorologia interiore — una pressione bassa " +
    "che arriva, scuote tutto e se ne va. Chi è bizzoso si offende per cose minute e dimentica in fretta, " +
    "lasciando gli altri a chiedersi cosa sia successo.",

  shortDefinition:
    "Dal carattere imprevedibile e capriccioso, capace di irritarsi per nulla e calmarsi con la stessa velocità.",

  register: ["comune", "colloquiale"],
  domains: ["carattere", "comportamento"],

  etymology:
    "Da bizza, 'capriccio, collera improvvisa', di origine incerta — forse onomatopeica o connessa " +
    "all'antico tedesco bizzen (mordere). La stessa radice di imbizzire e bizzarria.",

  examples: [
    "Era bizzoso da sempre: bastava poco per irritarlo e altrettanto poco per farlo tornare di buon umore.",
    "Non prendertela — è bizzoso, ma non ha cattiveria.",
    "Il cavallo era bizzoso: si impennava senza preavviso e si calmava con la stessa imprevedibilità.",
    "Con i clienti bizzosi la strategia migliore è aspettare: la bizza passa da sola.",
  ],

  synonyms: [
    {
      term: "capriccioso",
      register: "comune",
      context: "che agisce per capriccio, senza logica prevedibile",
    },
    {
      term: "irascibile",
      register: "comune",
      context: "facilmente in collera, ma con sfumatura più duratura",
    },
    {
      term: "lunatico",
      register: "comune",
      context: "umore variabile come le fasi lunari, meno impulsivo del bizzoso",
    },
  ],

  antonyms: [
    {
      term: "equilibrato",
      register: "comune",
      context: "stabile nel carattere, non soggetto a sbalzi d'umore",
    },
    {
      term: "paziente",
      register: "comune",
      context: "che non si irrita facilmente, opposto diretto del bizzoso",
    },
  ],

  relatedWords: [
    "bizza",
    "bizzarria",
    "imbizzire",
    "capriccio",
    "sbalzo d'umore",
    "irascibile",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/bizzoso/",
    wiktionary: "https://it.wiktionary.org/wiki/bizzoso",
  },

  paroliereNote:
    "Bizzoso è una di quelle parole che dicono subito qualcosa di affettuoso pur descrivendo " +
    "un difetto. Non si usa per le persone pericolose o veramente cattive — per quelle ci sono " +
    "altre parole. Il bizzoso è fastidioso ma tollerabile, e il suo fascino sta proprio lì: " +
    "è il caratteraccio che si perdona, spesso anche con un sorriso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Bizzoso — Il Paroliere",
    description:
      "Definizione originale di 'bizzoso': carattere imprevedibile, capace di irritarsi per nulla e calmarsi in fretta. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
