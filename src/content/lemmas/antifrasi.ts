// Il Paroliere — Lemma: antifrasi
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const antifrasi: LemmaEntry = {
  lemma: "antifrasi",
  slug: "antifrasi",
  partOfSpeech: "sostantivo femminile invariabile",
  gender: "femminile",
  definition: "Figura retorica con cui si usa una parola o un'espressione nel senso opposto al suo, contando sul contesto o sul tono perché chi ascolta capisca il rovescio. Si usa per ironia, come chi accoglie un ritardatario con «sei in anticipo», oppure per scaramanzia e pudore, quando a una cosa temuta si dà un nome benevolo.",
  shortDefinition: "Figura retorica che usa una parola nel senso opposto al suo, per ironia o per dare un nome benevolo a ciò che si teme.",
  register: [
    "tecnico",
    "colto",
  ],
  domains: [
    "retorica",
    "linguistica",
  ],
  etymology: "Dal latino tardo antiphrasis, ripreso dal greco antíphrasis, composto di antí, «contro, al posto di», e phrásis, «modo di dire, espressione», dal verbo phrázein, «spiegare, dire».",
  examples: [
    "Dire «che bella giornata» sotto un temporale è un'antifrasi che tutti capiscono.",
    "«Sei proprio un genio», disse alla figlia che aveva chiuso le chiavi dentro la macchina.",
    "I Greci chiamavano le Erinni, dee della vendetta, Eumenidi, «le benevole»: un'antifrasi per non attirarne l'ira.",
    "Il mar Nero era per i Greci il Ponto Eusino, il «mare ospitale», nome che per molti storici è un'antifrasi scaramantica.",
  ],
  synonyms: [
    {
      term: "ironia",
      register: "comune",
      context: "il dire il contrario di ciò che si intende",
      note: "Più ampia dell'antifrasi: l'ironia è un atteggiamento e può fare a meno del rovesciamento di una parola; l'antifrasi è il meccanismo puntuale.",
    },
    {
      term: "eufemismo",
      register: "tecnico, comune",
      context: "il nome gentile dato a ciò che spaventa o imbarazza",
      note: "Coincide con l'antifrasi solo quando il nome gentile è l'opposto della cosa, come per le Eumenidi; di solito l'eufemismo attenua senza capovolgere.",
    },
  ],
  antonyms: [
    {
      term: "senso letterale",
      register: "tecnico",
      context: "la parola presa per quello che dice",
    },
    {
      term: "litote",
      register: "tecnico",
      context: "figura che afferma negando il contrario",
      note: "Contrario di procedimento: la litote dice «non è brutto» per «è bello», l'antifrasi dice «è bello» per «è brutto».",
    },
  ],
  relatedWords: [
    "ironia",
    "sarcasmo",
    "eufemismo",
    "litote",
    "figura-retorica",
    "metafora",
    "ossimoro",
    "disfemismo",
    "satira",
    "retorica",
    "scaramanzia",
    "tabù linguistico",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/antifrasi/",
    wiktionary: "https://it.wiktionary.org/wiki/antifrasi",
  },
  paroliereNote: "L'antifrasi è il meccanismo, l'→ [ironia](https://ilparoliere.online/parola/ironia) è l'intenzione, e le due cose non coincidono sempre. C'è ironia senza antifrasi, quella delle situazioni, del destino, dei personaggi che non sanno ciò che lo spettatore sa. E c'è antifrasi senza ironia: chiamare le Erinni «benevole» non era uno scherzo, era paura, la stessa che sta dietro a molti nomi addolciti della morte e della malattia, il territorio dell'→ [eufemismo](https://ilparoliere.online/parola/eufemismo). Vale la pena distinguerla dalla → [litote](https://ilparoliere.online/parola/litote), che le somiglia, ma lavora al contrario: la litote attenua negando l'opposto, l'antifrasi capovolge affermando l'opposto. Quando l'antifrasi è detta per ferire diventa → [sarcasmo](https://ilparoliere.online/parola/sarcasmo); quando si fissa in un nome, come per il mar Nero dei Greci, smette di sembrare una figura e diventa geografia.",
  seo: {
    title: "Antifrasi — significato, esempi, antifrasi e ironia | Il Paroliere",
    description: "Che cos'è l'antifrasi, la figura retorica che dice il contrario: esempi dalle Eumenidi al Ponto Eusino, differenze con ironia, litote e sarcasmo, etimologia.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
