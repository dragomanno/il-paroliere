// Il Paroliere — Lemma: investimento
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const investimento: LemmaEntry = {
  lemma: "investimento",
  slug: "investimento",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "L'impiego di risorse — denaro, tempo, energia, attenzione — nel presente con " +
    "l'aspettativa di ottenere un beneficio futuro maggiore del costo sostenuto. " +
    "In economia e finanza, designa l'allocazione di capitali in attività produttive, " +
    "strumenti finanziari, immobili o altri asset con l'obiettivo di generare reddito " +
    "o plusvalenza nel tempo. In senso lato e figurato, si parla di investimento anche " +
    "per indicare ogni scelta che sacrifica qualcosa nel presente per costruire valore " +
    "futuro: investire nella formazione, nelle relazioni, nella salute. La distinzione " +
    "fondamentale in economia è tra investimento reale (acquisto di beni capitali, " +
    "macchinari, immobili, ricerca e sviluppo) e investimento finanziario (acquisto " +
    "di azioni, obbligazioni, fondi). Nel linguaggio corrente i due piani si " +
    "sovrappongono spesso.",

  shortDefinition:
    "Impiego di risorse nel presente con l'attesa di un beneficio futuro superiore al costo; in economia, allocazione di capitali in attività o strumenti produttivi.",

  register: ["comune", "economico", "finanziario", "figurato"],
  domains: ["economia", "finanza", "management", "società"],

  etymology:
    "Dal latino medievale investire («rivestire, mettere in possesso di»), composto " +
    "di in- + vestire («vestire, coprire»). Il senso economico — \"rivestire un " +
    "capitale di una forma produttiva\" — si sviluppa nel XVII-XVIII secolo nel " +
    "linguaggio mercantile europeo.",

  examples: [
    "Comprare un appartamento da ristrutturare e affittare è un investimento immobiliare a lungo termine.",
    "La formazione professionale è il miglior investimento che si possa fare su se stessi, con un rendimento che nessun mercato finanziario può garantire.",
    "Quell'azienda ha aumentato gli investimenti in ricerca e sviluppo del 30% rispetto all'anno precedente.",
    "Non è una spesa: è un investimento — formula retorica ubiqua nel marketing, spesso usata per giustificare qualsiasi acquisto.",
  ],

  synonyms: [
    {
      term: "allocazione di capitale",
      register: "finanziario",
      context: "senso tecnico",
    },
    {
      term: "impiego di risorse",
      register: "economico",
      context: "senso generale",
    },
  ],

  antonyms: [
    {
      term: "consumo",
      register: "economico",
      context: "spesa che non genera valore futuro",
    },
    {
      term: "disinvestimento",
      register: "finanziario",
      context: "liquidazione di asset",
    },
  ],

  relatedWords: [
    "defiscalizzazione",
    "incentivo",
    "deduzione-fiscale",
    "rendimento",
    "rischio",
    "liquidita",
    "asset",
    "capitale",
    "ROI",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/investimento/",
    wiktionary: "https://it.wiktionary.org/wiki/investimento",
  },

  paroliereNote:
    "Investimento è una di quelle parole che il linguaggio del marketing ha " +
    "progressivamente svuotato per riempirla di senso promozionale. «Questo prodotto " +
    "è un investimento» si dice ormai di qualsiasi acquisto — scarpe da running, " +
    "corsi online, automobili, gioielli — indipendentemente dal fatto che generi " +
    "effettivamente un rendimento futuro. La parola ha perso precisione e guadagnato " +
    "seduzione. Vale la pena restituirle il significato tecnico: un investimento " +
    "richiede una rinuncia presente, un orizzonte temporale definito e una ragionevole " +
    "aspettativa di rendimento futuro. Se manca uno di questi tre elementi, è più " +
    "corretto parlare di spesa, anche se spesa necessaria o piacevole.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Investimento — definizione, tipi, uso figurato | Il Paroliere",
    description:
      "Cosa significa investimento in economia, finanza e nella vita quotidiana. Differenza tra investimento reale e finanziario. Nota editoriale sull'abuso del termine.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
