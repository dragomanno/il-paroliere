// Il Paroliere — Lemma: CESSIONE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const cessione: LemmaEntry = {
  lemma: "cessione",
  slug: "cessione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Atto giuridico con cui un soggetto — detto cedente — trasferisce a un altro soggetto — " +
    "detto cessionario — un diritto, un credito, una quota di partecipazione societaria o un bene. " +
    "La cessione può avere ad oggetto l'intero contratto (cessione del contratto, art. 1406 c.c.), " +
    "un singolo credito (cessione del credito, art. 1260 c.c.) oppure un'azienda nella sua interezza " +
    "come complesso produttivo organizzato (cessione d'azienda, art. 2555 c.c.). " +
    "Nella cessione del contratto, il cedente si spoglia delle proprie posizioni sia attive " +
    "sia passive, con effetti verso il contraente ceduto solo se questi vi presta il proprio consenso. " +
    "Nella cessione del credito, il debitore ceduto non deve necessariamente acconsentire, " +
    "ma deve essere notificato o accettare perché la cessione sia a lui opponibile. " +
    "La cessione d'azienda trasferisce l'avviamento e produce effetti lavoristici per i dipendenti " +
    "ai sensi dell'art. 47 della legge 428/1990.",
  shortDefinition:
    "Trasferimento di un diritto, credito o bene dal cedente al cessionario. Include cessione del contratto, del credito e d'azienda.",
  register: ["tecnico-giuridico", "formale"],
  domains: ["diritto", "economia"],
  etymology:
    "Dal latino cessio, -onis, derivato di cedere («andarsene, lasciare il posto, trasferire»). " +
    "In diritto romano il termine indicava la rinuncia formale a un diritto davanti al magistrato. " +
    "Il participio passato cesso (da cedere) condivide la stessa radice.",
  examples: [
    "Il costruttore ha firmato la cessione del contratto di compravendita al proprio fratello " +
      "prima della fine dei lavori, con il consenso scritto del venditore.",
    "La banca ha effettuato una cessione del credito in blocco a una società di cartolarizzazione, " +
      "notificando ai debitori l'avvenuto trasferimento entro i termini di legge.",
    "L'accordo prevedeva la cessione d'azienda con il passaggio automatico di tutti i dipendenti " +
      "al cessionario, nel rispetto delle tutele previste dall'articolo 47.",
  ],
  synonyms: [
    { term: "trasferimento", register: "standard", context: "termine più generico, anche non giuridico" },
    { term: "alienazione", register: "tecnico-giuridico", context: "enfasi sulla dismissione definitiva" },
    { term: "voltura", register: "tecnico", context: "uso catastale e fiscale" },
  ],
  antonyms: [
    { term: "acquisizione", register: "standard", context: "ricezione di un diritto o bene" },
    { term: "conservazione", register: "standard", context: "mantenimento della titolarità" },
    { term: "mantenimento", register: "standard", context: "mancata dismissione" },
  ],
  relatedWords: ["contratto", "proprieta", "diritto", "appalto", "normativa"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/cessione",
    wiktionary: "https://it.wiktionary.org/wiki/cessione",
  },
  paroliereNote:
    "La voce distingue tre sottotipi di cessione con diverse discipline codicistiche: " +
    "cessione del contratto (richiede il consenso del contraente ceduto), " +
    "cessione del credito (opponibile al debitore anche senza consenso, purché notificata), " +
    "cessione d'azienda (con effetti automatici sul rapporto di lavoro). " +
    "La distinzione è rilevante per la redazione di clausole contrattuali e per la due diligence.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "CESSIONE — definizione | Il Paroliere",
    description:
      "Definizione giuridica di cessione: trasferimento di diritto, credito o azienda dal cedente al cessionario. " +
      "Art. 1406, 1260, 2555 c.c.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
