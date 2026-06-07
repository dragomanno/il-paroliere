// Il Paroliere — Lemma: AUTONOMIA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const autonomia: LemmaEntry = {
  lemma: "autonomia",
  slug: "autonomia",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Capacità di darsi la propria legge, di governarsi secondo principi stabiliti da sé, " +
    "senza dipendere dall'autorità altrui. In filosofia morale, Kant definisce l'autonomia della " +
    "volontà come fondamento dell'etica: l'individuo morale agisce secondo massime che egli stesso " +
    "sarebbe disposto a universalizzare. In diritto, l'autonomia privata indica il potere dei soggetti " +
    "di regolare i propri rapporti mediante contratto; l'autonomia degli enti territoriali (regioni, comuni) " +
    "designa la capacità di auto-governo riconosciuta dall'ordinamento costituzionale. " +
    "In psicologia dello sviluppo, l'autonomia è traguardo fondamentale dell'adolescenza.",
  shortDefinition: "Capacità di darsi la propria legge (Kant); auto-governo individuale o collettivo riconosciuto dall'ordinamento.",
  register: ["formale", "filosofico", "tecnico-giuridico"],
  domains: ["filosofia", "diritto", "politica"],
  etymology:
    "Dal greco *autonomía*, composto di *autós* ('sé stesso') e *nómos* ('legge'). " +
    "Entrato in italiano nel XVIII secolo attraverso il francese *autonomie*.",
  examples: [
    "La filosofia kantiana pone l'autonomia della volontà al cuore della moralità: agire bene significa agire secondo la propria ragione legislatrice.",
    "Le regioni italiane godono di autonomia legislativa in alcune materie, ma restano vincolate ai principi costituzionali.",
    "Incoraggiare l'autonomia nei bambini fin dalla prima infanzia favorisce lo sviluppo della fiducia in sé stessi.",
  ],
  synonyms: [
    { term: "indipendenza", register: "standard", context: "assenza di dipendenza da autorità esterne" },
    { term: "autogoverno", register: "politico", context: "gestione diretta delle proprie istituzioni" },
    { term: "emancipazione", register: "formale", context: "liberazione da una condizione di tutela o subordinazione" },
  ],
  antonyms: [
    { term: "eteronomia", register: "filosofico", context: "ricezione della legge dall'esterno di sé" },
    { term: "dipendenza", register: "standard", context: "condizione di subordinazione a un'altra volontà" },
    { term: "sudditanza", register: "formale", context: "sottomissione a un'autorità superiore" },
  ],
  relatedWords: ["liberta", "autodeterminazione", "diritto", "norma", "consenso"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/autonomia/",
    wiktionary: "https://it.wiktionary.org/wiki/autonomia",
  },
  paroliereNote:
    "Il termine ha senso diverso a seconda del contesto: l'autonomia kantiana è un concetto morale-filosofico; " +
    "l'autonomia territoriale è un concetto giuridico-istituzionale; l'autonomia psicologica è uno stadio " +
    "dello sviluppo individuale. In tutti i casi il nucleo semantico è lo stesso: la norma viene dall'interno, " +
    "non dall'esterno. Opposto filosofico preciso: *eteronomia* (Kant contrappone i due termini esplicitamente).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "AUTONOMIA — definizione e uso | Il Paroliere",
    description: "Autonomia: capacità di darsi la propria legge (Kant). Auto-governo individuale, enti territoriali, psicologia dello sviluppo.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
