// Il Paroliere — Lemma: bravata
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bravata: LemmaEntry = {
  lemma: "bravata",
  slug: "bravata",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "colloquiale"],
  domains: ["comportamento sociale", "psicologia", "storia"],

  definition:
    "Azione o dichiarazione con cui si vuole dimostrare coraggio, abilità o sprezzo " +
    "del pericolo, senza che la motivazione reale sia il coraggio stesso — ma la " +
    "ricerca di ammirazione, di approvazione o di una posizione nel gruppo. La bravata " +
    "è teatrale: è pensata per essere vista. Si distingue dal gesto coraggioso " +
    "autentico perché quest’ultimo non richiede pubblico. Storicamente, «bravata» " +
    "indica anche la smargiassata del soldato o del bravo che intimidisce con il " +
    "gesto più che con la sostanza.",

  shortDefinition:
    "Azione teatrale che simula coraggio o sprezzo del rischio per ottenere " +
    "ammirazione; si distingue dal coraggio autentico perché richiede pubblico.",

  etymology:
    "Da «bravo», nel senso antico di «sicario, uomo violento a pagamento» (cf. i " +
    "Bravi nei Promessi Sposi), dal latino barbarus attraverso forme medievali. " +
    "La bravata è l’azione del bravo: ostentazione di forza o audacia come " +
    "segnale sociale.",

  examples: [
    "Sfidare a duello qualcuno davanti a testimoni per una questione che si sarebbe potuta risolvere in privato: questa è bravata, non difesa dell’onore.",
    "Certe dichiarazioni politiche sono pura bravata: parole pensate per galvanizzare la propria base, senza alcuna intenzione reale di essere mantenute.",
    "I ragazzi fanno bravate perché il gruppo premia il coraggio ostentato più di quello silenzioso: la bravata è una risposta razionale a un sistema di incentivi specifico.",
    "La bravata si smonta facilmente: basta togliere il pubblico. Chi agisce allo stesso modo senza testimoni non sta facendo una bravata.",
  ],

  synonyms: [
    { term: "smargiassata", register: "comune-colloquiale", note: "Sinonimo quasi perfetto, con sfumatura più ironica." },
    { term: "millanteria", register: "comune-formale", note: "Più specificamente verbale: la bravata può essere anche un atto, la millanteria è prima di tutto parola." },
  ],

  antonyms: [
    { term: "coraggio autentico", register: "etico", note: "Il gesto che non richiede pubblico né ammirazione." },
    { term: "riserbo", register: "comune", note: "La disposizione a non ostentare, opposta alla teatralità della bravata." },
  ],

  relatedWords: ["millanteria", "spaccone", "gradasso", "fanfarone", "arroganza"],
  sourceLinks: {},

  paroliereNote:
    "La bravata rivela qualcosa di molto umano: il bisogno di essere visti come " +
    "coraggiosi è spesso più forte del coraggio stesso. I sistemi sociali che " +
    "premiano l’ostentazione producono più bravate che atti autentici. Questo vale " +
    "nelle scuole, nelle organizzazioni, nei sistemi politici. La domanda non è solo " +
    "chi è il singolo che si comporta così, ma quale struttura lo incentiva a farlo.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "bravata — il coraggio teatrale che richiede pubblico per esistere",
    description: "Che cos’è la bravata: definizione psicologica e storica, differenza dal coraggio autentico, e perché certi sistemi sociali la producono.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
