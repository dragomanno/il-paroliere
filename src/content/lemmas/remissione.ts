// Il Paroliere — Lemma: REMISSIONE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const remissione: LemmaEntry = {
  lemma: "remissione",
  slug: "remissione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "In medicina: scomparsa o attenuazione significativa dei sintomi di una malattia senza " +
    "che ciò implichi necessariamente la guarigione definitiva; si distingue tra remissione " +
    "parziale (riduzione dei sintomi) e remissione completa (assenza clinicamente rilevabile " +
    "della malattia). Particolarmente usato in oncologia e nelle patologie autoimmuni. " +
    "In diritto: rinuncia alla querela da parte della persona offesa, che determina " +
    "l'estinzione del reato procedibile a querela (art. 152 c.p. italiano). " +
    "In senso religioso e morale: perdono, concessione di grazia.",
  shortDefinition: "In medicina: attenuazione dei sintomi senza guarigione definitiva. In diritto: rinuncia alla querela.",
  register: ["tecnico-medico", "tecnico-giuridico", "formale"],
  domains: ["medicina", "diritto"],
  etymology:
    "Dal latino *remissio* (allentamento, perdono), derivato di *remittere* (rimandare, " +
    "allentare, perdonare), composto di *re-* e *mittere* (mandare). " +
    "In italiano il termine è attestato nel lessico ecclesiastico (remissione dei peccati) " +
    "prima di entrare stabilmente nel lessico medico e giuridico.",
  examples: [
    "Dopo due cicli di chemioterapia, la paziente ha raggiunto una remissione completa " +
    "confermata dalla PET.",
    "La remissione della querela da parte della vittima ha estinto il procedimento penale " +
    "per lesioni colpose.",
    "In oncologia, remissione non equivale a guarigione: la malattia può ripresentarsi " +
    "anche dopo anni di assenza di sintomi.",
  ],
  synonyms: [
    { term: "miglioramento", register: "neutro", context: "in ambito medico, meno tecnico" },
    { term: "attenuazione", register: "formale", context: "riduzione della gravità dei sintomi" },
    { term: "guarigione parziale", register: "medico", context: "con enfasi sulla parzialità del recupero" },
  ],
  antonyms: [
    { term: "recidiva", register: "tecnico-medico", context: "ricomparsa della malattia dopo remissione" },
    { term: "aggravamento", register: "tecnico-medico", context: "peggioramento della condizione patologica" },
    { term: "ricaduta", register: "medico-colloquiale", context: "ritorno dei sintomi dopo un periodo positivo" },
  ],
  relatedWords: ["recidiva", "ricaduta", "aggravamento", "epidemia", "diritto"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/remissione",
    treccani: "https://www.treccani.it/vocabolario/remissione/",
  },
  paroliereNote:
    "Il termine presenta una polisemia notevole: medicina, diritto e teologia ne condividono " +
    "la forma con sfumature molto diverse. In oncologia la distinzione tra remissione e " +
    "guarigione è clinicamente cruciale e spesso fraintesa nella comunicazione medico-paziente. " +
    "In diritto, la remissione della querela è atto unilaterale della persona offesa e " +
    "richiede la accettazione dell'imputato per produrre effetti estintivi.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "REMISSIONE — definizione | Il Paroliere",
    description:
      "Definizione di remissione: in medicina, attenuazione dei sintomi; in diritto, " +
      "rinuncia alla querela. Etimologia, sinonimi ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
