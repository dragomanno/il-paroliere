// Il Paroliere — Lemma: suscettibile
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const suscettibile: LemmaEntry = {
  lemma: "suscettibile",
  slug: "suscettibile",
  partOfSpeech: "aggettivo",

  definition:
    "Nel senso comune, chi si offende o si turba facilmente, reagendo con " +
    "intensità sproporzionata a critiche, commenti o situazioni che altri " +
    "percepirebbero come neutre. " +
    "Nel senso tecnico e formale — specialmente in contesti scientifici, giuridici " +
    "e burocratici — indica invece qualcosa che è in grado di ricevere una " +
    "determinata qualità, azione o trasformazione: un materiale suscettibile di " +
    "ossidazione, una norma suscettibile di interpretazione, un progetto suscettibile " +
    "di modifica. In questo secondo uso, la parola è priva di connotazione negativa " +
    "e significa semplicemente 'passibile di', 'capace di'.",

  shortDefinition:
    "Chi si offende facilmente; oppure, in senso tecnico, ciò che è passibile di qualcosa.",

  register: ["comune", "formale", "tecnico"],
  domains: ["psicologia", "diritto", "linguaggio formale", "scienze"],

  etymology:
    "Dal latino tardo susceptibilis, derivato di suscipere, 'ricevere, prendere su di sé' " +
    "(composto di sub- e capere). Il significato originario latino era puramente " +
    "passivo-ricettivo: 'capace di ricevere'. L'accezione emotiva — chi si offende " +
    "facilmente — è uno sviluppo successivo, affermatosi nell'italiano moderno.",

  examples: [
    "È così suscettibile che qualsiasi osservazione, anche costruttiva, " +
    "viene vissuta come un attacco personale.",
    "Il contratto contiene clausole suscettibili di diverse interpretazioni, " +
    "il che lo rende fragile in caso di contenzioso.",
    "Una superficie suscettibile di corrosione richiede trattamenti protettivi " +
    "specifici prima dell'esposizione all'ambiente.",
    "Essere suscettibili non significa necessariamente avere torto: " +
    "a volte si percepisce realmente qualcosa che gli altri preferiscono non vedere.",
  ],

  synonyms: [
    {
      term: "permaloso",
      register: "colloquiale",
      context:
        "equivalente nell'accezione emotiva, più marcato e informale; " +
        "implica una certa abitudine a offendersi",
    },
    {
      term: "irascibile",
      register: "comune",
      context: "con maggiore enfasi sulla reazione d'ira che sull'offesa",
    },
    {
      term: "passibile",
      register: "formale",
      context:
        "equivalente nell'accezione tecnica: 'passibile di modifica', " +
        "'passibile di sanzione'",
    },
    {
      term: "sensibile",
      register: "comune",
      context:
        "più neutro e ampio: può indicare sia ipersensibilità emotiva " +
        "sia capacità di percepire sfumature",
    },
  ],

  antonyms: [
    {
      term: "imperturbabile",
      register: "formale",
      context: "chi non si lascia turbare dalle circostanze esterne",
    },
    {
      term: "coriaceo",
      register: "colloquiale",
      context: "duro, insensibile alle critiche o alle pressioni",
    },
    {
      term: "insensibile",
      register: "comune",
      context: "con sfumatura negativa: mancanza di reattività emotiva",
    },
  ],

  relatedWords: [
    "suscettibilità",
    "permalosità",
    "ipersensibilità",
    "sensibilità",
    "reattività",
    "passibile",
    "vulnerabilità",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/suscettibile/",
    wiktionary: "https://it.wiktionary.org/wiki/suscettibile",
  },

  paroliereNote:
    "Suscettibile è una di quelle parole che vivono una doppia vita quasi senza " +
    "accorgersene. In un documento legale o scientifico vale 'capace di ricevere': " +
    "neutro, tecnico, preciso. Nella conversazione quotidiana vale invece " +
    "'che si offende facilmente': una valutazione del carattere, spesso negativa. " +
    "Il rischio è usarle intercambiabilmente e creare ambiguità — o, peggio, " +
    "scivolare nel registro sbagliato. Un buon redattore giuridico non scrive mai " +
    "che il proprio cliente 'è suscettibile' senza specificare di che cosa.",

  editorialStatus: "reviewed",
  indexable: false,

  seo: {
    title: "Suscettibile — Il Paroliere",
    description:
      "Definizione originale di 'suscettibile': chi si offende facilmente, " +
      "oppure ciò che è passibile di qualcosa. Con etimologia, esempi e nota editoriale.",
  },

  createdAt: "2026-05-19",
  updatedAt: "2026-05-19",
};
