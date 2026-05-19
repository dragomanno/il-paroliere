// Il Paroliere — Lemma: parsimonia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const parsimonia: LemmaEntry = {
  lemma: "parsimonia",
  slug: "parsimonia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Uso misurato e consapevole delle risorse — denaro, tempo, energia, parole — che esclude lo spreco " +
    "senza cadere nella privazione. A differenza dell'avarizia, la parsimonia non trattiene per paura " +
    "di perdere, ma calibra per poter usare meglio. In filosofia della scienza indica il principio " +
    "metodologico per cui, tra spiegazioni ugualmente valide, si preferisce la più semplice: il " +
    "cosiddetto rasoio di Occam.",

  shortDefinition:
    "Uso calibrato delle risorse che evita lo spreco; in filosofia della scienza, preferenza per la spiegazione più semplice.",

  register: ["comune", "formale"],
  domains: ["economia", "comportamento"],

  etymology:
    "Dal latino parsimonia, derivato di parcere, 'risparmiare, astenersi dallo sprecare'. " +
    "La stessa radice di parco (aggettivo: misurato, sobrio) e di sparagnare nei dialetti.",

  examples: [
    "Gestiva il budget con parsimonia — non per mancanza, ma per principio.",
    "Usava le parole con parsimonia: quando parlava, valeva la pena ascoltarlo.",
    "La parsimonia del rasoio di Occam non è semplicismo: è preferenza per la spiegazione che fa meno assunzioni inutili.",
    "C'è una parsimonia nell'architettura giapponese che non è povertà — è scelta.",
  ],

  synonyms: [
    {
      term: "frugalità",
      register: "comune",
      context: "sobrietà nelle abitudini di vita, con sfumatura più etica",
    },
    {
      term: "sobrietà",
      register: "comune",
      context: "misura nel comportamento e nel consumo, senza la connotazione economica della parsimonia",
    },
    {
      term: "economia",
      register: "comune",
      context: "gestione oculata, più vicino all'amministrazione che alla qualità interiore",
    },
  ],

  antonyms: [
    {
      term: "prodigalità",
      register: "comune",
      context: "spendere e usare senza misura",
    },
    {
      term: "spreco",
      register: "comune",
      context: "uso eccessivo o inutile di risorse",
    },
  ],

  relatedWords: [
    "parco",
    "frugale",
    "avaro",
    "rasoio di Occam",
    "sobrietà",
    "risparmio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/parsimonia/",
    wiktionary: "https://it.wiktionary.org/wiki/parsimonia",
  },

  paroliereNote:
    "La parsimonia ha un problema di immagine: viene spesso confusa con l'avarizia, " +
    "che è un vizio, mentre lei è tutt'altro — è una virtù pratica, la capacità di fare " +
    "le proporzioni giuste. Il rasoio di Occam ne è la versione epistemica: non tagliare " +
    "per pigrizia, ma per non aggiungere quello che non serve.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Parsimonia — Il Paroliere",
    description:
      "Definizione originale di 'parsimonia': uso calibrato delle risorse; in filosofia, preferenza per la spiegazione più semplice. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
