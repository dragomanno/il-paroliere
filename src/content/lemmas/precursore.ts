// Il Paroliere — Lemma: precursore
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const precursore: LemmaEntry = {
  lemma: "precursore",
  slug: "precursore",
  partOfSpeech: "sostantivo maschile (anche femminile: precorritrice, raro); anche aggettivo",
  gender: "maschile",

  definition:
    "Chi anticipa il proprio tempo — chi ha un'idea, sviluppa una pratica o incarna una " +
    "visione prima che il contesto culturale, tecnologico o sociale sia pronto ad accoglierla. " +
    "Il precursore non è semplicemente un pioniere o un innovatore: porta con sé una dimensione " +
    "di solitudine e incomprensione temporanea. È colui che arriva prima, che vede ciò che gli " +
    "altri non vedono ancora, e che spesso paga questa visione anticipatrice con " +
    "l'incomprensione dei contemporanei — per essere poi riconosciuto, a volte molto dopo, " +
    "come il punto di origine di qualcosa di grande. Il precursore non è necessariamente un " +
    "genio solitario — può anche essere qualcuno che ha combinato le idee giuste nel momento " +
    "leggermente sbagliato, troppo in anticipo sui tempi. La differenza tra un precursore e " +
    "uno startupper visionario di successo è spesso solo il timing: lo stesso prodotto, la " +
    "stessa idea, la stessa visione — arrivata cinque anni prima o cinque anni dopo — può " +
    "essere il fallimento di un precursore o il trionfo di un imprenditore. Vale la pena " +
    "avvicinare concettualmente precursore e perspicace, tenendoli però distinti con cura. " +
    "Chi è perspicace vede avanti, sì — ma il suo vedere avanti è riconosciuto nel momento " +
    "stesso in cui accade: la perspicacia è una qualità ammessa dai contemporanei in tempo " +
    "reale. Il precursore, invece, non ha questo lusso: la sua visione anticipatoria non viene " +
    "riconosciuta quando è ancora utile riconoscerla. Semmelweis, che intuì il lavaggio delle " +
    "mani prima che esistesse la microbiologia, morì in manicomio: era un precursore, " +
    "non un perspicace riconosciuto.",

  shortDefinition:
    "Chi anticipa il proprio tempo con idee o pratiche che il contesto non è ancora pronto " +
    "a ricevere; spesso riconosciuto solo a posteriori, a volte post mortem.",

  register: ["comune", "con sfumatura elogiativa"],
  domains: ["storia", "innovazione", "società", "linguistica"],

  etymology:
    "Dal latino praecursor («chi corre avanti»), da prae- («prima, avanti») + currere " +
    "(«correre»). Lo stesso campo di precorrere, precorrere i tempi, cursore.",

  examples: [
    "Tesla era un precursore assoluto: la corrente alternata, la trasmissione wireless di energia, il motore elettrico — tutto anticipato di decenni rispetto alla capacità del mondo di capirlo e usarlo.",
    "Uno startupper può essere un precursore o un imprenditore di successo: la differenza è spesso solo il timing. Google Reader era un prodotto perfetto per un mondo che non era ancora arrivato.",
    "Nietzsche fu un precursore del pensiero del Novecento: molte delle sue intuizioni sulla morale, il potere e il linguaggio anticiparono Foucault, Derrida e la filosofia post-strutturalista.",
  ],

  synonyms: [
    {
      term: "pioniere",
      register: "comune",
      context: "chi apre la strada",
    },
    {
      term: "anticipatore",
      register: "comune",
      context: "chi viene prima del suo tempo",
    },
    {
      term: "visionario",
      register: "comune",
      context: "chi vede oltre il presente",
    },
    {
      term: "apripista",
      register: "comune",
      context: "chi traccia il percorso per gli altri",
    },
  ],

  antonyms: [
    {
      term: "epigono",
      register: "comune",
      context: "chi viene dopo e imita",
    },
    {
      term: "seguace",
      register: "comune",
      context: "chi segue la strada già tracciata",
    },
  ],

  relatedWords: [
    "perspicace",
    "perspicacia",
    "liquidita",
    "innovazione",
    "visione",
    "timing",
    "startup",
    "pioniere",
    "avanguardia",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/precursore/",
    wiktionary: "https://it.wiktionary.org/wiki/precursore",
  },

  paroliereNote:
    "Precursore è una parola che porta con sé una certa malinconia: quasi sempre si riconosce " +
    "il precursore a posteriori, quando il momento è già passato. Chi viene capito subito, in " +
    "genere, non è un precursore: è semplicemente bravo e fortunato. Il precursore autentico — " +
    "Tesla, Semmelweis, Gregor Mendel — spesso non vede il riconoscimento in vita. Questo dice " +
    "qualcosa di importante sulla relazione tra visione e contesto: le idee non bastano da sole, " +
    "hanno bisogno di un terreno culturale e materiale pronto a riceverle. La differenza con " +
    "perspicace è cruciale: chi è perspicace viene riconosciuto come tale dai contemporanei, " +
    "in tempo reale; il precursore è una categoria che si attribuisce a posteriori.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Precursore — definizione, differenza da pioniere | Il Paroliere",
    description:
      "Chi è il precursore, perché arriva prima del suo tempo, differenza da pioniere e " +
      "perspicace. Tesla, Nietzsche, startup. Definizione con nota sul timing.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-06",
};
