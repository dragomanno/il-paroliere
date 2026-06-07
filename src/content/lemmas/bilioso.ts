// Il Paroliere — Lemma: bilioso
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const bilioso: LemmaEntry = {
  lemma: "bilioso",
  slug: "bilioso",
  partOfSpeech: "aggettivo",

  definition:
    "Nel senso letterale e medico-storico, chi è soggetto a disturbi della bile — la secrezione " +
    "prodotta dal fegato, che nella medicina umorale di Galeno e Ippocrate era associata al " +
    "temperamento melanconico o collerico a seconda del tipo: la bile gialla produceva il " +
    "collerico (iracondo, reattivo), la bile nera (melancolia) produceva il melanconico " +
    "(triste, cupo, riflessivo). Nel senso figurato corrente, bilioso descrive una persona di " +
    "carattere cupo, scontento, che porta dentro di sé un risentimento cronico e diffuso — " +
    "non necessariamente l'ira esplosiva dell'irascibile, ma un'amarezza di fondo che colora " +
    "ogni giudizio e ogni rapporto. Il bilioso non esplode: corrode. Non si arrabbia " +
    "facilmente come il fumino, né scatta come l'irascibile: smoldera, cova, si risente. " +
    "La differenza fondamentale rispetto a irascibile è nella dinamica temporale: " +
    "l'irascibilità è reattiva e rapida, spesso si spegne in fretta; la biliosità è cronica, " +
    "persistente, quasi costitutiva del carattere. Chi è bilioso lo è sempre, anche quando " +
    "non c'è un motivo immediato.",

  shortDefinition:
    "Cupo, scontento, portatore di un risentimento cronico e diffuso; nel senso medico " +
    "storico, chi è soggetto a disturbi della bile.",

  register: ["comune", "con sfumatura letteraria; in senso medico, tecnico"],
  domains: ["psicologia", "medicina (storica)", "caratterologia", "linguistica"],

  etymology:
    "Da bile (latino bilis) + suffisso -oso che indica abbondanza o tendenza. Nella medicina " +
    "umorale, la bilis era uno dei quattro umori fondamentali; la sua eccedenza determinava il " +
    "temperamento. Lo stesso campo di bile («ira, risentimento» nel parlato corrente: «mi fa " +
    "venire la bile»).",

  examples: [
    "Era un critico bilioso: nelle sue recensioni non c'era mai nulla di buono, solo acredine sistematica.",
    "Dopo anni di delusioni professionali era diventato bilioso: guardava il successo degli altri con un cinismo che non riusciva più a nascondere.",
    'Non essere così bilioso gli disse la sorella. Non è che il mondo ce l\'abbia con te. Ma lui non ci credeva.',
  ],

  synonyms: [
    {
      term: "acrimonioso",
      register: "comune colto",
      context: "pieno di acrimonia, amarezza persistente",
    },
    {
      term: "astioso",
      register: "comune",
      context: "portatore di astio cronico",
    },
    {
      term: "risentito",
      register: "comune",
      context: "che porta rancore",
    },
    {
      term: "scontroso",
      register: "comune",
      context: "di carattere difficile e chiuso",
    },
  ],

  antonyms: [
    {
      term: "gioviale",
      register: "comune",
      context: "di carattere allegro e aperto",
    },
    {
      term: "bonario",
      register: "comune",
      context: "di carattere mite e gentile",
    },
    {
      term: "ottimista",
      register: "comune",
      context: "orientato positivamente",
    },
  ],

  relatedWords: [
    "irascibile",
    "fumino",
    "incazzoso",
    "incazzatello",
    "bile",
    "umore",
    "temperamento",
    "melanconico",
    "acrimonia",
    "risentimento",
    "Galeno",
    "teoria degli umori",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/bilioso/",
    wiktionary: "https://it.wiktionary.org/wiki/bilioso",
  },

  paroliereNote:
    "Bilioso è la parola giusta per descrivere un tipo di carattere che né la parola " +
    "irascibile, né scontroso catturano con la stessa precisione: il bilioso non reagisce " +
    "agli stimoli — porta con sé una riserva permanente di scontento che non dipende da " +
    "ciò che accade nel momento, ma da come il mondo gli ha fatto supporre di essere fatto. " +
    "È un risentimento ontologico, quasi. La parola porta con sé anche tutta la ricchezza " +
    "della medicina umorale: chi dice bilioso sta usando, probabilmente senza saperlo, una " +
    "categoria che risale a Ippocrate. E quella categoria continua a descrivere qualcosa di " +
    "reale, due millenni e mezzo dopo.",
  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Bilioso — definizione, carattere, differenza da irascibile | Il Paroliere",
    description:
      "Bilioso: il risentimento cronico, la bile umorale, la differenza da irascibile e " +
      "fumino. Dalla medicina di Galeno al carattere quotidiano. Definizione originale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
