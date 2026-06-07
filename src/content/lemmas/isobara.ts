// Il Paroliere — Lemma: isobara
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const isobara: LemmaEntry = {
  lemma: "isobara",
  slug: "isobara",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In meteorologia, le isobare sono le linee tracciate sulle carte climatiche e " +
    "meteorologiche che uniscono tutti i punti della superficie terrestre aventi la " +
    "stessa pressione atmosferica in un dato momento. La distribuzione delle isobare " +
    "su una carta permette di identificare zone di alta pressione (anticicloni) — " +
    "dove le isobare si dispongono attorno a un centro con pressione crescente verso " +
    "l'interno — e zone di bassa pressione (cicloni o depressioni) — dove la " +
    "pressione decresce verso il centro. Quanto più le isobare sono ravvicinate, " +
    "tanto più il gradiente di pressione è ripido e i venti sono intensi; quanto " +
    "più sono distanziate, tanto più il tempo è stabile e i venti deboli. In fisica " +
    "termodinamica, isobaro/isobara è anche aggettivo che descrive un processo " +
    "avvenuto a pressione costante (trasformazione isobara).",

  shortDefinition:
    "Linea sulle carte meteorologiche che collega punti a uguale pressione atmosferica; la loro distribuzione indica anticicloni, depressioni e intensità del vento.",

  register: ["tecnico-scientifico", "divulgativo"],
  domains: ["meteorologia", "fisica", "geografia"],

  etymology:
    "Dal greco isos («uguale») + baros («peso, pressione»): letteralmente «di uguale " +
    "peso». Il prefisso iso- è produttivo in molti termini scientifici (isoterme, " +
    "isoipse, isotopi).",

  examples: [
    "Guardando le isobare sulla carta meteorologica, si vede chiaramente che sull'Italia settentrionale sta arrivando una depressione atlantica.",
    "Le isobare molto ravvicinate sul Mar del Nord indicano venti forti e mare agitato.",
    "Un anticiclone si riconosce perché le isobare formano cerchi chiusi con la pressione più alta al centro.",
  ],

  synonyms: [
    {
      term: "linee isobariche",
      register: "tecnico-scientifico",
      context: "termine alternativo",
    },
    {
      term: "curve di uguale pressione",
      register: "tecnico-scientifico",
      context: "denominazione descrittiva",
    },
  ],

  relatedWords: [
    "isoterma",
    "isoipsa",
    "pressione atmosferica",
    "anticiclone",
    "ciclone",
    "depressione",
    "gradiente barico",
    "carta meteorologica",
    "millibar",
    "hPa",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/isobara/",
    wiktionary: "https://it.wiktionary.org/wiki/isobara",
  },

  paroliereNote:
    "Le isobare sono uno di quegli strumenti concettuali che chi ha studiato le " +
    "carte meteorologiche dà per scontato e chi non l'ha mai fatto non sa decifrare. " +
    "Eppure la logica è elementare e bellissima nella sua geometria: tracciare una " +
    "linea che unisce tutto ciò che condivide un valore — in questo caso la pressione " +
    "— è uno dei modi fondamentali con cui la scienza trasforma dati numerici sparsi " +
    "in pattern visibili. Lo stesso principio sta dietro le isoterme (uguale " +
    "temperatura), le isoipse (uguale altitudine), le isoglosse (in linguistica, " +
    "uguale distribuzione di un fenomeno linguistico). Iso- è uno dei prefissi più " +
    "fertili del lessico scientifico.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Isobare — cosa sono, come si leggono | Il Paroliere",
    description:
      "Cosa sono le isobare, come si leggono sulle carte meteorologiche, cosa indicano per il meteo. Definizione originale con esempi e nota scientifica.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
