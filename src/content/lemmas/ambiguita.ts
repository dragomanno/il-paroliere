// Il Paroliere — Lemma: ambiguità
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ambiguita: LemmaEntry = {
  lemma: "ambiguità",
  slug: "ambiguita",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Qualità di ciò che può essere letto in più modi senza che nessuno prevalga " +
    "con certezza. In linguistica si riferisce a parole o enunciati che ammettono " +
    "interpretazioni distinte; in filosofia, alla condizione di chi o cosa sfugge " +
    "a una definizione netta. Non è necessariamente un difetto: l'ambiguità può " +
    "essere una scelta, uno strumento retorico, una soglia semantica tenuta aperta " +
    "di proposito.",

  shortDefinition:
    "Condizione di chi o cosa si presta a più interpretazioni; non sempre limite, spesso risorsa stilistica o filosofica.",

  register: ["comune", "tecnico"],
  domains: ["linguistica", "filosofia", "comunicazione"],

  etymology:
    "Dal latino ambiguitas, derivato di ambiguus ('che va in due direzioni'), " +
    "composto di ambi- ('da entrambe le parti') e agere ('spingere, muovere'). " +
    "L'immagine originaria è di qualcosa che può essere spinto in direzioni opposte.",

  examples: [
    "L'ambiguità di quella frase era calcolata: lasciava aperta un'interpretazione " +
    "favorevole senza impegnarsi in nessuna.",
    "In certi testi poetici, l'ambiguità non è un difetto da correggere — è la " +
    "condizione stessa del significato.",
    "Il contratto conteneva un'ambiguità che entrambe le parti avevano fatto finta " +
    "di non vedere.",
    "L'ambiguità del suo comportamento rendeva impossibile capire se fosse " +
    "indifferenza o strategia.",
  ],

  synonyms: [
    {
      term: "equivocità",
      register: "tecnico",
      context: "più usato in logica e filosofia analitica",
    },
    {
      term: "vaghezza",
      register: "comune",
      context: "mancanza di precisione — meno intenzionale dell'ambiguità",
    },
    {
      term: "polisemia",
      register: "tecnico",
      context: "in linguistica: proprietà di una parola di avere più significati distinti",
    },
  ],

  antonyms: [
    {
      term: "univocità",
      register: "tecnico",
      context: "un solo significato possibile, senza margini di interpretazione",
    },
    {
      term: "chiarezza",
      register: "comune",
      context: "assenza di dubbi interpretativi",
    },
    {
      term: "nitidezza",
      register: "comune",
      context: "precisione che non lascia spazio a letture alternative",
    },
  ],

  relatedWords: [
    "ambiguo",
    "ambiguamente",
    "polisemia",
    "equivoco",
    "vaghezza",
    "doppio senso",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ambiguita/",
    wiktionary: "https://it.wiktionary.org/wiki/ambiguit%C3%A0",
  },

  paroliereNote:
    "L'ambiguità ha cattiva reputazione nel linguaggio comune, dove è spesso " +
    "sinonimo di doppiezza o di mancanza di coraggio nelle parole. Ma in " +
    "linguistica e in letteratura è una delle risorse più preziose: tiene aperte " +
    "le possibilità, permette al testo di vivere su più livelli, lascia al lettore " +
    "uno spazio attivo. L'ambiguità gestita è l'opposto dell'ambiguità subita: " +
    "la prima è stile, la seconda è imprecisione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Ambiguità — Il Paroliere",
    description:
      "Definizione originale di 'ambiguità': condizione di chi si presta a più " +
      "interpretazioni. Non sempre limite — spesso risorsa stilistica. Con esempi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
