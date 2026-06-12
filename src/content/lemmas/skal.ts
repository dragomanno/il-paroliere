// Il Paroliere — Lemma: skål
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const skal: LemmaEntry = {
  lemma: "skål",
  slug: "skal",
  partOfSpeech: "locuzione (prestito dallo svedese)",

  definition:
    "Brindisi tipico delle lingue scandinave — svedese, norvegese, danese — pronunciato " +
    "alzando il bicchiere e guardando negli occhi gli altri presenti prima di bere. " +
    "In italiano è usato come riferimento culturale al modo nordico di brindare, spesso " +
    "con connotazione di convivialità autentica e un tocco di nordismo affettuoso.",

  shortDefinition:
    "Brindisi scandinavo pronunciato alzando il bicchiere e guardando negli occhi gli altri commensali prima di bere.",

  register: ["colloquiale", "comune"],
  domains: ["svedese", "cultura", "galateo", "convivialità"],

  etymology:
    "Dallo svedese skål (coppa, ciotola), con richiamo all'antica usanza di brindare " +
    "condividendo la stessa coppa. La radice germanica è condivisa con il norvegese e il " +
    "danese skål. Secondo alcune interpretazioni, il termine richiama anche il cranio — " +
    "la tazza ricavata dal cranio del nemico vinto, usata dai guerrieri nordici secondo " +
    "la tradizione letteraria medievale. L'etimologia della «coppa» è però quella più " +
    "accreditata dai linguisti.",

  examples: [
    "«Skål!» disse alzando il bicchiere di acquavite, con quello sguardo fisso che i nordici considerano parte del rito.",
    "Ci spiegò che dire skål senza guardare negli occhi è quasi un'offesa — e da quel momento cambiammo modo di brindare.",
    "In Italia usiamo skål quando vogliamo dare un tono — nordico, autentico, leggermente solenne.",
  ],

  synonyms: [
    {
      term: "na zdarovje",
      register: "comune",
      context: "equivalente russo, con analogo uso come prestito culturale in italiano",
    },
    {
      term: "Cheers",
      register: "colloquiale",
      context: "equivalente anglofono, più informale e cosmopolita",
    },
    {
      term: "Zum Wohl",
      register: "comune",
      context: "equivalente tedesco formale",
    },
    {
      term: "salute",
      register: "comune",
      context: "il brindisi italiano per eccellenza, più immediato e privo di rituali",
    },
  ],

  antonyms: [],

  relatedWords: ["na zdarovje", "salute", "alla salute", "brindisi", "Zum Wohl", "Cheers"],

  sourceLinks: {
    wiktionary: "https://sv.wiktionary.org/wiki/sk%C3%A5l",
  },

  paroliereNote:
    "Il rituale del contatto visivo durante lo skål non è un vezzo folkloristico: in molte " +
    "culture nordiche evitare lo sguardo mentre si brinda è considerato maleducato, quasi " +
    "un segno di disonestà. Un piccolo gesto che racconta molto su come una cultura " +
    "costruisce la fiducia. La serie «Borgen», «The Bridge» e le produzioni scandinave " +
    "hanno reso skål familiare a un pubblico italiano che non l'avrebbe mai cercato in un " +
    "dizionario — è entrato nell'uso quotidiano per osmosi culturale, non per studio.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Skål — definizione, etimologia e rituale | Il Paroliere",
    description:
      "Skål: il brindisi scandinavo con contatto visivo obbligatorio, dall'antico uso " +
      "della coppa condivisa. Definizione originale, etimologia e confronto con altri brindisi.",
  },

  createdAt: "2026-05-25",
  updatedAt: "2026-06-12",
};
