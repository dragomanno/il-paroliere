// Il Paroliere — Lemma: sintesi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sintesi: LemmaEntry = {
  lemma: "sintesi",
  slug: "sintesi",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "In dialettica hegeliana, il terzo momento del movimento logico: la risoluzione " +
    "che supera e conserva insieme tesi e antitesi, portandole a un livello più " +
    "complesso. In chimica, il processo di costruzione di una molecola a partire da " +
    "precursori più semplici. Nel linguaggio comune, la capacità di esprimere in poco " +
    "spazio ciò che è essenziale — fare sintesi è un'arte prima che una tecnica.",

  shortDefinition:
    "Terzo momento dialettico che supera tesi e antitesi; in chimica, costruzione " +
    "molecolare; nel linguaggio, il nucleo essenziale.",

  register: ["tecnico", "comune"],
  domains: ["filosofia", "chimica", "linguaggio"],

  etymology:
    "Dal greco sýnthesis — syn (insieme) + thésis (posizione): letteralmente 'mettere " +
    "insieme'. Il termine entra nel lessico scientifico e filosofico attraverso il " +
    "latino synthesis, con peso crescente dalla logica scolastica alla chimica " +
    "moderna.",

  examples: [
  ],

  synonyms: [
    { term: "compendio", register: "letterario", context: "più legato alla forma scritta, meno al processo" },
    { term: "riassunto", register: "comune", context: "più scolastico, meno strutturato dialetticamente" },
    { term: "sommario", register: "comune/formale", context: "enfatizza la brevità, non la risoluzione di una tensione" }
  ],

  antonyms: [
    { term: "analisi", register: "tecnico", context: "il processo opposto: scomporre piuttosto che unire" },
    { term: "antitesi", register: "tecnico", context: "il momento di negazione che precede la sintesi" }
  ],

  relatedWords: [
    "tesi",
    "antitesi",
    "compendio"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/sintesi"
  },

  paroliereNote:
    "Saper fare sintesi è una delle competenze più rare e più richieste nella " +
    "comunicazione contemporanea. La proliferazione dei contenuti ha reso preziosa la " +
    "capacità di ridurre, scegliere, essenzializzare senza perdere. La sintesi non è " +
    "mai troncatura: è la comprensione di cosa può essere tolto senza che nulla di " +
    "necessario vada perduto.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sintesi — Il Paroliere",
    description:
      "Sintesi: terzo momento dialettico, processo chimico, essenza del linguaggio. " +
      "Filosofia e comunicazione — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};