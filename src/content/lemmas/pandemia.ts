// Il Paroliere — Lemma: PANDEMIA
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const pandemia: LemmaEntry = {
  lemma: "pandemia",
  slug: "pandemia",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  definition:
    "Epidemia che si estende su scala mondiale o a un'area geografica vastissima, " +
    "coinvolgendo contemporaneamente più nazioni e continenti. " +
    "L'Organizzazione Mondiale della Sanità (OMS) dichiara una pandemia quando una nuova " +
    "malattia si diffonde in modo sostenuto tra le persone in più paesi di regioni diverse. " +
    "La pandemia di COVID-19, dichiarata dall'OMS l'11 marzo 2020, è l'evento pandemico " +
    "più recente e globalmente impattante. Storicamente: influenza spagnola (1918-1920), " +
    "colera (XIX secolo), peste nera (XIV secolo).",
  shortDefinition: "Epidemia su scala mondiale che coinvolge più nazioni contemporaneamente; definita dall'OMS su criteri epidemiologici.",
  register: ["tecnico-scientifico", "formale", "giornalistico"],
  domains: ["epidemiologia", "storia", "politica"],
  etymology:
    "Dal greco *pandēmía* (tutto il popolo), composto di *pan-* (tutto) e *dêmos* (popolo). " +
    "Il termine si afferma in italiano nel lessico medico-scientifico nel XIX secolo, " +
    "diffondendosi nel linguaggio comune con le grandi epidemie del XX e XXI secolo.",
  examples: [
    "La pandemia di COVID-19 ha costretto quasi tutti i governi mondiali a dichiarare " +
    "lo stato di emergenza e a introdurre misure di lockdown.",
    "L'OMS ha dichiarato la fine dello stato di emergenza per COVID-19 nel maggio 2023, " +
    "pur continuando la sorveglianza della malattia.",
    "La storia insegna che le pandemie non sono solo crisi sanitarie, ma eventi che " +
    "trasformano strutture politiche, economiche e sociali.",
  ],
  synonyms: [
    { term: "epidemia globale", register: "divulgativo", context: "locuzione descrittiva, non termine tecnico" },
    { term: "contagio mondiale", register: "giornalistico", context: "uso metaforico-amplificativo" },
  ],
  antonyms: [
    { term: "endemia", register: "tecnico-scientifico", context: "presenza stabile e localizzata di una malattia" },
    { term: "eradicazione", register: "tecnico-scientifico", context: "eliminazione definitiva di un agente patogeno" },
  ],
  relatedWords: ["epidemia", "salute", "norma", "stato", "autorita", "emergenza"],
  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/pandemia",
    treccani: "https://www.treccani.it/vocabolario/pandemia/",
  },
  paroliereNote:
    "La distinzione tra epidemia e pandemia è di scala geografica, non di gravità clinica: " +
    "una pandemia può causare meno morti di un'epidemia localizzata particolarmente letale. " +
    "La dichiarazione di pandemia ha conseguenze politiche e giuridiche rilevanti: " +
    "attiva protocolli internazionali, sblocca fondi di emergenza, legittima misure " +
    "restrittive dei diritti fondamentali. Per questo il termine non è neutro ed è " +
    "oggetto di dibattito politico oltre che scientifico.",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "PANDEMIA — definizione | Il Paroliere",
    description:
      "Definizione di pandemia: epidemia su scala mondiale, dichiarata dall'OMS. " +
      "COVID-19, storia, distinzione da epidemia. Etimologia ed esempi.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
