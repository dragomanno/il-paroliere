// Il Paroliere — Lemma: aporìa
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const aporia: LemmaEntry = {
  lemma: "aporìa",
  slug: "aporia",
  partOfSpeech: "sostantivo femminile",

  definition:
    "Un'impasse intellettuale — una difficoltà o contraddizione irrisolvibile all'interno di " +
    "un sistema di pensiero, un problema che non ammette soluzione soddisfacente con gli " +
    "strumenti concettuali disponibili. L'aporìa non è semplicemente una domanda difficile: " +
    "è una domanda che smaschera i limiti di un sistema di pensiero, rivelando che i concetti " +
    "usati per formulare il problema contengono in sé la fonte del blocco. Nella filosofia " +
    "greca, l'aporìa (ἀπορία, da a- + poros, «senza passaggio, senza via») è il momento in " +
    "cui il dialogo socratico ha compiuto il suo lavoro: ha demolito le false certezze " +
    "dell'interlocutore senza offrirne di nuove. Non è un fallimento — è il punto di partenza " +
    "della vera ricerca filosofica. I dialoghi aporetici di Platone — quelli che terminano " +
    "senza una risposta definitiva (Carmide, Lachete, Eutifrone) — non lasciano il lettore nel " +
    "vuoto per negligenza: lo lasciano nel vuoto per onestà, affinché inizi a pensare davvero. " +
    "Nel Novecento, Derrida ha fatto dell'aporìa uno strumento centrale della decostruzione: " +
    "certi concetti fondamentali — la giustizia, il dono, l'ospitalità — sono strutturalmente " +
    "aporetici, cioè si contraddicono nel momento stesso in cui si cerca di definirli in modo " +
    "rigoroso. Queste contraddizioni non vanno risolte: vanno abitate, come lo spazio in cui " +
    "il pensiero diventa onesto.",

  shortDefinition:
    "Impasse intellettuale irrisolvibile che rivela i limiti di un sistema concettuale; nella " +
    "filosofia socratica, il momento in cui le false certezze vengono demolite; in Derrida, " +
    "struttura contraddittoria di certi concetti fondamentali.",

  register: ["tecnico (filosofia)", "raro nel parlato comune"],
  domains: ["filosofia", "logica", "retorica", "storia del pensiero"],

  etymology:
    "Dal greco aporìa (ἀπορία), da a- (negazione) + poros («passaggio, via d'uscita»): " +
    "letteralmente «assenza di via», «impossibilità di passare». " +
    "L'accento cade sulla seconda sillaba: apo-rì-a.",

  examples: [
    "Il dialogo Eutifrone di Platone è un classico aporico: Socrate smonta ogni definizione di pietà proposta da Eutifrone, e alla fine nessuno sa più cos'è la pietà — ma almeno sa di non saperlo.",
    "L'aporìa del dono in Derrida: perché un dono sia autentico, il donatore non deve aspettarsi riconoscenza — ma se sa di star dando, è già entrato in una logica di scambio. Il dono puro è impossibile, eppure continuiamo a darlo.",
    "Di fronte all'aporìa del libero arbitrio e della responsabilità morale, la filosofia non offre una soluzione: offre la consapevolezza della complessità.",
  ],

  synonyms: [
    {
      term: "impasse concettuale",
      register: "comune colto",
      context: "blocco irrisolvibile nel pensiero",
    },
    {
      term: "contraddizione irrisolvibile",
      register: "comune",
      context: "paradosso senza soluzione",
    },
    {
      term: "vicolo cieco intellettuale",
      register: "comune",
      context: "situazione senza via d'uscita concettuale",
    },
  ],

  relatedWords: [
    "epistemologia",
    "dialettica",
    "Socrate",
    "Platone",
    "Derrida",
    "decostruzione",
    "logica",
    "contraddizione",
    "paradosso",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/aporia/",
    wiktionary: "https://it.wiktionary.org/wiki/apor%C3%ACa",
  },

  paroliereNote:
    "L'aporìa è una delle parole più oneste della filosofia: dice «qui non si passa, con " +
    "questi strumenti». Non è una resa: è una mappa che segna i confini del territorio " +
    "conoscibile. La cultura contemporanea ha paura dell'aporìa — vuole soluzioni, risposte, " +
    "conclusioni actionable. Ma alcune delle domande più importanti — cosa è la giustizia, " +
    "cosa significa agire bene, cosa è la coscienza — sono strutturalmente aporetiche. " +
    "Non si risolvono: si abitano, con umiltà e rigore.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Aporìa — definizione filosofica, Socrate, Derrida | Il Paroliere",
    description:
      "Aporìa: l'impasse intellettuale che rivela i limiti del pensiero. Dai dialoghi " +
      "aporetici di Platone a Derrida. Definizione con esempi filosofici.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
