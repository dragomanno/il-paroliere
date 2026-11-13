// Il Paroliere — Lemma: ritenuta d'acconto
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ritenutaDacconto: LemmaEntry = {
  lemma: "ritenuta d'acconto",
  slug: "ritenuta-dacconto",
  partOfSpeech: "locuzione sostantivale",
  gender: "femminile",
  definition: "Somma che chi paga un compenso trattiene e versa all'erario come anticipo dell'imposta dovuta da chi lo riceve, che la scala poi dall'imposta complessiva nella dichiarazione dei redditi. Sui compensi di lavoro autonomo pagati a residenti è pari al 20%. Si distingue dalla ritenuta a titolo d'imposta, che chiude definitivamente il debito fiscale su quel reddito, come avviene per gli interessi dei conti correnti.",
  shortDefinition: "Parte di un compenso che chi paga trattiene e versa al fisco come anticipo dell'imposta dovuta da chi lo riceve.",
  register: [
    "tecnico-fiscale",
    "comune",
  ],
  domains: [
    "fisco",
    "diritto tributario",
    "lavoro autonomo",
  ],
  etymology: "Ritenuta è il participio femminile sostantivato di ritenere, dal latino retinere «trattenere», composto di re- e tenere. Acconto viene dalla locuzione «a conto», cioè in conto di una somma maggiore: la ritenuta è un pagamento parziale, da conteggiare nel totale.",
  examples: [
    "Su un onorario di 1.000 euro lo studio ha pagato al grafico 800 euro e ha versato allo Stato 200 euro di ritenuta d'acconto.",
    "Se il committente è un'impresa, anche sulla prestazione occasionale si applica la ritenuta d'acconto del 20%.",
    "I professionisti in regime forfettario non subiscono la ritenuta d'acconto e lo indicano in fattura.",
  ],
  synonyms: [
    {
      term: "ritenuta alla fonte",
      register: "tecnico-fiscale",
      context: "formula più ampia, che comprende anche le ritenute a titolo d'imposta",
    },
  ],
  antonyms: [
    {
      term: "ritenuta a titolo d'imposta",
      register: "tecnico-fiscale",
      context: "ritenuta definitiva, che esaurisce il debito d'imposta su quel reddito",
    },
  ],
  relatedWords: [
    "sostituto-dimposta",
    "acconto-fiscale",
    "cud",
    "irpef",
    "regime-fiscale",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ritenuta/",
    wiktionary: "https://it.wiktionary.org/wiki/ritenuta",
  },
  paroliereNote: "Chi lavora in proprio vive spesso la ritenuta d'acconto come una tassa in più. Non lo è: è un'imposta pagata in anticipo, che torna nei conti al momento della dichiarazione, quando può anche trasformarsi in un credito da recuperare. Per chi ha redditi bassi, o molte spese da detrarre, il 20% trattenuto può superare l'imposta effettivamente dovuta.",
  seo: {
    title: "Ritenuta d'acconto — significato, 20%, esempi | Il Paroliere",
    description: "Che cos'è la ritenuta d'acconto: la parte di un compenso trattenuta e versata al fisco come anticipo d'imposta. Il 20% sul lavoro autonomo e le esclusioni.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
