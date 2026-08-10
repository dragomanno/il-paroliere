// Il Paroliere — Lemma: discriminazione
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const discriminazione: LemmaEntry = {
  lemma: "discriminazione",
  slug: "discriminazione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico", "formale"],
  domains: ["sociologia", "psicologia sociale", "diritto"],

  definition:
    "Trattamento ingiusto e diseguale riservato a una persona o a un gruppo sulla base dell'appartenenza a una categoria — etnica, di genere, religiosa, di orientamento sessuale, di età, di disabilità o di altro tipo — anziché sulla base delle sue caratteristiche o dei suoi comportamenti individuali. Mentre lo stereotipo agisce sul piano cognitivo (la rappresentazione mentale del gruppo) e il pregiudizio su quello affettivo-valutativo (l'atteggiamento ostile verso il gruppo), la discriminazione è il piano comportamentale: è ciò che accade quando un atteggiamento pregiudiziale si traduce in un'azione concreta che nega, limita o compromette a qualcuno l'accesso a diritti, opportunità o trattamenti riconosciuti ad altri. In ambito giuridico italiano e internazionale il termine ha una definizione tecnica precisa: la Convenzione ONU del 1965 contro la discriminazione razziale, recepita in Italia con la legge 654/1975, la definisce come 'ogni distinzione, esclusione, restrizione o preferenza' basata su razza, colore, ascendenza o origine etnica che abbia lo scopo o l'effetto di compromettere il riconoscimento dei diritti umani e delle libertà fondamentali in condizioni di parità.",

  shortDefinition:
    "Trattamento ingiusto riservato a una persona in base all'appartenenza a un gruppo, non alle sue caratteristiche individuali; il piano comportamentale di stereotipo e pregiudizio.",

  etymology:
    "Dal latino discriminare, derivato di discrimen ('linea di separazione, distinzione'), a sua volta da discernere ('separare, distinguere'). Il significato originario di 'distinguere, differenziare' è neutro; il senso negativo di trattamento ingiusto verso un gruppo si è affermato in italiano soprattutto a partire dal Novecento, sotto l'influsso dell'inglese discrimination.",

  examples: [
    "Rifiutare un colloquio di lavoro solo perché il candidato porta un nome straniero è un caso di discriminazione, indipendentemente dalle competenze effettive della persona.",
    "La legge 654/1975 recepisce in Italia la Convenzione ONU del 1965 contro ogni forma di discriminazione razziale.",
    "Non ogni pregiudizio si traduce in discriminazione: una persona può nutrire convinzioni stereotipate senza mai tradurle in un comportamento concreto verso qualcuno.",
    "Il glossario delle Nazioni Unite distingue la discriminazione diretta, esplicita e dichiarata, da quella indiretta, che nasce da norme apparentemente neutre ma che di fatto svantaggiano un gruppo specifico.",
  ],

  synonyms: [
    { term: "emarginazione", register: "comune", note: "Enfatizza l'esito sociale — l'esclusione dal gruppo — più che il meccanismo del trattamento diseguale." },
    { term: "segregazione", register: "tecnico", note: "Forma specifica e sistemica di discriminazione basata sulla separazione fisica o istituzionale dei gruppi." },
  ],

  antonyms: [
    { term: "inclusione", register: "comune", note: "Pratica e principio che garantiscono pari accesso e trattamento a prescindere dall'appartenenza a un gruppo." },
    { term: "uguaglianza", register: "formale", note: "Principio giuridico e sociale di pari dignità e pari trattamento davanti alla legge." },
  ],

  relatedWords: ["pregiudizio", "stereotipo", "razzismo", "xenofobia"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/discriminazione/",
    wiktionary: "https://it.wiktionary.org/wiki/discriminazione",
  },

  paroliereNote:
    "La sequenza stereotipo → pregiudizio → discriminazione, cara alla psicologia sociale a partire da Gordon Allport, è utile proprio perché non è una scala automatica: si può restare fermi al primo gradino, o addirittura al secondo, senza mai arrivare al terzo. La discriminazione è l'unico dei tre piani che il diritto può effettivamente colpire — non punisce le idee, ma i comportamenti che negano a qualcuno un diritto o un'opportunità in ragione della sua appartenenza a un gruppo. È anche per questo che le definizioni giuridiche, a differenza di quelle psicologiche, insistono tanto sull'effetto concreto dell'azione più che sull'intenzione di chi la compie.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "discriminazione — significato, differenza da pregiudizio ed esempi",
    description:
      "Che cos'è la discriminazione: trattamento ingiusto basato sull'appartenenza a un gruppo, distinto da stereotipo e pregiudizio. Definizione giuridica e sociologica con esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
