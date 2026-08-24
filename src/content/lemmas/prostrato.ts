// Il Paroliere — Lemma: prostrato
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const prostrato: LemmaEntry = {
  lemma: "prostrato",
  slug: "prostrato",
  partOfSpeech: "aggettivo e participio passato",
  register: ["comune", "formale", "letterario"],
  domains: ["salute", "psicologia", "religione"],

  definition:
    "Ridotto da fatica, dolore o sconforto a una condizione di estrema debolezza fisica o morale. Può descrivere chi è piegato o in ginocchio in senso letterale, oppure chi non trova più energie per reagire. È più intenso di «stanco»: suggerisce una perdita momentanea di forza, slancio o dignità di fronte a ciò che grava.",

  shortDefinition:
    "Sfinito o abbattuto fino a sentirsi senza forze, fisiche o morali; anche piegato o in ginocchio.",

  etymology:
    "Participio passato di «prostrare», dal latino prosternere: «abbattere, stendere a terra». L’origine conserva entrambe le immagini ancora vive nella parola: il corpo piegato e l’animo vinto dalla fatica o dal dolore.",

  examples: [
    "Dopo una notte senza sonno arrivò alla riunione prostrato, ma volle comunque ascoltare tutti.",
    "La lunga siccità aveva lasciato il paese prostrato e prudente davanti a ogni previsione ottimistica.",
    "Non era rassegnato: era prostrato, e gli serviva tempo prima ancora che una soluzione.",
  ],

  synonyms: [
    { term: "sfinito", register: "comune", note: "Evidenzia soprattutto l’esaurimento fisico; «prostrato» può essere altrettanto morale o simbolico." },
    { term: "abbattuto", register: "comune", note: "Più frequente per un colpo emotivo; non implica sempre lo stesso grado di spossatezza." },
    { term: "umiliato", register: "comune-formale", note: "Indica una ferita alla dignità; può essere una causa della prostrazione, non il suo equivalente." },
  ],

  antonyms: [
    { term: "rinvigorito", register: "comune", note: "Tornato in possesso di energia e capacità di reagire." },
    { term: "saldo", register: "letterario-formale", note: "Fermo nel corpo o nell’animo, senza l’idea di cedimento propria di «prostrato»." },
  ],

  relatedWords: ["prostrazione", "stanchezza", "rassegnazione", "accettazione", "resilienza"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/prostrato",
  },

  paroliereNote:
    "«Prostrato» non è una diagnosi e non è sinonimo automatico di → rassegnazione. Nomina anzitutto il punto in cui le energie non bastano più; riconoscerlo evita di scambiare per indifferenza una fatica che ha già consumato la risposta.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Prostrato — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di prostrato: abbattuto e senza forze nel corpo o nell’animo, anche in senso figurato. Sinonimi, contrari, esempi e origine.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
