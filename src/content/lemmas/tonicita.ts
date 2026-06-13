// Il Paroliere — Lemma: tonicità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const tonicita: LemmaEntry = {
  lemma: "tonicità",
  slug: "tonicita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["anatomia", "fisiologia", "estetica", "linguistica"],

  definition:
    "Stato di tensione fisiologica minima e costante di un muscolo a riposo — il tono " +
    "basale che mantiene la forma, la postura, la prontezza al movimento. Senza tonicità, " +
    "il corpo collassa; con tonicità eccessiva, irrigidisce. In estetica e critica, la " +
    "tonicità è la qualità di un’opera, di uno stile, di un’argomentazione che mantiene " +
    "una tensione interna coerente senza esplodere né cedere.",

  shortDefinition:
    "Tensione fisiologica di base del muscolo a riposo; in senso esteso, tensione interna coerente di un’opera o di uno stile.",

  etymology:
    "Da tonico (dal greco tonikos, da tonos “tensione, corda tesa, suono”), con il " +
    "suffisso -ità. La radice greca tonos ha dato anche “tono”, “tonalità”, “intonare” " +
    "— tutto ciò che riguarda la tensione ordinata.",

  examples: [
    "La tonicità muscolare si valuta con il tatto: un muscolo tonico oppone una resistenza morbida alla pressione; uno ipotonico cede senza opporre nulla.",
    "La tonicità di una narrazione non è sinonimo di tensione drammatica: è la qualità strutturale che fa sì che ogni parte regga il peso delle altre senza cedere.",
    "Nella terapia infantile, la valutazione della tonicità è tra i primi indicatori del corretto sviluppo neurologico: il neonato ipotonico richiede attenzione immediata.",
    "Un testo con buona tonicità stilistica è riconoscibile: ogni frase porta il suo peso, nessuna è di troppo, nessuna manca.",
  ],

  synonyms: [
    { term: "tono muscolare", register: "tecnico", note: "La denominazione tecnica precisa in fisiologia e fisioterapia." },
    { term: "tensione", register: "comune", note: "Più generico: la forza di resistenza o l’energia potenziale interna." },
  ],

  antonyms: [
    { term: "ipotonia", register: "tecnico", note: "Il contrario clinico: tonicità insufficiente, muscolo troppo molle." },
    { term: "flaccidità", register: "tecnico-comune", note: "Assenza di tono e consistenza; il cedere senza resistenza." },
  ],

  relatedWords: ["elasticita", "atrofia", "ipotonia", "flosco", "turgido"],

  paroliereNote:
    "Il tono muscolare è uno di quei fenomeni che esistono solo quando funzionano: li " +
    "noti quando vengono meno. La tonicità di una narrazione funziona allo stesso modo " +
    "— si percepisce per sottrazione, quando manca. Un romanzo che perde tonicità a " +
    "metà è un romanzo che si sente cedere sotto le mani, e il lettore lo avverte prima " +
    "ancora di poterlo articolare.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "tonicità — significato in fisiologia, fisioterapia e critica estetica",
    description: "Tonicità: dalla tensione muscolare a riposo alla qualità strutturale di un testo. Come il tono fisico diventa metafora estetica.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
