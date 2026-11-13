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
    "riferimento diretto a Rodomonte, re di Sarza e d'Algeri, nato nell'Orlando " +
    "innamorato di Boiardo e reso celebre dall'Orlando furioso di Ariosto: " +
    "personaggio di forza brutale e millanteria spettacolare.",

  shortDefinition:
    "Vanaglorioso, pieno di sé senza fondamento — detto di chi fa gran mostra di " +
    "coraggio o virtù che non possiede davvero.",

  register: ["letterario", "ironico"],
  domains: ["letteratura", "retorica"],

  etymology:
    "Da Rodomonte, re di Sarza e d'Algeri, guerriero saraceno dell'Orlando innamorato di Matteo Maria Boiardo (1483–1495), reso celebre dall'Orlando furioso di Ludovico Ariosto (1516–1532): forza straordinaria, carattere arrogante e millantatore. Il nome divenne sinonimo di braveria vuota già nel Cinquecento, diffondendosi in varie lingue europee (fr. rodomont, ingl. rodomontade).",

  synonyms: [
    { term: "spaccone", register: "colloquiale", context: "tono più diretto e popolare, senza la patina letteraria" },
    { term: "fanfarone", register: "colloquiale", context: "chi fa rumore senza sostanza — registro vivace" },
    { term: "millantatore", register: "comune", context: "chi esagera le proprie qualità con intenzione deliberata" },
    { term: "gradasso", register: "colloquiale/letterario", context: "altro personaggio cavalleresco, da Boiardo ad Ariosto, diventato nome comune: Gradasso, re di Sericana" }
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

  examples: [
    "Il suo discorso rodomontesco sulla vittoria certa è durato fino al primo gol degli avversari.",
    "Non sopporto quel tono rodomontesco: promette imprese che non ha mai avuto intenzione di fare.",
    "La sfida lanciata in conferenza stampa aveva qualcosa di rodomontesco, più spettacolo che sostanza.",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/rodomontesco"
  },

  paroliereNote:
    "I poemi cavallereschi del Rinascimento sono una miniera inesauribile per la lingua italiana: da Boiardo e poi da Ariosto, che ne ha fatto la fortuna, vengono gradasso e rodomontesco. Il fatto che un personaggio nato alla fine del Quattrocento sia ancora vivo nella lingua contemporanea come aggettivo ironico dice molto sulla forza dell'iperbole cavalleresca. Usare rodomontesco oggi è sempre un piccolo omaggio letterario, voluto o no.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Rodomontesco — Il Paroliere",
    description:
      "Vanaglorioso, pieno di sé senza fondamento — detto di chi fa gran mostra di " +
      "coraggio o virtù che non possiede davvero.",
  },

  createdAt: "2026-05-29",
  updatedAt: "2026-11-13",
};