// Il Paroliere — Lemma: spacconcello
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const spacconcello: LemmaEntry = {
  lemma: "spacconcello",
  slug: "spacconcello",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["colloquiale", "ironico"],
  domains: ["comportamento sociale", "linguaggio colloquiale"],

  definition:
    "Spaccone in scala minore, spesso nominato con ironia più che con ostilità: chi si dà arie, racconta imprese o ostenta sicurezza senza riuscire davvero a intimidire. Rispetto a → spaccone, il suffisso -cello attenua la portata e introduce una vena quasi bonaria. Può rimproverare, ma lascia spazio al sorriso e alla familiarità del contesto.",

  shortDefinition:
    "Piccolo spaccone, detto con ironia: vanitoso o millantatore meno imponente e spesso quasi bonario.",

  etymology:
    "Derivato espressivo di «spaccone», con il suffisso -cello. In questa formazione il suffisso non misura soltanto la dimensione: riduce l’enfasi minacciosa del tipo e ne rende più domestica, scherzosa o indulgente la caricatura.",

  examples: [
    "Al tavolo raccontava di ogni trattativa come di una conquista storica: uno spacconcello, più divertente che temibile.",
    "Non prenderlo troppo sul serio, fa lo spacconcello quando arrivano persone nuove.",
    "La sorella lo chiamava spacconcello ogni volta che mostrava l’orologio appena comprato.",
  ],

  synonyms: [
    { term: "spaccone", register: "comune-colloquiale", note: "→ spaccone è il termine base e più netto; non porta di per sé l’attenuazione ironica di «spacconcello»." },
    { term: "gradasso", register: "comune-letterario", note: "Più teatrale e spesso più marcato; «spacconcello» circoscrive il vanto a una figura minore." },
    { term: "fanfarone", register: "comune-letterario", note: "Evidenzia il rumore delle parole, non la riduzione affettuosa espressa dal suffisso." },
  ],

  antonyms: [
    { term: "persona discreta", register: "comune", note: "Chi non cerca di impressionare e non trasforma ogni gesto in esibizione." },
    { term: "modesto", register: "comune", note: "Chi ridimensiona i propri meriti anziché ingrandirli davanti agli altri." },
  ],

  relatedWords: ["spaccone", "gradasso", "fanfarone", "millantatore", "bravata"],
  sourceLinks: {},

  paroliereNote:
    "I diminutivi non sono sempre piccoli: spesso regolano la temperatura sociale di un giudizio. «Spacconcello» permette di segnalare un eccesso senza attribuirgli automaticamente la durezza o la minaccia di → spaccone.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Spacconcello — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di spacconcello: diminutivo ironico di spaccone, per chi si dà arie senza risultare davvero minaccioso. Sinonimi, esempi e uso.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
};
