// Il Paroliere — Lemma: NORMA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const norma: LemmaEntry = {
  lemma: "norma",
  slug: "norma",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",
  definition:
    "Regola di condotta che prescrive, vieta o permette determinati comportamenti in un contesto dato. " +
    "La norma può essere giuridica (vincolante per legge, con sanzione in caso di violazione), " +
    "sociale (condivisa da un gruppo e rafforzata dall'approvazione o dalla disapprovazione collettiva), " +
    "o linguistica (uso corretto della lingua, stabilito dalla tradizione colta, dall'accademia o dall'uso " +
    "prevalente della comunità). In logica deontica, le norme si classificano in obblighi, permessi e divieti. " +
    "Il sociologo Émile Durkheim vede nelle norme il fondamento della coesione sociale: la loro " +
    "assenza o erosione genera *anomia* (letteralmente 'mancanza di norma'), condizione di disorientamento " +
    "e disgregazione sociale.",
  shortDefinition: "Regola di condotta giuridica, sociale o linguistica che prescrive, vieta o permette comportamenti in un contesto dato.",
  register: ["tecnico-giuridico", "formale", "linguistico"],
  domains: ["diritto", "linguistica", "sociologia"],
  etymology:
    "Dal latino *norma* ('squadra da muratore', poi 'regola, modello'). " +
    "Entrato in italiano con il significato di 'regola' in ambito sia tecnico sia giuridico.",
  examples: [
    "La norma ISO 9001 definisce i requisiti di un sistema di gestione della qualità riconosciuto a livello internazionale.",
    "Nella linguistica descrittiva si studia l'uso reale; nella linguistica normativa si stabilisce quale uso sia corretto.",
    "Durkheim descrive l'anomia come la crisi che si produce quando le norme sociali non riescono più a regolare i comportamenti individuali.",
  ],
  synonyms: [
    { term: "regola", register: "standard", context: "principio di condotta da seguire in un contesto dato" },
    { term: "legge", register: "standard", context: "norma giuridica formalmente approvata dal Parlamento" },
    { term: "precetto", register: "formale", context: "norma perentoria che impone un comportamento" },
    { term: "canone", register: "formale", context: "norma riconosciuta come modello in un campo" },
  ],
  antonyms: [
    { term: "eccezione", register: "standard", context: "caso che sfugge alla regola generale" },
    { term: "deroga", register: "tecnico-giuridico", context: "scostamento autorizzato dalla norma generale" },
    { term: "arbitrio", register: "formale", context: "azione senza vincoli normativi" },
  ],
  relatedWords: ["normativa", "diritto", "legge", "autorita", "contratto"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/norma/",
    wiktionary: "https://it.wiktionary.org/wiki/norma",
  },
  paroliereNote:
    "La parola *norma* copre ambiti molto diversi: giuridico, tecnico-industriale (norme ISO, UNI), " +
    "linguistico e sociale. Nell'uso corrente si tende a usare *norma* come equivalente di *legge*, " +
    "ma in senso stretto la legge è una norma giuridica di rango primario prodotta dal Parlamento; " +
    "esistono anche norme di rango secondario (regolamenti, circolari, decreti). " +
    "Il concetto di *anomia* di Durkheim resta attuale per interpretare fenomeni di disagio sociale " +
    "legati alla dissoluzione dei riferimenti normativi condivisi.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "NORMA — definizione e uso | Il Paroliere",
    description: "Norma: regola giuridica, sociale o linguistica. Obbligo, permesso, divieto; anomia di Durkheim; norme ISO e linguistiche.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
