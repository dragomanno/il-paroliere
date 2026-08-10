// Il Paroliere — Lemma: transitorietà
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const transitorieta: LemmaEntry = {
  lemma: "transitorietà",
  slug: "transitorieta",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["formale", "filosofico"],
  domains: ["filosofia", "psicologia", "letteratura"],

  definition:
    "Qualità di ciò che è per natura destinato a passare, a non durare, a " +
    "cedere il posto a uno stato successivo — condizione strutturale, non " +
    "accidentale, di fenomeni, situazioni o istituzioni che esistono solo per " +
    "un periodo limitato prima di trasformarsi o dissolversi. A differenza " +
    "dell'→ effimero, che indica genericamente ciò che dura poco e spesso " +
    "porta con sé un giudizio estetico o valoriale (la bellezza effimera, il " +
    "successo effimero), la transitorietà è una categoria più neutra e " +
    "strutturale: descrive una fase di passaggio riconoscibile come tale, " +
    "spesso con un prima e un dopo ben definiti — una norma transitoria resta " +
    "in vigore fino all'entrata in vigore di quella definitiva, una fase " +
    "storica transitoria collega esplicitamente un ordine che finisce e uno " +
    "che deve ancora consolidarsi. Nella riflessione filosofica sulla natura " +
    "del tempo e del divenire, la transitorietà è discussa come condizione " +
    "universale di ogni cosa esistente — dalle tradizioni buddhiste " +
    "sull'impermanenza (anicca) alla dialettica occidentale del divenire.",

  shortDefinition:
    "Qualità strutturale di ciò che è destinato a passare e a cedere il " +
    "posto a uno stato successivo, distinta dalla connotazione estetica " +
    "dell'→ effimero.",

  etymology:
    "Derivato di transitorio, dal latino tardo transitorius, a sua volta da " +
    "transire («passare attraverso, attraversare», composto di trans- «al di " +
    "là» + ire «andare»). La stessa radice compare in 'transito' e 'transizione' " +
    "— parole che condividono con transitorietà l'immagine di fondo del " +
    "passaggio da uno stato a un altro, più che della semplice brevità nel tempo.",

  examples: [
    "La legge era pensata come misura transitoria, in attesa della riforma " +
      "definitiva: la sua transitorietà era dichiarata fin dal testo, non un " +
      "difetto scoperto in seguito.",
    "Il filosofo insisteva sulla transitorietà di ogni ordine politico: non " +
      "una previsione pessimistica, ma la semplice constatazione che nessuna " +
      "istituzione umana ha mai avuto natura eterna.",
    "Accettare la transitorietà delle proprie emozioni più intense — la " +
      "rabbia, l'euforia — è spesso più utile, in terapia, che cercare di " +
      "sopprimerle o giustificarle.",
    "A differenza dell'→ effimero, che si esaurisce senza lasciare quasi " +
      "traccia, una fase transitoria può → sedimentare in modo permanente " +
      "nella struttura che la segue, anche dopo essere terminata.",
  ],

  synonyms: [
    {
      term: "provvisorietà",
      register: "comune",
      context: "più orientato all'assenza di definitività pratica di una soluzione o disposizione",
    },
    {
      term: "impermanenza",
      register: "filosofico",
      context: "calco dal buddhismo (anicca), enfatizza la dimensione universale e non accidentale del passare",
    },
    {
      term: "caducità",
      register: "letterario",
      context: "più marcatamente esistenziale, spesso riferito alla vita umana e alla sua fragilità",
    },
  ],

  antonyms: [
    {
      term: "permanenza",
      register: "formale",
      context: "condizione di ciò che resta stabile e non è destinato a cedere il posto a uno stato successivo",
    },
    {
      term: "definitività",
      register: "formale",
      context: "carattere di ciò che, una volta stabilito, non prevede ulteriori fasi di passaggio",
    },
  ],

  relatedWords: [
    "transitorio",
    "transizione",
    "effimero",
    "impermanenza",
    "caducità",
    "divenire",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/transitorieta/",
  },

  paroliereNote:
    "La differenza tra transitorietà ed → effimero merita attenzione perché " +
    "spesso i due lemmi vengono usati come se fossero intercambiabili, mentre " +
    "portano pesi diversi. L'effimero è definito soprattutto dalla sua breve " +
    "durata assoluta — un fiore, una moda, un applauso — e porta quasi sempre " +
    "una sfumatura valutativa, spesso malinconica o critica, sulla fragilità " +
    "di ciò che dura poco. La transitorietà, invece, non dice nulla sulla " +
    "durata in sé: una fase transitoria può durare decenni, purché sia " +
    "riconoscibile come passaggio verso qualcos'altro. È una categoria più " +
    "vicina alla struttura del tempo che alla sua velocità. Chi scrive di " +
    "storia o di politica dovrebbe preferire transitorietà quando descrive " +
    "un ordine destinato a mutare per ragioni strutturali, riservando " +
    "effimero ai fenomeni la cui unica caratteristica rilevante è la brevità.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Transitorietà — significato filosofico e differenza da effimero | Il Paroliere",
    description:
      "Che cos'è la transitorietà: qualità di ciò che è destinato a passare, " +
      "etimologia da transire, differenza da effimero e impermanenza, con esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
