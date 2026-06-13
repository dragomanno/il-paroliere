// Il Paroliere — Lemma: materialità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const materialita: LemmaEntry = {
  lemma: "materialità",
  slug: "materialita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "filosofico", "comune"],
  domains: ["filosofia", "estetica", "diritto", "fisica"],

  definition:
    "Qualità di ciò che è materiale — che ha corpo, peso, consistenza, estensione nello " +
    "spazio. In filosofia, si contrappone all’immaterialità e all’idealismo: la materialità " +
    "è l’ancoraggio alla materia come fondamento del reale. In diritto, la materialità di " +
    "un fatto è la sua concretezza oggettiva, indipendentemente dall’intenzione. In " +
    "estetica, è la presenza fisica dell’opera — il fatto che una scultura si tocchi, " +
    "che la carta di un libro abbia un peso.",

  shortDefinition:
    "Qualità di ciò che ha corpo e peso fisico; concretezza della materia come fondamento del reale.",

  etymology:
    "Da materiale (dal latino materialis, da materia “legno, materia prima, sostanza”), " +
    "con il suffisso -ità. La parola latina materia era originariamente il legno del tronco " +
    "— la sostanza interna, il fondamento solido.",

  examples: [
    "La materialità di un manoscritto medievale non è un dettaglio: la pergamena, l’inchiostro, i segni del tempo sono parte del testo quanto le parole.",
    "In un’epoca di digitalizzazione totale, la materialità degli oggetti acquista un valore diverso — non nostalgico, ma epistemico: gli oggetti fisici resistono alla cancellazione.",
    "La materialità del suono in una sala da concerto è qualcosa che la registrazione non può replicare: le onde sonore che colpiscono il corpo non sono la stessa cosa dell’ascolto in cuffia.",
    "Nel diritto penale, la materialità del fatto distingue il reato consumato dal tentativo: non basta l’intenzione, serve l’atto concreto nel mondo.",
  ],

  synonyms: [
    { term: "concretezza", register: "comune", note: "Più quotidiano: l’essere concreto, tangibile, non astratto." },
    { term: "fisicità", register: "comune-tecnico", note: "Enfatizza il corpo e la dimensione corporea; materialità è più ampio." },
  ],

  antonyms: [
    { term: "immaterialità", register: "tecnico-filosofico", note: "L’assenza di corpo e peso fisico; l’essere spirituale o digitale." },
    { term: "astrattezza", register: "comune", note: "Il rimanere nel piano dei concetti senza ancorarsi alla realtà fisica." },
  ],

  relatedWords: ["turgido", "tonicita", "elasticita", "flosco"],

  paroliereNote:
    "La materialità sta diventando un lusso nell’economia dell’attenzione digitale. Un " +
    "libro fisico ha una materialità che l’ebook non ha — non perché il contenuto è " +
    "diverso, ma perché la relazione con l’oggetto è diversa. C’è una resistenza della " +
    "materia che rallenta, e in quel rallentamento succede qualcosa che la velocità " +
    "non permette.",

  sourceLinks: {},

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "materialità — significato in filosofia, estetica e diritto",
    description: "Materialità: dall’ancoraggio filosofico alla materia alla presenza fisica dell’opera d’arte. Tutto sul contrario dell’immateriale.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
