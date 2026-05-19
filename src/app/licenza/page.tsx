import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licenza — Il Paroliere",
  description:
    "Licenze di Il Paroliere: codice MIT, contenuto editoriale CC BY-SA 4.0. " +
    "Come riutilizzare e attribuire correttamente.",
};

export default function LicenzaPage() {
  return (
    <article className="space-y-12">
      {/* Breadcrumb */}
      <nav
        className="text-sm text-[#b8b3a7]" 
        aria-label="Navigazione"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Link href="/" className="hover:text-[#b8dc16] transition-colors">
          Il Paroliere
        </Link>
        <span className="mx-2 opacity-40">›</span>
        <span className="text-[#f7f3e8]">Licenza</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f7f3e8]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Licenza
        </h1>
        <p
          className="text-[1.125rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Il Paroliere usa due licenze distinte: una per il codice, una per il
          contenuto editoriale.
        </p>
      </header>

      <hr className="border-[#2a2a2a]" />

      {/* Licenza contenuto */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <h2
            className="text-xl font-semibold text-[#f7f3e8]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contenuto editoriale
          </h2>
          <span
            className="text-xs px-2.5 py-1 bg-[#1a1a0a] text-[#b8dc16] border border-[#2a2a2a] rounded font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            CC BY-SA 4.0
          </span>
        </div>

        <p
          className="text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Tutto il contenuto editoriale originale di Il Paroliere — definizioni,
          esempi, note etimologiche, Note del Paroliere, testi delle pagine
          istituzionali — è rilasciato sotto licenza{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            Creative Commons Attribuzione-Condividi allo stesso modo 4.0
            Internazionale (CC BY-SA 4.0)
          </a>
          .
        </p>

        <div className="space-y-3">
          {[
            {
              label: "Puoi",
              items: [
                "Condividere — copiare e redistribuire il contenuto in qualsiasi formato.",
                "Adattare — remixare, trasformare e costruire sul contenuto per qualsiasi scopo.",
              ],
              color: "text-[#b8dc16]",
            },
            {
              label: "A condizione che",
              items: [
                "Attribuzione — devi dare credito a Il Paroliere e a Pistakkio®, indicare la licenza e segnalare eventuali modifiche.",
                "Stessa licenza — se adatti o distribuisci il contenuto, devi usare la stessa licenza CC BY-SA 4.0.",
              ],
              color: "text-[#b8b3a7]",
            },
          ].map((block) => (
            <div key={block.label} className="space-y-1.5">
              <p
                className={`text-xs font-semibold uppercase tracking-wide ${block.color}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {block.label}
              </p>
              <ul className="space-y-1">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-[#b8b3a7] leading-relaxed"
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    <span className="shrink-0 mt-1 text-[#2a2a2a]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Attribution example */}
        <div className="bg-[#181818] border border-[#2a2a2a] rounded-lg p-4 space-y-2">
          <p
            className="text-xs text-[#b8b3a7] uppercase tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Esempio di attribuzione corretta
          </p>
          <blockquote
            className="text-[1.0625rem] text-[#f7f3e8] leading-relaxed"
            style={{ fontFamily: "Lora, serif" }}
          >
            Definizione originale da{" "}
            <strong>Il Paroliere</strong> (https://ilparoliere.online), progetto
            a cura di Pistakkio®. Licenza CC BY-SA 4.0.
          </blockquote>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Licenza codice */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <h2
            className="text-xl font-semibold text-[#f7f3e8]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Codice sorgente
          </h2>
          <span
            className="text-xs px-2.5 py-1 bg-[#1a001a] text-[#c970b0] border border-[#2a2a2a] rounded font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            MIT
          </span>
        </div>

        <p
          className="text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Il codice sorgente di Il Paroliere è rilasciato sotto licenza{" "}
          <a
            href="https://opensource.org/license/mit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            MIT
          </a>
          . Il codice è pubblico e disponibile su richiesta.
        </p>

        {/* MIT text */}
        <div className="bg-[#181818] border border-[#2a2a2a] rounded-lg p-4">
          <pre
            className="text-xs text-[#b8b3a7] leading-relaxed whitespace-pre-wrap"
            style={{ fontFamily: "monospace" }}
          >{`MIT License

Copyright (c) 2026 Pistakkio® / Fabrizio Gabrielli

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.`}</pre>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Cosa NON è coperto */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cosa non è coperto da queste licenze
        </h2>
        <div
          className="space-y-3 text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Le licenze CC BY-SA 4.0 e MIT coprono esclusivamente il contenuto
            originale prodotto da Il Paroliere e da Pistakkio®.
          </p>
          <p>
            I link a fonti esterne (Treccani, De Mauro, Wiktionary, ecc.) rimandano
            a contenuti soggetti alle rispettive licenze dei titolari. Non sono
            presenti su questo sito testi copiati da dizionari proprietari.
          </p>
        </div>
      </section>
    </article>
  );
}
