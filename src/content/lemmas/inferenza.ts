// Il Paroliere — Lemma: inferenza
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const inferenza: LemmaEntry = {
  lemma: "inferenza",
  slug: "inferenza",
  partOfSpeech: "sostantivo",
  gender: "femminile",
  register: ["tecnico", "divulgativo", "comune"],
  domains: ["logica", "epistemologia", "linguistica", "psicologia-cognitiva"],

  definition:
    "Operazione del pensiero attraverso cui, a partire da una o più proposizioni assunte come premesse, si perviene a una nuova proposizione, la conclusione. La logica distingue tre direzioni inferenziali fondamentali, secondo la forza del legame tra premesse e conclusione: l'inferenza *deduttiva*, in cui — se le premesse sono vere — la conclusione è necessariamente vera, perché già implicita in esse (è il territorio del → sillogismo); l'inferenza *induttiva*, in cui da casi osservati si generalizza a una regola probabile ma non garantita; l'inferenza *abduttiva* — la meno rigorosa e la più diffusa nella vita quotidiana — in cui, osservato un fatto, si ipotizza la spiegazione più plausibile senza alcuna certezza logica. Nell'uso comune, “trarre un'inferenza” indica più semplicemente il passaggio, spesso rapido e non dichiarato, da un indizio a una conclusione plausibile.",

  shortDefinition:
    "Passaggio logico da una o più premesse a una conclusione; può essere deduttivo (necessario), induttivo o abduttivo (probabili).",

  etymology:
    "Dal latino *inferentia*, derivato da *inferre*, “portare dentro, introdurre, dedurre”, composto da *in-* e *ferre*, “portare”. Il senso logico-tecnico del “portare una conclusione dentro” il discorso a partire dalle premesse è già presente nel latino filosofico medievale ed entra stabilmente nel lessico logico moderno con lo sviluppo della logica formale.",

  examples: [
    "Dal fumo che usciva dalla finestra ha tratto l'inferenza, sbagliata, che ci fosse un incendio: era solo il vapore della doccia.",
    "L'inferenza deduttiva non aggiunge mai informazione nuova: si limita a rendere esplicito ciò che era già contenuto, in modo implicito, nelle premesse.",
    "I modelli linguistici moderni non ragionano per inferenza logica in senso stretto, ma per associazioni statistiche che imitano, spesso con successo, il risultato di un'inferenza.",
    "Secondo Peirce, l'inferenza abduttiva è l'unica capace di produrre davvero conoscenza nuova, perché ipotizza una causa non ancora osservata per spiegare un fatto.",
  ],

  synonyms: [
    { term: "deduzione", register: "tecnico", note: "Termine più specifico: indica solo l'inferenza a validità necessaria, non l'intera famiglia dei ragionamenti inferenziali." },
    { term: "ragionamento", register: "comune", note: "Più generico, copre anche processi che non seguono una struttura logica esplicita." },
    { term: "illazione", register: "aulico", note: "Spesso con sfumatura critica, per un'inferenza affrettata o poco fondata." },
  ],

  antonyms: [
    { term: "osservazione diretta", register: "tecnico", note: "Constatazione di un fatto senza passaggio inferenziale intermedio." },
    { term: "assunzione arbitraria", register: "critico", note: "Premessa introdotta senza giustificazione, che non deriva da un ragionamento tracciabile." },
  ],

  relatedWords: ["sillogismo", "assioma", "euristica", "bias-cognitivo"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/inferenza",
  },

  paroliereNote:
    "Viviamo immersi in inferenze non dichiarate molto più di quanto pensiamo: ogni volta che leggiamo un'espressione sul volto di qualcuno, interpretiamo un silenzio, decidiamo che un ritardo significa disinteresse, stiamo facendo un'inferenza — quasi sempre abduttiva, quasi mai verificata. La logica formale ci insegna a distinguere quanto quella inferenza sia solida (deduttiva, quasi inattaccabile) o fragile (abduttiva, la più utile ma anche la più rischiosa): imparare a chiedersi “sto deducendo o sto solo indovinando la spiegazione più comoda?” è forse l'esercizio critico più sottovalutato della vita quotidiana.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "inferenza — significato, tipi deduttiva induttiva abduttiva",
    description:
      "Che cos'è un'inferenza in logica: la differenza tra ragionamento deduttivo, induttivo e abduttivo, con esempi dal linguaggio quotidiano.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
