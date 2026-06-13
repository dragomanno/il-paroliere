// Il Paroliere — Lemma: googlare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const googlare: LemmaEntry = {
  lemma: "googlare",
  slug: "googlare",
  partOfSpeech: "verbo",
  gender: "invariabile",
  register: ["comune", "informale"],
  domains: ["comunicazione digitale", "linguistica", "neologismi", "ricerca"],

  definition:
    "Cercare informazioni su Google o, per estensione, su qualsiasi motore di " +
    "ricerca. Il verbo è formato per derivazione dal nome proprio Google con il " +
    "suffisso -are, secondo il modello produttivo italiano che trasforma i nomi di " +
    "servizi digitali in verbi della prima coniugazione. Nell’uso comune, «googlare» " +
    "implica quasi sempre una ricerca rapida finalizzata a risolvere un dubbio " +
    "immediato — «aspetta che googlo» — non una ricerca strutturata.",

  shortDefinition:
    "Cercare informazioni su Google o su un motore di ricerca; per estensione, la " +
    "ricerca rapida online per risolvere un dubbio immediato.",

  etymology:
    "Dal nome proprio Google, a sua volta da «googol» (il numero 10 alla centesima " +
    "potenza, scelto dai fondatori per evocare la vastità dell’informazione " +
    "indicizzabile), con il suffisso verbale -are. Google ha registrato il marchio " +
    "nel 1998; «googlare» si diffonde nell’italiano parlato nei primi anni Duemila.",

  examples: [
    "'Non lo so, googla' è diventata la risposta standard a qualsiasi domanda fattuale — il che ha cambiato il modo in cui ci aspettiamo di essere aiutati dagli altri.",
    "Googlare qualcuno prima di un appuntamento è diventata norma: non è stalking, è gestione dell’incertezza in un mondo in cui le informazioni sono disponibili.",
    "La differenza tra googlare e ricercare è la stessa tra guardare e leggere: uno è veloce e superficie, l’altro è lento e profondo.",
    "I bambini che crescono googlando hanno un accesso all’informazione senza precedenti e un’abitudine alla risposta istantanea che la lettura lenta fatica a soddisfare.",
  ],

  synonyms: [
    { term: "cercare online", register: "comune", note: "Formula descrittiva non legata a una piattaforma specifica." },
    { term: "ricercare", register: "comune-formale", note: "Più ampio e formale: include la ricerca strutturata, non solo la query rapida." },
  ],

  antonyms: [
    { term: "sapere a memoria", register: "comune", note: "La conoscenza interiorizzata che non richiede ricerca esterna." },
  ],

  relatedWords: ["messaggiare", "twittare"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/googlare",
  },

  paroliereNote:
    "Googlare ha cambiato il modo in cui memorizziamo — o non memorizziamo. Perché " +
    "tenere in testa qualcosa che puoi recuperare in tre secondi? La risposta, che la " +
    "neuroscienza conferma, è che il sapere recuperabile dall’esterno non è lo stesso " +
    "del sapere integrato: uno è disponibile, l’altro è tuo. L’abitudine a googlare " +
    "non ci rende stupidi, ma cambia il tipo di intelligenza che coltiviamo. Meno " +
    "deposito, più navigazione. Se sia un guadagno o una perdita dipende da cosa " +
    "vogliamo essere capaci di fare quando la rete non c’è.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "googlare — cercare su Google tra neologismo, abitudine e trasformazione cognitiva",
    description: "Che cos’è googlare: origine del verbo, uso nell’italiano contemporaneo, e come la ricerca istantanea ha cambiato il modo in cui memorizziamo.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
