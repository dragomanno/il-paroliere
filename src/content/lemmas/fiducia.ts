// Il Paroliere — Lemma: fiducia
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const fiducia: LemmaEntry = {
  lemma: "fiducia",
  slug: "fiducia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "psicologico", "tecnico (diritto, finanza)"],
  domains: ["psicologia", "etica", "sociologia", "diritto", "economia"],

  definition:
    "Disposizione ad affidarsi a qualcuno o qualcosa accettando la propria " +
    "vulnerabilità rispetto all’esito — cioè sapendo che l’altro potrebbe deluderci " +
    "o ingannarci, ma scegliendo di non coprirsi da questa possibilità. La fiducia " +
    "non è certezza: è la scelta di agire come se l’altro fosse affidabile, nonostante " +
    "l’incertezza residua. È il fondamento di ogni relazione duratura, di ogni " +
    "cooperazione sociale e di ogni mercato funzionante: senza un livello minimo di " +
    "fiducia reciproca, la coordinazione tra individui collassa.",

  shortDefinition:
    "Scelta di affidarsi ad altri accettando la propria vulnerabilità; non è certezza, " +
    "ma la base necessaria di ogni cooperazione duratura.",

  etymology:
    "Dal latino fiducia, da fidere «aver fede, affidarsi», dalla radice fid- comune " +
    "a «fede», «fedele», «affidare». La fiducia è letteralmente «l’atto di avere " +
    "fede» — con tutto il peso semantico che la fede porta con sé.",

  examples: [
    "La fiducia si costruisce lentamente e si distrugge in un istante: questa asimmetria spiega perché i sistemi sociali che la perdono impiegano generazioni a ricostruirla.",
    "Nelle organizzazioni ad alta gerarchia, la fiducia spesso scorre solo dall’alto verso il basso: i capi si fidano dei subordinati solo fino a un certo punto, e quella riserva si percepisce.",
    "Il contratto è il sostituto formale della fiducia: serve esattamente quando la fiducia non è abbastanza.",
    "Dare fiducia a chi non la merita ancora è un rischio; non darla mai a nessuno è una certezza di isolamento.",
  ],

  synonyms: [
    { term: "fede", register: "comune-letterario", note: "Più carico di valenze religiose o assolute; la fiducia è più situazionale e revocabile." },
    { term: "affidamento", register: "giuridico", note: "L’aspetto formale e procedurale della fiducia, spesso contrattualizzato." },
  ],

  antonyms: [
    { term: "diffidenza", register: "comune", note: "La disposizione opposta: non affidarsi, coprirsi preventivamente dalla possibilità di essere delusi." },
    { term: "sfiducia", register: "comune-politico", note: "La perdita attiva di fiducia, spesso a seguito di una delusione." },
  ],

  relatedWords: ["lealta", "diffidenza", "trasparenza", "malafede"],
  sourceLinks: {},

  paroliereNote:
    "La fiducia è l’infrastruttura invisibile della vita sociale: quando funziona, non " +
    "si nota; quando manca, tutto si inceppa. Le società a bassa fiducia sono meno " +
    "felici, meno produttive, più corrotte. Non perché le persone siano peggiori, ma " +
    "perché in assenza di fiducia ogni transazione richiede più risorse di controllo, " +
    "più contratti, più difese. La fiducia è efficiente. La sua mancanza è costosa. " +
    "Eppure nessuno può ordinarla dall’alto: si costruisce solo attraverso esperienze " +
    "ripetute di affidabilità.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "fiducia — affidarsi nonostante l’incertezza, tra psicologia e sociologia",
    description: "Che cos’è la fiducia: definizione psicologica e sociologica, differenza da certezza e fede, e perché è l’infrastruttura invisibile della cooperazione sociale.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
