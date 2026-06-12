// Il Paroliere — Lemma: penombra
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const penombra: LemmaEntry = {
  lemma: "penombra",
  slug: "penombra",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Zona di luce parziale, tra la piena luce e la piena oscurità — quella che si crea " +
    "nell'angolo di una stanza illuminata, dietro una tenda, nelle ore dei crepuscoli. " +
    "In astronomia designa la zona d'ombra attenuata durante un'eclissi. In senso figurato " +
    "indica una condizione intermedia, non definita: la penombra morale di una scelta " +
    "ambigua, l'esistenza in penombra di chi non è mai del tutto visto.",

  shortDefinition:
    "Zona di luce parziale tra la piena luce e l'oscurità totale; in senso figurato, condizione intermedia o ambiguità irrisolta.",

  register: ["comune", "letterario", "tecnico"],
  domains: ["percezione", "astronomia", "figurato", "pittura"],

  etymology:
    "Dal latino paene (quasi) + umbra (ombra): letteralmente «quasi-ombra», zona in cui " +
    "l'ombra non è mai completa. Il termine tecnico è entrato nell'italiano scientifico " +
    "con l'astronomia del Cinquecento e Seicento.",

  examples: [
    "Preferiva lavorare nella penombra: la luce diretta lo stancava.",
    "I pittori fiamminghi erano maestri della penombra — quella zona in cui il buio comincia a fare forma.",
    "Vive in una penombra professionale: non abbastanza visibile da essere riconosciuto, non abbastanza nascosto da essere ignorato.",
  ],

  synonyms: [
    {
      term: "ombra",
      register: "comune",
      context: "oscurità parziale, zona non illuminata; più estesa e meno sfumata della penombra",
    },
    {
      term: "semioscurità",
      register: "comune",
      context: "costruzione descrittiva equivalente, meno elegante",
    },
    {
      term: "crepuscolo",
      register: "comune",
      context: "nel dominio del tempo, la penombra delle ore di transizione",
    },
  ],

  antonyms: [
    {
      term: "bagliore",
      register: "comune",
      context: "luce intensa e improvvisa, opposto della zona attenuata",
    },
    {
      term: "oscurità",
      register: "comune",
      context: "assenza totale di luce, oltre la penombra",
    },
    {
      term: "piena luce",
      register: "comune",
      context: "illuminazione completa, senza zone d'ombra",
    },
  ],

  relatedWords: [
    "bagliore",
    "abbagliare",
    "lampo",
    "barlume",
    "fulgore",
    "guizzo",
    "luminosità",
    "oscurità",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/penombra/",
    wiktionary: "https://it.wiktionary.org/wiki/penombra",
  },

  paroliereNote:
    "La penombra è la condizione intermedia per eccellenza: non è buio, non è luce. " +
    "Pittoricamente, è lo spazio in cui Rembrandt e Caravaggio costruivano i loro soggetti. " +
    "Fotograficamente, è il momento più difficile da esporre bene. Filosoficamente, è la " +
    "zona grigia di tutte le decisioni difficili. Il lemma è più ricco di quanto sembri " +
    "a prima vista — e il senso figurato è forse quello più usato, anche senza saperlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Penombra — definizione, astronomia e senso figurato | Il Paroliere",
    description:
      "Penombra: zona di luce parziale tra piena luce e oscurità; in senso figurato, " +
      "condizione intermedia o ambiguità irrisolta. Definizione originale ed etimologia.",
  },

  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
