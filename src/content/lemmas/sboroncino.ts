// Il Paroliere — Lemma: sboroncino
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sboroncino: LemmaEntry = {
  lemma: "sboroncino",
  slug: "sboroncino",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["gergale", "colloquiale", "ironico"],
  domains: ["comportamento sociale", "linguaggio colloquiale"],

  definition:
    "Persona che ostenta meriti, acquisti o conoscenze con una vanità esibita, ma ridimensionata dal tono scherzoso del diminutivo. Deriva da → sborone e ne conserva l’idea di chi vuole impressionare; -cino, però, può renderla meno aggressiva, più giovane o più facilmente deridibile. Il valore preciso dipende molto dalla complicità tra chi parla e chi ascolta.",

  shortDefinition:
    "Diminutivo ironico di sborone: chi si vanta o ostenta, ma con un giudizio spesso più leggero e scherzoso.",

  etymology:
    "Derivato di «sborone» con il suffisso diminutivo -cino. Nel parlato il suffisso funziona anche come regolatore di tono: può attenuare il rimprovero, renderlo affettuoso o segnalare che l’ostentazione appare piccola rispetto a quella rivendicata.",

  examples: [
    "Con quella giacca nuova faceva un po’ lo sboroncino, ma gli amici lo prendevano in giro senza cattiveria.",
    "Non è uno sborone vero e proprio: è uno sboroncino da stories, sempre pronto a mostrare l’ultimo acquisto.",
    "La nonna lo chiamò sboroncino quando cominciò a elencare i voti dell’università prima ancora di salutare.",
  ],

  synonyms: [
    { term: "sborone", register: "gergale-colloquiale", note: "→ sborone è il termine base, in genere più diretto e più marcato nell’ostentazione." },
    { term: "spacconcello", register: "colloquiale-ironico", note: "Ridimensiona in modo analogo un atteggiamento da → spaccone, ma appartiene a un’altra famiglia lessicale." },
    { term: "fanfarone", register: "comune-letterario", note: "Più neutro rispetto al registro basso e meno segnato dal gioco diminutivo." },
  ],

  antonyms: [
    { term: "persona riservata", register: "comune", note: "Chi non mette in vetrina meriti, beni o relazioni per ottenere attenzione." },
    { term: "modesto", register: "comune", note: "Chi lascia che siano i fatti e non l’annuncio a definire il proprio valore." },
  ],

  relatedWords: ["sborone", "spacconcello", "spaccone", "fanfarone", "arroganza"],
  sourceLinks: {},

  paroliereNote:
    "Il diminutivo non assolve automaticamente chi si vanta: può addolcire, ma anche rendere più pungente la presa in giro. In «sboroncino» conta soprattutto la scena sociale — chi lo dice, a chi e se il sorriso è condiviso.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Sboroncino — definizione, sinonimi, uso | Il Paroliere",
    description: "Significato di sboroncino: diminutivo colloquiale e ironico di sborone, per chi ostenta con vanità. Sinonimi, esempi e sfumature di tono.",
  },

  createdAt: "2026-08-24",
  updatedAt: "2026-11-13",
};
