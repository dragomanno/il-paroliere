// Il Paroliere — Lemma: retorica
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const retorica: LemmaEntry = {
  lemma: "retorica",
  slug: "retorica",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["formale", "tecnico", "comune"],
  domains: ["retorica", "linguistica", "filosofia", "politica"],

  definition:
    "Disciplina che studia e insegna l'arte di parlare e scrivere in modo efficace per " +
    "persuadere, informare o commuovere un uditorio, attraverso l'organizzazione del " +
    "discorso e l'uso consapevole delle sue tecniche (figure, argomentazione, struttura, " +
    "ritmo). Nata nella Grecia classica come tecnica civile — indispensabile per " +
    "chiunque volesse parlare in tribunale o in assemblea — la retorica fu sistematizzata " +
    "da Aristotele nei tre generi (giudiziario, deliberativo, epidittico) e nelle tre " +
    "leve persuasive di ethos, pathos e logos, poi arricchita dai retori latini con la " +
    "teoria delle cinque fasi di costruzione del discorso (inventio, dispositio, " +
    "elocutio, memoria, actio). Nell'uso corrente il termine ha sviluppato anche " +
    "un'accezione riduttiva e spregiativa — 'è solo retorica' per indicare un discorso " +
    "vuoto e privo di contenuto reale — che ne rovescia il significato tecnico " +
    "originario: la retorica in senso proprio non è l'assenza di sostanza, ma la scienza " +
    "di comunicarla in modo efficace.",

  shortDefinition:
    "Disciplina che studia le tecniche del discorso persuasivo — struttura, " +
    "argomentazione, figure — nata nella Grecia classica come arte civile.",

  etymology:
    "Dal greco rhētorikḗ (téchnē), «arte del rhḗtōr», cioè dell'oratore, derivato di " +
    "rhêsis («discorso, parola»). Passata al latino rhetorica e da lì in tutte le lingue " +
    "romanze, mantenendo pressoché intatto il significato originario per oltre due " +
    "millenni.",

  examples: [
    "Studiò retorica non per imparare a ingannare, ma per riconoscere quando qualcun " +
      "altro stava usando le sue tecniche contro di lui.",
    "Il discorso era un capolavoro di retorica: partiva da un aneddoto personale (pathos), " +
      "citava le proprie credenziali (ethos) e chiudeva con dati verificabili (logos).",
    "\"È solo retorica\", disse scrollando le spalle — confondendo, come spesso accade, " +
      "la disciplina con il suo abuso più superficiale.",
    "La → captatio benevolentiae con cui apriva ogni intervento era un classico esempio di " +
      "retorica giudiziaria applicata al contesto aziendale.",
  ],

  synonyms: [
    {
      term: "eloquenza",
      register: "letterario",
      context: "più centrato sulla qualità naturale o acquisita di parlare bene, meno sulla disciplina teorica",
    },
    {
      term: "arte oratoria",
      register: "formale",
      context: "quasi-sinonimo, con enfasi sulla dimensione pratica del parlare in pubblico",
    },
  ],

  antonyms: [
    {
      term: "sinteticità",
      register: "comune",
      context: "essenzialità del discorso, priva di elaborazione retorica",
    },
    {
      term: "afasia",
      register: "tecnico",
      context: "in senso estremo, incapacità di costruire discorso — opposto clinico e non semantico",
    },
  ],

  relatedWords: [
    "retore",
    "retorico",
    "eloquenza",
    "dialettica",
    "persuasione",
    "captatio benevolentiae",
    "argomentazione",
  ],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/retorica",
  },

  paroliereNote:
    "Vale la pena restituire dignità tecnica a questa parola, che nell'italiano " +
    "corrente porta quasi sempre una connotazione negativa non meritata dal suo " +
    "significato originario. Aristotele stesso, nella sua Retorica, la difendeva come " +
    "strumento neutro — utile tanto alla verità quanto alla menzogna, proprio come la " +
    "logica — e ne condannava non l'esistenza ma l'uso scorretto. La differenza tra " +
    "retorica e → demagogia o → propaganda non sta nelle tecniche impiegate, spesso le " +
    "stesse, ma nel rapporto con la verità e con l'interlocutore: la retorica in senso " +
    "pieno presuppone un uditorio capace di giudizio, a cui si offrono ragioni " +
    "verificabili; i suoi abusi presuppongono invece un uditorio da aggirare. Studiare " +
    "retorica, in questo senso, è anche il modo migliore per difendersi da chi la usa " +
    "senza dichiararlo.",

  editorialStatus: "reviewed",
  indexable: true,

  seo: {
    title: "Retorica — arte del discorso persuasivo: storia e tecniche | Il Paroliere",
    description:
      "Che cos'è la retorica come disciplina: origine greca, ethos pathos logos, " +
      "differenza tra uso tecnico e accezione spregiativa corrente, con esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
