// Il Paroliere — Lemma: bramare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bramare: LemmaEntry = {
  lemma: "bramare",
  slug: "bramare",
  partOfSpeech: "verbo transitivo",
  register: ["letterario", "intenso"],
  domains: ["psicologia", "letteratura", "relazioni"],

  definition: "Desiderare qualcosa o qualcuno con impeto, come se il possesso o l'appagamento avesse un'urgenza fisica. Il verbo porta spesso una nota di avidità, sensualità o appropriazione, senza implicare necessariamente un progetto futuro. Rispetto a → desiderio alza l'intensità; rispetto ad agognare riduce il peso della distanza dolorosa.",

  shortDefinition: "Desiderare con urgenza viscerale, spesso con una sfumatura di possesso, avidità o sensualità.",

  etymology: "Voce di probabile origine germanica, collegata a una radice espressiva del grido o del muggito; il passaggio semantico va dalla richiesta a gran voce al desiderio impetuoso.",

  examples: [
    "Bramava quel posto da anni e la notizia della selezione gli tolse il sonno.",
    "Nel romanzo il protagonista brama il potere più di quanto sappia governarlo.",
    "Non bramava oggetti costosi: voleva soltanto una stanza tutta per sé.",
  ],

  synonyms: [
    { term: "desiderare", register: "comune", context: "verbo neutro per intensità e corporeità, adatto anche a desideri lievi." },
    { term: "agognare", register: "letterario", context: "desidera dalla lontananza e con pena; bramare è più vicino all'impulso e al possesso." },
    { term: "vagheggiare", register: "letterario", context: "è contemplativo e immaginativo, quasi l'opposto dell'urgenza di bramare." },
    { term: "aspirare", register: "comune", context: "indirizza un progetto verso una meta, senza la stessa pressione corporea." },
  ],

  antonyms: [
    { term: "disdegnare", register: "formale", context: "rifiutare o tenere a distanza ciò che potrebbe attirare." },
    { term: "accontentarsi", register: "comune", context: "rinunciare alla ricerca accanita di qualcosa di più." },
  ],

  relatedWords: ["desiderio", "aspirazione", "agognare", "vagheggiare", "speranza", "attesa", "frustrazione", "dipendenza"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/bramare",
  },

  paroliereNote: "Bramare non è soltanto desiderare molto: fa sentire la pressione del desiderio sul corpo e sul linguaggio. Per questo può risultare preciso in una scena di appetito, ambizione o gelosia, ma eccessivo per la semplice → aspirazione a un lavoro.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Bramare — definizione, sinonimi, uso | Il Paroliere",
    description: "Cosa significa bramare: desiderare con urgenza viscerale. Esempi e differenze da desiderare, agognare, aspirare e vagheggiare.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
