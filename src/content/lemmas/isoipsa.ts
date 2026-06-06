// Il Paroliere — Lemma: isoipsa
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const isoipsa: LemmaEntry = {
  lemma: "isoipsa",
  slug: "isoipsa",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In cartografia topografica, le isoipse — dette anche curve di livello o " +
    "curve altimetriche — sono le linee che uniscono tutti i punti di una " +
    "superficie terrestre aventi la stessa quota (altitudine sul livello del " +
    "mare). Sono lo strumento fondamentale con cui una carta bidimensionale " +
    "rappresenta il rilievo tridimensionale del terreno: più le isoipse sono " +
    "ravvicinate, più il pendio è ripido; più sono distanziate, più il terreno " +
    "è pianeggiante o dolcemente ondulato. La distanza verticale tra due isoipse " +
    "consecutive è detta equidistanza ed è costante all'interno di una stessa " +
    "carta. Le isoipse permettono di riconoscere le forme del territorio: le " +
    "cime (isoipse che formano cerchi chiusi con quota crescente verso il " +
    "centro), le valli (isoipse a V aperta verso la pianura), i crinali " +
    "(isoipse a V aperta verso la valle), i pianori.",

  shortDefinition:
    "Curva di livello sulle carte topografiche che unisce punti alla stessa quota; quanto più le isoipse sono ravvicinate, tanto più il pendio è ripido.",

  register: ["tecnico-scientifico", "didattico"],
  domains: ["cartografia", "topografia", "geografia", "geologia"],

  etymology:
    "Dal greco isos («uguale») + hypsos («altezza, quota»): «di uguale altezza». " +
    "Stesso prefisso iso- di → isobare e → isoterme.",

  examples: [
    "«Sulla carta topografica, le isoipse ravvicinate sul versante nord indicano una parete quasi verticale: terreno da alpinisti, non da escursionisti.»",
    "«L'equidistanza delle isoipse su questa carta è di 50 metri: ogni curva di livello rappresenta un dislivello di 50 metri rispetto alla successiva.»",
    "«Imparare a leggere le isoipse significa imparare a vedere il paesaggio da una carta piatta: è una delle competenze fondamentali dell'orientamento.»",
  ],

  synonyms: [
    {
      term: "curve di livello",
      register: "comune",
      context: "denominazione più diffusa in italiano",
    },
    {
      term: "curve altimetriche",
      register: "tecnico-scientifico",
      context: "denominazione alternativa",
    },
    {
      term: "curve di quota",
      register: "tecnico-scientifico",
      context: "denominazione alternativa",
    },
  ],

  relatedWords: [
    "isobara",
    "isoterma",
    "altitudine",
    "quota",
    "equidistanza",
    "rilievo",
    "topografia",
    "cartografia",
    "IGM",
    "scala cartografica",
    "cima",
    "valle",
    "crinale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/isoipsa/",
    wiktionary: "https://it.wiktionary.org/wiki/isoipsa",
  },

  paroliereNote:
    "Le isoipse sono la prova che una convenzione grafica può essere più eloquente " +
    "di molte parole. Una carta topografica con le curve di livello dice, a chi sa " +
    "leggerla, tutto ciò che serve: dove si fa fatica, dove si rischia, dove si " +
    "può camminare spediti. Chi non sa leggere le isoipse vede solo linee; chi sa " +
    "leggerle vede il paesaggio. È un esempio bellissimo di come la rappresentazione " +
    "astratta — linee su carta — possa contenere più informazioni della fotografia, " +
    "che cattura l'apparenza ma non la struttura.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Isoipse — curve di livello, come si leggono | Il Paroliere",
    description:
      "Cosa sono le isoipse (curve di livello), come si leggono sulle carte topografiche, cosa indicano pendii e pianori. Definizione originale con esempi.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
