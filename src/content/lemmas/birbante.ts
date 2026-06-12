// Il Paroliere — Lemma: BIRBANTE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const birbante: LemmaEntry = {
  lemma: "birbante",
  slug: "birbante",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Parola a doppia vita. Nell'uso originario — e ancora in certi contesti formali o letterari — " +
    "indicava un impostore di basso livello, un furfante senza grandezza né profondità morale. " +
    "Nell'uso contemporaneo, specie riferito a bambini o in tono scherzoso, " +
    "il giudizio si è quasi dissolto: rimane un monello vivace, dispettoso, ma in fondo simpatico. " +
    "È il lemma del cluster in cui la storia della lingua si vede meglio — " +
    "il progressivo ammorbidimento del giudizio morale nell'uso popolare.",
  shortDefinition:
    "Furfante di basso livello nell'uso tradizionale; monello vivace con sfumatura affettuosa nell'uso contemporaneo.",
  register: ["colloquiale", "ironico", "affettuoso"],
  domains: ["comportamento", "uso ironico", "letteratura popolare"],
  etymology:
    "Dall'antico italiano birba (accattonaggio, vagabondaggio), probabilmente da un termine " +
    "del gergo dei vagabondi medievali. Il suffisso -ante aggiunge valore agentivo e partecipiale. " +
    "La birba era originariamente chi chiedeva l'elemosina con astuzia fingendo miseria: " +
    "da lì il passaggio all'impostore di piccolo cabotaggio.",
  examples: [
    "«Birbante!» disse la nonna al nipote che aveva rubato un biscotto — e nella parola c'era più tenerezza che rimprovero.",
    "Nella commedia dell'arte il birbante è il servo astuto, non il criminale: fa ridere, non spaventa.",
    "Lo chiamavano il birbante del quartiere, quel modo di dire che in Italia vale quasi come un titolo.",
  ],
  synonyms: [
    { term: "monello", register: "colloquiale-affettuoso", context: "bambino vivace e dispettoso, senza connotazione morale negativa" },
    { term: "furfante", register: "comune", context: "con registro leggermente più negativo e letterario" },
    { term: "mascalzone", register: "colloquiale", context: "più pesante, meno ironico" },
    { term: "discolo", register: "comune-formale", context: "chi non vuole stare alle regole, specie in ambito scolastico" },
  ],
  antonyms: [
    { term: "onesto", register: "comune", context: "di condotta retta" },
    { term: "per bene", register: "colloquiale", context: "di comportamento corretto e rispettoso" },
  ],
  relatedWords: ["monello", "furfante", "mascalzone", "birba", "discolo", "dispettoso"],
  sourceLinks: {},
  paroliereNote:
    "Birbante è l'unico lemma del cluster che ha cambiato segno nel tempo senza perdere vitalità. " +
    "Gli altri sono rimasti stabili nella loro negatività — questo ha imparato a sorridere. " +
    "È una piccola storia di come la lingua tratta il male minore: lo addomestica, lo rende quasi amabile, " +
    "finché non lo riconosce più come tale.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "Birbante — Il Paroliere",
    description:
      "Definizione originale di 'birbante': furfante nell'uso tradizionale, monello vivace con sfumatura affettuosa nell'uso contemporaneo. Doppia vita semantica.",
  },
  createdAt: "2026-06-12",
  updatedAt: "2026-06-12",
};
