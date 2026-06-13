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
    "70-80% dei casi. In psicologia e in altri contesti di cura, l'anamnesi si estende alla " +
    "storia di vita: eventi significativi, relazioni, traumi, risorse, costruendo una mappa " +
    "narrativa che aiuta a dare senso ai sintomi. In senso più largo, la parola viene usata " +
    "anche fuori dall'ambito clinico — indagini, analisi aziendali, ricerche storiche — per " +
    "indicare una ricostruzione ordinata del passato di qualcuno o di qualcosa, prima di " +
    "prendere decisioni o formulare ipotesi. In filosofia platonica, l'anamnesi (ἀνάμνησις, " +
    "«rimemorazione») è la dottrina per cui la conoscenza non è acquisizione di qualcosa di " +
    "nuovo, ma ricordo di ciò che l'anima immortale ha già conosciuto prima di incarnarsi nel " +
    "corpo — la radice filosofica del metodo maieutico socratico.",

  shortDefinition:
    "In medicina, la raccolta della storia clinica del paziente come primo atto diagnostico; " +
    "in psicologia, la mappa narrativa di una vita; in Platone, la dottrina per cui conoscere " +
    "è ricordare ciò che l'anima sapeva prima di incarnarsi.",

  register: ["tecnico (medicina, filosofia)", "comune"],
  domains: ["medicina", "psicologia clinica", "filosofia platonica", "diritto", "ricerca"],

  etymology:
    "Dal greco anámnēsis (ἀνάμνησις), da ana- («di nuovo, verso l'alto») + mnēsis " +
    "(«memoria», dalla radice mnē-, la stessa di mnemonico, amnesia, Mnemosine — la dea " +
    "della memoria madre delle Muse). Letteralmente: «rimemorazione, recupero della memoria». " +
    "Nel lessico clinico moderno il termine assume il significato tecnico di «ricostruzione " +
    "della storia», mantenendo il legame con l'idea di riportare alla mente ciò che è stato.",

  examples: [
    "Una buona anamnesi vale più di mille esami: il medico che sa ascoltare il paziente arriva alla diagnosi prima e meglio di chi affida tutto alla tecnologia.",
    "Nel Menone, Socrate usa l'anamnesi platonica per dimostrare che lo schiavo sa già la geometria: la conoscenza non viene dall'esterno, viene dal ricordo dell'anima.",
    "L'anamnesi familiare rivelò una storia di cardiopatie su tre generazioni: informazione che cambiò completamente l'approccio terapeutico.",
    "In psicoterapia, l'anamnesi non è solo un elenco di fatti, ma il modo in cui la persona racconta la propria storia.",
    "Per ricostruire l'incendio, gli inquirenti hanno fatto una sorta di anamnesi del palazzo, dalle manutenzioni mancate alle segnalazioni dei condomini."
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
    {
      slug: "memoria",
      label: "memoria",
      relation: "Facoltà individuale e collettiva su cui si appoggia l'anamnesi per riportare alla coscienza eventi e dettagli utili alla cura.",
    },
    {
      slug: "trauma",
      label: "trauma",
      relation: "Evento che emerge spesso solo in un'anamnesi attenta, dietro sintomi che all'inizio sembrano scollegati.",
    },
    {
      slug: "diagnosi",
      label: "diagnosi",
      relation: "Valutazione clinica che usa i dati raccolti nell'anamnesi per orientare ipotesi e scelte terapeutiche.",
    },
    {
      slug: "inconscio",
      label: "inconscio",
      relation: "Dimensione psichica che l'anamnesi cerca di portare alla luce, anche quando il paziente non sa ancora nominarla.",
    },
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
    "dall'esterno: viene da dentro, attraverso le domande giuste. Allo stesso tempo, " +
    "l'anamnesi dipende dalla memoria, dalle omissioni volontarie o involontarie, da ciò che " +
    "il paziente sa o può dire di sé: nessuna storia è neutrale, e ciò che viene raccolto " +
    "orienta già lo sguardo su ciò che verrà fatto dopo. C'è qualcosa di socratico in ogni " +
    "buon medico — e qualcosa di clinico in ogni buona filosofia.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Anamnesi — storia clinica, psicologia e filosofia platonica | Il Paroliere",
    description:
      "Anamnesi in medicina, psicologia e filosofia: la storia clinica del paziente e il " +
      "ricordo platonico. Due significati, una radice. Definizione con nota interdisciplinare.",
  },

  createdAt: "2026-06-06",
  updatedAt: "2026-06-13",
};
