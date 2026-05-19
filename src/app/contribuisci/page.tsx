"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ContribuisciPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new URLSearchParams();
    data.append("form-name", "contribuzione");
    for (const [key, value] of new FormData(form) as Iterable<[string, FormDataEntryValue]>) {
      data.append(key, value.toString());
    }

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          className="text-[1.125rem] text-[#b8b3a7] leading-relaxed max-w-xl"
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

      {/* Form di contribuzione */}
      <section className="space-y-6">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Scrivi al team editoriale
        </h2>
        <p
          className="text-[1.0625rem] text-[#b8b3a7] leading-relaxed max-w-xl"
          style={{ fontFamily: "Lora, serif" }}
        >
          Usa il modulo qui sotto per proporre un lemma, segnalare un errore o
          proporre una voce completa. Leggiamo tutto; rispondiamo quando possiamo
          essere utili.
        </p>

        {status === "ok" ? (
          <div
            className="max-w-xl rounded-md border border-[#b8dc16]/30 bg-[#b8dc16]/10 px-5 py-4 text-[1rem] text-[#b8dc16]"
            style={{ fontFamily: "Lora, serif" }}
          >
            Grazie — il tuo contributo è stato inviato. Ti risponderemo se possiamo
            essere utili.
          </div>
        ) : (
          <form
            name="contribuzione"
            onSubmit={handleSubmit}
            className="space-y-5 max-w-xl"
          >
            {/* Honeypot — nascosto */}
            <p className="hidden">
              <label>
                Non compilare:{" "}
                <input name="bot-field" />
              </label>
            </p>

            {/* Tipo di contributo */}
            <div className="space-y-2">
              <label
                htmlFor="tipo"
                className="block text-sm font-semibold uppercase tracking-widest text-[#b8b3a7]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Tipo di contributo
              </label>
              <select
                id="tipo"
                name="tipo"
                required
                className="w-full bg-[#181818] border border-[#2a2a2a] rounded-md px-4 py-2.5
                           text-[1rem] text-[#f7f3e8] focus:outline-none focus:border-[#b8dc16]
                           transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <option value="">— Seleziona —</option>
                <option value="proposta-lemma">Proposta di nuovo lemma</option>
                <option value="segnalazione-errore">Segnalazione di errore</option>
                <option value="voce-completa">Proposta di voce completa</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Nome */}
            <div className="space-y-2">
              <label
                htmlFor="nome"
                className="block text-sm font-semibold uppercase tracking-widest text-[#b8b3a7]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Nome (opzionale)
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Come ti chiami?"
                className="w-full bg-[#181818] border border-[#2a2a2a] rounded-md px-4 py-2.5
                           text-[1rem] text-[#f7f3e8] placeholder:text-[#3a3a3a]
                           focus:outline-none focus:border-[#b8dc16] transition-colors"
                style={{ fontFamily: "Lora, serif" }}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold uppercase tracking-widest text-[#b8b3a7]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Email (opzionale, per ricevere risposta)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tua@email.it"
                className="w-full bg-[#181818] border border-[#2a2a2a] rounded-md px-4 py-2.5
                           text-[1rem] text-[#f7f3e8] placeholder:text-[#3a3a3a]
                           focus:outline-none focus:border-[#b8dc16] transition-colors"
                style={{ fontFamily: "Lora, serif" }}
              />
            </div>

            {/* Messaggio */}
            <div className="space-y-2">
              <label
                htmlFor="messaggio"
                className="block text-sm font-semibold uppercase tracking-widest text-[#b8b3a7]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                required
                rows={6}
                placeholder="Descrivi il tuo contributo. Per proposte di lemma: scrivi il termine, il motivo per cui merita una voce e — se vuoi — una bozza di definizione."
                className="w-full bg-[#181818] border border-[#2a2a2a] rounded-md px-4 py-2.5
                           text-[1rem] text-[#f7f3e8] placeholder:text-[#3a3a3a] leading-relaxed
                           focus:outline-none focus:border-[#b8dc16] transition-colors resize-y"
                style={{ fontFamily: "Lora, serif" }}
              />
            </div>

            {status === "error" && (
              <p
                className="text-[1rem] text-red-400"
                style={{ fontFamily: "Lora, serif" }}
              >
                Si è verificato un errore. Riprova tra qualche minuto o scrivici
                direttamente a{" "}
                <a
                  href="mailto:ciao@ilparoliere.online"
                  className="underline underline-offset-2"
                >
                  ciao@ilparoliere.online
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md
                         bg-[#b8dc16] text-[#0d0d0d] text-sm font-semibold
                         hover:bg-[#c8ec26] transition-colors duration-150
                         disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {status === "sending" ? "Invio in corso…" : "Invia contributo"}
            </button>
          </form>
        )}
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
          className="text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
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
