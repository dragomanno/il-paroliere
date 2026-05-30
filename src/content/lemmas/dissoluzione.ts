// Il Paroliere — Lemma: dissoluzione
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const dissoluzione: LemmaEntry = {
  lemma: "dissoluzione",
  slug: "dissoluzione",
  partOfSpeech: "sostantivo",
  gender: "femminile",

  definition:
    "Processo di disfacimento o scioglimento di un'entità organizzata — che sia una " +
    "sostanza chimica in un solvente, una struttura politica o un legame sociale. La " +
    "dissoluzione ha sempre una dimensione di perdita di coesione: ciò che era tenuto " +
    "insieme cessa di esserlo, e le parti si separano o si disperdono. Nel linguaggio " +
    "formale e giuridico si usa per la fine di enti, istituzioni, matrimoni, " +
    "parlamenti.",

  shortDefinition:
    "Scioglimento di un'entità organizzata, in chimica come in politica: perdita di " +
    "coesione fino alla separazione delle parti.",

  register: ["comune", "tecnico", "formale"],
  domains: ["chimica", "politica", "società"],

  etymology:
    "Dal latino dissolutio, -onis, derivato di dissolvere (dis- + solvere, " +
    "sciogliere). Il termine entra in italiano con il doppio significato fisico " +
    "(scioglimento di una sostanza) e figurato (disfacimento morale o istituzionale) " +
    "già nel latino classico.",

  examples: [
  ],

  synonyms: [
    { term: "scioglimento", register: "comune/giuridico", context: "nella accezione istituzionale (scioglimento del parlamento, di un'associazione)" },
    { term: "disfacimento", register: "comune/letterario", context: "con accento sul processo progressivo di perdita di forma" },
    { term: "disgregazione", register: "comune/tecnico", context: "con enfasi sulla separazione degli elementi costitutivi" }
  ],

  antonyms: [
    { term: "coesione", register: "comune/tecnico", context: "la forza che tiene uniti gli elementi di un sistema" },
    { term: "sintesi", register: "tecnico/filosofico", context: "in chimica, il processo opposto che unisce elementi separati" }
  ],

  relatedWords: [
    "dissolvimento",
    "sintesi",
    "antonomasia"
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/dissoluzione"
  },

  paroliereNote:
    "Dissoluzione e dissolvimento (vedi) non sono intercambiabili. Dissoluzione ha " +
    "una valenza più formale, astratta e istituzionale: si parla di dissoluzione " +
    "dell'URSS, della dissoluzione di un matrimonio, della dissoluzione morale di una " +
    "società. Dissolvimento è più concreto, più fisico, spesso usato in contesti " +
    "percettivi (il dissolvimento di un suono, di un'immagine cinematografica) o " +
    "materiali. La distinzione è sottile, ma reale nell'uso colto. L'esempio per " +
    "antonomasia di dissoluzione morale nella cultura occidentale è Don Giovanni: il " +
    "libertino di Mozart e Da Ponte che consuma ogni legame, ogni promessa, ogni " +
    "limite — fino alla resa dei conti finale. Un personaggio che non si dissolve per " +
    "debolezza, ma per eccesso di volontà.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Dissoluzione — Il Paroliere",
    description:
      "Significato di dissoluzione: scioglimento di un'entità organizzata in chimica, " +
      "politica e società. Differenza con dissolvimento.",
  },

  createdAt: "2026-05-30",
  updatedAt: "2026-05-30",
};