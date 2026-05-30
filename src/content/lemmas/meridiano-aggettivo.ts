// Il Paroliere — Lemma: meridiano
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const meridiano_aggettivo: LemmaEntry = {
  lemma: "meridiano",
  slug: "meridiano-aggettivo",
  partOfSpeech: "aggettivo",
  gender: "maschile/femminile",

  definition:
    "Che appartiene al mezzogiorno, all'ora o alla luce del meriggio. In senso " +
    "letterario evoca la qualità dell'istante centrale del giorno — nitido, " +
    "verticale, senza ombra. In ambito tecnico-geografico si riferisce alla linea " +
    "mediana o al piano che passa per i poli e per un dato punto della superficie " +
    "terrestre.",

  shortDefinition:
    "Del mezzogiorno o della linea mediana; in senso letterario, nitido e verticale " +
    "come la luce di meriggio.",

  register: ["comune", "letterario"],
  domains: ["astronomia", "geografia", "letteratura"],

  etymology:
    "Dal latino meridianus, derivato di meridies — composto di medius (mezzo) e dies " +
    "(giorno): letteralmente il mezzo del giorno. Il termine conserva intatta la sua " +
    "radice nel sostantivo meridiano e nel nome geografico Mediterraneo.",

  examples: [
  ],

  synonyms: [
    { term: "zenitale", register: "tecnico", context: "riferito al punto più alto del sole" },
    { term: "australe", register: "tecnico", context: "in senso geografico, del sud" }
  ],

  antonyms: [
    { term: "settentrionale", register: "comune", context: "del nord, opposto geografico" },
    { term: "notturno", register: "comune", context: "antonimo temporale nell'uso letterario" }
  ],

  relatedWords: [
    "meridiano-sostantivo",
    "levante"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/meridiano"
  },

  paroliereNote:
    "La luce meridiana è, per molti poeti italiani, la luce della chiarezza assoluta " +
    "— quella che non lascia ombre né ambiguità. Eugenio Montale ne ha fatto un " +
    "topos: il meriggio come momento di sospensione e rivelazione. L'aggettivo porta " +
    "con sé tutta questa densità quando non è ridotto a mero termine tecnico.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Meridiano (aggettivo) — Il Paroliere",
    description:
      "Meridiano come aggettivo: del mezzogiorno, della luce di meriggio. Uso " +
      "letterario e geografico — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};