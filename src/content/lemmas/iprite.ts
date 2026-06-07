// Il Paroliere — Lemma: iprite
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const iprite: LemmaEntry = {
  lemma: "iprite",
  slug: "iprite",
  partOfSpeech: "sostantivo femminile",
  gender: "femminile",

  definition:
    "Agente chimico vescicante di formula (ClCH₂CH₂)₂S, conosciuto anche come " +
    "gas mostarda per il suo caratteristico odore che ricorda la senape o le " +
    "mandorle amare. È un liquido oleoso a temperatura ambiente, di colore " +
    "giallastro, che diventa gas a temperature sufficientemente alte. L'iprite " +
    "provoca gravi ustioni chimiche alla pelle, agli occhi e alle vie respiratorie, " +
    "con effetti ritardati: la vittima può non accorgersi immediatamente " +
    "dell'esposizione, rendendo il composto particolarmente insidioso. Fu usata " +
    "per la prima volta in combattimento dai tedeschi nella Battaglia di Ypres " +
    "(Belgio) il 12 luglio 1917, durante la Prima Guerra Mondiale — da qui il nome, " +
    "derivato dalla grafia italiana della città fiamminga Ieper (in francese Ypres). " +
    "Rimane una delle armi chimiche più temute della storia militare moderna e il " +
    "suo uso è vietato dalla Convenzione di Ginevra del 1925 e dalla Convenzione " +
    "sulle Armi Chimiche del 1993.",

  shortDefinition:
    "Agente chimico vescicante, noto come gas mostarda per l'odore di mandorle amare; usato per la prima volta a Ypres nel 1917, è tra le armi chimiche più devastanti della Prima Guerra Mondiale.",

  register: ["tecnico-scientifico", "storico"],
  domains: ["chimica", "storia", "medicina", "diritto internazionale"],

  etymology:
    "Dall'italiano Ipres (o Ypres nella grafia francese; Ieper in fiammingo): " +
    "la città belga delle Fiandre dove fu impiegata per la prima volta il 12 luglio " +
    "1917. Il suffisso -ite è tipico dei composti chimici e degli agenti minerali.",

  examples: [
    "I soldati esposti all'iprite non avvertivano subito il danno: le ustioni si manifestavano ore dopo l'esposizione.",
    "L'iprite fu responsabile di alcune delle lesioni più atroci della Grande Guerra, molte delle quali lasciarono i sopravvissuti ciechi o con danni permanenti ai polmoni.",
    "Anche durante la Seconda Guerra Mondiale alcune potenze mantennero scorte di iprite come deterrente, senza usarla su larga scala.",
  ],

  synonyms: [
    {
      term: "gas mostarda",
      register: "comune",
      context: "denominazione più diffusa in italiano e inglese",
    },
    {
      term: "gas di senape",
      register: "comune",
      context: "denominazione alternativa per l'odore",
    },
    {
      term: "sulfuro di bis(2-cloroetile)",
      register: "tecnico-scientifico",
      context: "nome chimico IUPAC",
    },
    {
      term: "HS",
      register: "tecnico-scientifico",
      context: "sigla militare",
    },
  ],

  relatedWords: [
    "Prima Guerra Mondiale",
    "Ypres",
    "armi chimiche",
    "gas di combattimento",
    "fosgene",
    "cloro",
    "Convenzione di Ginevra",
    "OPCW",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/iprite/",
    wiktionary: "https://it.wiktionary.org/wiki/iprite",
  },

  paroliereNote:
    "Iprite è una parola che porta incorporata la geografia di una delle pagine più " +
    "buie della storia militare moderna. Il fatto che un'arma chimica porti il nome " +
    "di una città belga semidistrutta — Ypres, Ieper in fiammingo, oggi luogo di " +
    "pellegrinaggio e memoria — dice qualcosa sulla natura dei nomi che la guerra " +
    "lascia alla lingua. L'iprite è insidiosa per un motivo preciso: agisce in " +
    "ritardo. Chi la respira o la tocca spesso non sa di essere stato colpito, e " +
    "quando i sintomi arrivano è già troppo tardi per le prime cure. Questa " +
    "caratteristica la rendeva particolarmente utile come arma psicologica oltre " +
    "che fisica: il nemico non sapeva quando era in pericolo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Iprite — gas mostarda, origine del nome, Prima Guerra Mondiale | Il Paroliere",
    description:
      "Cos'è l'iprite, perché si chiama così, da dove viene il nome Ypres. La storia del gas mostarda e il suo uso nella Prima Guerra Mondiale.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
