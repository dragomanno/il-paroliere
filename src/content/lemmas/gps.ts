// Il Paroliere — Lemma: GPS
// Editorial status: reviewed | Content license: CC BY-SA 4.0
// IMPORTANT: all definitions and examples are original.
// External sources linked, not copied.

import type { LemmaEntry } from "@/lib/types";

export const gps: LemmaEntry = {
  lemma: "GPS",
  slug: "gps",
  partOfSpeech: "sigla (sostantivo maschile invariabile)",
  gender: "maschile",
  definition: "1. Sigla dell'inglese Global Positioning System, sistema di posizionamento satellitare degli Stati Uniti: una costellazione di satelliti in orbita a circa 20.000 chilometri di quota trasmette segnali orari, e un ricevitore a terra calcola latitudine, longitudine e altitudine misurando i tempi di arrivo dei segnali di almeno quattro satelliti. Il primo satellite fu lanciato nel 1978 e il sistema fu dichiarato pienamente operativo nel 1995. 2. Per estensione, nell'uso comune, il dispositivo che riceve quei segnali, in particolare il navigatore dell'auto o del telefono, e in genere qualunque sistema di localizzazione satellitare, anche se basato su altre costellazioni come l'europea Galileo.",
  shortDefinition: "Sistema satellitare statunitense che calcola la posizione di un ricevitore sulla Terra; anche il navigatore che lo usa.",
  register: [
    "tecnico-scientifico",
    "comune",
  ],
  domains: [
    "geografia",
    "tecnologia",
    "cartografia",
  ],
  etymology: "Sigla dell'inglese Global Positioning System «sistema di posizionamento globale». Il programma nasce nel 1973 nel Dipartimento della Difesa statunitense con il nome Navstar GPS; la precisione per gli usi civili migliorò di colpo il 2 maggio 2000, quando fu spento il degrado intenzionale del segnale.",
  examples: [
    "Il GPS dell'orologio ha registrato quattordici chilometri e ottocento metri di dislivello.",
    "Anche senza campo il telefono funziona come GPS, perché per ricevere i satelliti non serve la rete.",
    "Ho seguito il GPS e mi sono ritrovato davanti a una strada chiusa da anni.",
  ],
  synonyms: [
    {
      term: "navigatore",
      register: "comune",
      context: "il dispositivo per la guida, in auto o sul telefono",
    },
    {
      term: "GNSS",
      register: "tecnico-scientifico",
      context: "sigla generale per tutti i sistemi satellitari: GPS, Galileo, GLONASS, BeiDou",
    },
    {
      term: "localizzatore",
      register: "comune",
      context: "dispositivo che trasmette la propria posizione, per esempio su un veicolo o un animale",
    },
  ],
  antonyms: [],
  relatedWords: [
    "coordinate-geografiche",
    "latitudine",
    "longitudine",
    "altitudine",
    "greenwich",
    "cartografia",
    "geodesia",
    "geoide",
  ],
  sourceLinks: {
    treccani: "https://www.treccani.it/vocabolario/gps/",
    wiktionary: "https://it.wiktionary.org/wiki/GPS",
  },
  paroliereNote: "Il GPS è un caso esemplare di nome tecnico diventato nome comune: si dice «il GPS» anche quando il telefono usa i satelliti europei di Galileo, come si dice «lo scotch» per qualunque nastro adesivo. Il genere maschile segue sistema, e la sigla si legge all'italiana, gi-pi-esse. Chi lavora sul campo preferisce GNSS, più esatto, ma molto meno amato. Un dettaglio che dice molto sulla sua precisione: per funzionare il sistema deve correggere gli orologi dei satelliti anche per gli effetti della relatività. Vedi → coordinate geografiche.",
  seo: {
    title: "GPS — significato, come funziona e uso comune | Il Paroliere",
    description: "Che cos'è il GPS: il sistema satellitare che calcola la posizione sulla Terra, operativo dal 1995. Come funziona, differenza con GNSS e Galileo, esempi.",
  },
  editorialStatus: "reviewed",
  indexable: true,
  createdAt: "2026-11-14",
  updatedAt: "2026-11-14",
};
