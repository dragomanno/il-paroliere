// Il Paroliere — Lemma: antitesi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const antitesi: LemmaEntry = {
  lemma: "antitesi",
  slug: "antitesi",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In retorica, figura che accosta due concetti o immagini opposti per creare " +
    "effetto di contrasto — 'la guerra è pace, la libertà è schiavitù' (Orwell). In " +
    "dialettica hegeliana, l'antitesi è il secondo momento del movimento logico: la " +
    "negazione determinata della tesi, che non la annulla, ma la supera portandola " +
    "verso la sintesi. Nell'uso comune indica semplicemente il contrario assoluto di " +
    "qualcosa.",

  shortDefinition:
    "Figura retorica del contrasto; in dialettica, la negazione che prepara la " +
    "sintesi; nel parlato, il contrario assoluto.",

  register: ["tecnico", "letterario"],
  domains: ["retorica", "filosofia", "letteratura"],

  etymology:
    "Dal greco antíthesis — antí (contro) + thésis (posizione, affermazione): " +
    "letteralmente 'contro-posizione'. Il termine arriva all'italiano attraverso il " +
    "latino retorico e poi la filosofia tedesca dell'Ottocento.",

  examples: [
  ],

  synonyms: [
    { term: "contrasto", register: "comune", context: "più generico, non implica la struttura retorica formale" },
    { term: "opposizione", register: "comune", context: "enfatizza il conflitto, non necessariamente la figura" },
    { term: "ossimoro", register: "tecnico", context: "contrasto compresso in una sola espressione, più radicale" }
  ],

  antonyms: [
    { term: "tesi", register: "tecnico", context: "la proposizione che l'antitesi nega nella dialettica" },
    { term: "sintesi", register: "tecnico", context: "il terzo momento che supera tesi e antitesi" }
  ],

  relatedWords: [
    "tesi",
    "sintesi"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/antitesi"
  },

  paroliereNote:
    "L'antitesi è lo strumento retorico della tensione: funziona perché il cervello " +
    "umano è attratto dai contrari, li elabora come coppia significante. Dalla " +
    "retorica classica al branding contemporaneo — 'Think different' di Apple è " +
    "un'antitesi condensata — la figura sopravvive perché la mente umana pensa per " +
    "opposti prima che per gradazioni.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Antitesi — Il Paroliere",
    description:
      "Antitesi: figura retorica del contrasto e momento dialettico. Retorica, " +
      "filosofia, uso comune — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};