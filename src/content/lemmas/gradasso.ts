// Il Paroliere — Lemma: gradasso
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const gradasso: LemmaEntry = {
  lemma: "gradasso",
  slug: "gradasso",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "colloquiale", "letterario"],
  domains: ["psicologia", "comportamento sociale", "letteratura"],

  definition:
    "Chi si atteggia a persona importante o potente, facendo mostra di superiorità " +
    "con toni e gesti che non trovano riscontro nella sostanza. Il gradasso è più " +
    "teatrale del prepotente e più inconsistente del bullo: è la variante italiana di " +
    "chi «fa il grande» senza esserlo. Il nome ha origine letteraria — Gradasso è un " +
    "potente re saraceno dell’Orlando Innamorato di Boiardo, poi ripreso nell’Orlando " +
    "Furioso, che combatte guerre enormi per ottenere oggetti simbolici: il tipo del " +
    "potente vuoto.",

  shortDefinition:
    "Chi si atteggia a persona importante o potente senza averne la sostanza; tipo " +
    "letterario dell’epica cavalleresca italiana, poi entrato nel linguaggio comune.",

  etymology:
    "Dal personaggio Gradasso dell’Orlando Innamorato di Matteo Maria Boiardo (1483), " +
    "re di Sericana che muove guerre per ottenere la spada Durindana e il cavallo " +
    "Baiardo. Il nome è diventato sinonimo di chi si dà arie di grandezza senza la " +
    "sostanza corrispondente.",

  examples: [
    "Al bar parlava di politica da gradasso: toni alti, certezze assolute, zero fatti a sostegno.",
    "Il gradasso del gruppo non è necessariamente il più forte: è quello che ha imparato che fare il grande costa meno che dimostrare di esserlo.",
    "Nell’Orlando Innamorato, Gradasso è un re potentissimo che fa cose enormi per ottenere simboli: l’archetipo del gradasso è già lì — potere reale al servizio di vuoto simbolico.",
    "Distinguere un gradasso da un leader richiede tempo: entrambi occupano la stanza, ma solo uno la riempie.",
  ],

  synonyms: [
    { term: "spaccone", register: "comune-colloquiale", note: "Praticamente sinonimo; lo spaccone enfatizza di più la forza fisica ostentata." },
    { term: "fanfarone", register: "comune-letterario", note: "Più legato alla parola; il gradasso è più legato all’atteggiamento e alla postura." },
  ],

  antonyms: [
    { term: "persona sobria", register: "comune", note: "Chi non ostenta e non cerca di impressionare con i gesti." },
    { term: "modestia", register: "comune", note: "La disposizione opposta: non attribuirsi più di quello che si è." },
  ],

  relatedWords: ["fanfarone", "spaccone", "millantatore", "bravata", "millanteria"],
  sourceLinks: {},

  paroliereNote:
    "Gradasso è una delle parole italiane che hanno il privilegio di un’origine " +
    "precisa e tracciabile: un personaggio letterario che è diventato tipo umano. " +
    "Boiardo non sapeva che stava nominando un modo di essere che ogni generazione " +
    "avrebbe riconosciuto nei propri vicini, colleghi e governanti. Il gradasso non " +
    "è malvagio: è vuoto. E il vuoto, quando fa tanto rumore, è più difficile da " +
    "ignorare del pieno.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "gradasso — dal re saraceno di Boiardo al tipo umano che fa il grande",
    description: "Che cos’è un gradasso: origine letteraria nell’Orlando Innamorato, definizione psicologica e differenza da fanfarone e spaccone.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
