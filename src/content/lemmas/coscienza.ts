// Il Paroliere — Lemma: coscienza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const coscienza: LemmaEntry = {
  lemma: "coscienza",
  slug: "coscienza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "tecnico", "filosofico"],
  domains: ["psicologia", "filosofia", "neuroscienze", "etica", "religione"],

  definition:
    "Consapevolezza che una persona ha di sé stessa e del mondo che la circonda: sensazioni, pensieri, emozioni, azioni, e del fatto di esserne il soggetto. In psicologia la coscienza è la qualità degli stati mentali che sono “in primo piano” e accessibili al linguaggio e alla riflessione; in filosofia diventa il nome dell'esperienza soggettiva di esistere, capace di rivolgersi su di sé e di chiedersi chi è e cosa sta facendo; nel linguaggio morale indica anche la voce interiore che giudica le proprie azioni come giuste o sbagliate. Nel parlato, dire che qualcuno “perde conoscenza” o “non ha coscienza di quello che fa” intreccia livello neurologico, consapevolezza e responsabilità.",

  shortDefinition:
    "Consapevolezza di sé e dell'ambiente, e per estensione voce interiore che valuta le proprie azioni alla luce di valori e responsabilità.",

  etymology:
    "Dal latino conscientia, “consapevolezza, complicità, coscienza morale”, formato da cum “con” e scientia “sapere”, a indicare un “sapere con sé stessi” o “sapere insieme ad altri”. Nella tradizione filosofica e psicologica moderna il termine si specializza per designare sia l'esperienza soggettiva immediata, sia il senso morale delle proprie azioni.",

  examples: [
    "Dopo l'intervento ha ripreso lentamente conoscenza, riconoscendo la stanza e le voci intorno a sé.",
    "La coscienza non è solo essere svegli, ma sapere in qualche modo che si sta vivendo ciò che accade.",
    "Quando diceva di agire “a posto con la coscienza”, intendeva che le sue scelte erano in linea con i propri criteri morali.",
    "Molti filosofi discutono se la coscienza sia un prodotto del cervello o una dimensione irriducibile dell'esperienza.",
    "Un regime autoritario ha paura della coscienza critica, perciò prova a ridurla a ripetizione di slogan.",
  ],

  synonyms: [
    {
      term: "consapevolezza",
      register: "comune",
      note: "Più ampia, copre anche aspetti non riflessivi.",
    },
    {
      term: "autocoscienza",
      register: "filosofico",
      note: "Livello in cui la coscienza si rivolge esplicitamente a sé stessa.",
    },
  ],

  antonyms: [
    {
      term: "incoscienza",
      register: "comune",
      note: "Assenza di coscienza temporanea, oppure condotta senza senso di responsabilità.",
    },
    {
      term: "automatismo",
      register: "tecnico-divulgativo",
      note: "Azione svolta senza passare per la coscienza vigile.",
    },
  ],

  relatedWords: ["inconscio", "identita", "memoria"],

  sourceLinks: {},

  paroliereNote:
    "La coscienza è una di quelle parole in cui si incontrano tre registri diversi: neurologico (essere svegli o no), fenomenologico (sentire in prima persona) e morale (sapere se si sta facendo il bene o il male). Nel dibattito pubblico, spesso li mescoliamo senza accorgercene: dire che qualcuno “non ha coscienza” può voler dire che non è lucido o che non si assume le proprie responsabilità. Il lemma suggerisce di tenere insieme queste dimensioni senza confonderle: c'è una coscienza che si accende e si spegne, una che accompagna silenziosamente ogni gesto, e una che ci interroga su chi stiamo diventando mentre agiamo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "coscienza — essere presenti a sé stessi",
    description:
      "Che cos'è la coscienza tra psicologia, filosofia e vita morale, dall'esperienza di esistere alla voce interiore che giudica le nostre azioni.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
