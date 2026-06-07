// Il Paroliere — Lemma: DIRITTO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const diritto: LemmaEntry = {
  lemma: "diritto",
  slug: "diritto",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition:
    "Sistema di norme che disciplinano la convivenza civile, prodotte da un'autorità competente " +
    "(Stato, ordinamenti sovranazionali) e garantite dalla sanzione giuridica. " +
    "In senso oggettivo, il *diritto* è l'insieme delle norme (diritto positivo); " +
    "in senso soggettivo, è la facoltà attribuita dall'ordinamento a un soggetto di tenere un " +
    "comportamento o di pretendere una prestazione da altri (*ius* nel senso romano). " +
    "La filosofia del diritto si interroga sul fondamento del diritto: il giuspositivismo ritiene " +
    "che la validità di una norma dipenda dalla sua produzione formale; il giusnaturalismo sostiene " +
    "che esistano principi di giustizia sovraordinati al diritto positivo. " +
    "Il diritto si distingue in pubblico (rapporti tra Stato e privati) e privato (rapporti tra privati).",
  shortDefinition: "Sistema di norme che regolano la convivenza civile; in senso soggettivo, facoltà riconosciuta dall'ordinamento a un soggetto.",
  register: ["tecnico-giuridico", "formale"],
  domains: ["giurisprudenza", "filosofia del diritto"],
  etymology:
    "Dal latino *directus* (participio di *dirigere*, 'dirigere, mettere in riga'), poi usato come sostantivo " +
    "per indicare la norma retta che guida il comportamento. Convive con il latinismo giuridico *ius*.",
  examples: [
    "Il diritto internazionale regola i rapporti tra Stati sovrani ma la sua applicazione dipende spesso dalla volontà politica degli attori.",
    "Ogni cittadino ha il diritto di difendersi in giudizio: il contraddittorio è principio fondamentale del processo.",
    "La filosofia del diritto distingue la validità formale di una norma (è stata approvata secondo procedura?) dalla sua giustizia sostanziale.",
  ],
  synonyms: [
    { term: "legge", register: "standard", context: "atto normativo del Parlamento; in senso lato, norma giuridica" },
    { term: "norma", register: "tecnico-giuridico", context: "regola di condotta giuridicamente vincolante" },
    { term: "ordinamento", register: "tecnico-giuridico", context: "insieme sistematico delle norme vigenti in uno Stato" },
  ],
  antonyms: [
    { term: "torto", register: "standard", context: "comportamento contrario al diritto o all'equità" },
    { term: "illecito", register: "tecnico-giuridico", context: "atto contrario alle norme giuridiche" },
    { term: "arbitrio", register: "formale", context: "esercizio del potere senza vincoli normativi" },
  ],
  relatedWords: ["norma", "normativa", "legge", "proprieta", "contratto", "autorita", "liberta", "cessione", "criminalita", "recidiva", "remissione", "violenza"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/diritto/",
    wiktionary: "https://it.wiktionary.org/wiki/diritto",
  },
  paroliereNote:
    "Il termine ha altissima polisemia: *diritto* come sistema normativo (il diritto italiano), " +
    "*diritto* come facoltà soggettiva (ho il diritto di votare), *diritto* come aggettivo (una linea dritta), " +
    "*diritto* come avverbio (vai dritto). In questa scheda si considera solo la accezione giuridico-sostantivale. " +
    "La distinzione fondamentale è tra diritto *in senso oggettivo* (ius = legge come sistema) e " +
    "diritto *in senso soggettivo* (ius = pretesa individuale riconosciuta): confondere i due genera " +
    "molti errori nel ragionamento giuridico ordinario.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "DIRITTO — definizione e uso | Il Paroliere",
    description: "Diritto: sistema di norme per la convivenza civile (senso oggettivo) e facoltà del soggetto (senso soggettivo). Filosofia del diritto, giurisprudenza.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
