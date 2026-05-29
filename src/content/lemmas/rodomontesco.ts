// Il Paroliere — Lemma: rodomontesco
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const rodomontesco: LemmaEntry = {
  lemma: "rodomontesco",
  slug: "rodomontesco",
  partOfSpeech: "aggettivo",
  gender: "maschile",

  definition:
    "Che ha il carattere di una vanteria clamorosa e vuota, di un coraggio esibito " +
    "senza sostanza: si dice di discorsi, atteggiamenti o dichiarazioni che gonfiano " +
    "senza misura il proprio valore o le proprie capacità. L'aggettivo nasce come " +
    "riferimento diretto a Rodomonte, re d'Algeri nell'Orlando Furioso di Ariosto, " +
    "personaggio di forza brutale e millanteria spettacolare.",

  shortDefinition:
    "Vanaglorioso, pieno di sé senza fondamento — detto di chi fa gran mostra di " +
    "coraggio o virtù che non possiede davvero.",

  register: ["letterario", "ironico"],
  domains: ["letteratura", "retorica"],

  etymology:
    "Da Rodomonte, personaggio dell'Orlando Furioso di Ludovico Ariosto (1516–1532), " +
    "re d'Algeri e guerriero di forza straordinaria ma carattere arrogante e " +
    "millantatore. Il nome divenne sinonimo di braveria vuota già nel Cinquecento, " +
    "diffondendosi in varie lingue europee (fr. rodomont, ingl. rodomontade).",

  synonyms: [
    { term: "spaccone", register: "colloquiale", context: "tono più diretto e popolare, senza la patina letteraria" },
    { term: "fanfarone", register: "colloquiale", context: "chi fa rumore senza sostanza — registro vivace" },
    { term: "millantatore", register: "comune", context: "chi esagera le proprie qualità con intenzione deliberata" },
    { term: "gradasso", register: "colloquiale/letterario", context: "altro personaggio ariostesco diventato nome comune: Gradasso, re di Sericana" }
  ],

  antonyms: [
    { term: "modesto", register: "comune", context: "antonimo etico diretto" },
    { term: "sobrio", register: "comune", context: "misurato nei toni e nei gesti" },
    { term: "schivo", register: "comune", context: "che evita l'esibizione di sé" }
  ],

  relatedWords: [
    "vanteria",
    "millanteria",
    "bravata",
    "gradasso",
    "spaccone",
    "arroganza",
    "rodomontata"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rodomontesco"
  },

  paroliereNote:
    "L'Orlando Furioso è una miniera inesauribile per la lingua italiana: da Ariosto " +
    "vengono gradasso, rodomontesco e — meno usato ma altrettanto bello — " +
    "bradamantesco. Il fatto che un personaggio di finzione del Cinquecento sia " +
    "ancora vivo nella lingua contemporanea come aggettivo ironico dice molto sulla " +
    "forza dell'iperbole ariostesca. Usare rodomontesco oggi è sempre un piccolo " +
    "omaggio letterario, voluto o no.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Rodomontesco — Il Paroliere",
    description:
      "Vanaglorioso, pieno di sé senza fondamento — detto di chi fa gran mostra di " +
      "coraggio o virtù che non possiede davvero.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
};