// Il Paroliere — Lemma: populismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const populismo: LemmaEntry = {
  lemma: "populismo",
  slug: "populismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Orientamento politico che costruisce la propria legittimità sull'opposizione tra " +
    "un 'popolo puro' e un'élite corrotta o distante: il populismo non è una " +
    "ideologia in senso stretto, ma una logica retorica applicabile a contenuti " +
    "diversissimi — di destra come di sinistra. Storicamente indica anche movimenti " +
    "agrari russi e statunitensi di fine Ottocento. Nel dibattito contemporaneo è " +
    "spesso usato come termine dispregiativo, ma i politologi preferiscono una " +
    "definizione analitica più neutrale.",

  shortDefinition:
    "Politica che contrappone un 'popolo' puro a élite corrotte; logica retorica " +
    "trasversale agli schieramenti, non una singola ideologia.",

  register: ["comune", "politico"],
  domains: ["politica", "sociologia", "storia"],

  etymology:
    "Dal latino populus (popolo), con il suffisso -ismo che indica un sistema di " +
    "pensiero o movimento. Il termine si afferma in politologia nella seconda metà " +
    "del XX secolo, ma ha precedenti nel russo narodničestvo (narodnicestvo, 'andare " +
    "verso il popolo') degli anni 1870 e nel People's Party americano del 1892.",

  examples: [
  ],

  synonyms: [
    { term: "demagogia", register: "comune", context: "enfatizza la manipolazione delle masse, più critico" },
    { term: "sovereignismo", register: "politico", context: "variante contemporanea che enfatizza la sovranità nazionale" }
  ],

  antonyms: [
    { term: "elitismo", register: "politico", context: "il governo dei migliori, opposto strutturale del populismo" },
    { term: "tecnocrazia", register: "politico", context: "governo degli esperti, che il populismo contesta esplicitamente" }
  ],

  relatedWords: [
    "nazionalismo",
    "fascismo",
    "comunismo",
    "consumismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/populismo"
  },

  paroliereNote:
    "Il populismo contemporaneo è in parte un sintomo: cresce dove le istituzioni " +
    "liberali non hanno saputo rispondere ai bisogni reali di ampie fasce di " +
    "popolazione. Usarlo solo come insulto per chi non ci piace ci impedisce di " +
    "capire perché funziona. Cas Mudde, tra i maggiori studiosi del fenomeno, ha " +
    "proposto di trattarlo come una 'thin ideology' — un involucro formale che può " +
    "contenere contenuti molto diversi. È una distinzione che vale la pena imparare.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Populismo — Il Paroliere",
    description:
      "Populismo: logica politica del 'popolo contro le élite'. Definizione analitica, " +
      "storia, uso contemporaneo — Il Paroliere.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};