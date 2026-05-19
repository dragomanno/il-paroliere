// Il Paroliere — Lemma: malinconia
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const malinconia: LemmaEntry = {
  lemma: "malinconia",
  slug: "malinconia",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Stato d'animo di tristezza quieta e diffusa, senza causa apparente o con " +
    "radici lontane, spesso intrecciato a nostalgia e senso di vuoto. Diversa " +
    "dalla depressione clinica e dalla tristezza passeggera, la malinconia " +
    "occupa nella tradizione letteraria e filosofica un posto privilegiato: è " +
    "la condizione dell'animo che contempla, che ricorda, che crea.",

  shortDefinition:
    "Tristezza quieta e senza nome, fatta di nostalgia e vuoto; nella tradizione, cifra dell'animo creativo e riflessivo.",

  register: ["comune", "letterario"],
  domains: ["emozione", "filosofia", "psicologia"],

  etymology:
    "Dal greco melankholia, composto di mélas ('nero') e kholé ('bile'). " +
    "Nella medicina antica dei quattro umori, la bile nera (melanchole) " +
    "era il fluido associato alla tristezza e alla riflessione profonda. " +
    "Il termine conserva questa radice corporea anche dopo secoli di uso " +
    "metaforico.",

  examples: [
    "Una malinconia dolce si posava sulle ultime settimane d'estate, quando " +
    "il calore stava già cedendo.",
    "Non era infelicità la sua — era malinconia: quella sensazione di " +
    "qualcosa di bello già finito, o non ancora arrivato.",
    "Certi pomeriggi di novembre portano con sé una malinconia che non ha " +
    "bisogno di spiegazioni.",
    "La malinconia degli artisti è un topos letterario — ma chi la conosce " +
    "davvero sa che è anche una compagna produttiva.",
  ],

  synonyms: [
    {
      term: "nostalgia",
      register: "comune",
      context: "rimpianto per un tempo o un luogo passato — ha una causa più precisa",
    },
    {
      term: "tristezza",
      register: "comune",
      context: "stato d'animo di abbattimento — più immediato e meno diffuso",
    },
    {
      term: "mestizia",
      register: "letterario",
      context: "forma più arcaica e letteraria di tristezza quieta",
    },
    {
      term: "accidia",
      register: "letterario",
      context: "nella tradizione medievale: indolenza spirituale, torpore dell'anima",
    },
  ],

  antonyms: [
    {
      term: "allegria",
      register: "comune",
      context: "stato d'animo di gioia vivace — l'opposto emotivo diretto",
    },
    {
      term: "euforia",
      register: "comune",
      context: "stato di benessere e ottimismo intenso",
    },
  ],

  relatedWords: [
    "malinconico",
    "malinconicamente",
    "nostalgia",
    "mestizia",
    "accidia",
    "umore",
    "bile nera",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/malinconia/",
    wiktionary: "https://it.wiktionary.org/wiki/malinconia",
  },

  paroliereNote:
    "La malinconia è una delle emozioni più studiate nella storia della cultura " +
    "occidentale. Aristotele la collegava al genio; Dürer la rappresentò come " +
    "una figura alata nell'ombra; Robert Burton le dedicò un'enciclopedia di " +
    "mille pagine nel 1621. Non è semplice tristezza: è la tristezza che pensa, " +
    "che osserva, che scrive. Forse è per questo che molte delle cose più belle " +
    "che abbiamo vengono da lì.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Malinconia — Il Paroliere",
    description:
      "Definizione originale di 'malinconia': tristezza quieta e senza nome, " +
      "cifra dell'animo creativo. Dal greco bile nera. Con esempi, Dürer ed etimologia.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
