// Il Paroliere — Lemma: tribalismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tribalismo: LemmaEntry = {
  lemma: "tribalismo",
  slug: "tribalismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "L'atteggiamento che privilegia sistematicamente il proprio gruppo di " +
    "appartenenza rispetto a ogni altro, fino a far coincidere il giudizio sulle " +
    "idee con l'appartenenza di chi le esprime. Nel dibattito pubblico " +
    "contemporaneo descrive la polarizzazione tra fazioni — politiche, sportive, " +
    "digitali — in cui la lealtà al gruppo conta più della coerenza degli argomenti.",

  shortDefinition:
    "Atteggiamento che privilegia il proprio gruppo su ogni altro, fino a giudicare le idee solo in base a chi le esprime.",

  register: ["comune", "tecnico"],
  domains: ["politica", "sociologia", "psicologia sociale"],

  etymology:
    "Derivato di tribù con il suffisso -ismo, che indica un atteggiamento o " +
    "un'ideologia. Diffuso nel linguaggio politico e sociologico anglosassone " +
    "(tribalism) prima di consolidarsi nell'italiano corrente.",

  examples: [
    "Il tribalismo politico spinge molti a difendere posizioni che rifiuterebbero se venissero dalla parte opposta.",
    "Nei commenti online il tribalismo è spesso più forte del tema stesso della discussione.",
    "Superare il tribalismo non significa abolire le identità di gruppo, ma smettere di usarle come unico criterio di giudizio.",
  ],

  synonyms: [
    {
      term: "fazionismo",
      register: "comune",
      context: "più politico, enfatizza la divisione in fazioni contrapposte",
    },
    {
      term: "settarismo",
      register: "letterario",
      context: "più intenso, spesso con una connotazione di intolleranza religiosa o ideologica",
    },
  ],

  antonyms: [
    {
      term: "pluralismo",
      register: "tecnico",
      context: "il riconoscimento del valore legittimo di posizioni e gruppi diversi",
    },
  ],

  relatedWords: ["tribù", "etnocentrismo", "polarizzazione", "appartenenza", "fazione"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/tribalismo",
  },

  paroliereNote:
    "Il tribalismo non richiede una tribù reale: basta un gruppo percepito come " +
    "proprio — una tifoseria, una bolla social, una fazione politica — perché il " +
    "meccanismo si attivi. È vicino all'etnocentrismo per struttura logica, ma più " +
    "adatto a descrivere le appartenenze fluide e scelte del presente piuttosto che " +
    "quelle etniche o culturali di lunga durata.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Tribalismo — Il Paroliere",
    description:
      "Definizione originale di 'tribalismo': atteggiamento che privilegia il " +
      "proprio gruppo su ogni altro. Uso contemporaneo nel dibattito politico e social, con esempi ed etimologia.",
  },

  createdAt: "2026-08-21",
  updatedAt: "2026-08-21",
};
