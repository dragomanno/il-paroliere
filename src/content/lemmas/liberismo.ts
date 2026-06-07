// Il Paroliere — Lemma: LIBERISMO
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const liberismo: LemmaEntry = {
  lemma: "liberismo",
  slug: "liberismo",
  partOfSpeech: "sostantivo maschile",
  gender: "maschile",
  definition:
    "Dottrina economica che teorizza il libero mercato come meccanismo ottimale di allocazione delle risorse, " +
    "in opposizione all'intervento statale nell'economia. Il liberismo sostiene che la concorrenza tra agenti " +
    "economici liberi generi spontaneamente equilibri efficienti, secondo la metafora della 'mano invisibile' " +
    "di Adam Smith (*La ricchezza delle nazioni*, 1776). " +
    "Le varianti più radicali (neoliberismo, libertarismo economico) propugnano la privatizzazione dei servizi " +
    "pubblici, la deregolamentazione dei mercati finanziari e la riduzione della pressione fiscale. " +
    "Il liberismo si distingue dal liberalismo politico, col quale condivide l'enfasi sulla libertà individuale " +
    "ma non necessariamente i valori democratici o la tutela dei diritti sociali.",
  shortDefinition: "Dottrina economica che propugna il libero mercato con minimo intervento statale; distinto dal liberalismo politico.",
  register: ["tecnico", "formale"],
  domains: ["economia", "politica"],
  etymology:
    "Derivato italiano di *libero* + suffisso *-ismo*, formato in analogia con il francese *libéralisme* " +
    "ma con accezione più strettamente economica. Il termine si afferma in Italia nel XIX-XX secolo.",
  examples: [
    "Le riforme degli anni Ottanta in Gran Bretagna e negli Stati Uniti segnarono l'affermazione del liberismo come paradigma economico dominante.",
    "I critici del liberismo contestano che il mercato lasciato a sé stesso tenda a concentrare la ricchezza anziché distribuirla.",
    "Il liberismo puro tollera disuguaglianze economiche anche marcate, purché siano il risultato di scambi volontari e non di coercizione.",
  ],
  synonyms: [
    { term: "laissez-faire", register: "tecnico", context: "principio di non-intervento statale nell'economia, di origine francese" },
  ],
  antonyms: [
    { term: "protezionismo", register: "tecnico-economico", context: "politica di difesa dei mercati nazionali dalla concorrenza estera" },
    { term: "statalismo", register: "politico", context: "dottrina che assegna allo Stato un ruolo centrale nell'economia" },
    { term: "interventismo", register: "tecnico-economico", context: "politica di intervento attivo dello Stato nel sistema produttivo" },
  ],
  relatedWords: ["liberalismo", "liberal", "capitalismo", "mercato", "proprieta", "norma"],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/liberismo/",
    wiktionary: "https://it.wiktionary.org/wiki/liberismo",
  },
  paroliereNote:
    "In italiano, *liberismo* ha accezione prevalentemente economica, mentre *liberalismo* è termine " +
    "più ampio che abbraccia anche la filosofia politica dei diritti. Questa distinzione non esiste " +
    "in inglese, dove *liberalism* copre entrambi gli ambiti. Attenzione: nel lessico politico italiano " +
    "contemporaneo, chi si dichiara 'liberale' non è necessariamente 'liberista' in senso economico " +
    "(es. liberali progressisti favorevoli al welfare state).",
  editorialStatus: "reviewed",
  indexable: true,
  seo: {
    title: "LIBERISMO — definizione e uso | Il Paroliere",
    description: "Liberismo: dottrina del libero mercato con minimo intervento statale. Distinto dal liberalismo politico; Smith, neoliberismo.",
  },
  createdAt: "2026-06-07",
  updatedAt: "2026-06-07",
};
