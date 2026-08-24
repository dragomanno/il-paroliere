// Il Paroliere — Lemma: idealismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const idealismo: LemmaEntry = {
  lemma: "idealismo",
  slug: "idealismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["formale", "filosofico"],
  domains: ["filosofia", "etica", "politica", "storia delle idee"],

  definition: "Disposizione a giudicare e agire alla luce di ideali, anche quando l'utile immediato suggerirebbe altro; può evocare generosità, coerenza o scarsa attenzione ai limiti pratici. In filosofia designa orientamenti diversi che attribuiscono alle idee, alla coscienza o allo spirito un ruolo decisivo nella realtà e nella conoscenza. Non è un desiderio individuale, ma una postura valoriale o teorica.",

  shortDefinition: "Orientamento valoriale o filosofico che pone gli ideali e le idee a guida del giudizio e dell'agire.",

  etymology: "Da ideale, attraverso il francese idéalisme, con il suffisso -ismo. La parola si forma nel lessico filosofico moderno e poi si estende al linguaggio morale e civile.",

  examples: [
    "Il suo idealismo non gli impediva di fare i conti, ma gli impediva di trattare le persone come numeri.",
    "Nel seminario si discuteva dell'idealismo tedesco e delle sue conseguenze per l'idea di conoscenza.",
    "L'idealismo della proposta era evidente; mancavano però tempi, risorse e una mediazione con chi doveva attuarla.",
  ],

  synonyms: [
    { term: "idealità", register: "formale", context: "richiama il piano degli ideali, ma non sempre una disposizione attiva a seguirli." },
    { term: "utopismo", register: "formale", context: "accentua la distanza dalla praticabilità e può avere una sfumatura critica." },
    { term: "aspirazione", register: "comune", context: "è la tensione personale verso una meta; l'idealismo riguarda invece i criteri di valore che la orientano." },
  ],

  antonyms: [
    { term: "cinismo", register: "comune", context: "atteggiamento che guarda con sfiducia o derisione alle motivazioni ideali." },
    { term: "pragmatismo", register: "formale", context: "in opposizione solo quando privilegia l'efficacia immediata rispetto ai principi." },
  ],

  relatedWords: ["aspirazione", "desiderio", "speranza", "attesa", "filosofia", "autonomia", "cinismo", "utopia"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/idealismo",
  },

  paroliereNote: "L'idealismo può ispirare un'azione concreta oppure essere il suo punto cieco: la parola non decide in anticipo tra nobiltà e ingenuità. Diversamente da → desiderio e → aspirazione, non nomina ciò che una persona vuole ottenere, ma il valore con cui valuta ciò che vale la pena perseguire.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Idealismo — definizione, sinonimi, uso | Il Paroliere",
    description: "Definizione di idealismo: orientamento morale e filosofico verso gli ideali, con esempi, etimologia e differenze da aspirazione.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
