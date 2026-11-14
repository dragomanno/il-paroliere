// Il Paroliere — Lemma: pressione atmosferica
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pressioneAtmosferica: LemmaEntry = {
  lemma: "pressione atmosferica",
  slug: "pressione-atmosferica",
  partOfSpeech: "locuzione sostantivale femminile",
  gender: "femminile",
  definition: "Forza che l'aria esercita su ogni superficie per effetto del proprio peso, misurata in ettopascal. Al livello del mare vale in media 1013,25 hPa e diminuisce salendo di quota, perché sopra di noi resta meno aria a premere. Le sue differenze da un luogo all'altro muovono i venti e distinguono le aree di alta pressione, di solito stabili, da quelle di bassa pressione, che portano nuvole e pioggia.",
  shortDefinition: "Peso dell'aria su una superficie, misurato in ettopascal; al livello del mare vale in media 1013,25 hPa.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "meteorologia",
    "fisica",
  ],
  etymology: "Pressione viene dal latino pressio, -onis, da premere «schiacciare»; atmosferico da atmosfera, composto moderno dal greco atmós «vapore» e sphaîra «sfera». La locuzione si afferma con la fisica dell'aria del Seicento, dopo gli esperimenti di Torricelli con la colonna di mercurio.",
  examples: [
    "Il barometro di casa segnava 1030 hPa: pressione atmosferica alta, cielo terso per tutto il fine settimana.",
    "In vetta al Monte Bianco la pressione atmosferica è poco più della metà di quella che c'è sulla spiaggia.",
    "Quando la pressione atmosferica cala in fretta, i marinai sanno che il tempo sta per guastarsi.",
  ],
  synonyms: [
    {
      term: "pressione barometrica",
      register: "tecnico-scientifico",
      context: "la stessa grandezza, nominata dallo strumento che la misura",
    },
    {
      term: "pressione dell'aria",
      register: "comune",
      context: "formula descrittiva, frequente nella divulgazione",
    },
  ],
  antonyms: [],
  relatedWords: [
    "isobara",
    "ettopascal",
    "millibar",
    "anticiclone",
    "depressione",
    "gradiente-barico",
    "carta-meteorologica",
    "altitudine",
    "barometro",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/pressione/",
    wiktionary: "https://it.wiktionary.org/wiki/pressione_atmosferica",
  },
  paroliereNote: "Nel parlato del meteo «alta» e «bassa pressione» sono diventati quasi sinonimi di bello e brutto tempo, e funziona come scorciatoia. Il numero da solo dice poco: conta come cambia nel tempo e come si distribuisce sulla carta, dove le → isobara lo disegnano. Un'avvertenza pratica: i bollettini riportano la pressione ridotta al livello del mare, così i valori di città a quote diverse si possono confrontare; il → barometro di un rifugio, senza correzione, segnerà sempre «tempesta».",
  seo: {
    title: "Pressione atmosferica — significato, valori e unità | Il Paroliere",
    description: "Che cos'è la pressione atmosferica: il peso dell'aria, misurato in hPa, che cala con la quota e muove i venti. Valori medi, etimologia ed esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
