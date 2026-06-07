// Il Paroliere — Lemma: EVASIONE
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const evasione: LemmaEntry = {
  lemma: "evasione",
  slug: "evasione",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "In senso fiscale — accezione prevalente nel diritto tributario italiano — " +
    "indica la sottrazione illecita e intenzionale all'obbligo di pagare le imposte dovute allo Stato " +
    "o a altri enti impositori. " +
    "L'evasione fiscale si realizza attraverso comportamenti fraudolenti o simulatori: " +
    "occultamento totale o parziale di redditi imponibili, " +
    "dichiarazioni false o infedeli dei ricavi, " +
    "emissione o utilizzo di fatture per operazioni inesistenti, " +
    "interposizione fittizia di soggetti o schemi societari opachi. " +
    "È disciplinata principalmente dal D.Lgs. 74/2000, che distingue le fattispecie penali " +
    "(dichiarazione fraudolenta, omessa dichiarazione, occultamento di documenti) " +
    "dalle violazioni amministrativo-tributarie. " +
    "Si distingue dall'elusione fiscale, che consiste nello sfruttamento lecito di lacune normative " +
    "per ridurre il carico fiscale senza violare formalmente la legge, " +
    "e dall'evasione nell'accezione letterale — fuga da un luogo di detenzione — " +
    "che condivide solo l'etimologia. " +
    "Il danno economico dell'evasione fiscale è duplice: " +
    "riduce le risorse disponibili per i servizi pubblici " +
    "e distorce la concorrenza tra operatori che rispettano gli obblighi fiscali " +
    "e chi li elude.",
  shortDefinition:
    "Sottrazione illecita al pagamento delle imposte tramite occultamento di redditi o documenti falsi. In senso letterale: fuga da detenzione.",
  register: ["tecnico-giuridico", "standard"],
  domains: ["diritto tributario", "economia"],
  etymology:
    "Dal latino evasio, -onis, derivato di evadere («uscire fuori, sfuggire»), " +
    "composto di ex- («fuori») e vadere («andare»). " +
    "Il senso originario di fuga o sottrazione si è specializzato in italiano " +
    "nell'accezione fiscale, divenuta predominante nel linguaggio corrente e giuridico.",
  examples: [
    "L'Agenzia delle Entrate ha stimato il tax gap — la differenza tra imposte dovute e " +
      "imposte effettivamente riscosse — in decine di miliardi di euro annui, " +
      "riconducibili principalmente all'evasione fiscale nel lavoro sommerso.",
    "Il titolare del ristorante è stato condannato per dichiarazione infedele: " +
      "aveva omesso di dichiarare ricavi per quattrocentomila euro in tre anni consecutivi.",
    "A differenza dell'evasione, l'elusione fiscale non viola formalmente la legge, " +
      "ma ne aggira lo spirito attraverso strutture contrattuali artificiali, " +
      "soggette a specifica normativa antielusiva.",
  ],
  synonyms: [
    {
      term: "evasione fiscale",
      register: "standard",
      context: "locuzione completa che specifica l'accezione tributaria",
    },
    {
      term: "frode fiscale",
      register: "tecnico-giuridico",
      context: "quando l'evasione avviene con mezzi fraudolenti",
    },
  ],
  antonyms: [
    {
      term: "adempimento",
      register: "tecnico-giuridico",
      context: "esecuzione corretta degli obblighi tributari",
    },
    {
      term: "compliance fiscale",
      register: "professionale",
      context: "conformità volontaria agli obblighi fiscali",
    },
  ],
  relatedWords: ["frode", "norma", "diritto", "proprieta", "reato", "normativa"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/evasione",
    wiktionary: "https://it.wiktionary.org/wiki/evasione",
  },
  paroliereNote:
    "La voce gestisce deliberatamente la polisemia: evasione fiscale (accezione dominante " +
    "nel diritto tributario) ed evasione come fuga fisica (accezione letterale). " +
    "La distinzione tra evasione ed elusione è redazionalmente importante: " +
    "nel linguaggio comune i termini sono spesso confusi, " +
    "ma hanno conseguenze giuridiche radicalmente diverse — penali nel primo caso, " +
    "amministrative nel secondo. " +
    "Il D.Lgs. 74/2000 costituisce il riferimento normativo principale " +
    "per le fattispecie penali tributarie in Italia.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "EVASIONE — definizione | Il Paroliere",
    description:
      "Definizione di evasione fiscale: sottrazione illecita al pagamento delle imposte (D.Lgs. 74/2000). " +
      "Differenza tra evasione ed elusione fiscale.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
