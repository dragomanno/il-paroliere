// Il Paroliere — Lemma: riserbo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const riserbo: LemmaEntry = {
  lemma: "riserbo",
  slug: "riserbo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "formale"],
  domains: ["psicologia", "comportamento sociale", "comunicazione"],

  definition:
    "Abitudine a non condividere più di quanto si ritenga necessario — informazioni " +
    "su di sé, opinioni, emozioni — non per falsità ma per una scelta consapevole di " +
    "dove finisce il pubblico e dove inizia il privato. Il riserbo non è freddezza né " +
    "distanza emotiva: è la gestione intenzionale della soglia tra ciò che si dà agli " +
    "altri e ciò che si mantiene per sé. In alcune professioni — medici, avvocati, " +
    "giornalisti — il riserbo è un obbligo deontologico; nella vita quotidiana è una " +
    "scelta di carattere.",

  shortDefinition:
    "Gestione intenzionale di ciò che si condivide di sé: non falsità, ma scelta di " +
    "dove finisce il pubblico e inizia il privato.",

  etymology:
    "Da «riservare», dal latino reservare «tenere in serbo, conservare», composto da " +
    "re- «indietro» e servare «conservare, custodire». Il riserbo è letteralmente " +
    "ciò che si «tiene in serbo» — non nascosto, ma non ancora dato.",

  examples: [
    "Il riserbo di un buon medico non è distanza: è il rispetto che l’intimità del paziente merita, anche fuori dallo studio.",
    "Sui social media, il riserbo è diventato quasi una forma di eccentricità: chi non condivide tutto viene percepito come sospettoso o arrogante.",
    "Il riserbo sulle proprie opinioni politiche non è sempre codardia: a volte è la valutazione razionale che il contesto non è adatto a quel tipo di conversazione.",
    "Un giornalista con riserbo sa distinguere tra le informazioni che servono a raccontare una storia e quelle che non riguardano nessuno tranne chi le vive.",
  ],

  synonyms: [
    { term: "discrezione", register: "comune-formale", note: "Più orientato al comportamento verso gli altri: non rivelare ciò che non si deve rivelare." },
    { term: "riservatezza", register: "comune-giuridico", note: "Più tecnico: la protezione della sfera privata, anche in senso legale (privacy)." },
  ],

  antonyms: [
    { term: "indiscrezione", register: "comune", note: "Il divulgare ciò che si è saputo in contesti di fiducia." },
    { term: "loquacità", register: "comune", note: "Il tendere a condividere più di quanto il contesto richiederebbe." },
  ],

  relatedWords: ["ritrosia", "intimita", "modestia", "verecondia", "fiducia"],
  sourceLinks: {},

  paroliereNote:
    "Il riserbo è la virtù che l’era della condivisione permanente ha messo più sotto " +
    "pressione. In un sistema che premia la trasparenza totale e interpreta ogni " +
    "reticenza come nascondimento, chi mantiene una zona privata deve quasi " +
    "giustificarsi. Ma il riserbo non è menzogna: è la consapevolezza che non tutto " +
    "ciò che si sa di sé appartiene a chi non lo ha chiesto. C’è una differenza " +
    "fondamentale tra essere aperti e essere illimitatamente accessibili.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "riserbo — la gestione intenzionale della soglia tra pubblico e privato",
    description: "Che cos’è il riserbo: definizione psicologica e comportamentale, differenza da discrezione e riservatezza, e il suo significato nell’era della condivisione.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
