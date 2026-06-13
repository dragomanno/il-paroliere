// Il Paroliere — Lemma: celestiale
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const celestiale: LemmaEntry = {
  lemma: "celestiale",
  slug: "celestiale",
  partOfSpeech: "aggettivo",
  gender: "maschile",
  register: ["letterario", "comune"],
  domains: ["estetica", "teologia", "musica", "letteratura"],

  definition:
    "Che appartiene al cielo o che ne ha la qualità — sia in senso astronomico (i corpi " +
    "celesti) sia in senso teologico (la sfera del divino) sia in senso estetico (una " +
    "bellezza, una voce, un colore che trascende la normalità e produce una sensazione " +
    "di elevazione). Nell’uso contemporaneo, l’iperbole si è consumata: “celestiale” si " +
    "usa spesso come superlativo di “bello”, perdendo la sfumatura di trascendenza.",

  shortDefinition:
    "Del cielo o di qualità celeste; bello al punto da sembrare appartenere a una sfera superiore.",

  etymology:
    "Dal latino caelestis, da caelum “cielo”, di etimologia incerta. La stessa radice di " +
    "“celeste”, “celebrare” (in origine: glorificare il cielo), e forse di “celere” " +
    "(rapido, come il moto celeste).",

  examples: [
    "La voce del controtenore aveva una qualità celestiale nel senso preciso: sembrava provenire da un registro che la fisicità umana non dovrebbe poter raggiungere.",
    "Dante usa celestiale come categoria tecnica, non come iperbole: il terzo cielo, la luce angelica, la musica delle sfere hanno una qualità altra rispetto alla materia terrestre.",
    "Oggi diciamo 'questa torta è celestiale' e non pensiamo al cielo: l’iperbole si è svuotata, ma il desiderio di elevarsi che esprime è rimasto intatto.",
    "Il blu celestiale non è un colore preciso: è la categoria cromatica di tutto ciò che il cielo può essere — dall’alba al crepuscolo, dalla trasparenza alla profondità.",
  ],

  synonyms: [
    { term: "divino", register: "letterario-comune", note: "Più forte teologicamente; celestiale enfatizza la qualità del cielo più che l’essenza del divino." },
    { term: "sublime", register: "estetico-filosofico", note: "Categoria estetica precisa che include grandezza e timore; celestiale è più luminoso e meno terrificante." },
  ],

  antonyms: [
    { term: "terreno", register: "comune-letterario", note: "Ciò che appartiene alla terra, al limite fisico, al peso della materia." },
    { term: "mondano", register: "comune", note: "Ciò che appartiene al mondo nelle sue forme più ordinarie e non elevate." },
  ],

  relatedWords: ["ineffabile", "diafano", "armonia", "grazia"],

  paroliereNote:
    "Celestiale è una parola che ha fatto molta strada dalla teologia dantesca alla " +
    "descrizione di un tiramiSù. Non è un impoverimento: è la dimostrazione che il " +
    "desiderio di elevazione è talmente radicato nell’esperienza umana da cercare sbocchi " +
    "anche nel quotidiano. Chi dice 'questo è celestiale' di un dolce non mente — sta " +
    "dicendo che quella torta, per un momento, ha tolto il peso.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "celestiale — significato, etimologia e uso estetico del termine",
    description: "Celestiale: dalla teologia medievale all’iperbole contemporanea. Come una parola del cielo è atterrata nel linguaggio comune.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
