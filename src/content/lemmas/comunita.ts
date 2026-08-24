// Il Paroliere — Lemma: comunità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const comunita: LemmaEntry = {
  lemma: "comunità",
  slug: "comunita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["comune", "sociologico"],
  domains: ["sociologia", "psicologia", "politica", "cultura digitale"],

  definition:
    "Insieme di persone unite da appartenenze, pratiche, interessi o responsabilità condivise, e dal riconoscersi reciprocamente come parte di un «noi». Può avere confini territoriali, culturali o di valori; non coincide con una semplice somma di individui, perché richiede legami, regole implicite e una qualche cura del comune. Per i gruppi che interagiscono online, il lessico contemporaneo usa quasi sempre → community, prestito con una connotazione digitale più precisa. Si oppone, per contrasto, a → isolamento.",

  shortDefinition:
    "Insieme di persone che si riconoscono in un «noi» e condividono legami, pratiche o responsabilità.",

  etymology:
    "Dal latino communitas, derivato di communis «comune, condiviso». Nella parola resta l’idea di ciò che non appartiene soltanto al singolo, ma viene tenuto e costruito insieme.",

  examples: [
    "Dopo l’alluvione, la comunità del quartiere organizzò una cucina comune e una rete di aiuti.",
    "La comunità scientifica discute i risultati perché il sapere non dipenda dall’autorità di una sola persona.",
    "Entrare nella comunità del laboratorio non significava essere sempre d’accordo, ma sapere di poter contribuire.",
  ],

  synonyms: [
    { term: "collettività", register: "formale", context: "Indica un insieme di persone considerato nel suo profilo sociale o civico; è meno caldo e partecipativo." },
    { term: "gruppo", register: "comune", context: "Più generico: può esistere senza senso di appartenenza né continuità nel tempo." },
    { term: "comunanza", register: "letterario", context: "Sottolinea ciò che è condiviso, più che l’insieme concreto delle persone." },
  ],

  antonyms: [
    { term: "isolamento", register: "comune", context: "Condizione di separazione dagli altri o dalle reti di partecipazione." },
    { term: "estraneità", register: "comune", context: "Mancanza del sentirsi parte di un contesto comune." },
  ],

  relatedWords: ["community", "isolamento", "connessione", "relazione", "legame", "appartenenza", "identità"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/comunit%C3%A0",
  },

  paroliereNote:
    "Comunità non è un nome elegante per «molte persone»: nomina una forma di vicinanza in cui le differenze non cancellano la responsabilità reciproca. Per forum, gruppi social e spazi di discussione online l’italiano contemporaneo preferisce quasi sempre → community, che ha una voce distinta nel Paroliere: non è una semplice traduzione, ma il nome più specifico di una forma di partecipazione digitale. Comunità resta il termine più ampio, sociale, territoriale e valoriale.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Comunità — definizione, sinonimi, uso | Il Paroliere",
    description: "Che cos’è una comunità: un «noi» fatto di appartenenza, pratiche e responsabilità condivise. Definizione, sinonimi ed esempi d’uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
