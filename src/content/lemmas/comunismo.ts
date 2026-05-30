// Il Paroliere — Lemma: comunismo
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const comunismo: LemmaEntry = {
  lemma: "comunismo",
  slug: "comunismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",

  definition:
    "Dottrina politica ed economica che teorizza l'abolizione della proprietà privata " +
    "dei mezzi di produzione e l'organizzazione della società in forma collettiva, " +
    "senza classi né Stato. Elaborata nei suoi fondamenti da Karl Marx e Friedrich " +
    "Engels nel XIX secolo, nella sua realizzazione storica ha dato luogo a regimi a " +
    "partito unico come l'URSS (1917–1991), la Repubblica Popolare Cinese, Cuba e " +
    "altri, con esiti profondamente divergenti dalla teoria originale.",

  shortDefinition:
    "Dottrina di Marx ed Engels per una società senza classi né proprietà privata; " +
    "nella storia, i regimi che ne hanno invocato il nome.",

  register: ["politico", "storico", "filosofico"],
  domains: ["politica", "filosofia", "storia"],

  etymology:
    "Dal francese communisme, attestato nella prima metà dell'Ottocento, derivato di " +
    "commun (dal latino communis, comune, condiviso). Il termine si diffonde in tutta " +
    "Europa dopo la pubblicazione del Manifesto del Partito Comunista di Marx ed " +
    "Engels nel 1848.",

  examples: [
  ],

  synonyms: [
    { term: "marxismo", register: "politico/filosofico", context: "con riferimento alla base teorica, non all'esperienza storica dei regimi" },
    { term: "bolscevismo", register: "storico", context: "nella variante leninista applicata alla rivoluzione russa del 1917" }
  ],

  antonyms: [
    { term: "capitalismo", register: "politico/economico", context: "sistema economico basato sulla proprietà privata e il mercato" },
    { term: "liberalismo", register: "politico/filosofico", context: "dottrina che difende la libertà individuale e la proprietà privata" }
  ],

  relatedWords: [
    "fascismo",
    "nazionalismo",
    "populismo",
    "consumismo"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/comunismo"
  },

  paroliereNote:
    "Il comunismo esiste su due piani che raramente coincidono: quello della teoria " +
    "filosofica — una critica radicale al capitalismo e alla sua alienazione — e " +
    "quello della storia politica, in cui i regimi che ne hanno invocato il nome " +
    "hanno spesso prodotto autoritarismo, pianificazione fallimentare e repressione. " +
    "Confondere i due piani impoverisce qualsiasi discorso serio sul tema.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Comunismo — Il Paroliere",
    description:
      "Significato di comunismo: la dottrina di Marx ed Engels, le realizzazioni " +
      "storiche (URSS, Cina, Cuba) e la distinzione tra teoria e pratica politica.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};