// Il Paroliere — Lemma: sillogismo
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sillogismo: LemmaEntry = {
  lemma: "sillogismo",
  slug: "sillogismo",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["tecnico", "aulico", "divulgativo"],
  domains: ["logica", "filosofia", "epistemologia"],

  definition:
    "Ragionamento dimostrativo, teorizzato per la prima volta da Aristotele negli *Analitici primi*, in cui da due proposizioni poste come premesse — chiamate premessa maggiore e premessa minore — segue necessariamente una terza proposizione, la conclusione, senza bisogno di alcun elemento aggiuntivo esterno alle premesse stesse. Le due premesse condividono un termine, detto *medio*, che compare in entrambe ma scompare nella conclusione, facendo da cerniera logica tra l'estremo maggiore (predicato della conclusione) e l'estremo minore (soggetto della conclusione): è questo, ad esempio, lo schema del celebre \"Tutti gli uomini sono mortali; Socrate è un uomo; dunque Socrate è mortale\". La validità del sillogismo dipende esclusivamente dalla sua forma, non dalla verità di fatto delle premesse: un sillogismo può essere formalmente valido pur partendo da premesse false, così come una struttura scorretta può accidentalmente produrre una conclusione vera. Nell'uso corrente, il termine indica per estensione — spesso con sfumatura critica — un ragionamento rigido o troppo schematico, presentato come ineccepibile ma in realtà viziato da premesse discutibili.",

  shortDefinition:
    "Ragionamento deduttivo aristotelico in cui da due premesse, unite da un termine medio, segue necessariamente una conclusione.",

  etymology:
    "Dal greco *syllogismós*, composto da *sýn*, “insieme”, e *logismós*, “calcolo, ragionamento”: letteralmente, “ragionamento concatenato” o “calcolo fatto insieme”. Aristotele lo definisce negli *Analitici primi* come \"un discorso nel quale, poste alcune premesse, ne consegue necessariamente alcunché di diverso dalle premesse, per il fatto che queste sono quel che sono\" — una definizione che pone l'accento sulla necessità logica del passaggio, non sulla verità materiale del contenuto.",

  examples: [
    "Il professore ha usato un sillogismo semplice per introdurre la logica: tutti i mammiferi respirano aria; le balene sono mammiferi; dunque le balene respirano aria.",
    "Il suo argomento sembrava un sillogismo ineccepibile, ma la premessa maggiore — 'chi tace acconsente' — era tutt'altro che scontata.",
    "Un sillogismo può essere formalmente perfetto e partire comunque da premesse false: tutti i pesci sono uomini, Socrate è un pesce, dunque Socrate è un uomo — la forma è valida, il contenuto assurdo.",
    "Nei dibattiti pubblici capita spesso di sentire sillogismi apparenti che, a guardarli bene, nascondono un quarto termine surrettizio e perdono ogni validità logica.",
  ],

  synonyms: [
    { term: "ragionamento deduttivo", register: "tecnico", note: "Categoria più ampia in cui il sillogismo aristotelico rientra come caso storicamente e strutturalmente definito." },
    { term: "argomentazione stringente", register: "comune", note: "Uso figurato, non tecnico, per un ragionamento presentato come logicamente ineccepibile." },
  ],

  antonyms: [
    { term: "sofisma", register: "critico", note: "Ragionamento che ha l'apparenza della validità logica ma nasconde un errore, spesso intenzionale." },
    { term: "falsa-dicotomia", register: "tecnico", note: "Fallacia informale che, a differenza del sillogismo valido, procede per false alternative anziché per premesse concatenate." },
  ],

  relatedWords: ["inferenza", "assioma", "tautologia", "falsa-dicotomia"],

  sourceLinks: {
    wiktionary: "https://it.wiktionary.org/wiki/sillogismo",
  },

  paroliereNote:
    "Il sillogismo è probabilmente lo strumento logico più citato e meno realmente praticato del linguaggio comune: lo evochiamo per dare peso a un'argomentazione, ma raramente ne verifichiamo la struttura reale. Il trucco retorico più diffuso, oggi come ai tempi della Sofistica, non è costruire un sillogismo falso nella forma — sarebbe troppo facile da smascherare — ma infilare, tra le due premesse, un termine che sembra lo stesso e non lo è: la vera arte della manipolazione logica si gioca quasi sempre lì, nella cucitura invisibile tra maggiore e minore.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "sillogismo — significato, struttura aristotelica ed esempi",
    description:
      "Che cos'è un sillogismo secondo Aristotele: premessa maggiore, minore, termine medio e conclusione, con esempi di ragionamenti validi e apparenti.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
