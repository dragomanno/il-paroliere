// Il Paroliere — Lemma: antonomasia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const antonomasia: LemmaEntry = {
  lemma: "antonomasia",
  slug: "antonomasia",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Figura retorica per cui un nome proprio viene usato al posto di un nome comune " +
    "che ne rappresenta la qualità emblematica — un Creso per dire un ricchissimo, un " +
    "Mecenate per dire un generoso finanziatore — oppure, inversamente, un nome " +
    "comune o una perifrasi sostituisce un nome proprio riconoscibile: il Poeta per " +
    "Dante, il Bardo per Shakespeare. Nella lingua quotidiana, l'espressione «per " +
    "antonomasia» indica il rappresentante più compiuto e riconoscibile di una " +
    "categoria.",

  shortDefinition:
    "Figura retorica che sostituisce un nome proprio con un comune, o viceversa. «Per " +
    "antonomasia»: nel senso più pieno del termine.",

  register: ["tecnico", "letterario", "comune"],
  domains: ["retorica", "linguistica", "letteratura"],

  etymology:
    "Dal greco antonomasía, composto di antí (invece di) e ónoma (nome). Il " +
    "meccanismo è già teorizzato nella retorica classica greca e latina.",

  examples: [
  ],

  synonyms: [
    { term: "metonimia", register: "tecnico", context: "Figura affine che sostituisce un termine con uno contiguo per relazione concettuale, non per rappresentanza emblematica" },
    { term: "sineddoche", register: "tecnico", context: "Sostituzione per relazione parte-tutto; talvolta sovrapposta all'antonomasia nei testi retorici classici" },
    { term: "perifrasi", register: "tecnico", context: "Sostituzione del nome proprio con una descrizione; spesso tecnica interna all'antonomasia" }
  ],

  antonyms: [
    { term: "denotazione", register: "tecnico", context: "Riferimento diretto e letterale al significato primario, senza slittamenti figurati" },
    { term: "letteralità", register: "comune", context: "Adesione al senso esplicito del termine, opposta al trasferimento retorico" }
  ],

  relatedWords: [
    "bignami",
    "compendio"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/antonomasia"
  },

  paroliereNote:
    "L'antonomasia funziona solo dove esiste una cultura condivisa sufficientemente " +
    "stabile da garantire il riconoscimento. Dire «è un Don Giovanni» ha senso solo " +
    "se l'interlocutore sa chi è Don Giovanni — e se il personaggio porta ancora il " +
    "peso della sua reputazione. Quando la cultura comune si frammenta o si rinnova, " +
    "le antonomasie invecchiano: i riferimenti diventano opachi, e quello che era " +
    "un'immagine vivida diventa una citazione oscura. Don Giovanni rimane per " +
    "antonomasia il libertino, il Bignami rimane per antonomasia il compendio " +
    "scolastico — ma entrambi dipendono da un codice culturale che deve essere " +
    "trasmesso per restare operativo. L'antonomasia è, in fondo, una scommessa sulla " +
    "memoria collettiva.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Antonomasia — Il Paroliere",
    description:
      "Antonomasia: significato, etimologia e uso retorico. Quando un nome proprio " +
      "diventa categoria, o una categoria diventa nome. «Per antonomasia» spiegato.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};