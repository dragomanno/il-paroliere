// Il Paroliere — Lemma: smargiasso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const smargiasso: LemmaEntry = {
  lemma: "smargiasso",
  slug: "smargiasso",
  partOfSpeech: "sostantivo maschile; anche aggettivo",
  gender: "maschile",

  definition:
    "Chi si vanta delle proprie capacità, del proprio coraggio o della propria importanza " +
    "in modo esagerato e privo di fondamento reale, con l'obiettivo di impressionare o " +
    "intimidire gli altri. Lo smargiasso non è necessariamente un bugiardo consapevole: è " +
    "spesso qualcuno che si è convinto delle proprie capacità al punto da esibire una sicurezza " +
    "che non corrisponde alle prove. La sua bravata può essere comica o fastidiosa a seconda " +
    "del contesto — ma è sempre smascherabile, perché non regge al confronto con la realtà. " +
    "Lo smargiasso appartiene a una famiglia di figure umane codificate dalla commedia italiana " +
    "e dalla letteratura europea: il miles gloriosus di Plauto, il Capitano della Commedia " +
    "dell'Arte, il Falstaff shakespeariano. Sono tutti varianti dello stesso archetipo: chi si " +
    "gonfia oltre la propria misura reale. Per la variante di registro più letterario e " +
    "genealogicamente preciso, vedi rodomontesco.",

  shortDefinition:
    "Chi si vanta di coraggio o forza che non ha; fanfarone, gradasso, millantatore.",

  register: ["comune", "ironico"],
  domains: ["società", "linguistica", "letteratura", "teatro"],

  etymology:
    "L'etimologia è dibattuta. L'ipotesi più accreditata lo ricollega al veneziano smargiàsso, " +
    "a sua volta forse dal tedesco Schmarotzer («parassita, scroccone») o da margiasso " +
    "(«persona di bassa estrazione che si atteggia a importante»). L'area semantica è quella " +
    "della millanteria sociale. Attestato nell'italiano letterario almeno dal XVI secolo; " +
    "presente nella Commedia dell'Arte come tipo fisso.",

  examples: [
    "«Davanti agli amici era uno smargiasso che prometteva imprese impossibili; da solo, evitava accuratamente qualsiasi situazione di rischio.»",
    "«Il Capitano della Commedia dell'Arte è l'archetipo dello smargiasso: bravate, spacconate, e poi la fuga alla prima difficoltà reale.»",
    "«\"Non fare lo smargiasso\" gli disse il nonno. \"Chi vale davvero non ha bisogno di dirtelo.\"»",
  ],

  synonyms: [
    {
      term: "fanfarone",
      register: "comune",
      context: "chi parla troppo e promette senza mantenere",
    },
    {
      term: "gradasso",
      register: "comune",
      context: "chi si comporta con arroganza millantata",
    },
    {
      term: "millantatore",
      register: "comune",
      context: "chi si vanta di meriti inesistenti",
    },
    {
      term: "rodomonte",
      register: "letterario",
      context: "variante letteraria con genealogia ariostesca",
    },
  ],

  antonyms: [
    {
      term: "modesto",
      register: "comune",
      context: "chi non ostenta",
    },
    {
      term: "sobrio",
      register: "comune",
      context: "comportamento misurato",
    },
    {
      term: "discreto",
      register: "comune",
      context: "chi non si mette in mostra",
    },
  ],

  relatedWords: [
    "rodomontesco",
    "fanfarone",
    "miles gloriosus",
    "Capitano della Commedia dell'Arte",
    "Falstaff",
    "bravata",
    "millanteria",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/smargiasso/",
    wiktionary: "https://it.wiktionary.org/wiki/smargiasso",
  },

  paroliereNote:
    "Il legame con rodomontesco è fondamentale per capire la genealogia culturale della figura. " +
    "Rodomonte — il guerriero saraceno dell'Orlando Furioso di Ariosto — era davvero valoroso: " +
    "il suo difetto non era la codardia ma la tracotanza, la superbia di chi si fida troppo della " +
    "propria forza e la ostenta. Lo smargiasso di solito non ha nemmeno quel fondo di valore " +
    "autentico: è la versione degradata e comica del tipo eroico. Chi si comporta da smargiasso " +
    "adotta i gesti esteriori del guerriero senza averne la sostanza. La commedia italiana — " +
    "dalla Commedia dell'Arte al teatro napoletano — ha fatto di questa figura uno dei suoi " +
    "personaggi più ricchi e riconoscibili.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Smargiasso — definizione, Commedia dell'Arte, sinonimi | Il Paroliere",
    description:
      "Smargiasso: chi si vanta oltre la propria misura. Dalla Commedia dell'Arte ad Ariosto. " +
      "Differenza da rodomontesco, fanfarone, gradasso. Definizione originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
