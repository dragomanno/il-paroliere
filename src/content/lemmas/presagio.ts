// Il Paroliere — Lemma: presagio
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const presagio: LemmaEntry = {
  lemma: "presagio",
  slug: "presagio",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "letterario"],
  domains: ["psicologia", "superstizione", "religione", "letteratura", "cultura"],

  definition:
    "Segno, evento o sensazione che viene interpretato come annuncio di qualcosa che deve ancora accadere, di solito in senso negativo o inquieto. Nella tradizione religiosa e superstiziosa il presagio è spesso legato a fenomeni esterni — un animale, un sogno, un incontro casuale — letti come messaggi cifrati del destino; in psicologia interessa la dimensione interna: il “brutto presentimento” che colora di ansia una situazione, anche se non abbiamo prove oggettive. Nel linguaggio letterario e cinematografico, un oggetto, una frase o un dettaglio possono diventare presagio narrativo di ciò che verrà.",

  shortDefinition:
    "Segno o sensazione interpretati come annuncio di un evento futuro, spesso percepito come minaccioso o grave.",

  etymology:
    "Dal latino praesagium, “presentimento, segno premonitore”, derivato di praesagire “presentire, predire”, composto da prae- “prima” e sagire “avere fiuto, sentire acutamente”. In italiano ha mantenuto il nucleo semantico della percezione anticipata, con un forte colore emotivo e simbolico.",

  examples: [
    "Quel silenzio improvviso gli sembrò un cattivo presagio, come se la casa trattenesse il fiato.",
    "Prendere un numero particolare alla lotteria può diventare un presagio di fortuna per chi vive immerso nei segni.",
    "A volte scambiamo per presagio ciò che è solo l'effetto retrospettivo: ricordiamo il segno solo quando l'evento si è già verificato.",
    "Nella sua cultura, alcuni uccelli sono considerati presagio di morte, però per lui erano solo compagni di strada.",
    "Nel romanzo, la crepa nel muro funziona come presagio delle fratture che arriveranno tra i personaggi.",
  ],

  synonyms: [
    {
      term: "presentimento",
      register: "comune",
      note: "Più centrato sulla sensazione interiore che sul segno esterno.",
    },
    {
      term: "auspicio",
      register: "letterario",
      note: "Non necessariamente negativo, può essere anche favorevole.",
    },
    {
      term: "segno preannuncio",
      register: "saggistico",
      note: "Formula descrittiva neutra, adatta a contesti analitici.",
    },
  ],

  antonyms: [
    {
      term: "smentita",
      register: "comune",
      note: "Fatto che contraddice il presagio o il timore iniziale.",
    },
    {
      term: "casualità",
      register: "comune",
      note: "Lettura degli eventi come privi di significato anticipatorio.",
    },
  ],

  relatedWords: ["intuizione", "premonizione", "superstizione", "subliminale"],

  sourceLinks: {},

  paroliereNote:
    "Il presagio abita quella zona in cui il bisogno di senso incontra il caso: tendiamo a ricordare solo i segni che sembrano aver anticipato davvero un evento, e a dimenticare tutti gli altri. Per questo è così facile attribuire potere a un dettaglio una volta che la storia è andata in una certa direzione. Allo stesso tempo, la figura del presagio dà voce a una forma di attenzione fine alle sfumature: i cambiamenti minimi di atmosfera, i dettagli fuori posto, ciò che “non torna” ancora prima che accada qualcosa. Il lemma suggerisce di restare vigili sui segni, senza smettere di interrogarne la lettura.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "presagio — segni, presentimenti e destino",
    description:
      "Che cos'è un presagio tra superstizione, psicologia e letteratura, dai segni letti come annuncio al bisogno umano di vedere trame nel caso.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
