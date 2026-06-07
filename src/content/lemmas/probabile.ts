// Il Paroliere — Lemma: probabile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const probabile: LemmaEntry = {
  lemma: "probabile",
  slug: "probabile",
  partOfSpeech: "aggettivo",

  definition:
    "Che ha più evidenze, ragioni o indizi a favore che contro; che si può " +
    "ragionevolmente attendersi sulla base del quadro conoscitivo disponibile. " +
    "Probabile occupa il grado più alto della triade epistemica: non garantisce " +
    "la verità, ma indica che la maggioranza delle evidenze disponibili orienta " +
    "verso quella conclusione. In statistica, la probabilità è una misura " +
    "numerica tra 0 e 1 che quantifica il grado di attesa di un evento; nel " +
    "linguaggio comune, probabile è il termine qualitativo che descrive eventi " +
    "con probabilità significativamente superiore al 50%. In diritto, lo standard " +
    "del \"più probabile che non\" (balance of probabilities nel diritto " +
    "anglosassone) è il criterio del processo civile: non si richiede la certezza " +
    "oltre ogni ragionevole dubbio (standard penale), ma che la versione dei fatti " +
    "prospettata sia più probabile di quella alternativa.",

  shortDefinition:
    "Che ha la maggioranza delle evidenze a favore; il grado più alto della triade epistemica, prima della certezza.",

  register: ["comune", "logico", "statistico", "giuridico"],
  domains: ["logica", "statistica", "diritto", "linguistica", "uso comune"],

  etymology:
    "Dal latino probabilis («degno di approvazione, credibile»), derivato di " +
    "probare («dimostrare, approvare»), da probus («buono, valido»). Stesso " +
    "campo di prova, approvare, probità.",

  examples: [
    "È probabile che il treno arrivi in ritardo: ha già accumulato 20 minuti di ritardo a Bologna.",
    "La diagnosi più probabile è una frattura da stress: lo confermano i sintomi e la storia del paziente, anche prima della radiografia.",
    "Nel processo civile è sufficiente che la versione del ricorrente sia più probabile di quella del convenuto: non serve la certezza assoluta.",
    'Probabile in meteorologia significa circa 70-80% di probabilità: non è una promessa, ma è molto più di una possibilità.',
  ],

  synonyms: [
    {
      term: "verosimile",
      register: "comune",
      context: "con sfumatura narrativa",
    },
    {
      term: "atteso",
      register: "comune",
      context: "che ci si aspetta",
    },
    {
      term: "prevedibile",
      register: "comune",
      context: "che si può prevedere",
    },
    {
      term: "plausibile",
      register: "formale",
      context: "con meno evidenza del probabile",
    },
  ],

  antonyms: [
    {
      term: "improbabile",
      register: "comune",
      context: "che ha poche probabilità",
    },
    {
      term: "inatteso",
      register: "comune",
      context: "che non ci si aspetta",
    },
    {
      term: "impossibile",
      register: "comune",
      context: "per assenza assoluta di possibilità",
    },
  ],

  relatedWords: [
    "possibile",
    "plausibile",
    "probabilità",
    "statistica",
    "certezza",
    "evidenza",
    "indizio",
    "standard probatorio",
    "ragionevole dubbio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/probabile/",
    wiktionary: "https://it.wiktionary.org/wiki/probabile",
  },

  paroliereNote:
    "Probabile è la parola che la statistica ha trasformato da giudizio qualitativo " +
    "in misura quantitativa — e questo ha prodotto una tensione interessante nel " +
    "linguaggio comune. Quando un meteorologo dice «80% di probabilità di pioggia», " +
    "sta usando probabile in senso tecnico preciso; quando un amico dice " +
    "«probabilmente vengo», sta usando la stessa parola in modo vago, senza alcun " +
    "numero alla base. Il rischio è che la precisione della statistica presti " +
    "autorevolezza alla vaghezza del linguaggio quotidiano. Ricordare la triade " +
    "— → possibile, → plausibile, probabile — aiuta a capire che questi tre " +
    "aggettivi non sono sinonimi sfumati ma strumenti epistemici con funzioni diverse.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Probabile — definizione logica, statistica e giuridica | Il Paroliere",
    description:
      "Cosa significa probabile, differenza da possibile e plausibile. Uso in statistica, diritto e linguaggio comune. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
