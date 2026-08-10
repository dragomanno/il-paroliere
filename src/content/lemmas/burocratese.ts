// Il Paroliere — Lemma: burocratese
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const burocratese: LemmaEntry = {
  lemma: "burocratese",
  slug: "burocratese",
  partOfSpeech: "sostantivo",
  gender: "maschile",
  register: ["comune", "critico"],
  domains: ["linguistica", "società", "amministrazione"],

  definition:
    "Registro linguistico tipico delle comunicazioni scritte della pubblica amministrazione e delle istituzioni, caratterizzato — nella sua accezione negativa, con cui il termine è quasi sempre usato — da verbosità eccessiva, ricorso sistematico a perifrasi al posto di termini semplici, uso di formule fisse arcaiche, nominalizzazioni che disumanizzano l'azione ('si comunica che si è provveduto a' invece di 'abbiamo fatto'), e una sintassi ipotattica che appesantisce la lettura senza aggiungere precisione reale. Nato per esigenze legittime di formalità, univocità giuridica e responsabilità documentale, il burocratese finisce spesso per produrre l'effetto opposto a quello dichiarato: invece di chiarire diritti e doveri del cittadino, li nasconde dietro una superficie linguistica difficile da decifrare, alimentando distanza e sfiducia verso le istituzioni che lo adottano.",

  shortDefinition:
    "Linguaggio amministrativo verboso e formulaico, spesso criticato perché complica invece di chiarire la comunicazione tra istituzioni e cittadini.",

  etymology:
    "Formato da 'burocrazia' — dal francese *bureaucratie*, composto da *bureau* «ufficio» e il greco *krátos* «potere» — con il suffisso *-ese*, usato in italiano per indicare gerghi e linguaggi settoriali (cfr. 'politichese', 'giornalese').",

  examples: [
    "'Si rende noto che, a decorrere dalla data odierna, si provvederà alla sospensione del servizio' è un tipico esempio di burocratese: la stessa informazione si potrebbe dare in metà delle parole.",
    "Movimenti per la semplificazione del linguaggio amministrativo, come il progetto 'Chiaro!' promosso da alcune pubbliche amministrazioni italiane, nascono proprio per combattere il burocratese.",
    "Il burocratese trasforma 'ti multo' in 'si comunica l'irrogazione della sanzione amministrativa pecuniaria prevista dall'art. ...', allontanando il cittadino dal senso reale dell'atto.",
    "Molti moduli pubblici restano scritti in burocratese anche dopo le riforme sulla trasparenza amministrativa, perché cambiare uno stile consolidato richiede più che una direttiva.",
  ],

  synonyms: [
    { term: "linguaggio burocratico", register: "tecnico", note: "Forma neutra e descrittiva; 'burocratese' aggiunge quasi sempre una connotazione critica o ironica." },
    { term: "politichese", register: "comune", note: "Registro affine per verbosità e vaghezza, ma specifico del discorso politico piuttosto che amministrativo." },
  ],

  antonyms: [
    { term: "linguaggio chiaro", register: "comune", note: "Stile comunicativo semplice, diretto e accessibile — obiettivo dichiarato dei movimenti di semplificazione amministrativa (plain language)." },
  ],

  relatedWords: ["perifrasi", "ridondanza", "glossolalia"],

  sourceLinks: {
    treccani: "https://www.treccani.it/enciclopedia/burocratese_(Enciclopedia-dell'Italiano)/",
    wiktionary: "https://it.wikipedia.org/wiki/Linguaggio_burocratico",
  },

  paroliereNote:
    "Il burocratese è un caso da manuale di come la forma linguistica possa tradire la funzione che dovrebbe servire. Il linguaggio amministrativo nasce per garantire precisione giuridica e responsabilità documentale — obiettivi legittimi — ma finisce spesso per produrre un effetto di distanza e opacità, proprio l'opposto della trasparenza istituzionale che dovrebbe garantire. Non è un caso che i movimenti di riforma del linguaggio amministrativo, in Italia come altrove, insistano sullo stesso punto: la chiarezza non è un lusso stilistico, è una condizione perché un diritto o un dovere comunicato per iscritto sia davvero esercitabile da chi legge.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "burocratese — significato, esempi, linguaggio amministrativo",
    description:
      "Che cos'è il burocratese: il linguaggio verboso e formulaico della pubblica amministrazione, tra necessità giuridica e opacità comunicativa.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
