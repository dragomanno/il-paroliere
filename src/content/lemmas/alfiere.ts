// Il Paroliere — Lemma: alfiere
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const alfiere: LemmaEntry = {
  lemma: "alfiere",
  slug: "alfiere",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",

  definition:
    "Nel senso generale, l'alfiere è chi porta un gonfalone o una bandiera — nella tradizione " +
    "militare medievale, la posizione di chi recava il simbolo del comando in battaglia, di " +
    "grande responsabilità e visibilità. Nel gioco degli scacchi, l'alfiere (detto anche " +
    "vescovo in alcune tradizioni) è il pezzo che si muove in diagonale su tutta la lunghezza " +
    "della scacchiera. In senso figurato, alfiere indica chi porta avanti e rappresenta una " +
    "causa, un'idea o un movimento con determinazione e visibilità: «alfiere della modernità», " +
    "«alfiere della tradizione». Nel contesto senese del Palio e delle Contrade — dove assume " +
    "il suo significato tecnico più specifico (vedi alfiere-siena per la trattazione specializzata) " +
    "— l'alfiere è il portatore e manipolatore della bandiera di Contrada durante il corteo " +
    "storico, da non chiamare mai sbandieratore. L'alfiere senese esegue con la bandiera figure " +
    "di altissima complessità tecnica, alcune delle quali sono patrimonio esclusivo della " +
    "tradizione senese: l'otto (la bandiera descrive un percorso a forma di otto nell'aria), " +
    "la penna (movimento fluido e verticale), il salto del fiocco (l'alfiere salta la bandiera " +
    "del compagno alfiere, che passa sotto le sue gambe). Gli alfieri lavorano sempre in coppia, " +
    "in dialogo coreografico con il tamburino.",

  shortDefinition:
    "Portatore di bandiera o gonfalone; pezzo degli scacchi; in senso figurato, chi rappresenta " +
    "una causa; nel contesto senese, l'esecutore di figure tecniche uniche con la bandiera di Contrada.",

  register: [
    "tecnico (lessico paliesco nel contesto senese)",
    "comune nel senso figurato",
    "storico-militare",
  ],
  domains: ["tradizione senese", "Palio", "storia", "arte performativa", "scacchi"],

  etymology:
    "Dall'arabo al-fīl («l'elefante»), passato allo spagnolo alférez («portabandiera militare») " +
    "e da lì all'italiano. Nella tradizione militare medievale, l'alfiere era chi portava il " +
    "gonfalone in battaglia — una posizione di grande responsabilità e visibilità.",

  examples: [
    "Gli alfieri della Contrada del Nicchio eseguirono il salto del fiocco in perfetta sincronia: la bandiera del primo passò sotto le gambe del secondo con una precisione da brivido.",
    "Non chiamarli sbandieratori: a Siena sono alfieri, e la differenza non è solo semantica.",
    "La figura dell'otto è la prima che ogni alfiere impara da bambino nella scuola di Contrada: sembra semplice, ma richiede anni per essere fatta bene.",
  ],

  synonyms: [
    {
      term: "portabandiera",
      register: "comune",
      context: "generico, insufficiente nel contesto senese",
    },
    {
      term: "gonfaloniere",
      register: "storico",
      context: "termine storico equivalente",
    },
  ],

  antonyms: [
    {
      term: "sbandieratore",
      register: "comune",
      context: "⚠️ termine da non usare nel contesto senese: è riduttivo e generico",
    },
  ],

  relatedWords: [
    "alfiere-siena",
    "tamburino",
    "correttore",
    "Palio di Siena",
    "Contrada",
    "corteo storico",
    "bandiera",
    "otto",
    "penna",
    "salto del fiocco",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/alfiere/",
    wiktionary: "https://it.wiktionary.org/wiki/alfiere",
  },

  paroliereNote:
    "La precisione terminologica intorno all'alfiere non è pignoleria: è il segno di un rispetto " +
    "per una tradizione viva. Chiamare un alfiere senese «sbandieratore» è come chiamare un " +
    "direttore d'orchestra «suonatore»: tecnicamente non sbagliato, ma profondamente inadeguato " +
    "alla realtà di ciò che quella persona fa. Le figure che gli alfieri senesi eseguono non si " +
    "trovano in nessun manuale di sbandieramento generico: sono nate, si sono sviluppate e vivono " +
    "esclusivamente dentro le Contrade, trasmesse di generazione in generazione con la stessa " +
    "cura con cui si trasmettono i colori e le alleanze. Per la trattazione specializzata " +
    "dell'alfiere nel contesto paliesco, vedi alfiere-siena.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Alfiere — Palio di Siena, figure, otto, salto del fiocco | Il Paroliere",
    description:
      "L'alfiere a Siena non è uno sbandieratore. Le figure uniche al mondo: l'otto, " +
      "la penna, il salto del fiocco. Definizione tecnica con nota sulla tradizione.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
