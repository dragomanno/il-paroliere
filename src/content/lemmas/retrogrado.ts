// Il Paroliere — Lemma: retrogrado
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const retrogrado: LemmaEntry = {
  lemma: "retrogrado",
  slug: "retrogrado",
  partOfSpeech: "aggettivo / sostantivo",
  gender: "maschile (femm. retrograda)",
  register: ["comune", "ironico"],
  domains: ["società", "politica", "cultura", "sociologia generazionale"],

  definition:
    "Detto di persona, atteggiamento o idea che tende a preservare o ripristinare " +
    "l'ordine passato, resistendo attivamente al cambiamento. In senso proprio indica " +
    "chi vuole tornare indietro; in senso figurato, e spesso ironico, chi è incapace " +
    "di aggiornarsi, chi giudica il nuovo con diffidenza sistematica. Come sostantivo " +
    "indica direttamente quella persona. Nel linguaggio giovanile contemporaneo è " +
    "spesso intercambiabile con boomer, ma con tono meno pop e più diretto.",

  shortDefinition:
    "Chi resiste al cambiamento e guarda al passato; chi giudica il nuovo con " +
    "diffidenza sistematica. Meno pop di «boomer», più diretto.",

  etymology:
    "Dal latino retrogradus, composto di retro («indietro») e gradus («passo, " +
    "movimento»): chi cammina all'indietro. In astronomia indica il moto apparente " +
    "di un pianeta che sembra spostarsi in direzione contraria rispetto al normale; " +
    "in politica e cultura entra già nell'Ottocento come etichetta per chi si oppone " +
    "al progresso.",

  examples: [
    "Le sue posizioni sullo smart working erano così retrograde che i colleghi giovani avevano smesso di discuterne con lui.",
    "Non era una questione di età: era retrogrado per convinzione, non per abitudine.",
  ],

  synonyms: [
    { term: "conservatore", register: "comune", note: "più politico, meno connotato negativamente" },
    { term: "reazionario", register: "formale", note: "più forte, implica opposizione attiva al progresso" },
    { term: "boomer", register: "colloquiale", note: "→ vedi lemma; più generazionale e pop" },
    { term: "parruccone", register: "colloquiale", note: "più ironico, più informale" },
  ],

  antonyms: [
    { term: "progressista", register: "comune" },
    { term: "innovatore", register: "comune" },
    { term: "avanguardista", register: "formale" },
  ],

  relatedWords: ["boomer", "conservatore", "reazionario", "tradizionalista", "parruccone", "GenX", "millennial"],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/retrogrado/",
    wiktionary: "https://it.wiktionary.org/wiki/retrogrado",
  },

  paroliereNote:
    "«Retrogrado» è più vecchio e più serio di «boomer»: ha radici astronomiche " +
    "(il moto retrogrado dei pianeti), è entrato nella politica ottocentesca e ha " +
    "percorso tutto il Novecento come etichetta ideologica. Oggi convive con «boomer» " +
    "nel linguaggio comune, ma non è la stessa parola: «retrogrado» giudica l'idea o " +
    "il comportamento; «boomer» giudica la persona attraverso la sua generazione di " +
    "appartenenza. La differenza è sottile ma conta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Retrogrado — significato, sinonimi e differenza con boomer | Il Paroliere",
    description:
      "Retrogrado: chi resiste al cambiamento e guarda al passato. Definizione originale, " +
      "etimologia latina, differenza con boomer e conservatore.",
  },

  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
