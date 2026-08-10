// Il Paroliere — Lemma: kronos
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const kronos: LemmaEntry = {
  lemma: "kronos",
  slug: "kronos",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico-filosofico", "colto"],
  domains: ["filosofia", "linguistica", "letteratura"],

  definition:
    "Nel pensiero greco antico, il tempo cronologico: quello che scorre in " +
    "modo lineare, sequenziale e misurabile — ore, giorni, anni — indifferente " +
    "al contenuto degli eventi che contiene. È il tempo dell'orologio e del " +
    "calendario, lo stesso per chiunque lo misuri, che si contrappone " +
    "concettualmente a → kairos, il tempo qualitativo del momento opportuno. " +
    "Kronos era anche il nome di una divinità della mitologia greca, il " +
    "titano padre di Zeus, associato — complice una parziale sovrapposizione " +
    "fonetica successiva col dio Chronos personificazione del tempo — " +
    "all'immagine del tempo divoratore che consuma ogni cosa generata. " +
    "Nell'uso filosofico e critico contemporaneo, 'tempo di kronos' o 'tempo " +
    "cronologico' indica per estensione qualunque scansione oggettiva e " +
    "quantitativa del tempo, distinta dal tempo vissuto soggettivamente.",

  shortDefinition:
    "Il tempo cronologico, lineare e misurabile — ore, giorni, anni — " +
    "contrapposto nella filosofia greca a → kairos, il tempo qualitativo " +
    "dell'occasione opportuna.",

  etymology:
    "Dal greco Krónos (Κρόνος), nome del titano figlio di Urano e Gea nella " +
    "mitologia greca, la cui etimologia resta incerta e dibattuta tra i " +
    "filologi: alcuni la collegano a kraínō («compiere, portare a termine»), " +
    "altri a una radice indoeuropea legata all'idea di taglio o mietitura " +
    "(coerente col mito della falce con cui Crono evira Urano), altri ancora " +
    "la considerano di origine pre-greca e non etimologizzabile con certezza. " +
    "Il nesso con chrónos (χρόνος, «tempo») — da cui derivano " +
    "'cronologia', 'cronometro', 'sincrono' — è etimologicamente distinto: le " +
    "due parole greche sono omofone solo in parte e non condividono radice, " +
    "ma la tradizione popolare e iconografica le ha sovrapposte già in epoca " +
    "ellenistica, fissando l'immagine del 'tempo divoratore' (Kronos che " +
    "divora i propri figli) come metafora del logorio di chrónos.",

  examples: [
    "Il romanzo racconta la stessa giornata da tre prospettive diverse: sul " +
      "piano di kronos sono sempre le stesse otto ore, ma la densità di senso " +
      "che ciascun personaggio vi riversa le rende irriducibili l'una all'altra.",
    "In terapia si distingue spesso il tempo di kronos — quanti mesi sono " +
      "passati dal lutto — dal tempo soggettivo dell'elaborazione, che non " +
      "segue alcuna scansione regolare.",
    "Gli algoritmi di scheduling ottimizzano kronos: minuti, risorse, " +
      "sequenze — ma nessun algoritmo può decidere quando un'idea sia " +
      "arrivata al momento di → kairos giusto per essere proposta.",
    "\"Il tempo passa comunque\", diceva, riferendosi implicitamente a kronos " +
      "— ma la frase suonava vuota a chi sapeva che il vero problema era " +
      "cogliere l'occasione, non contare i giorni.",
  ],

  synonyms: [
    {
      term: "tempo cronologico",
      register: "tecnico",
      context: "resa italiana corrente del concetto, usata anche fuori da contesti specificamente filosofici",
    },
    {
      term: "tempo lineare",
      register: "filosofico",
      context: "enfatizza la sequenzialità irreversibile, in opposizione a concezioni cicliche o qualitative del tempo",
    },
  ],

  antonyms: [
    {
      term: "kairos",
      register: "tecnico-filosofico",
      context: "il tempo qualitativo dell'occasione, opposto strutturale nella coppia concettuale greca",
    },
  ],

  relatedWords: [
    "kairos",
    "aion",
    "cronologia",
    "tempo",
    "cronometro",
    "divenire",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/Crono",
  },

  paroliereNote:
    "La coppia kronos/kairos è uno degli strumenti concettuali più utili — e " +
    "più spesso banalizzati nella divulgazione pop — ereditati dal pensiero " +
    "greco. Vale la pena essere precisi: kronos non è 'il tempo cattivo' e " +
    "kairos 'il tempo buono', come suggerisce certa retorica motivazionale. " +
    "Sono due dimensioni compresenti e complementari, non alternative morali. " +
    "Ogni azione umana accade necessariamente dentro kronos — non si sfugge " +
    "all'orologio — ma solo alcuni istanti di kronos diventano kairos, cioè " +
    "occasioni colte o mancate. Confondere le due nozioni, trattandole come " +
    "sinonimi intercambiabili di 'tempo' in senso generico, è l'errore più " +
    "comune quando il lemma compare fuori da un contesto filosofico rigoroso.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Kronos — il tempo cronologico nella filosofia greca | Il Paroliere",
    description:
      "Che cos'è kronos: tempo lineare e misurabile nel pensiero greco, " +
      "differenza da kairos, origine mitologica e uso filosofico contemporaneo.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
