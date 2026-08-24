// Il Paroliere — Lemma: speranza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const speranza: LemmaEntry = {
  lemma: "speranza",
  slug: "speranza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune"],
  domains: ["psicologia", "filosofia", "vita sociale"],

  definition: "Orientamento fiducioso verso un esito futuro percepito come buono o desiderabile, anche quando non è assicurato. Si distingue dalla → attesa: l’attesa è una sospensione nel tempo e può essere neutra o ansiosa, mentre la speranza attribuisce al futuro una possibilità positiva.",

  shortDefinition: "Fiducia rivolta a un possibile esito positivo nel futuro.",

  etymology: "Dal latino spes, «attesa fiduciosa»; il termine conserva il legame con il futuro, ma nell’uso corrente mette al centro la fiducia nell’esito.",

  examples: [
    "La speranza di rivedere il quartiere vivo teneva insieme il comitato.",
    "Non gli offrì certezze, ma una speranza concreta: un appuntamento e un recapito.",
    "Anche dopo il rifiuto, conservava la speranza di trovare un lavoro più adatto."
  ],

  synonyms: [
    { term: "fiducia", register: "comune", note: "È più ampia: può rivolgersi a una persona, a un metodo o al futuro." },
    { term: "aspettativa", register: "comune", note: "Può essere neutra e basata su previsioni, senza il carattere fiducioso della speranza." },
    { term: "auspicio", register: "formale", note: "È un desiderio espresso, spesso pubblico o cerimoniale, non necessariamente uno stato interiore." }
  ],

  antonyms: [
    { term: "disperazione", register: "comune", note: "È la perdita radicale della prospettiva di un esito favorevole." },
    { term: "rassegnazione", register: "comune", note: "Accoglie un esito sfavorevole o immodificabile, senza continuare a orientarsi verso un cambiamento." }
  ],

  relatedWords: ["attesa", "desiderio", "aspirazione", "volontà", "slancio", "tensione", "frustrazione", "rassegnazione", "accettazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/speranza"
  },

  paroliereNote: "La speranza non è ottimismo automatico: può restare lucida sulle difficoltà. Rispetto alla → attesa, aggiunge una direzione affettiva; rispetto alla → rassegnazione, mantiene aperta la possibilità di un altro esito.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Speranza — definizione, sinonimi, uso | Il Paroliere",
    description: "Che cos’è la speranza: definizione originale, sinonimi ed esempi d’uso. Scopri la differenza con attesa, desiderio, aspirazione, fiducia e rassegnazione."
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24"
};
