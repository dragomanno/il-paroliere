import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contribuisci — Il Paroliere",
  description:
    "Come contribuire a Il Paroliere: proponi nuovi lemmi, segnala errori, " +
    "migliora le definizioni. Il progetto è aperto a chi ama la lingua italiana.",
};

type ContributeWay = {
  title: string;
  description: string;
  action?: { label: string; url: string; external?: boolean };
};

const modi: ContributeWay[] = [
  {
    title: "Proponi un lemma",
    description:
      "Hai una parola che meriterebbe di essere in Il Paroliere? Apri una issue " +
      "su GitHub con il lemma proposto e una breve spiegazione del perché vale " +
      "la pena includerlo. Le parole più interessanti sono quelle con una storia, " +
      "una sfumatura o un uso che i dizionari standard trattano superficialmente.",
    action: {
      label: "Apri una issue",
      url: "https://github.com/dragomanno/il-paroliere/issues/new",
      external: true,
    },
  },
  {
    title: "Segnala un errore",
    description:
      "Hai trovato un errore in una definizione, un esempio poco convincente, " +
      "un'etimologia inesatta? Ogni segnalazione è preziosa. Il Paroliere cresce " +
      "per correzione progressiva, non per perfezione immediata.",
    action: {
      label: "Segnala su GitHub",
      url: "https://github.com/dragomanno/il-paroliere/issues",
      external: true,
    },
  },
  {
    title: "Scrivi una voce",
    description:
      "Se conosci la lingua italiana, hai senso del registro e sai distinguere " +
      "una definizione utile da una burocratica, puoi proporre una voce completa. " +
      "Leggi le linee guida editoriali nel repository prima di iniziare.",
    action: {
      label: "Leggi le linee guida",
      url: "https://github.com/dragomanno/il-paroliere/blob/main/README.md",
      external: true,
    },
  },
  {
    title: "Migliora il codice",
    description:
      "Il Paroliere è un progetto Next.js + TypeScript + Tailwind, aperto e " +
      "documentato. Se vedi margini di miglioramento tecnico — accessibilità, " +
      "performance, architettura — apri una pull request.",
    action: {
      label: "Repository GitHub",
      url: "https://github.com/dragomanno/il-paroliere",
      external: true,
    },
  },
];

export default function ContribuisciPage() {
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
        <span className="text-[#f7f3e8]">Contribuisci</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f7f3e8]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Contribuisci
        </h1>
        <p
          className="text-lg text-[#b8b3a7] leading-relaxed max-w-xl"
          style={{ fontFamily: "Lora, serif" }}
        >
          Il Paroliere è aperto a chiunque ami la lingua italiana e voglia
          contribuire con cura, non con quantità.
        </p>
      </header>

      <hr className="border-[#2a2a2a]" />

      {/* Principio */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Prima di tutto
        </h2>
        <div
          className="space-y-4 text-[#f7f3e8] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il Paroliere privilegia la qualità sulla quantità. Una voce ben fatta
            vale più di dieci voci mediocri. Il progetto non ha fretta di crescere:
            ha fretta di crescere bene.
          </p>
          <p>
            Ogni contributo deve rispettare il principio fondamentale: nessun testo
            copiato da fonti proprietarie. Tutto quello che entra in Il Paroliere
            deve essere originale — o deve poter essere liberamente riutilizzato
            con attribuzione (come il contenuto di Wiktionary sotto CC BY-SA 4.0).
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Modi per contribuire */}
      <section className="space-y-6">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Come puoi contribuire
        </h2>
        <div className="space-y-4">
          {modi.map((modo, i) => (
            <div
              key={i}
              className="p-5 bg-[#181818] border border-[#2a2a2a] rounded-lg space-y-3"
            >
              <h3
                className="text-base font-semibold text-[#f7f3e8]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {modo.title}
              </h3>
              <p
                className="text-sm text-[#b8b3a7] leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {modo.description}
              </p>
              {modo.action && (
                <a
                  href={modo.action.url}
                  target={modo.action.external ? "_blank" : undefined}
                  rel={modo.action.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm text-[#b8dc16]
                             hover:underline underline-offset-2 transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {modo.action.label}
                  {modo.action.external && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Principi editoriali */}
      <section className="space-y-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Principi editoriali per i contributori
        </h2>
        <ul className="space-y-3">
          {[
            "Le definizioni devono essere originali. Non si copia, non si parafrasano testi proprietari.",
            "Gli esempi devono suonare naturali in italiano contemporaneo.",
            "I sinonimi non sono liste: ogni sinonimo ha un registro e un contesto d'uso.",
            "La Nota del Paroliere è il posto per l'intelligenza editoriale. Non deve essere un riassunto della definizione.",
            "Gli accenti italiani si rispettano sempre: è, à, ù, ì, ò. Nessuna semplificazione.",
            "Il tono è calmo, preciso, culturalmente consapevole. Mai accademico per il gusto di esserlo.",
          ].map((p, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-[#b8b3a7] leading-relaxed"
              style={{ fontFamily: "Lora, serif" }}
            >
              <span className="text-[#b8dc16] shrink-0 mt-0.5">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Licenza dei contributi */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Licenza dei contributi
        </h2>
        <p
          className="text-sm text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          Contribuendo a Il Paroliere accetti che il tuo contributo venga
          pubblicato sotto licenza{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            CC BY-SA 4.0
          </a>{" "}
          (per il contenuto) e{" "}
          <Link
            href="/licenza"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            MIT
          </Link>{" "}
          (per il codice). Vedi la pagina{" "}
          <Link
            href="/licenza"
            className="text-[#b8dc16] hover:underline underline-offset-2"
          >
            Licenza
          </Link>{" "}
          per i dettagli.
        </p>
      </section>
    </article>
  );
}
