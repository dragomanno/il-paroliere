// Il Paroliere — Lemma: isoterma
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const isoterma: LemmaEntry = {
  lemma: "isoterma",
  slug: "isoterma",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "In meteorologia e cartografia climatica, le isoterme sono le linee che " +
    "uniscono tutti i punti della superficie terrestre — o di una sezione verticale " +
    "dell'atmosfera — aventi la stessa temperatura in un dato momento o in un " +
    "periodo di riferimento (media mensile, media annua). Così come le → isobare " +
    "rappresentano la distribuzione della pressione e le → isoipse rappresentano " +
    "l'altitudine, le isoterme restituiscono visivamente la distribuzione della " +
    "temperatura sul territorio, permettendo di identificare zone calde, fredde, " +
    "fronti termici e gradienti di temperatura. Le isoterme sono fondamentali per " +
    "la climatologia: la distribuzione delle isoterme annuali definisce le fasce " +
    "climatiche terrestri (tropicale, temperata, polare). Sono anche strumenti " +
    "essenziali in oceanografia (isoterme marine) e in fisica dei materiali: una " +
    "trasformazione isoterma è una trasformazione termodinamica che avviene a " +
    "temperatura costante (legge di Boyle: il prodotto pV resta invariato).",

  shortDefinition:
    "Linea cartografica che collega punti a uguale temperatura; strumento fondamentale di meteorologia, climatologia e fisica termodinamica.",

  register: ["tecnico-scientifico", "divulgativo"],
  domains: ["meteorologia", "fisica", "geografia", "cartografia"],

  etymology:
    "Dal greco isos («uguale») + thermē («calore, temperatura»): «di uguale calore». " +
    "Stesso prefisso iso- di → isobare e → isoipse.",

  examples: [
    "«Le isoterme di gennaio mostrano chiaramente come il clima mediterraneo protegga l'Italia meridionale dal freddo invernale rispetto all'Europa centrale.»",
    "«L'isoterma degli 0°C in quota — la cosiddetta quota dello zero termico — è un parametro fondamentale per prevedere neve o pioggia in montagna.»",
    "«In fisica, una trasformazione isoterma di un gas avviene a temperatura costante: la pressione e il volume variano ma il prodotto pV resta invariato (legge di Boyle).»",
  ],

  synonyms: [
    {
      term: "linee isotermiche",
      register: "tecnico-scientifico",
      context: "termine alternativo",
    },
    {
      term: "curve di uguale temperatura",
      register: "tecnico-scientifico",
      context: "denominazione descrittiva",
    },
  ],

  relatedWords: [
    "isobara",
    "isoipsa",
    "temperatura",
    "gradiente termico",
    "zero termico",
    "climatologia",
    "fasce climatiche",
    "fronte atmosferico",
    "legge di Boyle",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/isoterma/",
    wiktionary: "https://it.wiktionary.org/wiki/isoterma",
  },

  paroliereNote:
    "Iso- è uno dei prefissi più prolifici e eleganti del lessico scientifico: " +
    "costruisce famiglie intere di termini con una logica trasparente. Imparare " +
    "il significato di iso- è imparare contemporaneamente il senso di isobare, " +
    "isoterme, isoipse, isoglosse, isotopi, isomeri. È un esempio perfetto di " +
    "come il greco antico continui a generare terminologia scientifica moderna " +
    "con una coerenza che nessuna lingua artificiale ha mai eguagliato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Isoterme — definizione meteorologica e fisica | Il Paroliere",
    description:
      "Cosa sono le isoterme, come si leggono sulle carte climatiche, uso in fisica termodinamica. Definizione originale con tabella della famiglia iso-.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
