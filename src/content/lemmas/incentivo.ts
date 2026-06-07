// Il Paroliere — Lemma: incentivo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incentivo: LemmaEntry = {
  lemma: "incentivo",
  slug: "incentivo",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Qualsiasi elemento — materiale o immateriale, economico o simbolico — che " +
    "stimola un soggetto ad adottare un determinato comportamento o a perseguire " +
    "un obiettivo specifico. In economia, gli incentivi sono strumenti di politica " +
    "pubblica o privata che modificano la struttura dei costi e benefici percepiti, " +
    "rendendo più conveniente un'azione rispetto a un'altra: sussidi, agevolazioni " +
    "fiscali (vedi → defiscalizzazione), premi di produzione, tariffe preferenziali. " +
    "In psicologia comportamentale, l'incentivo è un rinforzo positivo esterno che " +
    "orienta la condotta verso un risultato desiderato.",

  shortDefinition:
    "Stimolo che orienta il comportamento di un soggetto verso un'azione o un obiettivo, mediante la modifica dei costi e benefici percepiti.",

  register: ["comune", "economico", "psicologico"],
  domains: ["economia", "psicologia", "management", "politica"],

  etymology:
    "Dal latino incentivum, neutro sostantivato di incentivus («che dà il tono, " +
    "che inizia il canto»), da incinere («suonare, intonare»), composto di in- + " +
    "canere («cantare»). Il passaggio semantico da \"ciò che dà il ritmo\" a \"ciò " +
    "che stimola all'azione\" è avvenuto nel latino tardo.,

  examples: [
    "«L'azienda ha introdotto un sistema di incentivi legati al raggiungimento degli obiettivi trimestrali.»",
    "«Il bonus fiscale sulle ristrutturazioni è un incentivo pubblico a migliorare l'efficienza energetica degli edifici.»",
    "«Senza un incentivo chiaro, le persone tendono a mantenere il comportamento già consolidato.»",
  ],

  relatedWords: [
    "defiscalizzazione",
    "investimento",
    "premio",
    "sussidio",
    "rinforzo positivo",
    "nudge",
    "motivazione",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/incentivo/",
    wiktionary: "https://it.wiktionary.org/wiki/incentivo",
  },

  paroliereNote:
    "Defiscalizzazione e incentivo sono concetti complementari ma non sinonimi: " +
    "la defiscalizzazione è uno degli strumenti attraverso cui si costruisce un " +
    "incentivo, non l'incentivo in sé. Un incentivo può essere anche un bonus " +
    "diretto in denaro, una riduzione burocratica, un riconoscimento simbolico: " +
    "non deve necessariamente passare per il sistema fiscale. Vale la pena tenere " +
    "i due lemmi separati e interlinkati proprio per questa distinzione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Incentivo — definizione, economia, psicologia | Il Paroliere",
    description:
      "Cosa significa incentivo in economia e psicologia. Differenza da defiscalizzazione. Come gli incentivi modificano i comportamenti. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
