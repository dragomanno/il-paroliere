// Il Paroliere — Lemma: incazzoso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incazzoso: LemmaEntry = {
  lemma: "incazzoso",
  slug: "incazzoso",
  partOfSpeech: "aggettivo",

  definition:
    "Detto di persona che si arrabbia facilmente e spesso, che reagisce con ira sproporzionata " +
    "a stimoli anche minimi; che ha una soglia della tolleranza bassa e una risposta emotiva " +
    "rapida e accesa. Incazzoso non indica chi è sempre arrabbiato in modo cronico — quello " +
    "sarebbe semmai rabbioso o bilioso — ma chi si incazza facilmente, chi scatta alla prima " +
    "occasione. C'è una sfumatura quasi caratteriale, costituzionale: l'incazzoso lo è per " +
    "natura, non per una situazione contingente. Il termine è colloquiale e appartiene al " +
    "registro familiare-volgare: non si userebbe in un testo formale, ma è perfettamente a " +
    "suo agio in una conversazione, in un racconto, in un dialogo teatrale o narrativo. " +
    "Non è necessariamente molto offensivo — in certi contesti viene usato quasi con affetto, " +
    "come una caratteristica del personaggio.",

  shortDefinition:
    "Che si arrabbia facilmente e spesso; di carattere irascibile, con soglia bassa della tolleranza.",

  register: ["colloquiale", "volgare-familiare"],
  domains: ["società", "psicologia", "linguistica"],

  etymology:
    "Da incazzarsi (verbo volgare-colloquiale, da cazzo usato come intensivo espressivo " +
    "nell'italiano popolare) + suffisso aggettivale -oso («che tende a, pieno di»). " +
    "La costruzione è parallela a pauroso, geloso, nervoso.",

  examples: [
    "«Attenzione a come glielo dici: è una persona incazzosa, prende fuoco in un secondo.»",
    "«Non sono incazzoso di carattere, ma certe ingiustizie mi fanno perdere la pazienza.»",
    "«Era un tipo incazzoso ma leale: si arrabbiava spesso, ma non portava rancore.»",
  ],

  synonyms: [
    {
      term: "irascibile",
      register: ["comune"],
      context: "corrispettivo formale",
    },
    {
      term: "collerico",
      register: ["tecnico"],
      context: "termine tecnico-umorale",
    },
    {
      term: "fumino",
      register: ["colloquiale toscano"],
      context: "variante regionale bonaria",
    },
    {
      term: "bilioso",
      register: ["comune"],
      context: "con sfumatura di amarezza cronica",
    },
  ],

  antonyms: [
    {
      term: "calmo",
      register: ["comune"],
      context: "temperamento opposto",
    },
    {
      term: "paziente",
      register: ["comune"],
      context: "atteggiamento opposto",
    },
    {
      term: "flemmatico",
      register: ["comune"],
      context: "temperamento opposto",
    },
  ],

  relatedWords: [
    "fumino",
    "incazzatello",
    "levantino",
    "ira",
    "collera",
    "irascibilità",
    "carattere",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/incazzoso/",
    wiktionary: "https://it.wiktionary.org/wiki/incazzoso",
  },

  paroliereNote:
    "La famiglia lessicale dell'ira in italiano è ricca e sfumata. Incazzoso sta al livello più " +
    "colloquiale e fisico; irascibile è il suo corrispettivo formale; collerico è quello tecnico-umorale " +
    "(dalla medicina degli umori); bilioso è quello con la sfumatura di amarezza cronica; fumino è " +
    "quello toscano con la sua affettuosità bonaria. Ognuno descrive una variante diversa dello " +
    "stesso temperamento di base: la facilità all'ira.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Incazzoso — definizione colloquiale, sinonimi | Il Paroliere",
    description:
      "Incazzoso: cosa significa, come si usa, differenza da irascibile, fumino e collerico. " +
      "La famiglia lessicale dell'ira nel parlato italiano.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
