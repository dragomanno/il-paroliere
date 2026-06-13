// Il Paroliere — Lemma: twittare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const twittare: LemmaEntry = {
  lemma: "twittare",
  slug: "twittare",
  partOfSpeech: "verbo",
  gender: "invariabile",
  register: ["comune", "informale", "giornalistico"],
  domains: ["comunicazione digitale", "linguistica", "neologismi", "media"],

  definition:
    "Pubblicare un messaggio breve su Twitter / X, la piattaforma di microblogging. " +
    "Come googlare e whatsappare, è formato per derivazione dal nome del servizio con " +
    "il suffisso -are. Per estensione, nell’uso comune indica anche la comunicazione " +
    "pubblica rapida e frammentata tipica della piattaforma — indipendentemente dallo " +
    "strumento tecnico. Il verbo porta con sé tutta la specificità del formato: " +
    "brevità, pubblico ampio, potenziale di viralità, reazione immediata.",

  shortDefinition:
    "Pubblicare un messaggio breve su Twitter/X; per estensione, la comunicazione " +
    "pubblica rapida e frammentata tipica del microblogging.",

  etymology:
    "Dal nome proprio Twitter (dall’inglese to twitter «cinguettare, chiacchierare», " +
    "da un’onomatopea che imita il verso degli uccelli), con il suffisso verbale " +
    "italiano -are. Twitter nasce nel 2006; «twittare» entra nell’italiano parlato " +
    "e scritto negli anni successivi, consolidandosi nel decennio 2010–2020.",

  examples: [
    "Il politico twittava alle tre di notte: il momento e il tono dicevano tutto su quanto quella comunicazione fosse misurata.",
    "Twittare non è scrivere: i 280 caratteri impongono una sintesi che o è brillante o è fuorviante, senza molte vie di mezzo.",
    "La diplomazia twittata ha introdotto una categoria nuova: la dichiarazione pubblica non verificabile come comunicazione ufficiale di uno Stato.",
    "L’ha twittato è diventato equivalente di 'l’ha detto in pubblico' — il che dice qualcosa su come Twitter ha ridefinito lo spazio pubblico nel decennio scorso.",
  ],

  synonyms: [
    { term: "postare", register: "comune-informale", note: "Più generico: pubblicare qualsiasi tipo di contenuto su qualsiasi piattaforma." },
    { term: "cinguettare", register: "giornalistico-ironico", note: "Calco dell’etimologia inglese, usato spesso con sfumatura ironica." },
  ],

  antonyms: [
    { term: "tacere", register: "comune", note: "Il non-twittare come scelta di non occupare spazio pubblico digitale." },
  ],

  relatedWords: ["messaggiare", "googlare"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/twittare",
  },

  paroliereNote:
    "Twittare ha fatto qualcosa di insolito: ha reso la brevità un formato con le sue " +
    "regole retoriche, non semplicemente un limite tecnico. Chi padroneggia il tweet " +
    "padroneggia una forma che ha più in comune con l’aforisma o con il titolo di " +
    "giornale che con la prosa. Il problema è quando questo formato si applica a " +
    "tutto: quando le politiche si twittano, quando i lutti si twittano, quando la " +
    "complessità deve passare per 280 caratteri o sparire. La forma impone la sua " +
    "logica al contenuto — e la logica del tweet è spesso quella dello shock, non " +
    "della comprensione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "twittare — pubblicare su Twitter tra neologismo, formato e potere della brevità",
    description: "Che cos’è twittare: origine del verbo, specificità del formato Twitter, e come il microblogging ha ridefinito la comunicazione pubblica.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
