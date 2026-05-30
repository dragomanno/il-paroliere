// Il Paroliere — Lemma: galoppino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const galoppino: LemmaEntry = {
  lemma: "galoppino",
  slug: "galoppino",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Persona usata da altri per svolgere commissioni, recapitare messaggi o compiti " +
    "servili di vario genere, spesso con scarsa autonomia e in posizione subalterna. " +
    "In politica designa chi svolge il lavoro di procacciamento voti a livello " +
    "locale: va di porta in porta, organizza il consenso capillare, distribuisce " +
    "promesse — figura fondamentale delle macchine elettorali tradizionali.",

  shortDefinition:
    "Chi fa commissioni per conto d'altri; in politica, chi lavora a livello " +
    "capillare per procurare voti.",

  register: ["comune", "colloquiale", "politico"],
  domains: ["politica", "società"],

  etymology:
    "Diminutivo di galoppare, dal francese antico galoper (andare al galoppo, " +
    "muoversi velocemente). L'immagine sottostante è quella di chi corre su e giù per " +
    "gli altri, sempre in movimento su mandato altrui — una metafora vivace e " +
    "meccanica allo stesso tempo.",

  examples: [
  ],

  synonyms: [
    { term: "portaborse", register: "colloquiale/politico", context: "figura affine ma con accezione più cortigiana e adulatoria" },
    { term: "fattorino", register: "comune", context: "nella accezione generica di chi svolge commissioni, senza connotazione politica" },
    { term: "procacciatore di voti", register: "politico", context: "la perifrasi descrittiva per l'accezione elettorale" }
  ],

  relatedWords: [
    "pivello"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/galoppino"
  },

  paroliereNote:
    "Il galoppino politico è una figura tanto antica quanto la democrazia di massa: " +
    "esiste in ogni sistema che preveda elezioni competitive e un rapporto diretto " +
    "con il territorio. In Italia ha avuto una presenza massiccia nel sistema " +
    "partitocratico della Prima Repubblica, dove le reti di galoppini locali erano " +
    "una risorsa fondamentale del consenso. Nell'era digitale la figura si è in parte " +
    "trasformata: il galoppino di oggi è anche il gestore della pagina Facebook del " +
    "candidato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Galoppino — Il Paroliere",
    description:
      "Significato di galoppino: chi fa commissioni per altri o procaccia voti in " +
      "politica. Doppia accezione comune e politica.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};