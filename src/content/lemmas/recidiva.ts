// Il Paroliere — Lemma: RECIDIVA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const recidiva: LemmaEntry = {
  lemma: "recidiva",
  slug: "recidiva",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "In diritto penale: commissione di un nuovo reato da parte di chi ha già riportato " +
    "una condanna definitiva; costituisce una circostanza aggravante che il giudice valuta " +
    "nella determinazione della pena (art. 99 c.p. italiano). Si distingue tra recidiva " +
    "semplice, aggravata e reiterata. " +
    "In medicina: ricomparsa di una malattia o di sintomi patologici dopo un periodo di " +
    "remissione o di apparente guarigione; particolarmente rilevante in oncologia e nelle " +
    "patologie croniche.",
  shortDefinition: "In diritto: nuovo reato dopo condanna definitiva. In medicina: ricomparsa di malattia dopo remissione.",
  register: ["tecnico-giuridico", "tecnico-medico"],
  domains: ["diritto penale", "medicina"],
  etymology:
    "Dal latino *recidiva* (femminile di *recidivus*: che ricade, che ritorna), " +
    "derivato di *recidere* (ricadere), composto di *re-* (di nuovo) e *cadere* (cadere). " +
    "Il termine è condiviso dal lessico giuridico e da quello medico fin dall'età moderna.",
  examples: [
    "Il pubblico ministero ha contestato la recidiva specifica, avendo l'imputato " +
    "già riportato condanna per reati analoghi.",
    "In oncologia, la recidiva locoregionale entro cinque anni dalla chirurgia " +
    "richiede una rivalutazione del protocollo terapeutico.",
    "I programmi di reinserimento sociale mirano a ridurre il tasso di recidiva " +
    "tra i detenuti in uscita dal carcere.",
  ],
  synonyms: [
    { term: "ricaduta", register: "medico", context: "accezione medica, meno tecnica di recidiva" },
    { term: "reiterazione", register: "giuridico", context: "ripetizione dell'atto illecito" },
  ],
  antonyms: [
    { term: "ravvedimento", register: "formale", context: "in ambito penale: correzione del comportamento" },
    { term: "guarigione", register: "medico", context: "in ambito medico: cessazione definitiva della malattia" },
    { term: "remissione", register: "medico", context: "attenuazione duratura dei sintomi" },
  ],
  relatedWords: ["ricaduta", "remissione", "aggravamento", "criminalita", "diritto", "delinquenza"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/recidiva",
    treccani: "https://www.treccani.it/vocabolario/recidiva/",
  },
  paroliereNote:
    "Il termine è uno dei pochi del lessico giuridico e medico a condividere quasi identica " +
    "forma e radice etimologica nelle due discipline. In diritto penale la recidiva è oggetto " +
    "di dibattito dottrinale: alcuni la considerano indice di pericolosità sociale, altri " +
    "la vedono come strumento punitivo che contrasta con il principio rieducativo della pena " +
    "(art. 27 Cost. italiana).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "RECIDIVA — definizione | Il Paroliere",
    description:
      "Definizione di recidiva: in diritto, nuovo reato dopo condanna; in medicina, " +
      "ricomparsa di malattia. Etimologia, sinonimi ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
