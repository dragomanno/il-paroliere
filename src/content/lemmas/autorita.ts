// Il Paroliere — Lemma: AUTORITÀ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const autorita: LemmaEntry = {
  lemma: "autorità",
  slug: "autorita",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Legittimità riconosciuta di esercitare potere, comando o influenza su altri soggetti, " +
    "in virtù di una norma giuridica, di una tradizione o di qualità personali riconosciute. " +
    "Max Weber identifica tre tipi ideali di autorità legittima: l'autorità *carismatica* " +
    "(fondata sul riconoscimento di qualità straordinarie del leader), l'autorità *tradizionale* " +
    "(fondata sul rispetto per usi e consuetudini consolidati) e l'autorità *razionale-legale* " +
    "(fondata sull'obbedienza a norme astratte e impersonali, tipica dello Stato moderno). " +
    "In linguaggio comune, 'le autorità' designa gli organi e le persone investite di potere pubblico. " +
    "Da non confondere con *autorevolezza*, che è la qualità di chi è riconosciuto come esperto " +
    "e degno di fiducia, indipendentemente da un potere formalmente attribuito.",
  shortDefinition: "Legittimità riconosciuta di esercitare potere; Weber ne distingue tre tipi: carismatica, tradizionale, razionale-legale.",
  register: ["formale", "tecnico-giuridico", "filosofico"],
  domains: ["diritto", "filosofia", "sociologia"],
  etymology:
    "Dal latino *auctoritas*, derivato di *auctor* ('garante, promotore'). " +
    "In latino designava la capacità di garantire, aumentare, dare validità a un atto.",
  examples: [
    "L'autorità razionale-legale è il fondamento della burocrazia moderna: si obbedisce alle norme, non alla persona.",
    "Il magistrato agì d'autorità, imponendo il sequestro dei documenti prima che venissero distrutti.",
    "In crisi di legittimità, l'autorità del governo si erode anche senza una contestazione formale del suo mandato.",
  ],
  synonyms: [
    { term: "potere", register: "formale", context: "capacità di influenzare o determinare il comportamento altrui" },
    { term: "legittimità", register: "tecnico-giuridico", context: "fondamento normativo o consensuale del potere" },
    { term: "supremazia", register: "formale", context: "posizione di preminenza gerarchica" },
  ],
  antonyms: [
    { term: "anarchia", register: "politico", context: "assenza di autorità e gerarchia" },
    { term: "illegittimità", register: "tecnico-giuridico", context: "mancanza di fondamento normativo o consensuale" },
  ],
  relatedWords: ["potere", "autorevole", "norma", "diritto", "consenso"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/autorita/",
    wiktionary: "https://it.wiktionary.org/wiki/autorit%C3%A0",
  },
  paroliereNote:
    "La distinzione tra *autorità* e *autorevolezza* è cruciale e spesso trascurata: l'autorità è formale " +
    "(attribuita da una norma, un incarico, una tradizione), mentre l'autorevolezza è sostanziale " +
    "(guadagnata attraverso competenza, coerenza e qualità riconosciute). Un professore ha autorità " +
    "in virtù del ruolo; è autorevole se gli studenti lo stimano davvero. Si può avere autorità " +
    "senza autorevolezza (es. politici screditati) e autorevolezza senza autorità formale (es. esperti indipendenti).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "AUTORITÀ — definizione e uso | Il Paroliere",
    description: "Autorità: legittimità di esercitare potere. I tre tipi di Weber (carismatica, tradizionale, razionale-legale); distinta dall'autorevolezza.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
