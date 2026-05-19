// Il Paroliere — Lemma: lacuna
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const lacuna: LemmaEntry = {
  lemma: "lacuna",
  slug: "lacuna",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Assenza che si avverte: il punto mancante in un testo, in una legge, in una " +
    "lingua o in un bagaglio di conoscenze. In filologia indica la parte perduta " +
    "di un manoscritto antico; in linguistica, il concetto che una lingua non ha " +
    "parola per dire — e che un'altra lingua, invece, ha.",

  shortDefinition:
    "Vuoto significativo: ciò che manca in un testo, in una lingua o in un insieme di conoscenze e si fa sentire per la sua assenza.",

  register: ["comune", "tecnico"],
  domains: ["conoscenza", "linguistica", "filologia", "diritto"],

  etymology:
    "Dal latino lacuna, 'buca, fossato, vuoto', derivato di lacus ('lago, cavità'). " +
    "Il senso originario è fisico — un avvallamento nel terreno — e si è " +
    "progressivamente esteso a qualunque tipo di mancanza strutturale.",

  examples: [
    "Il manoscritto presentava una lacuna di tre pagine proprio nel punto " +
    "più critico della narrazione.",
    "Quella lacuna normativa rendeva impossibile applicare la legge in modo " +
    "coerente.",
    "L'italiano non ha una parola esatta per 'serendipity': è una lacuna " +
    "lessicale che ogni traduttore conosce bene.",
    "Ammise le sue lacune in matematica con una semplicità che lo rese più credibile.",
  ],

  synonyms: [
    {
      term: "vuoto",
      register: "comune",
      context: "assenza generica — meno specifico di lacuna, più fisico",
    },
    {
      term: "mancanza",
      register: "comune",
      context: "ciò che dovrebbe esserci e non c'è — più emotivo, meno tecnico",
    },
    {
      term: "gap",
      register: "tecnico",
      context: "anglicismo usato in contesti professionali per indicare una lacuna di competenza o sistema",
    },
    {
      term: "omissione",
      register: "tecnico",
      context: "assenza intenzionale o accidentale — in contesti giuridici e testuali",
    },
  ],

  antonyms: [
    {
      term: "completezza",
      register: "comune",
      context: "presenza di tutti gli elementi necessari",
    },
    {
      term: "integrità",
      register: "tecnico",
      context: "in filologia e informatica: assenza di parti mancanti o danneggiate",
    },
  ],

  relatedWords: [
    "lacunoso",
    "vuoto",
    "gap",
    "mancanza",
    "omissione",
    "lacuna lessicale",
    "frammento",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/lacuna/",
    wiktionary: "https://it.wiktionary.org/wiki/lacuna",
  },

  paroliereNote:
    "La lacuna lessicale è forse il fenomeno linguistico più affascinante che " +
    "esista: il vuoto di una lingua rivela la forma del mondo che quella lingua " +
    "abita. L'italiano non ha 'serendipity', il tedesco ha 'Schadenfreude', il " +
    "portoghese ha 'saudade'. Ogni lacuna è anche un'indicazione su cosa una " +
    "cultura ha scelto, nel tempo, di nominare — e cosa ha lasciato nell'ombra. " +
    "Il Paroliere nasce, tra le altre cose, per ridurre le lacune dell'italiano digitale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Lacuna — Il Paroliere",
    description:
      "Definizione originale di 'lacuna': vuoto significativo in un testo, " +
      "una lingua o le proprie conoscenze. Con esempi, lacuna lessicale ed etimologia latina.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
