// Il Paroliere — Lemma: levantino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const levantino: LemmaEntry = {
  lemma: "levantino",
  slug: "levantino",
  partOfSpeech: "aggettivo; anche sostantivo maschile",
  gender: "maschile",

  definition:
    "Nel senso geografico e storico, levantino indica ciò che appartiene al Levante — " +
    "la regione che si affaccia sul Mediterraneo orientale, comprendente storicamente le coste " +
    "di Siria, Libano, Turchia, Grecia, e per estensione i Balcani e il mondo ottomano. " +
    "È il punto dove il sole si leva (levare) — da cui il nome — in contrapposizione al Ponente " +
    "occidentale. In senso figurato e antropologico, levantino descrive un tipo di temperamento " +
    "associato — con generalizzazione culturale da trattare con consapevolezza critica — alle " +
    "popolazioni di quell'area geografica: un temperamento fumino, facilmente infiammabile, " +
    "passionale, capace di passare rapidamente dall'entusiasmo all'ira. Non è necessariamente " +
    "un giudizio negativo — il temperamento levantino porta con sé calore umano, generosità, " +
    "intensità relazionale — ma nella lingua italiana corrente l'aggettivo tende a essere usato " +
    "con una sfumatura ironica o distanziante.",

  shortDefinition:
    "Del Levante mediterraneo; in senso figurato, di temperamento passionale e infiammabile, " +
    "che passa rapidamente da un estremo emotivo all'altro.",

  register: ["comune", "figurato con sfumatura spregiativa o ironica"],
  domains: ["geografia", "storia", "etnografia", "linguistica", "società"],

  etymology:
    "Da levante (participio presente di levare, «alzarsi»): la direzione in cui il sole si leva. " +
    "Termine geografico medievale usato dai mercanti veneziani e genovesi per indicare l'Oriente " +
    "mediterraneo.",

  examples: [
    "Ha un temperamento tutto levantino: ti abbraccia come un fratello e cinque minuti dopo urla come se lo stessi assassinando.",
    "Il bazar aveva quell'atmosfera levantina inconfondibile: odori sovrapposti, voci alte, contrattazione come forma d'arte.",
    "Dai Balcani in poi trovi quel modo levantino di stare al mondo: tutto più caldo, più rumoroso, più fisico.",
  ],

  synonyms: [
    {
      term: "passionale",
      register: "comune",
      context: "temperamento",
    },
    {
      term: "focoso",
      register: "comune",
      context: "temperamento",
    },
    {
      term: "esuberante",
      register: "comune",
      context: "comportamento",
    },
    {
      term: "fumino",
      register: "colloquiale toscano",
      context: "in senso più colloquiale toscano",
    },
  ],

  antonyms: [
    {
      term: "flemmatico",
      register: "comune",
      context: "temperamento opposto",
    },
    {
      term: "riservato",
      register: "comune",
      context: "comportamento",
    },
    {
      term: "nordico",
      register: "comune",
      context: "stereotipo opposto per contrasto",
    },
  ],

  relatedWords: [
    "fumino",
    "incazzoso",
    "Levante",
    "Balcani",
    "Mediterraneo",
    "temperamento",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/levantino/",
    wiktionary: "https://it.wiktionary.org/wiki/levantino",
  },

  paroliereNote:
    "Levantino è un termine che va usato con consapevolezza storica: porta con sé secoli di " +
    "sguardo occidentale sull'Oriente mediterraneo, uno sguardo non sempre neutro. Detto questo, " +
    "nell'italiano parlato ha una funzione descrittiva precisa e non necessariamente offensiva — " +
    "indica un tipo di intensità emotiva e di espressività che chi la conosce riconosce " +
    "immediatamente. La differenza con fumino è di registro e di geografia: levantino è più " +
    "letterario e geograficamente situato; fumino è toscano, quotidiano, quasi affettuoso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Levantino — definizione geografica e figurata | Il Paroliere",
    description:
      "Levantino: dal Mediterraneo orientale al temperamento passionale. Cosa significa, " +
      "come si usa, con note storiche e culturali. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
