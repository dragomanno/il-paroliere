// Il Paroliere — Lemma: prestito linguistico
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const prestitoLinguistico: LemmaEntry = {
  lemma: "prestito linguistico",
  slug: "prestito-linguistico",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  register: ["tecnico", "comune"],
  domains: ["linguistica", "linguaggio"],

  definition:
    "Parola o espressione che una lingua acquisisce da un'altra, integrandola nel proprio lessico senza tradurla — a differenza del calco, che ne traduce invece la struttura. Il prestito può essere non adattato, quando la forma resta identica o quasi a quella originaria (weekend, computer, sushi), oppure adattato, quando viene modificato foneticamente e morfologicamente per aderire alle regole della lingua ricevente (dal francese *garage* è nato l'italiano 'garage', pronunciato però all'italiana, e dall'inglese *to click* è nato il verbo 'cliccare', regolarmente coniugato). I prestiti si classificano anche in base alla lingua di provenienza — anglicismi dall'inglese, francesismi dal francese, germanismi dal tedesco, iberismi dallo spagnolo — e in base al dominio semantico che colmano: gastronomia, tecnologia, moda ed economia sono tra i campi più permeabili ai prestiti nella storia dell'italiano.",

  shortDefinition:
    "Parola importata da un'altra lingua senza tradurla, adattata o non adattata alla lingua ricevente — anglicismi, francesismi, germanismi, ecc.",

  etymology:
    "Calco semantico dal francese *emprunt linguistique*: 'prestito', dal latino *praestare* «fornire, mettere a disposizione», nel senso figurato di una lingua che 'presta' una propria parola a un'altra.",

  examples: [
    "'Weekend' è un prestito non adattato dall'inglese, usato in italiano nella sua forma originaria invariata.",
    "'Bistecca' è un prestito adattato dall'inglese 'beef steak', ormai completamente italianizzato nella grafia e nella pronuncia.",
    "L'economia italiana è piena di prestiti dall'inglese come 'marketing', 'austerity' o 'spread', spesso privi di un equivalente italiano altrettanto conciso.",
    "Termini come 'baguette' o 'atelier' sono francesismi entrati stabilmente nel vocabolario italiano legato a gastronomia e moda.",
  ],

  synonyms: [
    { term: "forestierismo", register: "tecnico", note: "Sinonimo pressoché completo, spesso preferito nei manuali di linguistica italiana." },
    { term: "anglicismo", register: "tecnico", note: "Caso specifico di prestito linguistico dall'inglese — non sinonimo generale ma sottocategoria per lingua di origine." },
  ],

  antonyms: [
    { term: "calco", register: "tecnico", note: "Trasferisce la struttura semantica traducendola, invece di importare la forma della parola straniera." },
    { term: "parola autoctona", register: "comune", note: "Termine nato e sviluppato interamente all'interno della lingua ricevente, senza derivazione da un'altra lingua." },
  ],

  relatedWords: ["calco", "neologismo", "burocratese"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/prestito/",
    wiktionary: "https://it.wiktionary.org/wiki/prestito",
  },

  paroliereNote:
    "Il prestito linguistico è spesso oggetto di battaglie identitarie — c'è chi lo considera un impoverimento della lingua nazionale e chi lo vede come segno naturale di vitalità e contatto culturale. Dal punto di vista storico, però, l'italiano stesso è in larghissima parte un prodotto di prestiti stratificati nei secoli: dal latino, dal greco, dall'arabo, dal francese, dallo spagnolo, e oggi massicciamente dall'inglese. Nessuna lingua viva è mai stata un sistema chiuso; il prestito non è un'anomalia della storia linguistica, ne è semmai il motore ordinario.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "prestito linguistico — significato, anglicismi, esempi",
    description:
      "Che cos'è il prestito linguistico: parole importate da un'altra lingua, adattate o non adattate — anglicismi, francesismi e altri esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
