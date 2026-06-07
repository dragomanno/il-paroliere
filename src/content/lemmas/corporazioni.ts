// Il Paroliere — Lemma: corporazioni
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const corporazioni: LemmaEntry = {
  lemma: "corporazioni",
  slug: "corporazioni",
  partOfSpeech: "sostantivo femminile plurale (sing. corporazione)",

  definition:
    "Le corporazioni — dette anche Arti nelle città italiane medievali, soprattutto in " +
    "Toscana — erano le associazioni obbligatorie che riunivano i membri di una stessa " +
    "categoria professionale o artigianale in un sistema organizzato di regole, tutele e " +
    "controllo qualitativo. Non erano semplicemente sindacati ante litteram né camere di " +
    "commercio: erano istituzioni totali che regolavano l'accesso al mestiere, la formazione " +
    "degli apprendisti, la qualità dei prodotti, i prezzi, il rapporto con i fornitori, e " +
    "spesso anche la vita morale e religiosa dei loro membri. In epoca guelfa — soprattutto " +
    "nelle città-stato dell'Italia centro-settentrionale tra il XII e il XIV secolo — le " +
    "corporazioni furono uno degli strumenti attraverso cui la classe mercantile e artigianale " +
    "costruì il proprio potere politico contro la nobiltà feudale. A Firenze, le Sette Arti " +
    "Maggiori (Calimala, Lana, Seta, Cambio, Medici e Speziali, Pelliccia, Giudici e Notai) " +
    "e le Arti Minori costituivano la spina dorsale dell'ordinamento corporativo che resse la " +
    "Repubblica Fiorentina per secoli. La corporazione svolgeva funzioni che oggi sono divise " +
    "tra sindacati, ordini professionali, enti di certificazione e sistemi di welfare: formava " +
    "gli apprendisti, garantiva la qualità del lavoro, tutelava i lavoratori in caso di malattia " +
    "o vecchiaia, regolava i conflitti interni.",

  shortDefinition:
    "Associazioni obbligatorie medievali di mestiere che regolavano la vita professionale, " +
    "la formazione e la qualità del lavoro; pilastro dell'economia e della politica delle " +
    "città guelfe italiane.",

  register: ["storico", "economico", "sociologico"],
  domains: ["storia medievale", "economia", "diritto", "storia del lavoro", "società"],

  etymology:
    "Dal latino corporatio, da corpus, -oris («corpo»): il «corpo» dei professionisti di un " +
    "mestiere riuniti in un'unica entità giuridica e sociale.",

  examples: [
    "Le corporazioni delle Arti Maggiori di Firenze controllavano non solo il commercio della lana e della seta, ma anche l'accesso alle cariche politiche del Comune.",
    "L'apprendista entrava nella corporazione da bambino e ci restava per tutta la vita: era la sua famiglia professionale, il suo sistema di previdenza, la sua identità sociale.",
    "Il sistema delle corporazioni medievali fu smantellato in Italia solo tra la fine del XVIII e il XIX secolo, con l'arrivo delle idee liberali e napoleoniche.",
  ],

  synonyms: [
    {
      term: "Arti",
      register: "storico",
      context: "termine specifico fiorentino e toscano",
    },
    {
      term: "gilde",
      register: "storico",
      context: "termine nordeuropeo equivalente",
    },
    {
      term: "ordini professionali",
      register: "moderno",
      context: "analogia parziale moderna",
    },
  ],

  relatedWords: [
    "podestà",
    "correttore",
    "guelfi",
    "comune medievale",
    "Firenze",
    "Siena",
    "lavoro",
    "artigianato",
    "welfare medievale",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/corporazione/",
    wiktionary: "https://it.wiktionary.org/wiki/corporazione",
  },

  paroliereNote:
    "Le corporazioni medievali sono spesso ridotte a una voce di libro di testo, ma meritano " +
    "più attenzione. Il loro sistema di formazione — apprendista, garzone, maestro — fu il " +
    "modello educativo professionale dominante in Europa per secoli, e le sue tracce " +
    "sopravvivono ancora oggi negli ordini professionali e nei sistemi di apprendistato. " +
    "Vale la pena anche notare il paradosso: le corporazioni erano sistemi chiusi e rigidi, " +
    "con barriere all'ingresso molto alte — ma all'interno garantivano tutele che il mercato " +
    "del lavoro liberale del XIX e XX secolo avrebbe smantellato senza rimpiazzo immediato.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Corporazioni medievali — Arti, gilde, storia del lavoro | Il Paroliere",
    description:
      "Le corporazioni medievali: cosa erano, come funzionavano, il ruolo nelle città guelfe " +
      "italiane. Dalle Arti fiorentine alla fine con il liberalismo. Definizione storica completa.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
