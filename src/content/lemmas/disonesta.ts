// Il Paroliere — Lemma: DISONESTÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const disonesta: LemmaEntry = {
  lemma: "disonestà",
  slug: "disonesta",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Mancanza di onestà in senso pieno: nelle azioni, nelle parole, nel modo di stare con gli altri. " +
    "È il termine più ampio del cluster — non descrive un tipo di persona ma una qualità morale " +
    "che può essere circostanziale o strutturale, piccola o grave. " +
    "A differenza della slealtà, non richiede una relazione preesistente: " +
    "si può essere disonesti anche verso chi non ci conosce.",
  shortDefinition:
    "Assenza di onestà nelle azioni e nelle parole, verso chiunque — il termine più ampio del cluster morale.",
  register: ["comune", "formale"],
  domains: ["morale", "etica", "comportamento"],
  etymology:
    "Derivato di disonesto, composto dal prefisso dis- privativo e onesto " +
    "(dal latino honestus, conforme all'onore). " +
    "Il concetto di honestus nella tradizione latina era insieme etico ed estetico: " +
    "la disonestà non era solo una colpa morale, ma anche una bruttezza.",
  examples: [
    "Non era crudeltà la sua — era disonestà: quella qualità sottile che non ferisce subito ma consuma nel tempo.",
    "La disonestà piccola è più comune della grande, e per questo più pericolosa.",
    "Ci sono forme di disonestà che non violano nessuna legge — eppure tutti le riconoscono.",
  ],
  synonyms: [
    { term: "malafede", register: "comune", context: "disonestà nell'intenzione, nel proposito deliberato di ingannare" },
    { term: "falsità", register: "comune", context: "disonestà nella parola e nell'apparenza" },
    { term: "slealtà", register: "comune-formale", context: "disonestà relazionale, verso chi si fidava" },
    { term: "doppiezza", register: "comune", context: "disonestà nel mostrare due facce diverse" },
    { term: "ipocrisia", register: "comune", context: "disonestà nel fingere virtù che non si hanno" },
  ],
  antonyms: [
    { term: "onestà", register: "comune", context: "qualità di chi agisce rettamente e senza inganni" },
    { term: "integrità", register: "formale", context: "coerenza completa tra valori, parole e azioni" },
  ],
  relatedWords: ["onestà", "slealtà", "malafede", "falsità", "ipocrisia", "disonesto"],
  sourceLinks: {},
  paroliereNote:
    "La disonestà è il contenitore più grande del cluster. " +
    "Gli altri termini — slealtà, tradimento, perfidia — sono suoi figli specializzati: " +
    "ciascuno descrive una modalità particolare di essere disonesti. " +
    "Lei resta generale, e per questo a volte meno precisa, ma mai meno grave.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Disonestà — Il Paroliere",
    description:
      "Definizione originale di 'disonestà': mancanza di onestà nelle azioni e nelle parole, verso chiunque. Il termine più ampio del cluster morale.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
