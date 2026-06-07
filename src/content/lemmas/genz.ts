// Il Paroliere — Lemma: GenZ
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const genz: LemmaEntry = {
  lemma: "GenZ",
  slug: "genz",
  partOfSpeech: "sostantivo / locuzione nominale",
  gender: "invariabile",
  register: ["colloquiale", "comune", "tecnico-sociologico"],
  domains: ["sociologia generazionale", "cultura digitale", "marketing", "società"],

  definition:
    "Abbreviazione di Generation Z, chiamata anche zoomer: insieme delle persone nate " +
    "tra il 1995 e il 2009 secondo McCrindle (Pew Research usava 1997–2012 prima di " +
    "ridurre l'uso delle etichette generazionali nel 2023), cresciute in un ambiente " +
    "già permeato di connettività mobile e piattaforme social. A differenza dei " +
    "millennial, che hanno vissuto l'arrivo di internet, la Gen Z non ricorda un mondo " +
    "senza smartphone: è la prima generazione di veri nativi digitali. Sul piano dei " +
    "comportamenti online, la Gen Z è dominata da contenuti brevi e visivi — TikTok, " +
    "Instagram Reels, YouTube Shorts — e ha spostato la scoperta dei prodotti dai " +
    "motori di ricerca ai feed social: quasi il 40% usa TikTok o Instagram come motore " +
    "di ricerca alternativo. Gli acquisti avvengono prevalentemente su mobile, spesso " +
    "direttamente dall'app social in cui il prodotto è stato scoperto (social commerce). " +
    "Valorizza l'autenticità, la sostenibilità e la trasparenza dei brand, ed è molto " +
    "sensibile alle cause sociali.",

  shortDefinition:
    "Generazione nata tra il 1995 e il 2009 (McCrindle): prima vera nativi digitali, " +
    "scopre i prodotti su TikTok e Instagram più che sui motori di ricerca.",

  etymology:
    "Dall'inglese Generation Z, dove Z indica semplicemente la lettera successiva alla " +
    "Y (Millennials); il soprannome alternativo zoomer deriva dall'espressione «zoom» " +
    "usata per il ritmo accelerato della vita digitale di questa generazione, con " +
    "possibile richiamo a «boomer» per opposizione generazionale.",

  examples: [
    "La campagna non ha funzionato: avevano pensato a Instagram, ma la Gen Z era già su TikTok da due anni.",
    "Per un GenZ, cercare un ristorante su Google Maps è già un comportamento boomer — si va su TikTok e si guarda il video.",
  ],

  synonyms: [
    { term: "zoomer", register: "colloquiale", note: "soprannome alternativo, usato soprattutto dai Millennials in modo affettuoso-ironico" },
    { term: "Generazione Z", register: "comune", note: "forma estesa, meno colloquiale" },
    { term: "nativo digitale", register: "comune", note: "indica la caratteristica distintiva, non la generazione in senso stretto" },
  ],

  antonyms: [
    { term: "boomer", register: "colloquiale", note: "nella contrapposizione pop tra generazioni" },
  ],

  relatedWords: ["boomer", "GenX", "millennial", "Generazione Alpha", "Generazione Beta", "social commerce", "TikTok"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/generazione_Z",
  },

  paroliereNote:
    "La Gen Z ha cambiato le regole del marketing digitale più rapidamente di quanto le " +
    "aziende abbiano potuto adattarsi. Non si fida della pubblicità tradizionale, non si " +
    "fida dei brand che «fingono valori», e non si fida nemmeno degli influencer troppo " +
    "patinati: preferisce creator autentici, contenuti grezzi, recensioni vere. In Italia " +
    "il termine «zoomer» è usato soprattutto dai Millennials per riferirsi alla generazione " +
    "più giovane, spesso con affetto ironico — quasi a specchiare il rapporto che i Boomers " +
    "hanno con loro attraverso «ok, boomer». Il cluster McCrindle 1995–2009 diverge da " +
    "quello Pew (1997–2012) di 2–3 anni: la divergenza è la più ampia del sistema, e " +
    "riflette un nodo reale: l'identità della Gen Z è particolarmente sfumata ai bordi, " +
    "tanto che Pew nel 2023 ha ufficialmente smesso di usare le etichette generazionali " +
    "come categoria predefinita. Zygmunt Bauman avrebbe riconosciuto in questo il segno " +
    "più chiaro della modernità liquida applicata all'identità: i bordi si annacquano, " +
    "e pretendere una data esatta di inizio e fine di una generazione è, in fondo, " +
    "un'illusione tassonomica — utile operativamente, falsa ontologicamente. Dal punto " +
    "di vista di chi lavora nel marketing digitale, il segnale più interessante della " +
    "Gen Z nel 2025–2026 è un certo disamoramento verso l'uso compulsivo dei social: " +
    "non abbandono, ma una ricerca di presenza più intenzionale e selettiva. Un segnale " +
    "che la Generazione Alpha erediterà e probabilmente porterà a compimento.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "GenZ — chi è la Generazione Z, anni e comportamento digitale | Il Paroliere",
    description:
      "GenZ: nati tra il 1995 e il 2009 (McCrindle). Primi nativi digitali, scoprono " +
      "prodotti su TikTok. Definizione originale con nota editoriale e riflessione Bauman.",
  },

  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
