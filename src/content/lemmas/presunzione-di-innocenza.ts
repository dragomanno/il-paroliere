// Il Paroliere — Lemma: presunzione di innocenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const presunzioneDiInnocenza: LemmaEntry = {
  lemma: "presunzione di innocenza",
  slug: "presunzione-di-innocenza",
  partOfSpeech: "locuzione-nominale",
  gender: "femminile",
  register: ["tecnico-giuridico", "comune"],
  domains: ["diritto", "etica-pubblica", "giornalismo", "società"],

  definition:
    "Principio giuridico secondo cui ogni persona deve essere considerata innocente fino a quando la sua colpevolezza non sia stata accertata con una prova adeguata, secondo le regole del processo e nel rispetto delle garanzie di difesa. La presunzione di innocenza impone che il dubbio ragionevole giochi a favore dell'imputato, impedendo che semplici indizi, sospetti o pressioni dell'opinione pubblica bastino per trattare qualcuno come colpevole in anticipo. Nella vita sociale e nel discorso mediatico il principio viene spesso invocato quando la narrazione pubblica brucia le tappe, costruendo colpevoli prima che il procedimento sia concluso.",

  shortDefinition:
    "Principio per cui una persona è considerata innocente fino a prova contraria, e il dubbio ragionevole deve sempre giocare a suo favore.",

  etymology:
    "La locuzione combina presunzione, dal latino praesumptio, -onis “supposizione, anticipazione di giudizio” (da praesumere “prendere in anticipo”), e innocenza, dal latino innocentia “assenza di danno, assenza di colpa” (da in- privativo e nocere “nuocere”). Nel linguaggio giuridico moderno si consolida come traduzione dei principi affermati nelle dichiarazioni dei diritti e nelle costituzioni contemporanee.",

  examples: [
    "In uno Stato di diritto la presunzione di innocenza non è un dettaglio formale, ma il modo concreto di limitare l'arbitrio del potere punitivo.",
    "I titoli di giornale che trattano un indagato come colpevole tradiscono la presunzione di innocenza ben prima della sentenza.",
    "Quando le emozioni collettive sono forti, la presunzione di innocenza rischia di essere percepita come ostacolo alla giustizia, invece che come sua condizione minima.",
    "La presunzione di innocenza non nega il dolore delle vittime, però chiede di separare la loro verità emotiva dal giudizio penale.",
    "Anche nelle discussioni quotidiane potremmo applicare una forma di presunzione di innocenza, evitando di “condannare” qualcuno solo per sentito dire.",
  ],

  synonyms: [
    {
      term: "principio di innocenza fino a prova contraria",
      register: "divulgativo-giuridico",
      note: "Formula esplicativa usata spesso nei testi divulgativi.",
    },
    {
      term: "garanzia di non colpevolezza anticipata",
      register: "saggistico",
      note: "Sottolinea la funzione di protezione dall'essere trattati come colpevoli prima del processo.",
    },
  ],

  antonyms: [
    {
      term: "presunzione di colpevolezza",
      register: "saggistico",
      note: "Atteggiamento che tratta come colpevole chi è solo sospettato.",
    },
    {
      term: "giustizia sommaria",
      register: "saggistico",
      note: "Forma di decisione punitiva rapida, priva delle garanzie di verifica.",
    },
  ],

  relatedWords: ["indizio", "prova", "dubbio", "diritto"],

  sourceLinks: {},

  paroliereNote:
    "La presunzione di innocenza è uno dei punti in cui il linguaggio giuridico contraddice il senso comune: quando un fatto è grave, la tentazione di “sapere subito chi è stato” è fortissima. Il principio chiede di sopportare un certo disagio, perché preferisce rischiare che un colpevole non venga condannato rispetto a condannare un innocente sulla base di un clima o di un racconto. Nell'ecosistema mediatico attuale, dove l'attenzione si gioca in poche righe, rispettare la presunzione di innocenza significa anche scegliere con cura i verbi: “indagato”, “accusato”, “condannato” non sono sinonimi. Il lemma invita a ricordare che le parole usate prima della sentenza possono già essere una forma di pena.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "presunzione di innocenza — innocenti fino a prova contraria",
    description:
      "Che cos'è la presunzione di innocenza tra diritto, media e discussione pubblica, dal dubbio ragionevole alla tentazione di anticipare le condanne.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
