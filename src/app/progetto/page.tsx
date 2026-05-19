import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Il progetto — Il Paroliere",
  description:
    "Il Paroliere è un dizionario italiano aperto, curato da Pistakkio®. " +
    "Scopri la visione, il metodo editoriale e i principi del progetto.",
};

export default function ProgettoPage() {
  return (
    <article className="space-y-12">
      {/* Breadcrumb */}
      <nav
        className="text-xs text-[#b8b3a7]"
        aria-label="Navigazione"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Link href="/" className="hover:text-[#b8dc16] transition-colors">
          Il Paroliere
        </Link>
        <span className="mx-2 opacity-40">›</span>
        <span className="text-[#f7f3e8]">Il progetto</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f7f3e8]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Il progetto
        </h1>
        <p
          className="text-xl text-[#b8dc16] font-medium"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Definizioni aperte, lingua viva.
        </p>
      </header>

      <hr className="border-[#2a2a2a]" />

      {/* Manifesto */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cos'è Il Paroliere
        </h2>
        <div
          className="space-y-4 text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il Paroliere è un dizionario italiano digitale aperto. Non è una copia
            di nessun altro dizionario esistente, non è generato automaticamente,
            non è ottimizzato per il traffico. È un progetto editoriale: ogni voce
            è scritta da zero, con cura.
          </p>
          <p>
            L'idea di fondo è semplice. L'italiano ha dizionari autorevoli e preziosi —
            la Treccani, il De Mauro, il Sabatini-Coletti. Ma sono strumenti chiusi,
            proprietari, non riutilizzabili liberamente. Il Paroliere non vuole
            sostituirli: vuole affiancarli con uno strato di commento originale,
            libero e aperto.
          </p>
          <p>
            Ogni definizione del Paroliere è originale. Ogni esempio è scritto
            appositamente. Ogni nota editoriale — la Nota del Paroliere — aggiunge
            qualcosa che i dizionari tradizionali raramente si permettono: un punto
            di vista, una sfumatura d'uso, una considerazione culturale.
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Metodo */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Il metodo editoriale
        </h2>
        <div
          className="space-y-4 text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Ogni voce del Paroliere segue uno schema editoriale preciso. La definizione
            principale è lunga quanto serve, né di più né di meno. La
            shortDefinition è una sintesi di massimo 140 caratteri — pensata per
            i contesti in cui serve una risposta immediata.
          </p>
          <p>
            I sinonimi non sono liste piatte: ogni sinonimo è accompagnato da un
            registro d'uso e da una nota contestuale. La stessa parola può essere
            elegante in un registro letterario e grottesca in quello burocratico.
          </p>
          <p>
            L'etimologia è concisa e verificata. Gli esempi sono originali: non
            vengono copiati da corpus esistenti ma scritti appositamente per
            illustrare l'uso reale della parola nel contemporaneo.
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Cosa non è */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cosa Il Paroliere non è
        </h2>
        <ul
          className="space-y-3 text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          {[
            "Non è una copia di dizionari proprietari. Nessuna definizione è presa da Treccani, De Mauro, Sabatini-Coletti o Devoto-Oli.",
            "Non è un generatore automatico di contenuti. Ogni voce è scritta e revisionata editorialmente.",
            "Non è un progetto SEO. La qualità editoriale viene prima del traffico.",
            "Non è completo. È un progetto in costruzione, che cresce per accumulo di cura.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#b8dc16] shrink-0 mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Chi */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Chi c'è dietro
        </h2>
        <div
          className="space-y-4 text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il Paroliere è un progetto open source curato da{" "}
            <a
              href="https://www.pistakkio.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              Pistakkio®
            </a>
            , un'agenzia SEO toscana fondata da Fabrizio Gabrielli. Il progetto
            nasce dall'incrocio tra la passione per la lingua italiana, l'esperienza
            nella redazione multilingue e l'attenzione alla qualità editoriale che
            caratterizza l'approccio di Pistakkio al web.
          </p>
          <p>
            Il codice è aperto. Chiunque può contribuire, segnalare errori, proporre nuovi lemmi.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 pt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
        <Link
          href="/contribuisci"
          className="px-4 py-2 bg-[#b8dc16] text-[#111111] text-sm font-semibold rounded hover:bg-[#c8ec26] transition-colors"
        >
          Come contribuire
        </Link>
        <Link
          href="/fonti"
          className="px-4 py-2 bg-[#181818] border border-[#2a2a2a] text-[#f7f3e8] text-sm rounded hover:border-[#b8dc16] transition-colors"
        >
          Politica sulle fonti
        </Link>
      </div>
    </article>
  );
}
