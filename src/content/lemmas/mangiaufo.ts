// Il Paroliere — Lemma: mangiaufo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.
// Stylometric engine: pistakkio-paroliere-stylometric-rewriter v1.0
// Corrected: 2026-05-19 (definition v1 was semantically wrong)

import type { LemmaEntry } from "@/lib/types";

export const mangiaufo: LemmaEntry = {
  lemma: "mangiaufo",
  slug: "mangiaufo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Chi tende a vivere alle spalle degli altri, contando sull'aiuto, la generosità " +
    "o la distrazione altrui per coprire spese che potrebbe sostenere da solo. " +
    "Il mangiaufo non è semplicemente parsimonioso: è chi ha fatto dello scrocco " +
    "una strategia, costruendo relazioni attorno alla disponibilità degli altri " +
    "a pagare, offrire, provvedere.",

  shortDefinition:
    "Scroccone cronico, chi struttura la propria vita intorno all'aiuto — o alla generosità — degli altri.",

  register: ["colloquiale", "ironico"],
  domains: ["linguaggio informale", "carattere", "relazioni sociali"],

  etymology:
    "Composto italiano di mangiare e ufo, quest'ultimo dall'espressione " +
    "'a ufo' — locuzione di origine incerta, forse dal greco hyph' henos " +
    "('a carico di uno solo') o dall'arabo ufuwan ('gratis'). " +
    "'Mangiare a ufo' significa mangiare senza pagare, a spese altrui. " +
    "La struttura mangia- + sostantivo è produttiva in italiano " +
    "(mangianastri, mangiadischi, mangiafuoco).",

  examples: [
    "Al ristorante trovava sempre un pretesto per non mettere mano al portafoglio: " +
    "da anni viveva da mangiaufo, e tutti lo sapevano tranne lui.",
    "Non era avarizia nel senso classico — non amava i soldi per sé. " +
    "Era mangiaufo: amava che fossero gli altri a spendere per lui.",
    "Aveva costruito una rete di amicizie calibrate su chi poteva ospitarlo, " +
    "sfamarlo, trasportarlo. Un mangiaufo di sistema, non di occasione.",
    "«Lo invito?» «Se vuoi pagare tu, sì.» «Ah, è uno di quei mangiaufo.» " +
    "«Il migliore della categoria.»",
  ],

  synonyms: [
    {
      term: "scroccone",
      register: "colloquiale",
      context:
        "sinonimo più diretto e meno ironico; indica chi approfitta " +
        "sistematicamente della generosità altrui",
    },
    {
      term: "parassita",
      register: "comune",
      context:
        "più forte e denigratorio; implica una dipendenza strutturale " +
        "e una mancanza di reciprocità nelle relazioni",
    },
    {
      term: "approfittatore",
      register: "comune",
      context:
        "chi sfrutta le situazioni favorevoli o la disponibilità altrui, " +
        "non necessariamente in ambito economico",
    },
    {
      term: "portoghese",
      register: "colloquiale",
      context:
        "chi entra o consuma senza pagare, spec. nei trasporti pubblici o " +
        "agli eventi; uso più circoscritto rispetto a mangiaufo",
    },
  ],

  antonyms: [
    {
      term: "munifico",
      register: "formale",
      context: "chi dona e offre con generosità, spesso ostentata",
    },
    {
      term: "generoso",
      register: "comune",
      context: "chi condivide spontaneamente senza calcolo",
    },
    {
      term: "prodigo",
      register: "letterario",
      context: "chi spende e offre senza risparmio, talvolta in eccesso",
    },
  ],

  relatedWords: [
    "scroccone",
    "scroccare",
    "a ufo",
    "parassitismo",
    "approfittatore",
    "portoghese",
    "tirchio",
    "avaro",
    "dipendenza",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/mangiaufo",
  },

  paroliereNote:
    "Mangiaufo va distinto con cura da due parole che gli somigliano solo " +
    "in superficie: il tirchio e lo scroccone. " +
    "Il tirchio non vuole spendere i propri soldi — ma non chiede necessariamente " +
    "quelli degli altri. Lo scroccone approfitta delle occasioni. " +
    "Il mangiaufo fa una cosa diversa e più strutturale: costruisce la propria " +
    "esistenza attorno alla disponibilità altrui, trasformando lo scrocco da " +
    "comportamento occasionale in stile di vita. " +
    "C'è una certa genialità storta in questa figura, e il termine italiano la " +
    "coglie bene: mangiare a ufo, mangiare gratis, mangiare a spese di qualcuno " +
    "che non ha capito — o che ha capito tutto ma non riesce a dire di no.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Mangiaufo — Il Paroliere",
    description:
      "Definizione originale di 'mangiaufo': chi vive alle spalle degli altri, " +
      "scroccone cronico. Con etimologia, esempi, sinonimi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
