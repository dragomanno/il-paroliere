// Il Paroliere — Lemma: incorruttibilità
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const incorruttibilita: LemmaEntry = {
  lemma: "incorruttibilità",
  slug: "incorruttibilita",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["formale", "saggistico", "comune"],
  domains: ["etica", "diritto", "politica", "teologia"],

  definition:
    "Qualità di chi non può essere corrotto — né convinto ad agire contro i propri " +
    "principi in cambio di denaro, favori, posizione o pressione. L’incorruttibilità " +
    "implica una resistenza attiva, non solo l’assenza di occasioni: il corruttibile " +
    "che non è stato ancora corrotto non è incorruttibile. In teologia indica " +
    "l’attributo divino o dell’anima che non è soggetta alla degradazione fisica e " +
    "morale; in politica è diventata quasi una qualità mitica, evocata con nostalgia.",

  shortDefinition:
    "Resistenza assoluta alla corruzione morale o materiale; qualità di chi non cede " +
    "a pressioni, favori o compromessi contro i propri principi.",

  etymology:
    "Dal latino incorruptibilitas, da incorruptus «non corrotto», composto da in- " +
    "privativo e corrumpere «rompere, guastare, corrompere». La corruzione è " +
    "letteralmente una «rottura» — l’incorruttibile è chi non si lascia rompere.",

  examples: [
    "Robespierre fu chiamato “l’Incorruttibile” — e la storia ha mostrato che la certezza di essere incorruttibili può essere una forma di corruzione più pericolosa del denaro.",
    "L’incorruttibilità di un giudice non si misura solo nelle sentenze, ma nel modo in cui gestisce le relazioni con chi ha interesse nei procedimenti che tratta.",
    "In certe culture amministrative, l’incorruttibilità è percepita come ingenuità o come mancanza di senso pratico: un segnale di quanto il sistema si sia adattato alla corruzione.",
    "La teologia cristiana attribuisce l’incorruttibilità al corpo glorioso dei santi: una promessa di completezza che il corpo mortale non può mantenere.",
  ],

  synonyms: [
    { term: "integrità", register: "etico-comune", note: "Più ampio: include coerenza tra valori e azioni, non solo resistenza alla corruzione." },
    { term: "impermeabilità morale", register: "saggistico", note: "Metafora che sottolinea la resistenza attiva alle pressioni esterne." },
  ],

  antonyms: [
    { term: "corruttibilità", register: "etico-giuridico", note: "La disponibilità, anche solo potenziale, a essere convinti ad agire contro i propri principi." },
    { term: "venalità", register: "comune-formale", note: "La tendenza a mettere a disposizione la propria posizione in cambio di denaro." },
  ],

  relatedWords: ["integrita", "correttezza", "onore", "malafede", "ipocrisia", "opportunismo"],
  sourceLinks: {},

  paroliereNote:
    "L’incorruttibilità è una virtù pericolosa da rivendicare in prima persona. Chi si " +
    "definisce incorruttibile sta per lo più dicendo una cosa su di sé che solo gli " +
    "altri possono verificare — e che spesso si rivela una dichiarazione di guerra " +
    "mascherata da principio. I personaggi storici davvero incorruttibili raramente lo " +
    "annunciavano: lo mostravano nei momenti in cui la corruzione era la scelta più " +
    "comoda. Quelli che lo proclamavano, invece, spesso usavano la propria virtù " +
    "dichiarata come moneta di scambio di altro tipo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "incorruttibilità — virtù assoluta o mito politico?",
    description: "Che cos’è l’incorruttibilità: definizione etica, politica e teologica, con la differenza tra resistenza reale alla corruzione e sua rivendicazione performativa.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
