// Il Paroliere — Lemma: Gemini
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const gemini: LemmaEntry = {
  lemma: "Gemini",
  slug: "gemini",
  partOfSpeech: "sostantivo proprio",
  gender: "invariabile",
  register: ["tecnico-scientifico", "comune"],
  domains: ["astronomia", "intelligenza artificiale", "linguistica"],

  definition:
    "1. In astronomia, nome latino della costellazione zodiacale dei Gemelli, la cui figura " +
    "tradizionale rappresenta Castore e Polluce, i due fratelli che il mito greco chiama Dioscuri. " +
    "È la forma adottata nella nomenclatura internazionale delle costellazioni; in astrologia " +
    "designa anche il segno corrispondente, che in italiano si chiama comunemente Gemelli. " +
    "2. Nome proprio commerciale, spesso nella forma *Google Gemini*. Indica anzitutto la famiglia " +
    "di modelli di intelligenza artificiale sviluppata da Google DeepMind e presentata da Google il " +
    "6 dicembre 2023. Dall'8 febbraio 2024 designa anche l'assistente conversazionale che rende " +
    "accessibili questi modelli, fino ad allora chiamato Bard. In italiano Gemini non ha un uso " +
    "come nome comune: il corrispettivo lessicale resta *gemelli*.",

  shortDefinition:
    "Nome latino della costellazione dei Gemelli; anche nome dei modelli e dell'assistente di intelligenza artificiale di Google.",

  etymology:
    "Dal latino *geminī*, nominativo plurale di *geminus* «gemello, nato insieme», la stessa base " +
    "da cui provengono *gemello* e *geminare*. La pronuncia dipende dalla tradizione di lettura. " +
    "Latino classico ricostruito: la g è velare anche davanti a e e i, come in «gatto», e la i " +
    "finale è lunga, /ˈɡɛ.mɪ.niː/ («Ghèmini»). Lettura ecclesiastica di tradizione italiana: dopo " +
    "il passaggio tardolatino della velare all'affricata davanti a vocale palatale, la g è dolce, " +
    "come in «gelo», e le opposizioni di quantità non sono conservate, /ˈdʒɛ.mi.ni/ («Gèmini»), " +
    "foneticamente [ˈdʒɛː.mi.ni] per l'allungamento della vocale tonica in sillaba aperta. " +
    "Inglese: per il lemma l'[Oxford Advanced Learner's Dictionary](https://www.oxfordlearnersdictionaries.com/definition/english/gemini) " +
    "registra due pronunce, /ˈdʒemɪnaɪ/ («Gèminai») e /ˈdʒemɪni/, con i finale. Al marchio di " +
    "Google si associa comunemente la prima. In tutte e tre le tradizioni l'accento cade sulla " +
    "prima sillaba. Google ha spiegato di aver scelto il nome per il significato di «gemelli», " +
    "riferito all'unione dei gruppi Google Brain e DeepMind nell'aprile 2023, e in omaggio al " +
    "programma spaziale Gemini della NASA, che negli anni Sessanta fece da ponte tra le missioni " +
    "Mercury e Apollo.",

  examples: [
    "Nei cataloghi stellari la costellazione compare con il nome latino Gemini e con la sigla Gem.",
    "Castore e Polluce, le stelle più luminose di Gemini, portano i nomi dei gemelli del mito.",
    "Ho chiesto a Gemini di riassumere il verbale della riunione in cinque punti.",
    "Chi nel 2023 usava Bard ha ritrovato, dal febbraio 2024, lo stesso assistente con il nome Gemini.",
    "In riunione c'era chi diceva «Gèminai» e chi «Gèmini» e tutti sapevano di quale strumento si parlava.",
  ],

  synonyms: [
    {
      term: "Gemelli",
      register: "comune",
      context:
        "Nome italiano della costellazione e del segno zodiacale; vale soltanto per l'accezione astronomica, non per il nome del prodotto di Google.",
    },
  ],

  relatedWords: [
    "gemello",
    "costellazione",
    "zodiaco",
    "Dioscuri",
    "latinismo",
    "intelligenza artificiale",
    "LLM",
    "chatbot",
    "multimodale",
    "modello-linguistico",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/gemelli_%28Dizionario-delle-Scienze-Fisiche%29/",
  },

  paroliereNote:
    "Un marchio può scegliere un nome e diffonderne una pronuncia, ma non ne acquista la storia. " +
    "*Gemini* era latino, astronomia e lettura scolastica ed ecclesiastica italiana molto prima di " +
    "diventare un prodotto: «Gèminai» descrive come il nome circola in inglese e nella comunicazione " +
    "del marchio, «Gèmini» come molti italiani leggono il latino, «Ghèmini» come gli studiosi " +
    "ricostruiscono il suono della lingua di Roma. Le tre forme non si correggono a vicenda, perché " +
    "rispondono a domande diverse: come si chiama un servizio, come si legge il latino in Italia, " +
    "come suonava nell'età classica. Più che cercare la pronuncia giusta in assoluto, conviene sapere " +
    "quale tradizione si sta seguendo quando si pronuncia la parola. Una riflessione sulla scelta " +
    "della pronuncia nell'uso italiano, firmata dal curatore del Paroliere, si trova nell'articolo " +
    "[«Come si pronuncia Gemini? Il latino dietro la AI di Google»](https://fabri.news/come-si-pronuncia-gemini/) " +
    "su fabri.news.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Gemini — significato, origine latina e pronuncia",
    description:
      "Gemini: dal latino geminī, «gemelli». La costellazione, il nome dell'AI di Google e tre pronunce: latino classico, tradizione italiana, inglese.",
  },

  createdAt: "2026-11-08",
  updatedAt: "2026-11-14",
};
