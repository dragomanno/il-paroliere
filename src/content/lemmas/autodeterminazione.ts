// Il Paroliere — Lemma: AUTODETERMINAZIONE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const autodeterminazione: LemmaEntry = {
  lemma: "autodeterminazione",
  slug: "autodeterminazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Il principio e il diritto di decidere autonomamente della propria condizione, senza ingerenze esterne. " +
    "In diritto internazionale, l'autodeterminazione dei popoli è sancita dalla Carta delle Nazioni Unite (1945) " +
    "e dai Patti internazionali sui diritti civili e politici (1966): ogni popolo ha il diritto di determinare " +
    "liberamente il proprio status politico e di perseguire il proprio sviluppo economico, sociale e culturale. " +
    "In etica e filosofia morale, l'autodeterminazione individuale è il principio per cui ogni persona è " +
    "la sola autorità legittima sulle scelte che riguardano la propria vita, nella misura in cui non ledono " +
    "la libertà altrui (J.S. Mill).",
  shortDefinition: "Diritto di ogni popolo o individuo di decidere autonomamente del proprio destino politico o personale.",
  register: ["formale", "tecnico-giuridico"],
  domains: ["filosofia", "diritto internazionale"],
  etymology:
    "Composto italiano di *auto-* (dal greco *autós*, 'sé stesso') e *determinazione* (dal latino *determinatio*, " +
    "'fissazione di un limite, decisione'). Il termine si afferma nel linguaggio giuridico-politico del XX secolo.",
  examples: [
    "Il principio di autodeterminazione dei popoli fu invocato dopo la Prima Guerra Mondiale per ridisegnare i confini europei.",
    "In bioetica, il rispetto dell'autodeterminazione del paziente impone di accettare anche il rifiuto delle cure.",
    "Il movimento indipendentista rivendicava l'autodeterminazione come diritto imprescrittibile della nazione.",
  ],
  synonyms: [
    { term: "autogoverno", register: "politico", context: "esercizio diretto del governo su sé stessi" },
    { term: "emancipazione", register: "formale", context: "liberazione da uno stato di dipendenza o tutela" },
  ],
  antonyms: [
    { term: "eteronomia", register: "filosofico", context: "ricezione della legge dall'esterno" },
    { term: "colonialismo", register: "storico-politico", context: "dominio esterno che nega l'autogoverno" },
    { term: "imposizione", register: "standard", context: "costrizione proveniente da un'autorità esterna" },
  ],
  relatedWords: ["autonomia", "liberta", "diritto", "consenso", "norma"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/autodeterminazione/",
    wiktionary: "https://it.wiktionary.org/wiki/autodeterminazione",
  },
  paroliereNote:
    "Non va confusa *autodeterminazione dei popoli* (diritto collettivo dei gruppi nazionali) con " +
    "*autodeterminazione individuale* (principio etico-liberale della sovranità sul proprio corpo e sulla propria vita). " +
    "In bioetica, il secondo principio è al centro dei dibattiti su eutanasia, aborto e rifiuto delle cure. " +
    "In diritto internazionale, il primo rimane conteso: il suo esercizio può entrare in conflitto con " +
    "l'integrità territoriale degli Stati.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "AUTODETERMINAZIONE — definizione e uso | Il Paroliere",
    description: "Autodeterminazione: diritto di popoli e individui di decidere il proprio destino. Diritto internazionale, etica, bioetica.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
