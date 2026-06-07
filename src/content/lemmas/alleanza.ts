// Il Paroliere — Lemma: ALLEANZA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const alleanza: LemmaEntry = {
  lemma: "alleanza",
  slug: "alleanza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Accordo formale o informale tra soggetti — Stati, partiti, gruppi, istituzioni — " +
    "che decidono di cooperare in vista di interessi comuni, con vincoli reciproci " +
    "tendenzialmente duraturi. A differenza della coalizione, l'alleanza implica un legame " +
    "più stabile, spesso fondato su affinità valoriali o su patti scritti. " +
    "Alleanza strategica: cooperazione a lungo termine in campo militare, economico o " +
    "diplomatico. Alleanza politica: accordo tra forze politiche per governare insieme " +
    "o per contrastare un avversario. " +
    "Le alleanze tra le Contrade di Siena sono patti storici e culturali che regolano " +
    "i rapporti tra le diciassette Contrade nel Palio: le alleanze vietano di ostacolare " +
    "la Contrada alleata durante la corsa, possono includere supporto reciproco nel " +
    "tirare (mossa) e nel portare (vincere), e costituiscono un sistema di relazioni " +
    "identitarie profondo, trasmesso di generazione in generazione.",
  shortDefinition: "Accordo duraturo tra soggetti — Stati, partiti, Contrade — per cooperare in vista di interessi comuni.",
  register: ["formale", "politico", "storico"],
  domains: ["politica", "storia", "diplomazia"],
  etymology:
    "Dal francese antico *aliance*, derivato di *alier* (unire), dal latino *alligare* " +
    "(legare a sé), composto di *ad-* e *ligare* (legare). In italiano attestato dal XIII " +
    "secolo; la forma *alleanza* si afferma nel XIV-XV secolo.",
  examples: [
    "L'alleanza atlantica (NATO) è stata fondata nel 1949 come sistema di difesa " +
    "collettiva tra democrazie occidentali.",
    "Le alleanze tra le Contrade di Siena sono accordi che vincolano il fantino " +
    "a non danneggiare la Contrada alleata durante il Palio.",
    "L'alleanza di governo tra i due partiti è sopravvissuta a tre crisi parlamentari " +
    "grazie alla comune necessità di completare la legislatura.",
  ],
  synonyms: [
    { term: "patto", register: "formale", context: "con enfasi sul vincolo contrattuale esplicito" },
    { term: "accordo", register: "neutro", context: "intesa generica, meno connotata di alleanza" },
    { term: "coalizione", register: "politico", context: "più contingente e orientata a un obiettivo specifico" },
    { term: "lega", register: "storico", context: "unione formale, spesso militare o commerciale" },
  ],
  antonyms: [
    { term: "conflitto", register: "neutro", context: "opposizione aperta di interessi" },
    { term: "rottura", register: "neutro", context: "scioglimento formale del patto" },
    { term: "inimicizia", register: "neutro", context: "relazione strutturalmente ostile" },
    { term: "neutralità", register: "politico", context: "scelta di non schierarsi con nessuna parte" },
  ],
  relatedWords: ["coalizione", "conflitto", "potere", "consenso", "palio-di-siena", "norma", "diritto", "autorita", "liberalismo", "liberta", "politica", "trasformismo"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/alleanza",
    treccani: "https://www.treccani.it/vocabolario/alleanza/",
  },
  paroliereNote:
    "Alleanza e coalizione condividono il campo semantico della cooperazione politica, " +
    "ma si distinguono per stabilità e profondità del legame: l'alleanza è più duratura " +
    "e spesso fondata su affinità valoriali o su trattati espliciti; la coalizione è " +
    "più contingente, costituita per un obiettivo preciso e tendenzialmente transitoria. " +
    "Le alleanze tra le Contrade di Siena rappresentano un caso straordinario di patto " +
    "culturale-identitario vivente: non sono semplici accordi tattici per il Palio, " +
    "ma espressioni dell'identità comunitaria delle Contrade, trasmesse oralmente e " +
    "codificate nella memoria collettiva senese. Il termine corretto è sempre " +
    "«alleanze» — mai «amicizie» o altre perifrasi — per rispettare il vocabolario " +
    "istituzionale delle Contrade stesse.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "ALLEANZA — definizione | Il Paroliere",
    description:
      "Definizione di alleanza: accordo duraturo tra soggetti per cooperare. Alleanze tra " +
      "Contrade di Siena, alleanze politiche e militari. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
