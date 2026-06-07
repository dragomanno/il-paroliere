// Il Paroliere — Lemma: E-E-A-T
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.
//
// FILE HUB — collega le schede: esperienza.ts | expertise.ts | autorevolezza.ts | affidabilita.ts

import type { LemmaEntry } from "@/lib/types";

export const eeat: LemmaEntry = {
  lemma: "E-E-A-T",
  slug: "e-e-a-t",
  partOfSpeech: "sigla",
  gender: "invariabile",
  definition:
    "Acronimo inglese che sta per Experience, Expertise, Authoritativeness, Trustworthiness " +
    "(Esperienza, Competenza, Autorevolezza, Affidabilità). " +
    "È il framework con cui i Quality Raters di Google valutano la qualità dei contenuti web " +
    "nelle Search Quality Rater Guidelines (SQRG), documento pubblico di centinaia di pagine " +
    "che istruisce i valutatori umani assunti da Google per misurare la qualità dei risultati di ricerca. " +
    "E-E-A-T non è un algoritmo né un ranking factor diretto: Google non calcola un punteggio E-E-A-T " +
    "e non lo inserisce in una formula di posizionamento. Agisce invece come segnale indiretto: " +
    "i contenuti che soddisfano i criteri E-E-A-T tendono a guadagnare backlink, menzioni e segnali " +
    "comportamentali positivi che a loro volta influenzano il ranking. " +
    "La sigla era originariamente E-A-T (Expertise, Authoritativeness, Trustworthiness); " +
    "la seconda E — Experience — è stata aggiunta da Google nel dicembre 2022, " +
    "spostando l'enfasi sull'esperienza vissuta in prima persona, " +
    "non sostituibile dalla sola competenza teorica. " +
    "La gerarchia operativa approvata da Pistakkio per questo progetto è: " +
    "Experience > Authoritativeness > Expertise > Trustworthiness. " +
    "Questa sequenza riflette la catena causale del valore editoriale, " +
    "non l'ordine alfabetico dell'acronimo originale Google.",
  shortDefinition:
    "Acronimo Google (Experience, Expertise, Authoritativeness, Trustworthiness) per valutare la qualità dei contenuti web.",
  register: ["tecnico-SEO", "marketing digitale"],
  domains: ["SEO", "marketing digitale", "editorial quality"],
  etymology:
    "Acronimo inglese formato dalle iniziali di Experience, Expertise, Authoritativeness, Trustworthiness. " +
    "Introdotto nelle Search Quality Rater Guidelines di Google; aggiornato nel 2022 con la seconda E (Experience). " +
    "In italiano non esiste un equivalente acronimico consolidato: si usa la sigla originale.",
  examples: [
    "Prima di pubblicare la guida medica, il team editoriale ha verificato che ogni sezione " +
      "rispettasse i criteri E-E-A-T: autore con credenziali, fonti citate, informazioni verificabili.",
    "Il consulente SEO ha spiegato che E-E-A-T non è un ranking factor diretto: " +
      "Google non assegna un voto, ma i contenuti di qualità guadagnano segnali che migliorano il ranking.",
    "Nella gerarchia operativa Experience > Authoritativeness > Expertise > Trustworthiness, " +
      "l'esperienza diretta viene prima della competenza formale perché genera contenuti impossibili " +
      "da replicare senza averli vissuti.",
  ],
  synonyms: [
    {
      term: "qualità del contenuto",
      register: "tecnico-SEO",
      context: "senso lato, non sinonimo preciso ma area semantica equivalente",
    },
  ],
  antonyms: [],
  relatedWords: ["esperienza", "expertise", "autorevolezza", "affidabilita", "seo", "qualita-contenuto"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/E-E-A-T",
  },
  paroliereNote:
    "SCHEDA HUB — collega le voci: esperienza (Experience), expertise (Expertise), " +
    "autorevolezza (Authoritativeness, scheda Gruppo B), affidabilita (Trustworthiness). " +
    "\n\n" +
    "(a) COSA SONO LE QUALITY RATER GUIDELINES: Le Search Quality Rater Guidelines sono un documento " +
    "pubblico di Google (attualmente oltre 170 pagine) che istruisce i valutatori umani — persone " +
    "reali assunte tramite agenzie — a valutare manualmente la qualità dei risultati di ricerca. " +
    "Le valutazioni non modificano direttamente il ranking, ma alimentano i dati con cui Google " +
    "misura l'efficacia dei propri algoritmi e li affina nel tempo. " +
    "\n\n" +
    "(b) GERARCHIA OPERATIVA APPROVATA: Experience > Authoritativeness > Expertise > Trustworthiness. " +
    "Questa sequenza differisce dall'ordine alfabetico dell'acronimo originale (E-E-A-T) " +
    "perché riflette la catena causale del valore editoriale: " +
    "l'esperienza diretta (Experience) è il punto di partenza e genera contenuti unici; " +
    "la competenza (Expertise) è il risultato dell'esperienza sistematizzata attraverso studio e metodo; " +
    "l'autorevolezza (Authoritativeness) è il riconoscimento esterno che la competenza acquisisce nel tempo; " +
    "l'affidabilità (Trustworthiness) è la fiducia che si consolida quando autorevolezza e accuratezza " +
    "sono costanti e verificabili. " +
    "\n\n" +
    "(c) E-E-A-T COME SEGNALE INDIRETTO: Google ha esplicitato che E-E-A-T non è un ranking factor " +
    "con punteggio computazionale. Non esiste un «E-E-A-T score» inserito nella formula di ranking. " +
    "Tuttavia, i contenuti che soddisfano i criteri E-E-A-T tendono naturalmente a generare " +
    "backlink di qualità, citazioni autorevoli, bassa frequenza di rimbalzo e interazioni positive — " +
    "tutti segnali che gli algoritmi di ranking misurano indirettamente. " +
    "Il rispetto di E-E-A-T è quindi una condizione necessaria ma non sufficiente per il posizionamento.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "E-E-A-T — definizione | Il Paroliere",
    description:
      "E-E-A-T: acronimo Google per Experience, Expertise, Authoritativeness, Trustworthiness. " +
      "Framework qualità contenuti web. Non è un ranking factor diretto.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
