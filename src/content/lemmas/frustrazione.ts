// Il Paroliere — Lemma: frustrazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const frustrazione: LemmaEntry = {
  lemma: "frustrazione",
  slug: "frustrazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico"],
  domains: ["psicologia", "relazioni", "vita quotidiana"],

  definition:
    "Stato di tensione, irritazione o scoraggiamento che nasce quando un desiderio, un bisogno o un progetto incontra un ostacolo e non trova sbocco. Può restare una reazione momentanea oppure accumularsi, alterando il modo in cui si guarda a sé, agli altri e alle possibilità future.",

  shortDefinition:
    "Tensione e scoraggiamento che nascono quando un desiderio o un progetto restano ostacolati.",

  etymology:
    "Dal latino frustratio, «delusione», derivato di frustrare. Nell'uso contemporaneo conserva l'idea di un'attesa resa vana o di un'azione rimasta senza esito.",

  examples: [
    "Dopo mesi di candidature senza risposta, la frustrazione le rendeva difficile aprire anche solo un'altra pagina di annunci.",
    "La riunione è finita con molta frustrazione: tutti avevano parlato, ma nessuno aveva deciso nulla.",
    "Ha trasformato la frustrazione per il rifiuto in un allenamento più paziente, senza fingere che non facesse male.",
  ],

  synonyms: [
    {
      term: "delusione",
      register: "comune",
      note: "Indica soprattutto il disappunto per un esito atteso; può essere meno tesa e persistente della frustrazione.",
    },
    {
      term: "scoraggiamento",
      register: "comune",
      note: "Mette l'accento sul calo della fiducia e dell'iniziativa, più che sull'ostacolo subito.",
    },
    {
      term: "impotenza",
      register: "psicologico",
      note: "Riguarda la percezione di non poter incidere sulla situazione; può essere una componente della frustrazione.",
    },
  ],

  antonyms: [
    {
      term: "soddisfazione",
      register: "comune",
      note: "Nasce dal compimento di un bisogno o dal buon esito di un'azione.",
    },
    {
      term: "appagamento",
      register: "comune",
      note: "Suggerisce una pienezza più stabile, non soltanto il sollievo immediato.",
    },
  ],

  relatedWords: [
    "desiderio",
    "aspirazione",
    "speranza",
    "attesa",
    "rassegnazione",
    "accettazione",
    "relazione",
    "dipendenza",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/frustrazione",
  },

  paroliereNote:
    "La frustrazione è il punto in cui la spinta di → desiderio, → aspirazione o → attesa urta contro un limite. Può aprire una ricerca diversa, ma se si prolunga può scivolare verso → rassegnazione; → accettazione, invece, non consiste nel negarla, bensì nel capire che cosa è possibile cambiare e che cosa no.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Frustrazione — definizione, sinonimi, uso | Il Paroliere",
    description:
      "Che cos'è la frustrazione: tensione e scoraggiamento davanti a un ostacolo. Definizione originale, sinonimi, esempi, differenza da rassegnazione e accettazione.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
