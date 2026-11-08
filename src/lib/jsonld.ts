/**
 * Site-wide authorship entities for Il Paroliere.
 * Authorship applies to the dictionary as a whole (DefinedTermSet),
 * never to individual entries.
 */
export const SITE_URL = "https://ilparoliere.online";

export const DICTIONARY_ID = `${SITE_URL}/#dizionario`;
export const CURATOR_ID = `${SITE_URL}/#fabrizio-gabrielli`;
export const PUBLISHER_ID = `${SITE_URL}/#pistakkio`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const CURATOR_AUTHOR_PAGE = "https://fabri.news/chi-sono/fabrizio-gabrielli/";

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Il Paroliere",
      inLanguage: "it",
      publisher: { "@id": PUBLISHER_ID },
    },
    {
      "@type": "DefinedTermSet",
      "@id": DICTIONARY_ID,
      name: "Il Paroliere",
      description:
        "Dizionario italiano aperto e originale: definizioni curate, esempi d'uso autentici, note editoriali.",
      url: SITE_URL,
      inLanguage: "it",
      license: "https://creativecommons.org/licenses/by-sa/4.0/",
      author: { "@id": CURATOR_ID },
      editor: { "@id": CURATOR_ID },
      publisher: { "@id": PUBLISHER_ID },
    },
    {
      "@type": "Person",
      "@id": CURATOR_ID,
      name: "Fabrizio Gabrielli",
      url: CURATOR_AUTHOR_PAGE,
      worksFor: { "@id": PUBLISHER_ID },
      sameAs: [
        "https://www.linkedin.com/in/pistakkio",
        "https://fabri.news/",
        CURATOR_AUTHOR_PAGE,
        "https://www.pistakkio.net/chi-siamo/",
      ],
    },
    {
      "@type": "Organization",
      "@id": PUBLISHER_ID,
      name: "Pistakkio®",
      url: "https://www.pistakkio.net/",
      founder: { "@id": CURATOR_ID },
    },
  ],
};
