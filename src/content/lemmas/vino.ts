// Il Paroliere — Lemma: vino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vino: LemmaEntry = {
  lemma: "vino",
  slug: "vino",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "La bevanda alcolica ottenuta dalla fermentazione del mosto d'uva — il succo degli acini " +
    "di vitigno — ad opera di lieviti che trasformano gli zuccheri in alcol etilico e anidride " +
    "carbonica. È uno dei prodotti culturali e agricoli più identitari dell'Italia, che è il " +
    "primo produttore mondiale per volume ed è tra i primi per valore e qualità. Il sistema di " +
    "certificazione italiano ed europeo si articola su quattro livelli. DOCG — Denominazione " +
    "di Origine Controllata e Garantita: il livello più alto; le DOCG italiane sono circa 77 " +
    "(2024). Il vino deve provenire interamente da una zona geografica definita, essere prodotto " +
    "con vitigni specifici, rispettare rese per ettaro massime, superare una commissione di " +
    "degustazione obbligatoria e riportare il contrassegno di stato sulla fascetta. Esempi: " +
    "Barolo DOCG, Brunello di Montalcino DOCG, Chianti Classico DOCG, Amarone DOCG, Prosecco " +
    "di Conegliano-Valdobbiadene DOCG. DOC — Denominazione di Origine Controllata: le DOC " +
    "italiane sono circa 341 (2024), meno restrittive delle DOCG ma comunque legate a " +
    "disciplinari di produzione. IGT — Indicazione Geografica Tipica: corrispondente italiano " +
    "dell'europeo IGP nel settore vino; i vitigni e le pratiche sono molto più liberi. " +
    "Paradossalmente, alcuni dei vini italiani più costosi e prestigiosi sono IGT: i " +
    "Supertuscans (Sassicaia, Tignanello, Ornellaia) usano vitigni internazionali non previsti " +
    "dai disciplinari tradizionali toscani, scegliendo l'IGT per mantenere libertà produttiva. " +
    "DOP — Denominazione di Origine Protetta: il termine europeo che comprende sia DOCG sia DOC " +
    "a livello comunitario.",

  shortDefinition:
    "Bevanda alcolica da fermentazione del mosto d'uva; in Italia, classificata secondo " +
    "DOCG, DOC, IGT e DOP europeo. Prodotto identitario del territorio.",

  register: ["comune", "tecnico in enologia"],
  domains: ["enologia", "agricoltura", "cultura italiana", "economia", "chimica"],

  etymology:
    "Dal latino vinum, di origine indoeuropea, affine al greco oinos. La radice *win- " +
    "è comune a molte lingue europee: wine (inglese), Wein (tedesco), vin (francese e " +
    "scandinavo). Uno dei prestiti più antichi della civiltà mediterranea.",

  examples: [
    "«Il Brunello di Montalcino DOCG non può essere commercializzato prima di cinque anni dalla vendemmia — sei per la Riserva: è uno dei periodi di affinamento più lunghi tra i vini italiani.»",
    "«Il Sassicaia è tecnicamente un IGT Bolgheri, ma è considerato tra i grandi vini italiani: la classificazione formale non sempre coincide con la qualità reale.»",
    "«La differenza tra un Chianti DOC e un Chianti Classico DOCG non è solo geografica: è di disciplinare, di rese, di controlli, di storia.»",
  ],

  relatedWords: [
    "vitigno",
    "vinaggio",
    "uvaggio",
    "vendemmia",
    "olio-doliva",
    "sapidità",
    "mosto",
    "fermentazione",
    "cantina",
    "annata",
    "enologia",
    "DOCG",
    "DOC",
    "IGT",
    "DOP",
    "IGP",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/vino/",
    wiktionary: "https://it.wiktionary.org/wiki/vino",
  },

  paroliereNote:
    "Il sistema di certificazione del vino italiano è uno dei più complessi e articolati al " +
    "mondo, e spesso genera confusione anche tra gli appassionati. Il punto paradossale dei " +
    "Supertuscans va sottolineato: alcuni dei vini italiani più celebri e costosi — Sassicaia, " +
    "Tignanello, Ornellaia — scelgono deliberatamente la classificazione più bassa (IGT) per " +
    "mantenere libertà nei vitigni usati. La qualità è nel bicchiere, non nell'etichetta. " +
    "Il sistema DOCG garantisce controlli rigorosi, ma non garantisce automaticamente che il " +
    "vino sia migliore di un buon IGT.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Vino — DOCG, DOC, IGT, DOP, IGP: guida completa | Il Paroliere",
    description:
      "Cosa significano DOCG, DOC, IGT, DOP, IGP per il vino italiano. Differenze, esempi, " +
      "Supertuscans. Guida completa alle certificazioni con definizioni originali.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
