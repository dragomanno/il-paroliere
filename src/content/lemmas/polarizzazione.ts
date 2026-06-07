// Il Paroliere — Lemma: polarizzazione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const polarizzazione: LemmaEntry = {
  lemma: "polarizzazione",
  slug: "polarizzazione",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In fisica e ottica, il processo per cui le oscillazioni di un'onda " +
    "(tipicamente la luce) vengono orientate in una direzione privilegiata, " +
    "perdendo la distribuzione casuale originale. In elettrotecnica e chimica, " +
    "la polarizzazione di un elettrodo o di una batteria indica la separazione " +
    "di cariche positive (+) e negative (−) ai due poli: le batterie hanno un " +
    "polo positivo e uno negativo proprio per effetto di questo processo " +
    "elettrochimico. In sociologia e scienza politica, la polarizzazione indica " +
    "la progressiva divisione di una società o di un sistema politico in due o " +
    "più blocchi contrapposti, con riduzione delle posizioni intermedie e " +
    "rafforzamento degli estremi. Una società polarizzata è una società in cui " +
    "il centro si svuota: chi era moderato si sposta verso un polo o l'altro, " +
    "e il dialogo tra posizioni diverse diventa sempre più difficile.",

  shortDefinition:
    "In fisica, orientamento preferenziale delle oscillazioni di un'onda; in elettrotecnica, separazione di cariche in polo + e polo −; in sociologia, divisione progressiva in blocchi contrapposti con indebolimento del centro.",

  register: ["tecnico", "comune"],
  domains: ["fisica", "elettrotecnica", "sociologia", "politica"],

  etymology:
    "Da polare + suffisso -izzazione, sul modello del francese polarisation e " +
    "dell'inglese polarization, derivati di pole/pôle, dal latino polus, dal " +
    "greco pólos («asse, perno»).",

  examples: [
    "«Il filtro polarizzato sugli occhiali da sole riduce i riflessi bloccando la luce orientata orizzontalmente.»",
    "«La polarizzazione della batteria si riduce quando la si lascia a riposo: le cariche si ridistribuiscono.»",
    "«La polarizzazione politica degli ultimi anni ha reso impossibile qualsiasi compromesso legislativo: non ci sono più parlamentari di centro.»",
    "«I social media amplificano la polarizzazione: gli algoritmi mostrano solo ciò che rinforza le opinioni già esistenti, creando camere d'eco.»",
  ],

  synonyms: [
    {
      term: "divisione",
      register: ["comune"],
      context: "in senso politico-sociale",
    },
    {
      term: "radicalizzazione",
      register: ["comune"],
      context: "in senso politico",
    },
    {
      term: "orientamento",
      register: ["tecnico-scientifico"],
      context: "in senso fisico",
    },
  ],

  antonyms: [
    {
      term: "convergenza",
      register: ["comune"],
      context: "in senso politico",
    },
    {
      term: "moderazione",
      register: ["comune"],
      context: "in senso politico",
    },
  ],

  relatedWords: [
    "saturazione",
    "semantica",
    "filtro polarizzatore",
    "batteria",
    "elettrolisi",
    "populismo",
    "echo chamber",
    "tribalismo",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/polarizzazione/",
    wiktionary: "https://it.wiktionary.org/wiki/polarizzazione",
  },

  paroliereNote:
    "Polarizzazione è oggi principalmente conosciuta nel suo senso politico-sociale, " +
    "complici anni di dibattito sul populismo, sui social media e sulla crisi delle " +
    "democrazie liberali. Vale la pena non dimenticare il senso fisico originale, " +
    "che è bellissimo nella sua precisione: la luce non polarizzata vibra in tutte " +
    "le direzioni contemporaneamente; la luce polarizzata vibra in una sola. La " +
    "metafora politica è perfetta: una società polarizzata è una in cui le " +
    "\"vibrazioni\" si sono concentrate su un asse solo, perdendo la ricchezza del " +
    "disordine originale. E — come nella fisica — la polarizzazione riduce il " +
    "rumore ma riduce anche l'informazione.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Polarizzazione — fisica, batterie, politica | Il Paroliere",
    description:
      "Polarizzazione in ottica, elettrotecnica e sociologia politica. Dalle batterie alla divisione della società. Definizione originale con esempi e nota.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
