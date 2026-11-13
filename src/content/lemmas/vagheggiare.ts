// Il Paroliere — Lemma: vagheggiare
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const vagheggiare: LemmaEntry = {
  lemma: "vagheggiare",
  slug: "vagheggiare",
  partOfSpeech: "verbo transitivo",
  register: ["letterario", "elevato"],
  domains: ["letteratura", "psicologia", "immaginazione"],

  definition: "Rappresentarsi con compiacimento una persona, una condizione o un futuro desiderabile, trattenendolo soprattutto nell'immaginazione. Può significare anche contemplare con ammirazione. Nel valore desiderativo è un verbo sognante e poco operativo: diversamente da → aspirazione non costruisce una meta e, a differenza di agognare, non fa della distanza una sofferenza.",

  shortDefinition: "Immaginare con desiderio e compiacimento qualcosa di bello, senza trasformarlo necessariamente in un progetto d'azione.",

  etymology: "Derivato di vago nel suo valore antico di «bello, attraente», con il suffisso verbale -eggiare. L'origine chiarisce il legame tra l'ammirare e il desiderare per immagini.",

  examples: [
    "Vagheggiava una casa silenziosa in collina, ma non cercò mai un annuncio.",
    "Da ragazza vagheggiava città lontane guardando le fotografie nelle riviste usate.",
    "Il poeta vagheggia un incontro che forse non è mai avvenuto e proprio per questo resta perfetto.",
  ],

  synonyms: [
    { term: "sognare", register: "comune", context: "più usuale e ampio; può riferirsi anche al sonno o a un progetto concreto." },
    { term: "desiderare", register: "comune", context: "termine neutro, privo della contemplazione estetica e della passività di vagheggiare." },
    { term: "agognare", register: "letterario", context: "vive la meta lontana come pena, mentre vagheggiare la conserva in una visione gradevole." },
    { term: "bramare", register: "letterario", context: "esprime urgenza e impulso possessivo, opposti al tono assorto di vagheggiare." },
    { term: "aspirare", register: "comune", context: "comporta un orientamento verso il futuro e un possibile piano di azione." },
  ],

  antonyms: [
    { term: "disilludersi", register: "comune", context: "abbandonare un'immagine desiderata quando non appare più credibile." },
    { term: "concretizzare", register: "comune", context: "portare nel piano dell'azione ciò che era rimasto una fantasia." },
  ],

  relatedWords: ["desiderio", "aspirazione", "bramare", "agognare", "speranza", "attesa", "nostalgia", "reminiscenza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/vagheggiare",
  },

  paroliereNote: "Vagheggiare è il verbo di un desiderio che preferisce restare figura: non per forza debole, ma sottratto alla verifica dei fatti. Accanto a → speranza conserva più immaginazione che fiducia nell'esito; accanto a → aspirazione mostra invece la sua quieta passività.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Vagheggiare — definizione, sinonimi, uso | Il Paroliere",
    description: "Cosa significa vagheggiare: immaginare con desiderio e contemplazione. Esempi e differenze da agognare, bramare e aspirare.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
