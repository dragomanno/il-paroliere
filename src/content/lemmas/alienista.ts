// Il Paroliere — Lemma: alienista
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const alienista: LemmaEntry = {
  lemma: "alienista",
  slug: "alienista",
  partOfSpeech: "sostantivo",
  gender: "maschile e femminile",
  register: ["storico", "tecnico (obsoleto)", "letterario"],
  domains: ["psichiatria storica", "medicina", "storia della cultura"],

  definition:
    "Medico specializzato nello studio e nella cura delle malattie mentali, secondo la " +
    "nomenclatura in uso tra Ottocento e prima metà del Novecento, prima che il termine " +
    "fosse soppiantato da \u00abpsichiatra\u00bb. L'alienista operava spesso all'interno dei " +
    "manicomi, istituzioni totalizzanti che custodivano e classificavano chi veniva " +
    "definito \u00abalienato\u00bb — cioè estraniato da sé e dalla ragione. Il termine porta con " +
    "sé tutta l'ambivalenza di un'epoca in cui la scienza della mente muoveva i primi " +
    "passi tra intuizioni cliniche genuine e pratiche di controllo sociale. " +
    "Nell'uso contemporaneo, \u00abalienista\u00bb appare quasi esclusivamente in contesti " +
    "storici, letterari o narrativi.",

  shortDefinition:
    "Medico delle malattie mentali nella tradizione ottocentesca, oggi termine storico " +
    "sostituito da \u00abpsichiatra\u00bb, ancora vivo nella narrativa d'epoca.",

  etymology:
    "Da \u00abalienato\u00bb (chi ha perso il controllo di sé, estraniato dalla ragione), " +
    "dal latino alienatus, participio di alienare \u00abrendere estraneo\u00bb, da alienus " +
    "\u00abaltrui, estraneo\u00bb. Il suffisso -ista indica il professionista. " +
    "\u00abAlienazione mentale\u00bb era la formula diagnostica generale prima della psicopatologia moderna.",

  examples: [
    "Cesare Lombroso fu uno degli alienisti più celebri e controversi dell'Italia postunitaria: le sue teorie sul \u201cdelinquente nato\u201d mescolarono intuizioni e pregiudizi con conseguenze durature.",
    "Nei romanzi di fine Ottocento, l'alienista è una figura ambigua: uomo di scienza in un mondo ancora senza neuroscienze, custode e giudice al tempo stesso.",
    "La legge Basaglia del 1978 chiuse i manicomi italiani: con essi scomparve anche, di fatto, la figura dell'alienista come istituzione professionale.",
    "\u00abHa bisogno di un alienista\u00bb era, nel linguaggio dell'epoca, un modo per dire che qualcuno aveva perso il senno — con tutta la gravità sociale che quella diagnosi comportava.",
  ],

  synonyms: [
    {
      term: "psichiatra",
      register: "tecnico contemporaneo",
      note: "Il termine moderno che ha sostituito \u00abalienista\u00bb nel lessico medico e legale.",
    },
    {
      term: "medico dei matti",
      register: "popolare",
      note: "Espressione colloquiale storica, con valenza spesso denigratoria.",
    },
  ],

  antonyms: [],

  relatedWords: ["psicopatia", "coscienza", "inconscio", "rimozione", "sociologia"],

  sourceLinks: {},

  paroliereNote:
    "L'alienista è uno specchio scomodo della storia della medicina mentale: ricorda che " +
    "le categorie diagnostiche non sono mai neutre, che la linea tra cura e controllo è " +
    "stata spesso porosa, e che \u00abalienazione\u00bb come concetto medico e \u00abalienazione\u00bb " +
    "come concetto marxiano condividono la stessa radice non per caso. Chiamare qualcuno " +
    "\u00abalienato\u00bb significava togliergli la parola — e affidarla all'alienista. Basterebbe " +
    "questo per capire quanto pesi la nomenclatura in psichiatria.",

  editorialStatus: "draft",
  indexable: false,

  seo: {
    title: "alienista — il medico dei matti nell'Ottocento e la psichiatria delle origini",
    description:
      "Chi era l'alienista: storia della psichiatria ottocentesca, dai manicomi alla " +
      "legge Basaglia, tra scienza e controllo sociale.",
  },

  createdAt: "2026-06-13",
  updatedAt: "2026-06-13",
};
