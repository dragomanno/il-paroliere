// Il Paroliere — Lemma: diatriba
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const diatriba: LemmaEntry = {
  lemma: "diatriba",
  slug: "diatriba",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Critica serrata e prolungata, di solito verbale, condotta con argomenti " +
    "pungenti e tono polemico. Il termine viene dal greco antico, dove indicava " +
    "una forma di dissertazione filosofico-morale; nell'uso contemporaneo ha " +
    "perso quella nobiltà e designa quasi sempre uno scontro logorante, in cui " +
    "prevale l'attacco sull'argomentazione.",

  shortDefinition:
    "Scontro verbale acceso e prolungato, condotto con critiche pungenti e tono polemico; quasi sempre a connotazione negativa.",

  register: ["comune", "letterario"],
  domains: ["retorica", "relazioni", "comunicazione"],

  etymology:
    "Dal greco diatribé, 'passatempo, dissertazione', derivato di diatríbein " +
    "('consumare il tempo, discutere'). In origine indicava il genere letterario " +
    "della dissertazione cinico-stoica; il senso polemico si è consolidato " +
    "nell'uso moderno.",

  examples: [
    "La riunione si trasformò rapidamente in una diatriba tra due posizioni " +
    "che non si volevano incontrare.",
    "Quella diatriba sui metodi durava da mesi, consumando energie che avrebbero " +
    "potuto servire al progetto.",
    "Non era un confronto — era una diatriba: nessuno ascoltava, tutti " +
    "aspettavano il momento per attaccare.",
    "Le sue lettere erano famose per le diatribe contro i contemporanei, " +
    "condotte con una precisione quasi chirurgica.",
  ],

  synonyms: [
    {
      term: "polemica",
      register: "comune",
      context: "disputa pubblica su posizioni contrapposte — più istituzionale di diatriba",
    },
    {
      term: "disputa",
      register: "comune",
      context: "confronto su posizioni divergenti — più neutro nel tono",
    },
    {
      term: "battibecco",
      register: "colloquiale",
      context: "litigio verbale rapido e vivace — meno prolungato e meno serio",
    },
  ],

  antonyms: [
    {
      term: "dialogo",
      register: "comune",
      context: "scambio aperto in cui si è disposti ad ascoltare e cambiare posizione",
    },
    {
      term: "accordo",
      register: "comune",
      context: "convergenza su una posizione comune — esito opposto della diatriba",
    },
  ],

  relatedWords: [
    "polemica",
    "disputa",
    "litigio",
    "contesa",
    "alterco",
    "confronto",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/diatriba/",
    wiktionary: "https://it.wiktionary.org/wiki/diatriba",
  },

  paroliereNote:
    "È interessante come diatriba abbia percorso la strada inversa rispetto a " +
    "molte parole nobili: nasce come genere letterario di alto profilo — Diogene, " +
    "Epitteto, i cinici — e finisce per indicare uno scambio logorante tra " +
    "persone che non si ascoltano. La strada dalla filosofia all'astio quotidiano " +
    "è più breve di quanto si pensi.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Diatriba — Il Paroliere",
    description:
      "Definizione originale di 'diatriba': scontro verbale acceso e prolungato. " +
      "Dal greco filosofico all'uso polemico moderno. Con esempi, sinonimi ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
