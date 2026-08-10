// Il Paroliere — Lemma: sedimentare
// Editorial status: draft | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const sedimentare: LemmaEntry = {
  lemma: "sedimentare",
  slug: "sedimentare",
  partOfSpeech: "verbo",
  register: ["comune", "tecnico"],
  domains: ["geologia", "chimica", "società", "linguistica", "cultura"],

  definition:
    "Depositarsi lentamente sul fondo, per effetto della gravità, di " +
    "particelle solide sospese in un liquido — il senso tecnico originario, " +
    "proprio della geologia (la sabbia che sedimenta sul letto di un fiume) e " +
    "della chimica (un precipitato che sedimenta in una soluzione). Per " +
    "estensione figurata, ampiamente più frequente nell'uso corrente non " +
    "tecnico, sedimentare significa consolidarsi lentamente nel tempo fino a " +
    "diventare parte stabile e riconoscibile di qualcosa — un'abitudine, una " +
    "lingua, una cultura, un'istituzione. In questo senso figurato il verbo " +
    "descrive un processo necessariamente lento e cumulativo, mai istantaneo: " +
    "ciò che sedimenta non lo fa in un solo passaggio, ma per accumulo " +
    "progressivo di strati successivi, ciascuno dei quali resta parzialmente " +
    "visibile in filigrana sotto quelli più recenti.",

  shortDefinition:
    "Depositarsi lentamente per accumulo, in senso fisico (particelle in un " +
    "liquido) o figurato (un'abitudine, una lingua, una cultura che si " +
    "consolida nel tempo).",

  etymology:
    "Verbo denominale formato su sedimento, dal latino sedimentum, derivato " +
    "di sedere («stare seduto, posarsi»). La radice condivide con 'sedia', " +
    "'sede' e 'residuo' l'immagine di fondo del posarsi, del fermarsi in un " +
    "luogo dopo un movimento — coerente con il significato tecnico originario " +
    "di particelle che, sospese in un liquido in movimento, si fermano non " +
    "appena il movimento cessa o rallenta a sufficienza.",

  examples: [
    "Nei millenni, gli strati di limo hanno continuato a sedimentare sul " +
      "fondo del delta, costruendo terreno nuovo centimetro dopo centimetro.",
    "Certe espressioni dialettali hanno finito per sedimentare nell'italiano " +
      "regionale, tanto da non essere più percepite come importazioni locali.",
    "L'abitudine di lavorare la domenica mattina, all'inizio eccezionale, " +
      "sedimentò col tempo in una routine che nessuno ricordava più di aver deciso.",
    "Ciò che → sedimenta lascia sempre un residuo osservabile, a differenza " +
      "di ciò che cade nell'→ oblio, che scompare senza lasciare strati " +
      "riconoscibili.",
  ],

  synonyms: [
    {
      term: "depositarsi",
      register: "tecnico",
      context: "più specifico e neutro per il senso fisico, meno usato in senso figurato",
    },
    {
      term: "consolidarsi",
      register: "comune",
      context: "enfatizza il risultato finale della stabilità raggiunta più del processo cumulativo",
    },
    {
      term: "stratificarsi",
      register: "formale",
      context: "condivide con sedimentare l'immagine degli strati successivi, spesso usato in ambito culturale o sociale",
    },
  ],

  antonyms: [
    {
      term: "dissolversi",
      register: "comune",
      context: "scomparire senza lasciare traccia stabile, l'opposto del depositarsi permanente",
    },
    {
      term: "disperdersi",
      register: "formale",
      context: "in senso fisico, il contrario del raccogliersi in un deposito compatto",
    },
  ],

  relatedWords: [
    "sedimentazione",
    "stratificarsi",
    "consolidarsi",
    "deposito",
    "residuo",
    "oblio",
  ],

  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/sedimentare/",
    wiktionary: "https://it.wiktionary.org/wiki/sedimentare",
  },

  paroliereNote:
    "Il passaggio dal senso fisico a quello figurato di sedimentare è un " +
    "esempio particolarmente pulito di come la lingua italiana ricicli il " +
    "vocabolario delle scienze naturali per descrivere fenomeni sociali e " +
    "culturali: si dice che una lingua, un'abitudine o una norma sociale " +
    "sedimentano esattamente come si direbbe di un fiume, perché il modello " +
    "cognitivo di fondo — accumulo lento, strati sovrapposti, risultato " +
    "irreversibile senza intervento esterno — è lo stesso in entrambi i casi. " +
    "Vale la pena, in un'eventuale voce gemella su → sedimentazione, tenere " +
    "distinto il processo (sedimentare, verbo, l'atto del depositarsi nel " +
    "tempo) dal suo risultato osservabile in un dato momento (sedimentazione, " +
    "sostantivo, lo stato di ciò che si è già depositato) — una distinzione " +
    "sottile ma utile per chi scrive di cultura o di istituzioni, dove " +
    "confondere il processo con l'esito porta spesso a descrivere come " +
    "'naturali' abitudini che sono in realtà il risultato di un accumulo " +
    "storico ben preciso e tutt'altro che inevitabile.",

  editorialStatus: "draft",
  indexable: true,

  seo: {
    title: "Sedimentare — significato fisico e figurato, con esempi | Il Paroliere",
    description:
      "Che cosa significa sedimentare: dal deposito geologico al " +
      "consolidarsi di abitudini e culture nel tempo, etimologia ed esempi.",
  },

  createdAt: "2026-08-10",
  updatedAt: "2026-08-10",
};
