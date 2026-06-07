// Il Paroliere — Lemma: PORTABORSE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const portaborse: LemmaEntry = {
  lemma: "portaborse",
  slug: "portaborse",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  definition:
    "In senso letterale: chi porta la borsa o i bagagli di una persona di riguardo, " +
    "svolgendo funzioni di assistente personale. " +
    "In accezione politica e giornalistica, con valenza spregiativa: collaboratore " +
    "subalterno di un politico o di una figura di potere, che esegue compiti di " +
    "ordine e rappresentanza senza autonomia intellettuale o decisionale, ottenendo " +
    "in cambio protezione, risorse o carriera. " +
    "Per estensione: chiunque assecondi acriticamente il proprio superiore al solo " +
    "scopo di trarne vantaggio personale, rinunciando a qualsiasi giudizio autonomo.",
  shortDefinition: "Collaboratore subalterno di un politico senza autonomia; per estensione: chi asseconda il potere acriticamente per tornaconto.",
  register: ["colloquiale", "spregiativo", "giornalistico"],
  domains: ["politica", "uso colloquiale spregiativo"],
  etymology:
    "Composto di *porta-* (da *portare*, dal latino *portare*) e *borse* " +
    "(plurale di *borsa*, dal latino medievale *bursa*, borsello). " +
    "Il termine nasce come denominazione neutra di una funzione di servizio " +
    "(il servo che trasportava i bagagli) e acquista connotazione spregiativa " +
    "nell'uso politico-giornalistico italiano del XX secolo.",
  examples: [
    "Il film di Silvio Soldini «Pane e tulipani» (1999) usa ironicamente l'immagine " +
    "del portaborse per descrivere un personaggio che vive all'ombra di altri.",
    "I cronisti parlamentari definivano portaborse quei giovani collaboratori " +
    "degli anni '80 che gravitavano intorno ai potenti senza un ruolo definito.",
    "«Non voglio fare il portaborse di nessuno», dichiarò il consigliere " +
    "alle dimissioni, rivendicando la propria indipendenza.",
  ],
  synonyms: [
    { term: "galoppino", register: "colloquiale", context: "chi svolge commissioni per conto di un politico" },
    { term: "factotum", register: "neutro", context: "chi fa tutto per qualcuno, senza connotazione negativa" },
    { term: "lacchè", register: "spregiativo", context: "chi serve servilmente il potere" },
  ],
  antonyms: [
    { term: "consigliere", register: "formale", context: "collaboratore con funzione autonoma e consultiva" },
    { term: "tecnico indipendente", register: "formale", context: "esperto che opera senza dipendenza politica" },
  ],
  relatedWords: ["politica", "potere", "trasformismo", "autorita", "servile"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/portaborse",
    treccani: "https://www.treccani.it/vocabolario/portaborse/",
  },
  paroliereNote:
    "Il termine ha valore lessicale e culturale autentico: designa un fenomeno " +
    "strutturale della politica italiana, la rete di collaboratori informali che " +
    "circondano i politici di lungo corso. " +
    "Il film «Il portaborse» (1991) di Daniele Luchetti, con Nanni Moretti e " +
    "Silvio Orlando, ha consacrato il termine nel lessico culturale italiano, " +
    "rappresentando con precisione sociologica le dinamiche di sudditanza e " +
    "corruzione nel ceto politico della Prima Repubblica.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "PORTABORSE — definizione | Il Paroliere",
    description:
      "Definizione di portaborse: collaboratore subalterno di un politico, senza autonomia, " +
      "in senso spregiativo. Etimologia, uso culturale ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
