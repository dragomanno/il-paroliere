// Il Paroliere — Lemma: reminiscenza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const reminiscenza: LemmaEntry = {
  lemma: "reminiscenza",
  slug: "reminiscenza",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Il ricordo vago e involontario di qualcosa di lontano nel tempo, che riaffiora " +
    "alla coscienza in modo frammentario, spesso innescato da una sensazione, " +
    "un'immagine o un'associazione imprevista. La reminiscenza non è un ricordo nitido " +
    "e volontario: è qualcosa che emerge dall'ombra della memoria senza essere chiamato, " +
    "portando con sé un senso di familiarità non completamente spiegabile. Ha una qualità " +
    "quasi sensoriale — si sente più che si pensa. In filosofia, il termine ha una radice " +
    "precisa e fondamentale: per Platone, la reminiscenza è la traduzione del greco " +
    "anamnesi (ἀνάμνησις), e costituisce il cuore di una delle teorie più audaci della " +
    "filosofia occidentale. Nel dialogo Menone, Socrate dimostra — attraverso una celebre " +
    "sequenza di domande a uno schiavo analfabeta — che è possibile «estrarre» le verità " +
    "della geometria da una mente che non le ha mai studiate. La conclusione socratica è " +
    "radicale: la conoscenza non viene dall'esterno. È già nell'anima, depositata da " +
    "un'esistenza precedente alla nascita corporea. Imparare non è acquisire qualcosa di " +
    "nuovo: è ricordare ciò che l'anima già sapeva prima di incarnarsi.",

  shortDefinition:
    "Ricordo vago e involontario che riaffiora dalla memoria; in filosofia platonica, " +
    "la teoria per cui la conoscenza è memoria di ciò che l'anima contemplò prima di " +
    "incarnarsi — esposta nel Menone, nel Fedone e nel Fedro.",

  register: ["formale", "letterario", "filosofico"],
  domains: ["psicologia", "filosofia", "letteratura", "linguistica"],

  etymology:
    "Dal latino reminiscentia, derivato di reminisci («richiamare alla mente»), " +
    "composto di re- + mens («mente»): letteralmente «portare di nuovo alla mente». " +
    "Il greco equivalente è anamnesi (ἀνάμνησις, da ana- «di nuovo» + mimnēskein " +
    "«ricordare»), che in medicina moderna indica la raccolta della storia clinica del " +
    "paziente — un'eredità terminologica diretta dalla filosofia platonica.",

  examples: [
    "«Quel profumo di legno e cera gli provocò una reminiscenza improvvisa: la casa della nonna, i pomeriggi d'estate, un senso di sicurezza ormai perduto.»",
    "«Nel Menone, Platone usa la reminiscenza per rispondere a uno dei problemi più antichi della filosofia: come è possibile cercare ciò che non si conosce? La risposta è che lo si conosce già — e lo si sta ricordando.»",
    "«Certi paesaggi della Toscana hanno reminiscenze medievali che resistono ai secoli e alle stagioni turistiche.»",
    "«Proust ha costruito su un'idea strutturalmente platonica — la reminiscenza involontaria innescata da un sapore, un odore, una luce — l'intera architettura della Recherche.»",
  ],

  synonyms: [
    {
      term: "ricordo vago",
      register: ["comune"],
      context: "memoria non nitida né volontaria",
    },
    {
      term: "memoria involontaria",
      register: ["psicologico"],
      context: "ricordo innescato senza intenzione",
    },
    {
      term: "anamnesi",
      register: ["filosofico-medico"],
      context: "in senso platonico e clinico",
    },
    {
      term: "eco mnemonica",
      register: ["letterario"],
      context: "risonanza di un ricordo lontano",
    },
  ],

  antonyms: [
    {
      term: "oblio",
      register: ["comune"],
      context: "dimenticanza totale",
    },
    {
      term: "amnesia",
      register: ["medico"],
      context: "perdita della memoria",
    },
    {
      term: "apprendimento ex novo",
      register: ["filosofico"],
      context: "in senso platonico: acquisire ciò che non si sapeva",
    },
  ],

  relatedWords: [
    "sentore",
    "presentimento",
    "memoria",
    "oblio",
    "anamnesi",
    "Platone",
    "Menone",
    "Fedone",
    "Fedro",
    "Proust",
    "inconscio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/reminiscenza/",
    wiktionary: "https://it.wiktionary.org/wiki/reminiscenza",
  },

  paroliereNote:
    "Reminiscenza è una parola che porta due vite parallele: quella quotidiana del " +
    "ricordo vago e involontario, e quella filosofica della grande teoria platonica. " +
    "Le due vite si toccano nell'esperienza comune: quando un profumo ci riporta di " +
    "colpo a un'estate di trent'anni fa, stiamo vivendo qualcosa di strutturalmente " +
    "simile a ciò che Platone descriveva come anamnesi — la conoscenza che emerge non " +
    "dall'esterno ma dall'interno, non per apprendimento ma per ri-memorazione. Proust " +
    "ne ha fatto l'architettura di un romanzo intero; la psicologia cognitiva moderna " +
    "ne ha trovato una spiegazione neuroscientifica. Tre secoli di pensiero si ritrovano " +
    "nella stessa struttura di base che Platone aveva già descritto nel Menone con quella " +
    "scena straordinaria dello schiavo e dei triangoli.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Reminiscenza — Platone, Menone, memoria involontaria | Il Paroliere",
    description:
      "Reminiscenza: il ricordo che emerge da solo e la teoria platonica dell'anamnesi " +
      "nel Menone, Fedone e Fedro. Proust e la memoria involontaria. Definizione originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
