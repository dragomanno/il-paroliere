// Il Paroliere — Lemma: umidità relativa
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const umiditaRelativa: LemmaEntry = {
  lemma: "umidità relativa",
  slug: "umidita-relativa",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Rapporto, espresso in percentuale, tra la quantità di vapore acqueo presente nell'aria e la quantità massima che quell'aria potrebbe contenere alla stessa temperatura. Al 100% l'aria è satura e il vapore comincia a condensarsi. Poiché l'aria calda può contenere più vapore di quella fredda, a parità di acqua l'umidità relativa cala quando la temperatura sale e cresce quando scende. Si misura con l'igrometro.",
  shortDefinition: "Percentuale di vapore acqueo nell'aria rispetto al massimo possibile a quella temperatura; al 100% l'aria è satura.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "meteorologia",
    "fisica",
  ],
  etymology: "Umidità dal latino humiditas, -atis, da humidus «umido», legato a humere «essere bagnato»; relativo dal latino tardo relativus «che si riferisce a», da referre: il valore si riferisce al massimo possibile, non alla quantità assoluta.",
  examples: [
    "Con trentaquattro gradi e l'umidità relativa al settanta per cento, in città non si respirava.",
    "Il museo mantiene l'umidità relativa intorno al cinquanta per cento per proteggere le tavole dipinte.",
    "All'alba l'umidità relativa ha toccato il cento per cento e sui campi è comparsa la nebbia.",
  ],
  synonyms: [
    {
      term: "grado igrometrico",
      register: "tecnico-scientifico",
      context: "denominazione tradizionale, oggi meno frequente",
    },
  ],
  antonyms: [],
  relatedWords: [
    "punto-di-rugiada",
    "saturazione",
    "condensazione",
    "evaporazione",
    "nebbia",
    "foschia",
    "rugiada",
    "temperatura",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/umidita/",
    wiktionary: "https://it.wiktionary.org/wiki/umidità",
  },
  paroliereNote: "Il numero che compare sulle app meteo è quasi sempre l'umidità relativa, ed è facile fraintenderlo. Un'aria invernale al 90% può contenere meno acqua di un'aria estiva al 50%: cambia il massimo di riferimento, non l'acqua. Per questo chi vuole sapere quanto è davvero umida l'aria, e quanto sarà afosa, guarda il → punto di rugiada, che non dipende dalla temperatura del momento. Vedi anche → saturazione.",
  seo: {
    title: "Umidità relativa — significato, percentuale e misura | Il Paroliere",
    description: "Che cos'è l'umidità relativa: la percentuale di vapore nell'aria rispetto al massimo possibile a quella temperatura. Perché inganna, igrometro ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
