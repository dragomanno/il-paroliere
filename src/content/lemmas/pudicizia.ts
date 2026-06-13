// Il Paroliere — Lemma: pudicizia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pudicizia: LemmaEntry = {
  lemma: "pudicizia",
  slug: "pudicizia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["formale", "letterario", "raro nel parlato comune"],
  domains: ["etica", "letteratura", "storia della cultura", "teologia"],

  definition:
    "Qualità di chi mantiene un contegno casto e misurato nel corpo, nel gesto e " +
    "nella parola, non per inibizione ma per un senso interiorizzato di decoro e " +
    "rispetto di sé. Nella tradizione latina e cristiana, la pudicizia era annoverata " +
    "tra le virtù sociali femminili per eccellenza — il che ne ha reso l’uso " +
    "storicamente carico di valenze di genere che il lessico contemporaneo ha in parte " +
    "abbandonato. Nell’uso moderno, quando usata, tende a indicare una ritrosia " +
    "corporea che non è necessariamente moralistica.",

  shortDefinition:
    "Contegno casto e misurato nel corpo e nel gesto, fondato su un senso " +
    "interiorizzato di decoro; nella tradizione, virtù strettamente associata al femminile.",

  etymology:
    "Dal latino pudicitia, da pudicus «pudico, casto», da pudere «provare vergogna, " +
    "avere pudore». Stessa radice di «pudore» e «impudente». La pudicizia è la " +
    "virtù di chi sente il pudore come guida stabile del comportamento.",

  examples: [
    "Nell’iconografia classica, la Pudicizia era rappresentata come figura velata: il gesto del velo come metafora del contegno che copre senza nascondere.",
    "La pudicizia non è puritanesimo: il puritanesimo è ossessione per il peccato, la pudicizia è semplicemente la scelta di non esibire ciò che si considera intimo.",
    "Definire pudicizia quello che è semplicemente repressione sessuale è un errore semantico e storico: le due cose hanno radici diverse e conseguenze diverse.",
    "In certi contesti letterari ottocenteschi, la pudicizia era il codice con cui si descriveva tutto ciò che una «donna per bene» non avrebbe mai fatto — il che dice più sulla società che sulla virtù.",
  ],

  synonyms: [
    { term: "castità", register: "teologico-formale", note: "Più specificamente legata all’astinenza sessuale nella tradizione cristiana." },
    { term: "pudore", register: "comune-letterario", note: "Più generico: il pudore è l’emozione, la pudicizia è la virtù stabile che ne emerge." },
  ],

  antonyms: [
    { term: "impudicizia", register: "formale-letterario", note: "La mancanza di contegno corporeo e gestuale nel senso della pudicizia." },
    { term: "sfrontatezza", register: "comune", note: "L’esibizione di sé che supera deliberatamente i limiti del contegno." },
  ],

  relatedWords: ["verecondia", "vergogna", "modestia", "riserbo", "ritrosia", "intimita"],
  sourceLinks: {},

  paroliereNote:
    "Pudicizia è una parola che ha sofferto della sua storia. Usata per secoli come " +
    "norma di controllo sociale — quasi sempre diretta alle donne — ha perso la sua " +
    "valenza neutrale e si porta addosso il peso di quella storia. Eppure c’è " +
    "qualcosa nel nucleo semantico che non coincide con la repressione: il senso che " +
    "non tutto ciò che è intimo deve essere pubblico, che il corpo ha una sua riserva " +
    "che non è vergogna ma cura di sé. Recuperare quel nucleo richiede di separarlo " +
    "dalla storia di oppressione che lo ha usato come strumento.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "pudicizia — contegno corporeo tra virtù storica e decostruzione contemporanea",
    description: "Che cos’è la pudicizia: definizione etica e storica, radici latine, valenze di genere e differenza dal puritanesimo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
