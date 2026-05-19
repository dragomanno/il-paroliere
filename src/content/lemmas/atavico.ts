// Il Paroliere — Lemma: atavico
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const atavico: LemmaEntry = {
  lemma: "atavico",
  slug: "atavico",
  partOfSpeech: "aggettivo",

  definition:
    "Che appartiene agli avi più remoti o ne richiama i caratteri, trasmesso attraverso le generazioni " +
    "in modo così profondo da sembrare iscritto nella natura. In biologia indica la ricomparsa di tratti " +
    "ancestrali che sembravano scomparsi — il cosiddetto ritorno del passato. Nel parlato comune e " +
    "letterario qualifica paure, impulsi o attitudini che non hanno un'origine personale riconoscibile: " +
    "vengono da prima.",

  shortDefinition:
    "Di ciò che risale agli avi più remoti — in biologia, tratti ancestrali ricomparsi; nel comune, paure o istinti che vengono da prima.",

  register: ["comune", "letterario"],
  domains: ["biologia", "psicologia"],

  etymology:
    "Dal latino atavus, 'trisavolo, antenato remoto' — composto di at- (forma rafforzativa di ad-) " +
    "e avus (nonno, antenato). Il termine fu usato in biologia da Darwin e dai naturalisti ottocenteschi.",

  examples: [
    "Una paura ataviuca del buio che nessuna esperienza razionale era riuscita a scalfire.",
    "Il gesto aveva qualcosa di atavico: veniva da un posto che non ricordava di conoscere.",
    "In biologia si parla di atavismo quando ricompare un tratto che le generazioni intermedie avevano perso.",
    "Quella diffidenza verso lo straniero non era sua — era ataviuca, ereditata senza essere scelta.",
  ],

  synonyms: [
    {
      term: "ancestrale",
      register: "comune",
      context: "appartiene agli antenati, meno tecnico dell'atavico in senso biologico",
    },
    {
      term: "primordiale",
      register: "comune",
      context: "delle origini più remote, con sfumatura cosmologica",
    },
    {
      term: "ereditato",
      register: "comune",
      context: "trasmesso dai predecessori, senza la connotazione di profondità genetica",
    },
  ],

  antonyms: [
    {
      term: "acquisito",
      register: "comune",
      context: "appreso dall'esperienza, non trasmesso per via genetica o culturale remota",
    },
    {
      term: "moderno",
      register: "comune",
      context: "appartenente al presente, non alle origini",
    },
  ],

  relatedWords: [
    "atavismo",
    "ancestrale",
    "ereditarietà",
    "retaggio",
    "primordiale",
    "filogenetico",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/atavico/",
    wiktionary: "https://it.wiktionary.org/wiki/atavico",
  },

  paroliereNote:
    "Atavico funziona così bene nel parlato letterario perché porta con sé l'idea di una trasmissione " +
    "che ha saltato la coscienza individuale — qualcosa che non si è scelto né imparato, che semplicemente " +
    "c'è. Le paure ataviche, gli istinti atavici: sono quelli che resistono alla spiegazione, " +
    "perché la loro origine è più antica di qualsiasi esperienza personale.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Atavico — Il Paroliere",
    description:
      "Definizione originale di 'atavico': di paure e istinti che vengono da prima, trasmessi dagli avi. " +
      "Con esempi, sinonimi, etimologia e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
