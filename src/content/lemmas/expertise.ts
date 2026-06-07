// Il Paroliere — Lemma: EXPERTISE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const expertise: LemmaEntry = {
  lemma: "expertise",
  slug: "expertise",
  partOfSpeech: "sostantivo",
  gender: "invariabile",
  definition:
    "Termine anglosassone — accolto stabilmente nell'italiano tecnico e professionale senza traduzione — " +
    "che indica una competenza specialistica profonda, acquisita attraverso studio sistematico, " +
    "formazione strutturata e pratica prolungata in un dato dominio. " +
    "A differenza della generica competenza, l'expertise implica il riconoscimento settoriale: " +
    "credenziali formali (titoli, certificazioni, pubblicazioni peer-reviewed), oppure riconoscimento " +
    "informale da parte della comunità professionale di riferimento. " +
    "Nel framework E-E-A-T di Google, Expertise è il terzo elemento nella gerarchia operativa approvata — " +
    "Experience > Authoritativeness > Expertise > Trustworthiness — e risponde alla domanda: " +
    "«l'autore conosce l'argomento in modo approfondito e verificabile?». " +
    "La distinzione con Experience è fondamentale: si può avere esperienza diretta senza expertise formale, " +
    "e si può possedere expertise teorica senza esperienza vissuta; " +
    "il contenuto di massima qualità li combina entrambi.",
  shortDefinition:
    "Competenza specialistica profonda con riconoscimento settoriale. In E-E-A-T: terzo elemento (dopo Experience e Authoritativeness).",
  register: ["tecnico", "professionale", "tecnico-SEO"],
  domains: ["linguistica applicata", "SEO", "management"],
  etymology:
    "Dal francese expertise, derivato nominale di expert («esperto»), " +
    "a sua volta dal latino expertus (participio di experiri, «mettere alla prova»). " +
    "In italiano usato senza traduzione nelle accezioni tecniche, soprattutto nei settori " +
    "del management, della consulenza e del marketing digitale. " +
    "Il corrispondente italiano più vicino è perizia o competenza specialistica, " +
    "ma nessuno cattura la sfumatura di riconoscimento esterno insita nel termine originale.",
  examples: [
    "Il consulente vantava un'expertise decennale in finanza comportamentale, " +
      "supportata da pubblicazioni accademiche e da un master a Chicago.",
    "Nell'ottica E-E-A-T, l'expertise di un chirurgo ortopedico che scrive di ginocchio " +
      "è dimostrata dal suo titolo e dai protocolli clinici che cita, non solo dall'esperienza operatoria.",
    "Nel colloquio di selezione, i recruiter cercano expertise documentabile: " +
      "non basta dire di saper fare, bisogna mostrare dove, quando e con quali risultati.",
  ],
  synonyms: [
    { term: "competenza", register: "standard", context: "termine italiano più diretto" },
    { term: "specializzazione", register: "standard", context: "enfasi sul dominio ristretto" },
    { term: "perizia", register: "formale", context: "uso giuridico e tecnico" },
    { term: "know-how", register: "professionale", context: "anglicismo concorrente, più pratico" },
  ],
  antonyms: [
    { term: "incompetenza", register: "standard", context: "assenza di competenza" },
    { term: "dilettantismo", register: "standard", context: "pratica senza metodo né formazione" },
    { term: "pressapochismo", register: "colloquiale", context: "scarsa cura nella qualità" },
  ],
  relatedWords: ["e-e-a-t", "esperienza", "autorevolezza", "affidabilita", "seo"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/expertise",
  },
  paroliereNote:
    "Il termine è accolto nei dizionari italiani come prestito adattato, " +
    "ma resiste senza italianizzazione nell'uso corrente — spia dell'assenza di un equivalente " +
    "pienamente sovrapponibile. " +
    "Nella gerarchia operativa approvata da Pistakkio per E-E-A-T, " +
    "l'expertise occupa il terzo posto: Experience > Authoritativeness > Expertise > Trustworthiness. " +
    "Questo ordine riflette la catena causale: l'esperienza genera la competenza, " +
    "ma la competenza da sola non basta — deve essere riconosciuta (autorevolezza) prima di essere " +
    "considerata affidabile. Vedere anche la scheda hub → e-e-a-t.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "EXPERTISE — definizione | Il Paroliere",
    description:
      "Definizione di expertise in italiano: competenza specialistica profonda con riconoscimento settoriale. " +
      "Terzo elemento del framework E-E-A-T di Google.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
