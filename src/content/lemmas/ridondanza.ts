// Il Paroliere — Lemma: ridondanza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ridondanza: LemmaEntry = {
  lemma: "ridondanza",
  slug: "ridondanza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "comune"],
  domains: ["linguaggio", "informatica", "ingegneria"],

  definition:
    "Nel linguaggio comune, l'uso di più parole o espressioni di quante siano strettamente necessarie per comunicare un concetto — una sovrabbondanza che, a seconda del contesto, può essere un difetto stilistico (dire la stessa cosa due volte con parole diverse, senza aggiungere informazione) oppure un tratto naturale della lingua parlata, che è per sua struttura ampiamente ridondante rispetto a un codice puramente logico. In informatica e teoria dell'informazione, il termine assume invece un valore tecnico positivo: ridondanza è l'aggiunta deliberata di informazione supplementare — bit di controllo, copie di backup, componenti duplicati — allo scopo preciso di rilevare o correggere errori di trasmissione, o di garantire la continuità di funzionamento di un sistema anche in caso di guasto di una sua parte (ridondanza hardware, ridondanza di rete).",

  shortDefinition:
    "Eccesso di parole rispetto al necessario, spesso un difetto stilistico; in informatica, informazione supplementare aggiunta apposta per rilevare o correggere errori.",

  etymology:
    "Dal latino *redundantia*, da *redundare* «traboccare, essere in eccesso», composto da *red-* «indietro, di nuovo» e *undare* «ondeggiare, fluire»: l'immagine di un'onda che rifluisce oltre il necessario.",

  examples: [
    "'Salire in su' è una ridondanza linguistica comune: il verbo 'salire' contiene già il senso della direzione.",
    "Il linguaggio naturale è largamente ridondante — questa sovrabbondanza è ciò che ci permette di capire una frase anche se manca una parola o c'è rumore di fondo.",
    "In un sistema RAID, la ridondanza dei dischi consente di recuperare le informazioni anche se uno dei dischi si guasta.",
    "Il codice a correzione d'errore aggiunge ridondanza al messaggio trasmesso, così il ricevente può rilevare e correggere gli errori senza dover richiedere una nuova trasmissione.",
  ],

  synonyms: [
    { term: "pleonasmo", register: "tecnico-linguistico", note: "Nel senso stilistico, quasi sinonimo: ripetizione di un concetto già espresso in altra forma nella stessa frase." },
    { term: "sovrabbondanza", register: "comune", note: "Termine generico per l'eccesso quantitativo, applicabile sia al linguaggio sia a sistemi tecnici." },
  ],

  antonyms: [
    { term: "concisione", register: "comune", note: "Nel senso stilistico, l'opposto: dire il necessario con il minor numero di parole possibile." },
    { term: "codice minimo", register: "tecnico", note: "Nel senso informatico, un sistema di codifica privo di margine ridondante — più efficiente ma più fragile agli errori." },
  ],

  relatedWords: ["perifrasi", "neologismo", "burocratese"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/ridondanza/",
    wiktionary: "https://it.wiktionary.org/wiki/ridondanza",
  },

  paroliereNote:
    "La ridondanza è un caso raro in cui lo stesso identico concetto — dire più di quanto serva — cambia segno morale passando da un dominio all'altro. In un tema scolastico, la ridondanza è un errore da correggere con la matita rossa. In un sistema informatico critico, la sua assenza sarebbe l'errore: un server senza ridondanza è un server che, al primo guasto, perde tutto. Vale la pena ricordare che anche il linguaggio umano, con tutte le sue ripetizioni apparentemente inutili, deve alla propria ridondanza la capacità di essere capito anche quando qualcosa va storto — un rumore di fondo, una distrazione, una parola mancante.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "ridondanza — significato linguistico e informatico",
    description:
      "Che cos'è la ridondanza tra difetto stilistico nel linguaggio comune e risorsa tecnica in informatica per la correzione degli errori.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
