// Il Paroliere — Lemma: CONTRATTO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const contratto: LemmaEntry = {
  lemma: "contratto",
  slug: "contratto",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "Accordo tra due o più parti che produce effetti giuridicamente vincolanti: " +
    "crea, modifica o estingue un rapporto giuridico patrimoniale. " +
    "L'art. 1321 del Codice civile italiano lo definisce come «l'accordo di due o più parti " +
    "per costituire, regolare o estinguere tra loro un rapporto giuridico patrimoniale». " +
    "Gli elementi essenziali sono quattro: l'accordo (incontro di volontà libere e informate), " +
    "la causa (la funzione economico-sociale che il contratto persegue), " +
    "l'oggetto (la prestazione dedotta in contratto, che deve essere possibile, lecita, " +
    "determinata o determinabile) e la forma (richiesta dalla legge solo in specifici casi, " +
    "come la forma scritta per i contratti immobiliari). " +
    "Il contratto si distingue dall'atto unilaterale per la necessità di due volontà convergenti " +
    "e dal mero accordo morale per la sua efficacia obbligatoria e coercibile. " +
    "Le tipologie principali includono contratti tipici (disciplinati dal codice: " +
    "vendita, locazione, appalto, mandato) e contratti atipici, ammessi purché meritevoli di tutela " +
    "secondo l'art. 1322 c.c.",
  shortDefinition:
    "Accordo vincolante tra due o più parti (art. 1321 c.c.). Elementi essenziali: accordo, causa, oggetto, forma (se richiesta).",
  register: ["tecnico-giuridico", "standard"],
  domains: ["diritto", "economia"],
  etymology:
    "Dal latino contractus, derivato di contrahere («stringere insieme, concludere»), " +
    "composto di con- («insieme») e trahere («tirare, condurre»). " +
    "Il senso originario è quello di un legame reciproco che vincola le parti.",
  examples: [
    "Le parti hanno firmato un contratto preliminare di compravendita immobiliare, " +
      "impegnandosi a stipulare il rogito definitivo entro sei mesi.",
    "Il contratto di lavoro a tempo indeterminato è stato convertito dopo diciotto mesi " +
      "di rapporto continuativo, in applicazione della normativa vigente.",
    "L'avvocato ha evidenziato un vizio dell'oggetto: la prestazione dedotta in contratto " +
      "era originariamente impossibile, rendendo il contratto nullo ab initio.",
  ],
  synonyms: [
    { term: "accordo", register: "standard", context: "termine più generale, anche non giuridico" },
    { term: "patto", register: "standard", context: "enfasi sull'impegno reciproco" },
    { term: "convenzione", register: "formale", context: "uso in diritto internazionale e pubblico" },
    { term: "intesa", register: "standard", context: "uso comune e commerciale" },
  ],
  antonyms: [
    { term: "nullità", register: "tecnico-giuridico", context: "invalidità originaria del contratto" },
    { term: "rescissione", register: "tecnico-giuridico", context: "scioglimento per squilibrio originario" },
    { term: "vizio", register: "tecnico-giuridico", context: "difetto che incide sulla validità" },
  ],
  relatedWords: ["cessione", "appalto", "norma", "diritto", "proprieta", "frode"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/contratto",
    wiktionary: "https://it.wiktionary.org/wiki/contratto",
  },
  paroliereNote:
    "La definizione adotta la struttura degli elementi essenziali del contratto " +
    "così come codificata agli artt. 1321-1469 del Codice civile. " +
    "Attenzione alla distinzione tra nullità (vizio originario insanabile), " +
    "annullabilità (vizio sanabile o eccepibile dalla parte protetta) " +
    "e rescissione (rimedio per sproporzione originaria delle prestazioni): " +
    "tre categorie spesso confuse nel linguaggio comune.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "CONTRATTO — definizione | Il Paroliere",
    description:
      "Definizione giuridica di contratto secondo l'art. 1321 c.c.: accordo tra parti con effetti vincolanti. " +
      "Elementi essenziali, tipologie, differenze.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
