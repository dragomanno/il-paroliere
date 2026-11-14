// Il Paroliere — Lemma: punto di rugiada
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const puntoDiRugiada: LemmaEntry = {
  lemma: "punto di rugiada",
  slug: "punto-di-rugiada",
  partOfSpeech: "locuzione sostantivale maschile",
  gender: "maschile",
  definition: "Temperatura alla quale l'aria deve raffreddarsi, senza cambiare pressione né contenuto di vapore, per diventare satura e cominciare a condensare in goccioline. Più è alto, più l'aria contiene acqua. Quando la temperatura reale scende fino al punto di rugiada si formano rugiada, nebbia o nubi; se il punto è sotto zero, il vapore si deposita come brina e si parla di punto di brina.",
  shortDefinition: "Temperatura a cui l'aria, raffreddandosi, diventa satura e il vapore comincia a condensare; indica quanta acqua contiene.",
  register: [
    "tecnico-scientifico",
  ],
  domains: [
    "meteorologia",
    "fisica",
  ],
  etymology: "Rugiada dal provenzale antico rozada, dal latino ros, roris «rugiada», attraverso una forma tarda *rosata; la locuzione calca il francese point de rosée e l'inglese dew point.",
  examples: [
    "Il punto di rugiada a ventidue gradi spiega perché, anche senza un caldo record, la serata era soffocante.",
    "Quando la temperatura notturna è scesa al punto di rugiada, l'erba del giardino si è coperta di goccioline.",
    "Il tecnico ha calcolato il punto di rugiada nella parete per capire dove si formava la muffa.",
  ],
  synonyms: [
    {
      term: "temperatura di rugiada",
      register: "tecnico-scientifico",
      context: "variante meno frequente",
    },
    {
      term: "punto di brina",
      register: "tecnico-scientifico",
      context: "solo quando la saturazione si raggiunge sotto zero, rispetto al ghiaccio",
    },
    {
      term: "dew point",
      register: "tecnico-scientifico",
      context: "anglicismo delle app meteo, della climatizzazione e dell'edilizia",
    },
  ],
  antonyms: [],
  relatedWords: [
    "rugiada",
    "brina",
    "umidita-relativa",
    "saturazione",
    "condensazione",
    "nebbia",
    "temperatura",
    "evaporazione",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/rugiada/",
    wiktionary: "https://it.wiktionary.org/wiki/rugiada",
  },
  paroliereNote: "Nelle app meteo e nei manuali tecnici compare spesso con il nome inglese, dew point, ed è il dato più onesto sull'umidità, perché non cambia ogni ora con il termometro. In genere, sotto i 10 gradi l'aria si sente secca; sopra i 20 diventa afosa per quasi tutti, qualunque sia la percentuale di → umidità relativa. La differenza tra temperatura e punto di rugiada è un piccolo strumento di previsione: quando si riduce a uno o due gradi di sera, la mattina dopo è probabile la → nebbia. Per gli edifici è il punto dove nascono condensa e muffe. Vedi → rugiada e → brina.",
  seo: {
    title: "Punto di rugiada — significato, valori e afa | Il Paroliere",
    description: "Che cos'è il punto di rugiada: la temperatura a cui l'aria diventa satura e il vapore condensa. Perché misura l'afa meglio dell'umidità relativa, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
