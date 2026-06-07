// Il Paroliere — Lemma: trebbiatrice
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const trebbiatrice: LemmaEntry = {
  lemma: "trebbiatrice",
  slug: "trebbiatrice",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Macchina agricola che separa il grano (o altri cereali) dalla paglia e dalla pula — " +
    "cioè separa il chicco commestibile dal resto della pianta dopo il taglio. Il processo si " +
    "chiama trebbiatura (o battitura) ed era, fino alla meccanizzazione del XX secolo, uno dei " +
    "momenti più faticosi e socialmente rilevanti del calendario agricolo: richiedeva la " +
    "collaborazione di intere comunità, una forza lavoro enorme, e si concludeva spesso con " +
    "feste e celebrazioni comunitarie. La trebbiatrice moderna — oggi quasi sempre integrata " +
    "nella mietitrebbiatrice, che miete e trebbia in un'unica operazione continua — funziona " +
    "attraverso un sistema di battitori rotanti (cilindro battitore) che separano i chicchi " +
    "dalle spighe, seguito da un sistema di scuotitori e ventilatori che separano il grano " +
    "pesante dalla paglia e dalla pula leggera. In Toscana, la trebbiatura (chiamata " +
    "popolarmente la trebbia) era un momento comunitario di straordinaria importanza: i " +
    "contadini di più poderi si aiutavano vicendevolmente, la trebbiatrice passava da fattoria " +
    "a fattoria, e la giornata si concludeva con il pasto della trebbia — uno dei pasti più " +
    "abbondanti dell'anno, simbolo di fatica condivisa e raccolto ottenuto.",

  shortDefinition:
    "Macchina che separa i chicchi di cereale dalla paglia e dalla pula; oggi quasi sempre " +
    "integrata nella mietitrebbiatrice.",

  register: ["tecnico-agricolo", "comune nel contesto rurale toscano e italiano"],
  domains: ["agricoltura", "meccanica agraria", "storia del lavoro", "cultura rurale"],

  etymology:
    "Da trebbiare (variante di tribulare, con influenza del latino tribulum, lo strumento a " +
    "denti usato per battere il grano) + suffisso -trice.",

  examples: [
    "La trebbiatrice arrivava in fattoria a luglio: era l'evento dell'estate, tutta la famiglia e i vicini si mobilitavano per la trebbia.",
    "La moderna mietitrebbiatrice fa in poche ore quello che richiedeva giorni di lavoro manuale e una trebbiatrice trainata da buoi.",
    "Il pasto della trebbia era il più abbondante dell'anno: la fatica condivisa si celebrava con cibo condiviso, e i contadini di poderi diversi si ritrovavano intorno alla stessa tavola.",
  ],

  synonyms: [
    {
      term: "mietitrebbiatrice",
      register: "tecnico",
      context: "il sistema integrato moderno che miete e trebbia",
    },
    {
      term: "battitrice",
      register: "regionale",
      context: "termine alternativo regionale",
    },
  ],

  relatedWords: [
    "seminatrice",
    "vendemmia",
    "mietitura",
    "trebbiatura",
    "grano",
    "cereali",
    "civiltà contadina",
    "mezzadria",
    "Toscana",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/trebbiatrice/",
    wiktionary: "https://it.wiktionary.org/wiki/trebbiatrice",
  },

  paroliereNote:
    "La trebbia è uno di quei momenti della civiltà contadina italiana che la meccanizzazione " +
    "ha sostituito senza poter sostituire il suo valore sociale. La trebbiatrice passava da " +
    "fattoria a fattoria non solo come macchina: portava con sé reti di solidarietà, scambi di " +
    "lavoro, occasioni di incontro tra famiglie. Il pasto della trebbia era il momento in cui " +
    "quella fatica collettiva si trasformava in festa. Non è nostalgia: è la documentazione di " +
    "un sistema di welfare informale che la modernità ha eliminato senza rimpiazzo equivalente.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Trebbiatrice — macchina, trebbiatura, storia rurale toscana | Il Paroliere",
    description:
      "Cos'è la trebbiatrice, come funziona, il rito della trebbia in Toscana. Dalla " +
      "battitura manuale alla mietitrebbiatrice. Definizione con nota culturale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
