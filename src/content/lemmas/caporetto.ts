// Il Paroliere — Lemma: Caporetto
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const caporetto: LemmaEntry = {
  lemma: "Caporetto",
  slug: "caporetto",
  partOfSpeech: "sostantivo proprio",
  gender: "femminile",

  definition:
    "Denominazione della battaglia dell'Isonzo (ottobre-novembre 1917) in cui le " +
    "forze austro-ungariche e tedesche sfondarono le linee italiane nei pressi di " +
    "Caporetto (oggi Kobarid, Slovenia), costringendo l'esercito italiano a una " +
    "ritirata disastrosa di oltre 100 chilometri fino al Piave, con 300.000 " +
    "prigionieri e 10.000 caduti. Per estensione, nel linguaggio comune e " +
    "giornalistico, indica qualsiasi sconfitta clamorosa, crollo improvviso o " +
    "insuccesso umiliante.",

  shortDefinition:
    "La disfatta militare italiana dell'ottobre 1917; per estensione, qualsiasi " +
    "sconfitta clamorosa e inaspettata.",

  register: ["storico", "colloquiale"],
  domains: ["storia", "linguaggio"],

  etymology:
    "Dal nome proprio della cittadina di Caporetto, forma italiana di Kobarid " +
    "(Slovenia). La battaglia avvenne tra il 24 ottobre e il 12 novembre 1917 e fu " +
    "determinante per le sorti del fronte italiano nella Prima Guerra Mondiale. Il " +
    "nome diventa metafora di rotta già nei decenni successivi al conflitto.",

  examples: [
  ],

  synonyms: [
    { term: "disfatta", register: "comune/militare", context: "nel senso figurato, sinonimo della resa o sconfitta totale" },
    { term: "débâcle", register: "comune/giornalistico", context: "prestito dal francese, usato in senso figurato per crolli imprevedibili e totali" },
    { term: "rotta", register: "militare/letterario", context: "nel senso tecnico-militare originale, la ritirata disordinata sotto pressione nemica" }
  ],

  antonyms: [
    { term: "vittoria", register: "comune/militare", context: "l'antonimo diretto del senso sia storico che figurato" }
  ],

  relatedWords: [
    "cecchino"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/Caporetto"
  },

  paroliereNote:
    "Caporetto copre due registri molto distanti tra loro. Nel registro storico è una " +
    "delle sconfitte militari più gravi della storia italiana moderna — analizzata, " +
    "discussa, romanzata (si pensi a Hemingway in Addio alle armi). Nel registro " +
    "colloquiale è diventata una metafora vivacissima: fare un Caporetto in " +
    "un'interrogazione, in un'elezione, in una partita di calcio. Il passaggio dal " +
    "proprio al comune avviene raramente con questa efficacia: il nome è così " +
    "evocativo da non aver bisogno di spiegazioni.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Caporetto — Il Paroliere",
    description:
      "Caporetto: la disfatta militare italiana del 1917 e la sua vita come metafora di " +
      "sconfitta clamorosa nel linguaggio comune.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};