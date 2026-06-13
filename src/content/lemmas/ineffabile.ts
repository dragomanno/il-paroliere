// Il Paroliere — Lemma: ineffabile
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const ineffabile: LemmaEntry = {
  lemma: "ineffabile",
  slug: "ineffabile",
  partOfSpeech: "aggettivo",
  gender: "maschile",
  register: ["letterario", "filosofico"],
  domains: ["estetica", "filosofia", "teologia", "linguistica"],

  definition:
    "Che non può essere espresso a parole — non per difetto del linguaggio, ma per " +
    "eccesso dell’esperienza. L’ineffabile non è ciò che non si sa dire: è ciò che " +
    "qualunque descrizione impoverirebbe. In teologia, è attributo del divino; in estetica, " +
    "è la qualità di quelle esperienze (musicali, visive, sensoriali) che si sa di aver " +
    "vissuto ma che non si riesce a trasmettere intatte.",

  shortDefinition:
    "Che non può essere espresso a parole senza impoverirlo; al di là della capacità descrittiva del linguaggio.",

  etymology:
    "Dal latino ineffabilis, composto da in- privativo e effabilis (da effari “esprimere " +
    "a parole”, da ex- “fuori” e fari “parlare”). Letteralmente: “che non si può dire " +
    "fuori”, che non si può emettere con la voce.",

  examples: [
    "C’è qualcosa di ineffabile nella prima luce del mattino su certe città — non il colore, non la temperatura, ma una qualità dell’aria che il linguaggio può solo sfiorare.",
    "I mistici usavano l’ineffabile non come resa ma come strategia: nominare il limite del dicibile è già un modo di indicare ciò che sta oltre.",
    "Dire che un brano musicale è ineffabile non è pigrizia critica: è riconoscere onestamente che la descrizione non è il sostituto dell’ascolto.",
    "L’ineffabile di certi dolori non è che siano indicibili — è che le parole disponibili appartengono a un’esperienza meno intensa e non reggono il peso di quella più grande.",
  ],

  synonyms: [
    { term: "indicibile", register: "letterario", note: "Più vicino all’orrore e al dolore estremo; ineffabile ha una sfumatura più spesso positiva o mistica." },
    { term: "inesprimibile", register: "comune-letterario", note: "Descrittivo, neutro: ciò che non si riesce a esprimere." },
  ],

  antonyms: [
    { term: "descrivibile", register: "comune", note: "Ciò che il linguaggio può afferrare e trasmettere senza perdita." },
  ],

  relatedWords: ["impalpabilità", "levità", "celestiale", "dissonanza"],

  paroliereNote:
    "Ineffabile è il lemma che si autodistrugge: per definirlo devo usare il linguaggio " +
    "per dire che il linguaggio non basta. C’è qualcosa di coraggioso nell’ammettere " +
    "che esistono esperienze che il lessico non copre — e qualcosa di filosoficamente " +
    "interessante nel fatto che possiamo nominare questo limite pur non potendo superarlo.",

  sourceLinks: {},

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "ineffabile — significato, etimologia e confini del linguaggio",
    description: "Ineffabile: dall’attributo teologico del divino alla categoria estetica. Quando le parole non bastano e perché.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
