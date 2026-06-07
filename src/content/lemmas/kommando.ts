// Il Paroliere — Lemma: kommando
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const kommando: LemmaEntry = {
  lemma: "kommando",
  slug: "kommando",
  partOfSpeech: "sostantivo maschile invariabile (prestito dal tedesco)",
  gender: "maschile",

  definition:
    "Piccola unità militare altamente specializzata, addestrata per operazioni rapide, segrete " +
    "o ad alto rischio: azioni di sabotaggio, recupero di ostaggi, incursioni in territorio " +
    "nemico, eliminazione di obiettivi specifici. Il termine viene dall'esperienza militare boera " +
    "e sudafricana della fine dell'Ottocento, adottato poi dall'esercito britannico nella Seconda " +
    "Guerra Mondiale per designare i reparti di élite da incursione (Commandos), e " +
    "successivamente entrato nel lessico militare internazionale. Nel giornalismo italiano e nel " +
    "linguaggio comune, kommando — spesso scritto con la doppia grafia tedesca — è usato anche " +
    "per descrivere un gruppo armato di terroristi o criminali che agisce in modo coordinato e " +
    "rapido in un attacco: il kommando delle Brigate Rosse, il kommando terroristico. In questo " +
    "senso non implica necessariamente un'organizzazione statale: descrive la struttura operativa " +
    "del gruppo, la sua rapidità e coordinazione.",

  shortDefinition:
    "Piccola unità militare specializzata in operazioni rapide e ad alto rischio; per " +
    "estensione giornalistica, gruppo armato che agisce in modo coordinato in un attacco.",

  register: ["tecnico militare", "giornalistico"],
  domains: ["guerra", "terrorismo", "sicurezza", "storia militare", "linguistica"],

  etymology:
    "Dal tedesco Kommando («comando, reparto»), a sua volta dall'afrikaans kommando usato dai " +
    "Boeri nel Sudafrica del XIX secolo per indicare le unità di milizia mobile. Passato " +
    "all'inglese come commando durante la Seconda Guerra Mondiale e da lì nell'italiano.",

  examples: [
    "«Il kommando delle forze speciali penetrò nell'edificio in meno di quattro minuti, neutralizzando i sequestratori.»",
    "«Il sequestro e l'uccisione di Aldo Moro fu eseguita da un kommando delle Brigate Rosse il 16 marzo 1978, dopo 55 giorni di prigionia.»",
    "«Un kommando terroristico aveva preso il controllo dell'aeroporto nelle prime ore del mattino.»",
  ],

  synonyms: [
    {
      term: "reparto speciale",
      register: ["tecnico"],
      context: "unità militare d'élite",
    },
    {
      term: "commando",
      register: ["giornalistico"],
      context: "grafia anglofona alternativa",
    },
    {
      term: "gruppo armato",
      register: ["giornalistico"],
      context: "in senso terroristico",
    },
  ],

  antonyms: [
    {
      term: "esercito regolare",
      register: ["tecnico"],
      context: "forza convenzionale",
    },
    {
      term: "forza convenzionale",
      register: ["tecnico"],
      context: "opposto dell'élite specializzata",
    },
  ],

  relatedWords: [
    "pasdaran",
    "spetsnaz",
    "operazioni speciali",
    "forze speciali",
    "terrorismo",
    "incursione",
    "sabotaggio",
    "Brigate Rosse",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/kommando/",
    wiktionary: "https://it.wiktionary.org/wiki/kommando",
  },

  paroliereNote:
    "Kommando è una parola che il giornalismo italiano ha adottato con grafia tedesca — la " +
    "doppia m e la k iniziale — forse per marcare visivamente la sua origine straniera o per " +
    "distinguerla dal più generico commando anglofono. Nell'uso corrente italiano, il termine " +
    "ha perso quasi completamente la sua origine militare regolare per concentrarsi sull'uso " +
    "in contesti terroristici e criminali: è difficile leggere «kommando» in un articolo senza " +
    "aspettarsi una notizia di violenza. Questo slittamento semantico è interessante e vale la " +
    "pena documentarlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Kommando — definizione militare e terroristica | Il Paroliere",
    description:
      "Kommando: dall'unità militare speciale al linguaggio del terrorismo. Origine boera, " +
      "uso italiano, differenza da commando. Definizione con esempi storici.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
