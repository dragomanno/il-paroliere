// Il Paroliere — Lemma: ovvietà
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ovvieta: LemmaEntry = {
  lemma: "ovvietà",
  slug: "ovvieta",
  partOfSpeech: "sostantivo femminile",

  definition:
    "La qualità di ciò che è ovvio, cioè evidente a tutti senza necessità di " +
    "dimostrazione o spiegazione; per estensione, un'affermazione, un'idea o " +
    "un'osservazione priva di originalità o profondità, che non aggiunge nulla a ciò " +
    "che già si sa. Chi dice un'ovvietà sta dichiarando qualcosa che il suo interlocutore " +
    "conosce già — e lo sa. L'ovvietà non è necessariamente falsa: il problema non è la " +
    "verità del contenuto, ma la sua banalità, la mancanza di valore informativo in quel " +
    "contesto. Nel discorso pubblico e nel giornalismo, l'ovvietà è una delle forme più " +
    "diffuse di riempimento: frasi che suonano dette ma non trasmettono nulla. «Bisogna " +
    "fare di più», «la situazione è complessa», «occorre lavorare insieme» sono ovvietà " +
    "strutturali — non false, solo vuote.",

  shortDefinition:
    "Ciò che è già noto a tutti e non aggiunge informazione; un'affermazione priva " +
    "di originalità o valore conoscitivo nel contesto in cui viene pronunciata.",

  register: ["comune", "spregiativo"],
  domains: ["linguistica", "retorica", "società"],

  etymology:
    "Da ovvio + suffisso -ità. Ovvio viene dal latino obvius («che si trova sulla " +
    "via, che si incontra facilmente»), da ob- + via («strada»): letteralmente «ciò che " +
    "sta sulla strada», quindi ciò che chiunque incontra senza doverlo cercare.",

  examples: [
    '«Il cliente ha sempre ragione è un\'ovvietà del marketing che nasconde più problemi di quanti ne risolva.»',
    "«Il suo discorso era una sequenza di ovvietà ben confezionate: nulla di sbagliato, nulla di utile.»",
    '«Dire che "bisogna migliorare la qualità della vita" senza spiegare come è un\'ovvietà elevata a programma politico.»',
  ],

  synonyms: [
    {
      term: "banalità",
      register: "comune",
      context: "piattezza per mancanza di qualità",
    },
    {
      term: "luogo comune",
      register: "comune",
      context: "affermazione scontata e condivisa",
    },
    {
      term: "lapalissata",
      register: "ironico",
      context: "verità di evidenza imbarazzante",
    },
    {
      term: "truismo",
      register: "formale",
      context: "affermazione trivialmente vera",
    },
    {
      term: "tautologia",
      register: "tecnico",
      context: "ripetizione logica dello stesso concetto",
    },
  ],

  antonyms: [
    {
      term: "originalità",
      register: "comune",
      context: "qualità di ciò che è nuovo",
    },
    {
      term: "insight",
      register: "comune",
      context: "osservazione acuta e illuminante",
    },
    {
      term: "acutezza",
      register: "comune",
      context: "capacità di vedere ciò che non è ovvio",
    },
  ],

  relatedWords: [
    "ironia",
    "retorica",
    "luogo comune",
    "cliché",
    "banalità",
    "tautologia",
    "lapalissiano",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ovvieta/",
    wiktionary: "https://it.wiktionary.org/wiki/ovvietà",
  },

  paroliereNote:
    "Ovvietà e banalità si somigliano ma non sono sinonimi perfetti. La banalità è " +
    "piatta per mancanza di qualità; l'ovvietà è superflua per eccesso di notorietà. " +
    "Un'osservazione banale potrebbe anche essere sbagliata; un'ovvietà è quasi sempre " +
    "vera — è solo già nota. La distinzione è sottile ma vale: chi dice un'ovvietà non " +
    "sta necessariamente pensando male, sta solo sprecando le parole (e il tempo di chi " +
    "ascolta).",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ovvietà — definizione, differenza da banalità | Il Paroliere",
    description:
      "Cosa significa ovvietà, perché è diversa da banalità, come riconoscerla nel " +
      "discorso pubblico. Definizione originale con esempi e nota editoriale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
