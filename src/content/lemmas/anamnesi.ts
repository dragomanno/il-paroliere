// Il Paroliere — Lemma: anamnesi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const anamnesi: LemmaEntry = {
  lemma: "anamnesi",
  slug: "anamnesi",
  partOfSpeech: "sostantivo femminile",

  definition:
    "In medicina, l'anamnesi è la raccolta sistematica di informazioni sulla storia clinica " +
    "del paziente — sintomi, malattie pregresse, terapie in corso, familiarità, stile di vita " +
    "— effettuata dal medico attraverso l'intervista diretta con il paziente o, quando " +
    "necessario, con i familiari (anamnesi eterodiretta). È il primo atto della visita medica, " +
    "fondamentale perché orienta la diagnosi molto prima di qualsiasi esame strumentale: si " +
    "stima che una buona anamnesi consenta di formulare un'ipotesi diagnostica corretta nel " +
    "70-80% dei casi. In filosofia platonica, l'anamnesi (ἀνάμνησις, «rimemorazione») è la " +
    "dottrina per cui la conoscenza non è acquisizione di qualcosa di nuovo, ma ricordo di " +
    "ciò che l'anima immortale ha già conosciuto prima di incarnarsi nel corpo. Platone " +
    "sostiene nel Fedone e nel Menone che l'anima, prima di incarnarsi, abita il mondo delle " +
    "Idee dove ha conoscenza diretta di tutte le forme pure. Quando l'anima si incarna, questa " +
    "conoscenza non scompare: si offusca sotto il peso della corporeità e della percezione " +
    "sensoriale. Nel dialogo Menone, Socrate dimostra a uno schiavo ignorante — attraverso " +
    "una serie di domande guidate — che egli riesce a risolvere un problema geometrico senza " +
    "averlo mai studiato: per Platone, la conoscenza era già nell'anima, e la dialettica la " +
    "risveglia. Questa dottrina ha una conseguenza filosofica profonda: se tutta la conoscenza " +
    "è anamnesi, allora il ruolo del maestro non è trasmettere nozioni ma creare le condizioni " +
    "perché il discepolo ricordi da solo — la radice filosofica del metodo maieutico socratico.",

  shortDefinition:
    "In medicina, la raccolta della storia clinica del paziente come primo atto diagnostico; " +
    "in Platone, la dottrina per cui conoscere è ricordare ciò che l'anima sapeva prima " +
    "di incarnarsi.",

  register: ["tecnico (medicina, filosofia)", "raro nel parlato comune", "comune (uso esteso)"],
  domains: ["medicina", "filosofia platonica", "psicologia clinica", "diritto", "ricerca sociale"],

  etymology:
    "Dal greco anámnēsis (ἀνάμνησις), da ana- («di nuovo, verso l'alto») + mnēsis " +
    "(«memoria», dalla radice mnē-, la stessa di mnemonico, amnesia, Mnemosine — la dea " +
    "della memoria madre delle Muse). Letteralmente: «rimemorazione, recupero della memoria».",

  examples: [
    "Una buona anamnesi vale più di mille esami: il medico che sa ascoltare il paziente arriva alla diagnosi prima e meglio di chi affida tutto alla tecnologia.",
    "Nel Menone, Socrate usa l'anamnesi platonica per dimostrare che lo schiavo sa già la geometria: la conoscenza non viene dall'esterno, viene dal ricordo dell'anima.",
    "L'anamnesi familiare rivelò una storia di cardiopatie su tre generazioni: informazione che cambiò completamente l'approccio terapeutico.",
    "Prima di avviare la consulenza, il commercialista ha fatto un'anamnesi dell'azienda: bilanci, contenziosi, struttura societaria — solo allora ha potuto dare un consiglio utile.",
  ],

  synonyms: [
    {
      term: "storia clinica",
      register: "medico",
      context: "in medicina",
    },
    {
      term: "storia del paziente",
      register: "medico",
      context: "in medicina",
    },
    {
      term: "rimemorazione",
      register: "filosofico",
      context: "in filosofia platonica",
    },
  ],

  antonyms: [
    {
      term: "amnesia",
      register: "comune",
      context: "etimologicamente il contrario diretto: a-mnesia",
    },
  ],

  relatedWords: [
    "epistemologia",
    "aporia",
    "amnesia",
    "Platone",
    "Menone",
    "Fedone",
    "Socrate",
    "mnemonica",
    "Mnemosine",
    "diagnosi",
    "semeiotica",
    "maieutica",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/anamnesi/",
    wiktionary: "https://it.wiktionary.org/wiki/anamnesi",
  },

  paroliereNote:
    "Anamnesi è una parola che vive su due piani completamente separati nella cultura " +
    "contemporanea — il piano medico e il piano filosofico — e che raramente viene vista come " +
    "una sola parola. Eppure il nesso è reale e profondo: in entrambi i contesti, l'anamnesi " +
    "è il recupero di ciò che c'era già. Il medico recupera la storia del corpo del paziente; " +
    "Platone recupera la storia dell'anima. In entrambi i casi, la risposta non viene " +
    "dall'esterno: viene da dentro, attraverso le domande giuste. C'è qualcosa di socratico " +
    "in ogni buon medico.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Anamnesi — medicina, Platone, storia clinica e rimemorazione | Il Paroliere",
    description:
      "Anamnesi in medicina e in filosofia: la storia clinica del paziente e il ricordo " +
      "platonico. Due significati, una radice. Definizione con nota interdisciplinare.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-13",
};
