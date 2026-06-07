// Il Paroliere — Lemma: ESPERIENZA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const esperienza: LemmaEntry = {
  lemma: "esperienza",
  slug: "esperienza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Nell'accezione filosofica, il termine distingue due piani distinti: " +
    "l'Erlebnis (tedesco) indica il vissuto immediato, la percezione diretta e soggettiva di un evento; " +
    "l'Erfahrung indica invece l'esperienza elaborata, sedimentata nel tempo, che diventa sapere riflessivo. " +
    "In psicologia cognitiva, l'esperienza è l'insieme degli apprendimenti derivati dal contatto diretto con " +
    "situazioni reali, che modellano schemi mentali e competenze pratiche. " +
    "Nel framework E-E-A-T di Google, Experience (esperienza) è il primo elemento della gerarchia operativa " +
    "approvata — Experience > Authoritativeness > Expertise > Trustworthiness — e indica la capacità di " +
    "produrre contenuti da parte di chi ha vissuto direttamente ciò che descrive: chi ha usato il prodotto, " +
    "percorso il sentiero, affrontato la procedura. L'esperienza diretta conferisce ai contenuti un valore " +
    "qualitativo non sostituibile dalla sola competenza teorica.",
  shortDefinition:
    "Vissuto diretto che genera conoscenza. In E-E-A-T: primo elemento (Experience > Authoritativeness > Expertise > Trust).",
  register: ["standard", "filosofico", "tecnico-SEO"],
  domains: ["filosofia", "SEO", "psicologia"],
  etymology:
    "Dal latino experientia, derivato di experiri («mettere alla prova»), " +
    "a sua volta composto di ex- («fuori») e perire («passare attraverso»). " +
    "Stessa radice di pericolo e perito. Il tedesco distingue Erlebnis (da erleben, «vivere») " +
    "ed Erfahrung (da erfahren, «percorrere»), distinzione ripresa dalla fenomenologia husserliana.",
  examples: [
    "L'esperienza di aver percorso il Cammino di Santiago in solitaria rende la sua guida " +
      "più affidabile di qualsiasi articolo scritto a tavolino.",
    "Nella distinzione husserliana, l'Erlebnis è il brivido del momento vissuto, " +
      "mentre l'Erfahrung è la comprensione che ne emerge dopo la riflessione.",
    "Google premia i contenuti scritti da chi ha esperienza diretta dell'argomento: " +
      "una recensione di un medico che ha usato il dispositivo vale più di una sintesi generica.",
  ],
  synonyms: [
    { term: "vissuto", register: "standard", context: "accezione esistenziale e psicologica" },
    { term: "pratica", register: "standard", context: "competenza acquisita attraverso l'esercizio" },
    { term: "competenza diretta", register: "tecnico", context: "uso SEO e professionale" },
  ],
  antonyms: [
    { term: "teoria", register: "standard", context: "sapere astratto non testato sul campo" },
    { term: "astrazione", register: "filosofico", context: "concetto separato dalla realtà sensibile" },
    { term: "speculazione", register: "standard", context: "ragionamento privo di verifica empirica" },
  ],
  relatedWords: ["e-e-a-t", "expertise", "autorita", "affidabilita", "autorevole"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/esperienza",
    treccani: "https://www.treccani.it/vocabolario/esperienza",
  },
  paroliereNote:
    "La voce copre deliberatamente due livelli semantici: quello filosofico " +
    "(con la distinzione Erlebnis/Erfahrung, centrale nella fenomenologia tedesca) e quello " +
    "applicativo-SEO (Experience nel framework E-E-A-T). " +
    "Nella gerarchia operativa approvata da Pistakkio, l'esperienza occupa il primo posto: " +
    "Experience > Authoritativeness > Expertise > Trustworthiness. " +
    "Questa sequenza non è alfabetica, ma riflette la catena causale: si ha expertise perché " +
    "si ha esperienza, si è autorevoli perché si ha expertise, si è affidabili perché si è autorevoli.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "ESPERIENZA — definizione | Il Paroliere",
    description:
      "Definizione filosofica (Erlebnis/Erfahrung) e SEO di esperienza. " +
      "Primo elemento del framework E-E-A-T: Experience > Authoritativeness > Expertise > Trust.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
