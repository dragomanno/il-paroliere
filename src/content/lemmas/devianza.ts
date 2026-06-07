// Il Paroliere — Lemma: devianza
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const devianza: LemmaEntry = {
  lemma: "devianza",
  slug: "devianza",
  partOfSpeech: "sostantivo femminile",

  definition:
    "La distanza da una norma — sia essa statistica, sociale, psicologica o giuridica. " +
    "Il termine opera su piani distinti che vale la pena tenere separati. In senso " +
    "statistico-matematico, la devianza (o deviazione) è la misura di quanto i valori di " +
    "un insieme si discostano da un valore di riferimento, solitamente la media. La " +
    "deviazione standard indica quanto, in media, i singoli valori si allontanano dalla " +
    "media del gruppo: una deviazione standard bassa significa che i valori sono concentrati " +
    "vicino alla media; una alta significa che sono dispersi. In questo senso, la devianza è " +
    "un concetto puramente descrittivo e privo di giudizio morale. In senso sociologico, la " +
    "devianza indica il comportamento che si discosta dalle norme sociali condivise da un " +
    "gruppo o da una società. Il sociologo americano Robert K. Merton (1910–2003) ne ha " +
    "offerto la teorizzazione più influente: la devianza non è una caratteristica dell'atto " +
    "in sé, ma una costruzione sociale — un atto è deviante perché una società lo definisce " +
    "tale, non perché sia intrinsecamente sbagliato. In senso psichiatrico e clinico, il " +
    "termine descrive comportamenti che si discostano in modo significativo dalle aspettative " +
    "culturali, causando disagio al soggetto o agli altri. Il DSM usa il concetto in relazione " +
    "ai disturbi della personalità: il comportamento deviante deve essere pervasivo, stabile e " +
    "fonte di sofferenza per costituire un pattern clinicamente rilevante.",

  shortDefinition:
    "Distanza da una norma; in sociologia, comportamento che viola le norme sociali condivise; " +
    "in statistica, misura della dispersione dei valori rispetto alla media; in psichiatria, " +
    "pattern comportamentale significativamente discosto dalle aspettative culturali.",

  register: ["tecnico (sociologia, psicologia, statistica, matematica)", "comune nel parlato colto"],
  domains: ["sociologia", "psicologia", "statistica", "diritto", "matematica", "linguistica"],

  etymology:
    "Dal latino deviare («uscire dalla via»), composto di de- («fuori da») + via («strada»): " +
    "letteralmente «uscire dalla strada». Lo stesso campo di deviazione, deviato, deviare.",

  examples: [
    "«La devianza standard di quella distribuzione era molto alta: i valori erano dispersi in modo ampio attorno alla media.»",
    "«Merton sosteneva che la devianza criminale nelle società capitalistiche fosse spesso una risposta razionale all'impossibilità di raggiungere gli obiettivi culturali con i mezzi legittimi disponibili.»",
    "«Ciò che una società considera devianza cambia nel tempo: l'omosessualità era classificata come devianza psichiatrica fino al 1973 nel DSM americano — poi è stata rimossa, non perché le persone fossero cambiate, ma perché la norma era cambiata.»",
  ],

  synonyms: [
    {
      term: "anomalia",
      register: ["comune"],
      context: "in senso statistico e generale",
    },
    {
      term: "scostamento",
      register: ["tecnico"],
      context: "in senso statistico",
    },
    {
      term: "trasgressione",
      register: ["comune"],
      context: "in senso sociologico",
    },
  ],

  antonyms: [
    {
      term: "conformità",
      register: ["comune"],
      context: "aderenza alla norma",
    },
    {
      term: "normalità",
      register: ["comune"],
      context: "stato di non-devianza",
    },
  ],

  relatedWords: [
    "epistemologia",
    "norma",
    "media",
    "deviazione standard",
    "Merton",
    "DSM",
    "psichiatria",
    "sociologia",
    "costruzione sociale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/devianza/",
    wiktionary: "https://it.wiktionary.org/wiki/devianza",
  },

  paroliereNote:
    "L'esempio dell'omosessualità rimossa dal DSM nel 1973 è forse il più eloquente di tutti " +
    "per capire cosa significa che la devianza è una costruzione sociale: non cambiò nulla nelle " +
    "persone omosessuali, cambiò la norma che le classificava. Questo non significa che tutte " +
    "le norme siano equivalenti o che la devianza non esista — significa che ogni volta che si " +
    "usa il termine bisogna chiedersi: devianza rispetto a quale norma? Definita da chi? " +
    "Per servire quali interessi?",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Devianza — sociologia, statistica, psichiatria | Il Paroliere",
    description:
      "Devianza: tre significati, tre discipline. Merton, il DSM, la deviazione standard. " +
      "La norma che definisce il deviante. Definizione completa con esempi critici.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
