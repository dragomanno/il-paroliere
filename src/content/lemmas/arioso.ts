// Il Paroliere — Lemma: arioso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const arioso: LemmaEntry = {
  lemma: "arioso",
  slug: "arioso",
  partOfSpeech: "aggettivo",

  definition:
    "Che dà sensazione di aria, di spazio, di leggerezza; ben ventilato, aperto, " +
    "privo di oppressione fisica o visiva. Detto di spazio fisico — una stanza, un " +
    "ambiente, un paesaggio — arioso indica la presenza di luce, apertura e circolazione " +
    "dell'aria che producono una sensazione di benessere e libertà. Esteso all'estetica, " +
    "descrive composizioni — musicali, pittoriche, letterarie — in cui c'è respiro tra " +
    "gli elementi, dove lo spazio non è riempito compulsivamente ma lasciato vivere come " +
    "parte del tutto. In musica, arioso è anche un termine tecnico che indica uno stile " +
    "di canto a metà tra il recitativo e l'aria: più melodico del recitativo, meno " +
    "strutturato dell'aria vera e propria.",

  shortDefinition:
    "Che dà sensazione di aria e spazio aperto; in estetica, composizione o stile " +
    "che lascia «respirare» gli elementi; in musica, stile di canto tra recitativo e aria.",

  register: ["comune", "letterario", "estetico"],
  domains: ["estetica", "architettura", "musica", "letteratura"],

  etymology:
    "Da aria (dal latino aer, dal greco aēr, «aria, atmosfera») + suffisso aggettivale " +
    "-oso («pieno di, che ha la qualità di»): letteralmente «pieno di aria, che respira».",

  examples: [
    "«L'appartamento era piccolo ma arioso: soffitti alti, finestre grandi, niente arredi inutili.»",
    "«La composizione era ariosa nel senso migliore: ogni strumento aveva il suo spazio, nessuno soffocava l'altro.»",
    "«Quel tipo di scrittura ariosa, dove le frasi brevi si alternano ai silenzi, era molto più difficile da ottenere di quanto sembrasse.»",
  ],

  synonyms: [
    {
      term: "ventilato",
      register: ["comune"],
      context: "con buona circolazione d'aria",
    },
    {
      term: "luminoso",
      register: ["comune"],
      context: "pieno di luce e apertura",
    },
    {
      term: "spazioso",
      register: ["comune"],
      context: "ampio, non oppressivo",
    },
    {
      term: "etereo",
      register: ["estetico"],
      context: "più metafisico e impalpabile di arioso",
    },
  ],

  antonyms: [
    {
      term: "soffocante",
      register: ["comune"],
      context: "privo di aria e spazio",
    },
    {
      term: "claustrofobico",
      register: ["comune"],
      context: "oppressivo per mancanza di spazio",
    },
    {
      term: "ridondante",
      register: ["estetico"],
      context: "in estetica: troppo pieno, senza respiro",
    },
    {
      term: "denso",
      register: ["estetico"],
      context: "compresso, senza spazio tra gli elementi",
    },
  ],

  relatedWords: [
    "etereo",
    "anelare",
    "spazio",
    "leggerezza",
    "respiro",
    "musica barocca",
    "recitativo",
    "aria",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/arioso/",
    wiktionary: "https://it.wiktionary.org/wiki/arioso",
  },

  paroliereNote:
    "Arioso ed → etereo sono parole che abitano lo stesso campo semantico della " +
    "leggerezza e della rarefazione, ma con accenti diversi: arioso è più fisico, più " +
    "architettonico, più legato alla presenza concreta dell'aria e dello spazio; etereo " +
    "è più metafisico, più poetico, più vicino all'impalpabile. Un ambiente può essere " +
    "arioso senza essere etereo; una bellezza può essere eterea senza essere ariosa. " +
    "La differenza è tra il respiro dello spazio fisico e la levità quasi spirituale " +
    "della presenza.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Arioso — definizione estetica, architettonica, musicale | Il Paroliere",
    description:
      "Cosa significa arioso in architettura, musica e estetica. Differenza da etereo. " +
      "Leggerezza e respiro dello spazio. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
