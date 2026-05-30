// Il Paroliere — Lemma: disgregazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const disgregazione: LemmaEntry = {
  lemma: "disgregazione",
  slug: "disgregazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Processo per cui un insieme coeso — fisico, politico, sociale o ideologico — " +
    "perde la propria coerenza interna e si frammenta in parti separate che non " +
    "riconoscono più una struttura comune. A differenza della dissoluzione, che " +
    "implica una fine totale e spesso rapida, e del dissolvimento, che evoca una " +
    "dispersione graduale quasi impercettibile, la disgregazione enfatizza la rottura " +
    "progressiva dei legami che tenevano unito il tutto, lasciando i frammenti ancora " +
    "visibili ma irrelati.",

  shortDefinition:
    "Rottura dei legami interni di un insieme coeso — fisico, politico o sociale — " +
    "che si frammenta in parti separate.",

  register: ["comune", "tecnico", "politico"],
  domains: ["fisica", "politica", "sociologia", "storia"],

  etymology:
    "Dal latino dis- (prefisso di separazione e inversione) + gregare (raggruppare, " +
    "da grex/gregis, gregge). Il termine descrive letteralmente il contrario del " +
    "raccogliersi in un gruppo.",

  examples: [
  ],

  synonyms: [
    { term: "dissoluzione", register: "comune", context: "Fine totale di una struttura; implica una scomparsa più completa rispetto alla disgregazione" },
    { term: "dissolvimento", register: "comune", context: "Dispersione graduale e quasi impercettibile; più evocativo e meno tecnico della disgregazione" },
    { term: "frammentazione", register: "comune", context: "Divisione in frammenti; descrive il risultato più che il processo" },
    { term: "disfacimento", register: "comune", context: "Deterioramento progressivo di una struttura; più connotato negativamente, spesso in senso morale o organico" }
  ],

  antonyms: [
    { term: "coesione", register: "comune", context: "Forza che mantiene uniti gli elementi di un insieme; il contrario esatto della disgregazione" },
    { term: "aggregazione", register: "tecnico", context: "Processo di raccolta e unione di elementi distinti in un insieme coerente" },
    { term: "integrazione", register: "comune", context: "Incorporazione di parti in un tutto funzionante; opposto al processo disgregativo" }
  ],

  relatedWords: [
    "dissolvimento",
    "dissoluzione",
    "comunismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/disgregazione"
  },

  paroliereNote:
    "Il dissolvimento dell'URSS tra il 1989 e il 1991 è l'esempio storico " +
    "contemporaneo per eccellenza di disgregazione: un sistema politico e ideologico " +
    "che non fu sconfitto dall'esterno con un atto di forza, ma si disgregò per " +
    "esaurimento interno, per l'erosione progressiva dei legami che tenevano insieme " +
    "l'ideologia, le istituzioni e le persone. Lasciò dietro di sé quindici " +
    "repubbliche indipendenti e un vuoto di senso collettivo ancora non del tutto " +
    "colmato. La disgregazione, in questo senso, è qualcosa di più sottile della " +
    "sconfitta: non c'è un momento preciso in cui tutto finisce, ma una sequenza di " +
    "distacchi, di lealtà che vengono meno, di strutture che smettono di funzionare " +
    "prima che qualcuno dichiari ufficialmente che sono finite.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Disgregazione — Il Paroliere",
    description:
      "Disgregazione: significato, etimologia e differenza con dissoluzione e " +
      "dissolvimento. Il processo per cui un insieme perde coesione e si frammenta.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};