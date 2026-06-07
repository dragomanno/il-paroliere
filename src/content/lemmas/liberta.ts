// Il Paroliere — Lemma: LIBERTÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const liberta: LemmaEntry = {
  lemma: "libertà",
  slug: "liberta",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Condizione di chi non è soggetto a costrizioni esterne o interne nell'esercizio della propria volontà. " +
    "La filosofia politica distingue classicamente tra libertà *negativa* — assenza di interferenze e ostacoli " +
    "imposti da altri — e libertà *positiva* — la capacità effettiva di auto-determinarsi e realizzare i propri " +
    "progetti (Isaiah Berlin, *Two Concepts of Liberty*, 1958). " +
    "In ambito giuridico, la libertà è tutelata come diritto fondamentale inviolabile: libertà personale, " +
    "di pensiero, di espressione, di associazione. In etica, la libertà è presupposto della responsabilità morale.",
  shortDefinition: "Condizione di chi agisce senza costrizioni; in filosofia, libertà negativa (assenza di ostacoli) e positiva (auto-determinazione).",
  register: ["standard", "formale", "filosofico"],
  domains: ["filosofia", "diritto", "politica"],
  etymology:
    "Dal latino *libertas*, derivato di *liber* ('libero'). Termine presente in italiano fin dalle origini della lingua.",
  examples: [
    "La libertà di stampa è considerata uno dei pilastri delle democrazie liberali.",
    "Secondo Berlin, la libertà negativa si limita a rimuovere le catene; la libertà positiva esige anche gli strumenti per agire.",
    "Il detenuto riacquistò la libertà dopo anni di battaglie legali condotte dai suoi avvocati.",
  ],
  synonyms: [
    { term: "emancipazione", register: "formale", context: "liberazione da una condizione di dipendenza o oppressione" },
    { term: "autonomia", register: "formale", context: "capacità di darsi le proprie regole" },
    { term: "indipendenza", register: "standard", context: "assenza di dipendenza da altri" },
  ],
  antonyms: [
    { term: "schiavitù", register: "standard", context: "condizione di totale sottomissione" },
    { term: "coercizione", register: "formale", context: "imposizione forzata della volontà altrui" },
    { term: "autoritarismo", register: "politico", context: "sistema che comprime le libertà civili" },
  ],
  relatedWords: ["autonomia", "diritto", "consenso", "violenza", "liberalismo", "liberismo", "autodeterminazione"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/liberta/",
    wiktionary: "https://it.wiktionary.org/wiki/libert%C3%A0",
  },
  paroliereNote:
    "La distinzione berliniana tra libertà negativa e positiva è diventata uno degli assi portanti del dibattito " +
    "politico-filosofico contemporaneo. La libertà negativa è cara al liberalismo classico e al libertarismo; " +
    "la libertà positiva è rivendicata da repubblicanesimo e socialismo. " +
    "Da non confondere *libertà* con *liberismo* (dottrina economica del mercato libero) " +
    "né con *liberalismo* (corrente politica): i tre termini condividono la radice ma designano concetti distinti.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "LIBERTÀ — definizione e uso | Il Paroliere",
    description: "Libertà: condizione di chi agisce senza costrizioni. Libertà negativa vs positiva (Berlin), diritti fondamentali, filosofia politica.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
