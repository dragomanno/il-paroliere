// Il Paroliere — Lemma: reddito lordo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const redditoLordo: LemmaEntry = {
  lemma: "reddito lordo",
  slug: "reddito-lordo",
  partOfSpeech: "locuzione sostantivale",
  gender: "maschile",
  definition: "Ammontare di ciò che si guadagna prima di qualsiasi trattenuta: imposte, contributi previdenziali, addizionali locali. Per un lavoratore dipendente corrisponde in pratica alla retribuzione annua lorda indicata nel contratto, la RAL. È il punto di partenza di un percorso a tre tappe: togliendo ciò che la legge esclude dalla base dell'imposta si arriva al reddito imponibile; togliendo poi ciò che si paga davvero si arriva al reddito netto.",
  shortDefinition: "Quanto si guadagna prima di imposte e contributi: il punto di partenza da cui si calcolano imponibile e netto.",
  register: [
    "comune",
    "tecnico-fiscale",
  ],
  domains: [
    "fisco",
    "economia",
    "lavoro",
  ],
  etymology: "Lordo ha un'origine discussa: si fa risalire al latino tardo lurdus, forse legato a luridus «livido, pallido». In primo luogo significa «sporco». Nel linguaggio dei mercanti indicò il peso di una merce ancora «sporca» di imballaggio e tara; da qui il senso economico di importo non ancora ripulito dalle trattenute.",
  examples: [
    "Trentamila euro lordi annui non sono quello che arriverà sul conto: tra contributi e imposte, il netto è parecchio più basso.",
    "Per confrontare due offerte di lavoro conviene partire dal reddito lordo e calcolare il netto con le stesse regole.",
    "Molti bandi chiedono di dichiarare il reddito lordo, non quello che resta effettivamente in tasca.",
  ],
  synonyms: [
    {
      term: "lordo",
      register: "colloquiale",
      context: "sostantivato: «quanto prendi di lordo?»",
    },
    {
      term: "RAL",
      register: "tecnico",
      context: "retribuzione annua lorda, solo per il lavoro dipendente",
    },
  ],
  antonyms: [
    {
      term: "reddito netto",
      register: "comune",
      context: "ciò che resta dopo imposte e contributi",
    },
  ],
  relatedWords: [
    "reddito-netto",
    "reddito-imponibile",
    "imponibile",
    "irpef",
  ],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/lordo",
  },
  paroliereNote: "Tra lordo e netto passa una distanza che ha anche un nome tecnico: cuneo fiscale, la differenza tra quanto un lavoratore costa all'azienda e quanto riceve davvero. Il reddito lordo sta nel mezzo: è più di quello che si incassa, ma meno di quello che si costa. E il suo opposto, netto, viene da nitidus, «pulito»: la lingua dei mercanti ha messo lo sporco prima e il pulito dopo.",
  seo: {
    title: "Reddito lordo — significato, differenza dal netto | Il Paroliere",
    description: "Che cos'è il reddito lordo: quanto si guadagna prima di imposte e contributi. Come si passa dal lordo all'imponibile e al netto, con esempi.",
  },
  editorialStatus: "draft",
  indexable: true,
  createdAt: "2026-11-13",
  updatedAt: "2026-11-13",
};
