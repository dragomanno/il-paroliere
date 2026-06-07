// Il Paroliere — Lemma: EPIDEMIA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const epidemia: LemmaEntry = {
  lemma: "epidemia",
  slug: "epidemia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Diffusione di una malattia infettiva in una popolazione geograficamente o " +
    "temporalmente circoscritta, in misura superiore alle soglie attese o storicamente " +
    "osservate (tasso di incidenza sopra la baseline endemica). " +
    "L'OMS e i sistemi di sorveglianza nazionali dichiarano un'epidemia sulla base di " +
    "criteri epidemiologici quantitativi. " +
    "In uso figurato: diffusione rapida e su larga scala di un fenomeno negativo " +
    "(epidemia di violenza, epidemia di disinformazione).",
  shortDefinition: "Diffusione di una malattia infettiva oltre le soglie attese in una popolazione circoscritta.",
  register: ["tecnico-scientifico", "formale", "figurato"],
  domains: ["epidemiologia", "uso esteso"],
  etymology:
    "Dal greco antico *epidēmía* (diffusione nel popolo), composto di *epí* (sopra, tra) " +
    "e *dêmos* (popolo). Il termine è attestato in Ippocrate; in italiano è presente " +
    "almeno dal XIV secolo.",
  examples: [
    "L'epidemia influenzale del 2017-2018 ha colpito oltre quattro milioni di italiani " +
    "nel giro di pochi mesi.",
    "L'OMS ha dichiarato l'epidemia di colera dopo che i casi segnalati hanno superato " +
    "la soglia di allerta nella regione.",
    "I giornali usano spesso 'epidemia' in senso figurato per descrivere la diffusione " +
    "di comportamenti antisociali.",
  ],
  synonyms: [
    { term: "diffusione", register: "neutro", context: "meno tecnico, indica propagazione generale" },
    { term: "contagio", register: "neutro", context: "con enfasi sul meccanismo di trasmissione" },
  ],
  antonyms: [
    { term: "endemia", register: "tecnico-scientifico", context: "fenomeno infettivo stabile e circoscritto a un territorio" },
    { term: "eradicazione", register: "tecnico-scientifico", context: "eliminazione definitiva di un agente patogeno" },
  ],
  relatedWords: ["pandemia", "contagio", "salute", "norma", "autorita", "stato"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/epidemia",
    treccani: "https://www.treccani.it/vocabolario/epidemia/",
  },
  paroliereNote:
    "La distinzione tecnica tra epidemia, endemia e pandemia è spesso sfumata nel " +
    "linguaggio comune. Epidemia si riferisce a un eccesso di casi rispetto al livello " +
    "endemico atteso; pandemia implica diffusione geografica a scala globale; endemia " +
    "indica una presenza stabile e prevedibile in un territorio. L'uso figurato è " +
    "diffuso ma rischia di banalizzare fenomeni sanitari gravi.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "EPIDEMIA — definizione | Il Paroliere",
    description:
      "Definizione di epidemia: diffusione di malattia infettiva oltre le soglie attese. " +
      "Distinzione da pandemia ed endemia. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
