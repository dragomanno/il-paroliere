// Il Paroliere — Lemma: salutista
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const salutista: LemmaEntry = {
  lemma: "salutista",
  slug: "salutista",
  partOfSpeech: "sostantivo maschile e femminile; anche aggettivo",

  definition:
    "In senso proprio, chi segue con attenzione e coerenza uno stile di vita orientato " +
    "alla salute: alimentazione curata, attività fisica regolare, attenzione ai fattori " +
    "di rischio. In senso ironico o leggermente spregiativo — l'accezione più frequente " +
    "nel parlato corrente — indica chi porta questo orientamento all'eccesso, trasformando " +
    "la cura della salute in una forma di rigidità moralistica o di ostentazione sociale: " +
    "il salutista che al ristorante interroga il cameriere sugli ingredienti, che rifiuta " +
    "ogni deroga alimentare, che trasforma la propria dieta in un sistema di credenze " +
    "quasi religioso. Il termine Salutista con la maiuscola indica anche il membro " +
    "dell'Esercito della Salvezza (Salvation Army), organizzazione cristiana evangelica " +
    "fondata da William Booth a Londra nel 1865 — un significato distinto e non " +
    "spregiativo, da non confondere con l'uso corrente.",

  shortDefinition:
    "Chi cura sistematicamente la propria salute; nel parlato corrente, con sfumatura " +
    "ironica, chi lo fa in modo ossessivo o ostentato.",

  register: ["comune", "ironico"],
  domains: ["società", "medicina", "alimentazione", "cultura"],

  etymology:
    "Da salute (latino salus, salutis, «salute, salvezza») + suffisso -ista che " +
    "indica appartenenza a una tendenza, una pratica o un movimento.",

  examples: [
    "«È diventato così salutista che alle cene porta il suo contenitore con il cibo preparato a casa.»",
    "«Non sono un salutista, ma cerco di mangiare bene e muovermi almeno tre volte a settimana.»",
    "«Il mercato del benessere si è espanso enormemente grazie alla crescente cultura salutista degli ultimi vent'anni.»",
  ],

  synonyms: [
    {
      term: "attento alla salute",
      register: "neutro",
      context: "uso non giudicante",
    },
    {
      term: "salutofilo",
      register: "ironico",
      context: "chi fa della salute una passione",
    },
    {
      term: "benessere-dipendente",
      register: "ironico",
      context: "uso colloquiale spregiativo",
    },
  ],

  antonyms: [
    {
      term: "sedentario",
      register: "comune",
      context: "chi non si muove né si cura",
    },
    {
      term: "intemperante",
      register: "formale",
      context: "chi non conosce moderazione",
    },
    {
      term: "fatalista",
      register: "comune",
      context: "chi non si preoccupa della salute",
    },
  ],

  relatedWords: [
    "benessere",
    "wellness",
    "alimentazione",
    "fitness",
    "ortoressia",
    "stile di vita",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/salutista/",
    wiktionary: "https://it.wiktionary.org/wiki/salutista",
  },

  paroliereNote:
    "Salutista è una parola che rivela come il giudizio sociale si nasconda nel " +
    "suffisso. -ista costruisce parole che descrivono chi segue un'idea o una pratica — " +
    "spesso con un'implicazione di eccesso o di identità troppo definita: salutista, " +
    "animalista, ambientalista, integralista. Non è neutro: porta con sé l'idea che chi " +
    "porta quel suffisso abbia fatto di una preferenza una bandiera. La stessa cura per " +
    "la salute, descritta come «attento al benessere», suona ammirevole; descritta come " +
    "«salutista», suona appena sospetta.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Salutista — definizione, uso ironico, Esercito della Salvezza | Il Paroliere",
    description:
      "Salutista: chi è, quando diventa ironico, differenza con il Salutista " +
      "dell'Esercito della Salvezza. Definizione originale con nota sul suffisso -ista.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
