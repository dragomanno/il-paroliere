// Il Paroliere — Lemma: dissonanza cognitiva
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dissonanzaCognitiva: LemmaEntry = {
  lemma: "dissonanza cognitiva",
  slug: "dissonanza-cognitiva",
  partOfSpeech: "locuzione-nominale",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["psicologia", "psicologia sociale", "società"],

  definition:
    "Disagio psicologico che nasce quando due convinzioni, oppure una convinzione e un " +
    "comportamento, si contraddicono dentro la stessa persona. Nella teoria di Leon " +
    "Festinger è una spinta a ritrovare coerenza: spesso, per attenuarla, si ritocca il " +
    "modo di leggere i fatti più che la condotta. Nell’uso corrente indica, con tono per " +
    "lo più critico, lo scarto tra ciò che qualcuno professa e ciò che fa.",

  shortDefinition:
    "Disagio di chi tiene insieme idee o azioni in contrasto, che la mente tende a sciogliere aggiustando le proprie convinzioni.",

  etymology:
    "Calco dell’inglese cognitive dissonance, locuzione resa celebre da Leon Festinger " +
    "con A Theory of Cognitive Dissonance (1957). Dissonanza viene dal latino " +
    "dissonantia, da dissonare, «suonare in disaccordo» (dis- + sonare); cognitivo è un " +
    "derivato dotto del latino cognitus, participio di cognoscere, «conoscere». " +
    "L’immagine è musicale: idee che, accostate, «stonano». Il contrario tecnico, " +
    "consonanza, è usato dallo stesso Festinger. In italiano la locuzione è un calco " +
    "pienamente integrato, non un prestito: non c’è un anglicismo da sostituire.",

  examples: [
    "Ha speso una cifra per quel corso deludente, e adesso ne parla benissimo: è il modo più comodo di gestire la dissonanza cognitiva.",
    "Chi si dice ambientalista e prende l’aereo ogni settimana vive una piccola dissonanza cognitiva, e di solito la risolve con una buona giustificazione.",
    "Davanti ai dati che smentivano il suo piano, il comitato non ha cambiato rotta: ha cambiato i criteri con cui leggeva i dati.",
    "La dissonanza cognitiva non è ipocrisia: l’ipocrita sa di fingere, chi è in dissonanza spesso non se ne accorge.",
  ],

  synonyms: [
    { term: "conflitto interiore", register: "comune", context: "più ampio e generico; non implica il meccanismo di riduzione del disagio che è il cuore del concetto di Festinger" },
    { term: "incoerenza", register: "comune", context: "descrive lo scarto visto dall’esterno, non il disagio vissuto da chi lo porta" },
    { term: "contraddizione interna", register: "comune", context: "sfumatura logica più che psicologica: indica il contrasto tra idee, non la tensione che produce" },
  ],

  antonyms: [
    { term: "consonanza cognitiva", register: "tecnico", context: "stato di accordo tra credenze e comportamenti, termine usato da Festinger stesso" },
    { term: "coerenza", register: "comune", context: "corrispondenza tra ciò che si pensa e ciò che si fa, senza attrito interno" },
  ],

  relatedWords: ["dissonanza", "bias-cognitivo", "ipocrisia", "paradigma"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dissonanza",
  },

  paroliereNote:
    "È diventata una delle formule più usate per accusare gli altri, ed è un piccolo " +
    "paradosso: il concetto nasce per descrivere un meccanismo che riguarda tutti, chi " +
    "accusa compreso. Festinger lo mise a fuoco osservando un gruppo che attendeva una " +
    "catastrofe annunciata (raccontato in When Prophecy Fails, 1956): mancata la " +
    "profezia, molti non abbandonarono la fede, la rafforzarono. La lezione è scomoda: " +
    "davanti a una contraddizione la mente non cerca per forza la verità, cerca " +
    "soprattutto pace. Da distinguere dal bias cognitivo: il bias è una distorsione " +
    "sistematica del giudizio, la dissonanza è il disagio che spesso quelle distorsioni " +
    "servono a calmare.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "dissonanza cognitiva — significato, Festinger ed esempi",
    description:
      "Che cos’è la dissonanza cognitiva: il disagio tra idee e azioni in contrasto, dalla teoria di Leon Festinger (1957) all’uso comune. Con esempi e sfumature.",
  },

  createdAt: "2026-11-12",
  updatedAt: "2026-11-12",
};
