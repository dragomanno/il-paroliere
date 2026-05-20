import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Il Paroliere",
  description:
    "Informativa sulla privacy di Il Paroliere: nessun cookie, nessun tracker, " +
    "nessun dato personale raccolto. Trattamento dei log di accesso ai sensi del GDPR.",
};

export default function PrivacyPage() {
  return (
    <article className="space-y-12 max-w-2xl pt-6 sm:pt-8">
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
        <span className="text-[#f7f3e8]">Privacy Policy</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f7f3e8]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-sm text-[#b8b3a7]" 
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Ultima modifica: 19 maggio 2026
        </p>
      </header>

      <hr className="border-[#2a2a2a]" />

      {/* Titolare */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Titolare del trattamento
        </h2>
        <div
          className="space-y-2 text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il Paroliere è un progetto editoriale aperto curato da{" "}
            <strong className="text-[#f7f3e8]">Pistakkio® SEO Agency</strong> di
            Fabrizio Gabrielli, con sede operativa a Firenze, Toscana, Italia, presso il{" "}
            <a
              href="https://www.thesocialhub.co/it/firenze-belfiore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              The Social Hub Florence Belfiore
            </a>
            .
          </p>
          <p>
            Contatto:{" "}
            <a
              href="mailto:ciao@ilparoliere.online"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              ciao@ilparoliere.online
            </a>
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Cookie */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cookie e tecnologie di tracciamento
        </h2>
        <div
          className="space-y-3 text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            <strong className="text-[#f7f3e8]">
              Il Paroliere non utilizza cookie di alcun tipo.
            </strong>{" "}
            Non sono presenti cookie di profilazione, cookie analytics (Google
            Analytics, Matomo o equivalenti), né cookie di terze parti di alcun
            genere. Non è installato alcun pixel pubblicitario.
          </p>
          <p>
            Il sito non incorpora contenuti esterni che possano impostare cookie
            (es. video YouTube, pulsanti social, widget). Tutti i font (Poppins,
            Lora) sono serviti localmente.
          </p>
          <p>
            Non viene mostrato alcun banner cookie perché non ce n'è necessità.
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Log di accesso */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Log di accesso
        </h2>
        <div
          className="space-y-3 text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Il sito è ospitato su{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              Netlify
            </a>{" "}
            (Netlify, Inc., 512 2nd Street, San Francisco, CA 94107, USA). Come
            ogni server web, Netlify registra automaticamente i log di accesso, che
            possono includere:
          </p>
          <ul className="space-y-1 pl-4 list-disc list-inside marker:text-[#b8dc16]">
            <li>Indirizzo IP del visitatore</li>
            <li>Data e ora della richiesta</li>
            <li>URL richiesto</li>
            <li>Codice di risposta HTTP</li>
            <li>User-agent del browser</li>
          </ul>
          <p>
            Questi dati sono trattati da Netlify come responsabile del trattamento
            ai sensi del GDPR, per finalità tecniche di sicurezza e diagnostica. Il
            titolare del trattamento (Pistakkio®) non accede ai log in forma
            disaggregata né li utilizza per profilare gli utenti.
          </p>
          <p>
            Per i dettagli sul trattamento da parte di Netlify, consulta la{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              Privacy Policy di Netlify
            </a>
            .
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Form di contatto */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Modulo di contribuzione
        </h2>
        <div
          className="space-y-3 text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            La pagina{" "}
            <Link
              href="/contribuisci"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              Contribuisci
            </Link>{" "}
            ospita un modulo di contatto opzionale. I dati inseriti (nome, email,
            messaggio) sono trasmessi tramite Netlify Forms e ricevuti all'indirizzo{" "}
            <a
              href="mailto:ciao@ilparoliere.online"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              ciao@ilparoliere.online
            </a>
            .
          </p>
          <p>
            La compilazione del modulo è completamente facoltativa. I dati sono
            utilizzati esclusivamente per rispondere al contributo ricevuto e non
            vengono ceduti a terzi né utilizzati per finalità promozionali.
          </p>
          <p>
            L'email è opzionale: è possibile inviare un contributo anonimo senza
            indicare alcun recapito.
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Diritti */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          I tuoi diritti (GDPR art. 15–22)
        </h2>
        <div
          className="space-y-3 text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            Hai il diritto di accedere ai tuoi dati personali, richiederne la
            rettifica o la cancellazione, opporti al trattamento e richiedere la
            portabilità. Per esercitare questi diritti, scrivi a{" "}
            <a
              href="mailto:ciao@ilparoliere.online"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              ciao@ilparoliere.online
            </a>
            .
          </p>
          <p>
            Hai inoltre il diritto di proporre reclamo all'autorità di controllo
            competente: in Italia il{" "}
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8dc16] hover:underline underline-offset-2"
            >
              Garante per la Protezione dei Dati Personali
            </a>
            .
          </p>
        </div>
      </section>

      <hr className="border-[#2a2a2a]" />

      {/* Modifiche */}
      <section className="space-y-4">
        <h2
          className="text-xs font-semibold uppercase tracking-widest text-[#b8b3a7]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Modifiche a questa informativa
        </h2>
        <p
          className="text-[1.0625rem] text-[#b8b3a7] leading-relaxed"
          style={{ fontFamily: "Lora, serif" }}
        >
          In caso di modifiche sostanziali, la data di «Ultima modifica» in cima
          a questa pagina verrà aggiornata. Non essendo raccolti indirizzi email
          degli utenti, non è prevista notifica via email.
        </p>
      </section>
    </article>
  );
}
