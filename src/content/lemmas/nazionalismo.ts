// Il Paroliere — Lemma: nazionalismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const nazionalismo: LemmaEntry = {
  lemma: "nazionalismo",
  slug: "nazionalismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Ideologia che pone la nazione — intesa come comunità di lingua, storia o destino " +
    "comune — al centro dell'identità collettiva e dell'azione politica. Nella sua " +
    "forma moderata si esprime come orgoglio civico e tutela dell'autonomia statale; " +
    "nelle sue forme estreme degrada in xenofobia, autoritarismo e conflitto armato, " +
    "come dimostrano le catastrofi del Novecento europeo.",

  shortDefinition:
    "Ideologia che mette la nazione al centro dell'identità e dell'azione politica, " +
    "tra orgoglio civico ed eccesso esclusivista.",

  register: ["comune", "politico", "storico"],
  domains: ["politica", "storia", "sociologia"],

  etymology:
    "Dal francese nationalisme, documentato dalla fine del Settecento, composto di " +
    "nation (dal latino natio, -onis, stirpe, popolo) e il suffisso -isme. In " +
    "italiano si afferma nel corso dell'Ottocento, durante il periodo risorgimentale, " +
    "e assume connotazioni sempre più cariche nel Novecento.",

  examples: [
  ],

  synonyms: [
    { term: "patriottismo", register: "comune", context: "nella sua accezione meno ideologica, più affettiva e civica" },
    { term: "sciovinismo", register: "politico", context: "nella variante aggressiva e intollerante verso lo straniero" }
  ],

  antonyms: [
    { term: "cosmopolitismo", register: "politico/filosofico", context: "visione che supera i confini nazionali in nome di un'identità universale" },
    { term: "internazionalismo", register: "politico", context: "in particolare nel lessico della sinistra storica" }
  ],

  relatedWords: [
    "populismo",
    "fascismo",
    "nazismo",
    "comunismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/nazionalismo"
  },

  paroliereNote:
    "Il nazionalismo non è sinonimo di patriottismo, anche se spesso i due termini si " +
    "confondono nel discorso pubblico. Il patriottismo è un attaccamento emotivo al " +
    "proprio paese; il nazionalismo è una dottrina politica che da quell'attaccamento " +
    "trae legittimazone per escludere, gerarchizzare o aggredire. La distinzione, " +
    "sottile nella retorica, è cruciale nella storia.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Nazionalismo — Il Paroliere",
    description:
      "Significato e uso di nazionalismo: ideologia che pone la nazione al centro " +
      "dell'identità politica, tra orgoglio civico e pericolo esclusivista.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};