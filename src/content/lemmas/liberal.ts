// Il Paroliere — Lemma: LIBERAL
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const liberal: LemmaEntry = {
  lemma: "liberal",
  slug: "liberal",
  partOfSpeech: "aggettivo",
  gender: undefined,
  definition:
    "Aggettivo e sostantivo di origine inglese, entrato nell'italiano contemporaneo per designare " +
    "un orientamento politico progressista che non si identifica con la sinistra marxista o socialista. " +
    "In Italia, *liberal* indica generalmente chi sostiene le libertà civili, i diritti individuali e " +
    "un'economia di mercato moderata, distinguendosi sia dal liberismo puro sia dalla tradizione " +
    "socialdemocratica. Nell'uso anglofono — soprattutto statunitense — *liberal* designa la sinistra " +
    "moderata del Partito Democratico, per contrasto con *conservative*: un'accezione che non coincide " +
    "esattamente con quella italiana o europea continentale. " +
    "Come aggettivo è invariabile in italiano.",
  shortDefinition: "Di orientamento politico progressista non marxista; nell'uso USA indica la sinistra moderata (Partito Democratico).",
  register: ["giornalistico", "politico", "forestierismo"],
  domains: ["politica", "uso contemporaneo"],
  etymology:
    "Dall'inglese *liberal*, a sua volta dal latino *liberalis* ('degno di uomo libero'). " +
    "Entrato nell'italiano giornalistico e politico dalla seconda metà del Novecento.",
  examples: [
    "I quotidiani italiani usano spesso *liberal* per indicare intellettuali di sinistra moderata distanti dal comunismo.",
    "Negli Stati Uniti, un elettore liberal vota tipicamente per il Partito Democratico e sostiene diritti civili e welfare state.",
    "La corrente liberal del centro-sinistra europeo tende a privilegiare il dialogo tra diritti individuali e solidarietà sociale.",
  ],
  synonyms: [
    { term: "progressista", register: "politico", context: "favorevole a riforme che ampliano diritti e uguaglianza" },
    { term: "riformista", register: "politico", context: "favorevole a cambiamenti graduali dell'ordinamento" },
  ],
  antonyms: [
    { term: "conservatore", register: "politico", context: "orientamento favorevole alla conservazione delle istituzioni esistenti" },
    { term: "reazionario", register: "politico", context: "orientamento contrario alle riforme e favorevole a un ritorno al passato" },
  ],
  relatedWords: ["liberalismo", "liberismo", "liberta", "politica", "sinistra"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/liberal/",
    wiktionary: "https://it.wiktionary.org/wiki/liberal",
  },
  paroliereNote:
    "Il termine è un prestito non adattato dall'inglese e come tale è invariabile: *un politico liberal*, " +
    "*una politica liberal*, *idee liberal*. Il suo uso in italiano è spesso impreciso: chi si autodefinisce " +
    "'liberal' non è detto che si rifaccia al liberalismo filosofico di Locke o Mill. " +
    "Attenzione alle differenze contestuali: in Europa *liberal* tende a indicare il centro, " +
    "in America è sinonimo di sinistra moderata — il che crea frequenti fraintendimenti nei media italiani " +
    "che traducono testi angloamericani.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "LIBERAL — definizione e uso | Il Paroliere",
    description: "Liberal: aggettivo politico di orientamento progressista non marxista. Differenze tra uso italiano e americano; invariabile in italiano.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
