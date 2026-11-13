// Il Paroliere — Lemma: maranza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const maranza: LemmaEntry = {
  lemma: "maranza",
  slug: "maranza",
  partOfSpeech: "sostantivo",
  gender: "invariabile",
  register: ["gergale", "giovanile", "contemporaneo"],
  domains: ["sociolinguistica", "costume", "identità giovanile"],

  definition:
    "Nel gergo giovanile contemporaneo, persona associata a un preciso stile urbano, a codici di abbigliamento, musica e presenza pubblica riconoscibili, spesso letti come ostentati o smargiassi. Il termine circola tra autoironia, appartenenza e giudizio esterno: non designa una classe sociale né una qualità morale. Il suo significato cambia molto con la città, il gruppo e il contesto digitale.",

  shortDefinition:
    "Figura del gergo giovanile legata a codici di stile urbano e atteggiamento riconoscibile, tra appartenenza, autoironia e stereotipo.",

  etymology:
    "Etimologia discussa. La forma viene spesso accostata a «maranza», nome dialettale della melanzana in alcune aree meridionali, ma la circolazione recente della parola dipende soprattutto da riusi gergali e mediatici. Conviene quindi distinguere l’origine proposta dai significati contemporanei, assai mobili.",

  examples: [
    "Nel video usa «maranza» per descrivere un’estetica del gruppo, non per liquidare le persone che la praticano.",
    "Lei rivendica quel look con ironia e dice che il termine cambia significato appena lo si ascolta dall’interno.",
    "La discussione sul maranza ha mostrato quanto in fretta un’etichetta di costume possa diventare uno stereotipo sociale.",
  ],

  synonyms: [
    { term: "tamarro", register: "colloquiale", note: "Etichetta più ampia e spesso giudicante, non sovrapponibile ai codici generazionali e urbani di «maranza»." },
    { term: "spaccone", register: "comune-colloquiale", note: "Descrive l’ostentazione individuale; «maranza» può riferirsi invece a un insieme di stile, appartenenza e pratiche condivise." },
    { term: "coatto", register: "regionale-colloquiale", note: "Voce con storie regionali e stereotipi propri; non va usata come equivalente automatico." },
  ],

  antonyms: [
    { term: "persona discreta", register: "comune", note: "Opposizione limitata alla visibilità e all’ostentazione, non a un’identità culturale." },
    { term: "understatement", register: "colloquiale", note: "Stile comunicativo che sceglie la sottrazione anziché la riconoscibilità esibita." },
  ],

  relatedWords: ["identità", "appartenenza", "spaccone", "arroganza", "linguaggio giovanile"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/maranza",
  },

  paroliereNote:
    "Le parole che nominano gruppi giovanili sono quasi sempre instabili: passano dall’esterno all’interno, dal dileggio alla rivendicazione e cambiano insieme a chi le usa. «Maranza» va letto come fenomeno di costume e di lingua, non come scorciatoia per una gerarchia sociale.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Maranza — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di maranza: termine del gergo giovanile per una figura e uno stile urbano contemporaneo. Uso, contesto sociolinguistico e sfumature.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
