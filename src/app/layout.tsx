import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Il Paroliere — Definizioni aperte, lingua viva.",
    template: "%s — Il Paroliere",
  },
  description:
    "Il Paroliere è un dizionario italiano aperto e originale. " +
    "Definizioni curate, esempi d'uso, note editoriali. " +
    "Un progetto Pistakkio®.",
  metadataBase: new URL("https://ilparoliere.online"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Il Paroliere",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-[#111111] text-[#f7f3e8] min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-[#2a2a2a] px-5 sm:px-8 lg:px-12 py-4 sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-label="Il Paroliere — homepage"
            >
              {/* Logo icon — libro aperto originale Il Paroliere */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Cerchio sfondo */}
                <circle cx="17" cy="17" r="17" fill="#1a1a1a" />
                {/* Libro aperto: copertina sinistra */}
                <path
                  d="M8 11 C8 10 9 9.5 10 9.5 L16.2 9.5 L16.2 23.5 L10 23.5 C9 23.5 8 23 8 22 Z"
                  fill="#2a2a2a"
                  stroke="#b8dc16"
                  strokeWidth="0.8"
                />
                {/* Libro aperto: copertina destra */}
                <path
                  d="M26 11 C26 10 25 9.5 24 9.5 L17.8 9.5 L17.8 23.5 L24 23.5 C25 23.5 26 23 26 22 Z"
                  fill="#2a2a2a"
                  stroke="#b8dc16"
                  strokeWidth="0.8"
                />
                {/* Dorso centrale */}
                <rect x="16" y="9" width="2" height="15" fill="#b8dc16" rx="0.5" />
                {/* Righe testo pagina sinistra */}
                <line x1="10" y1="13" x2="15.2" y2="13" stroke="#b8dc16" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
                <line x1="10" y1="15.5" x2="15.2" y2="15.5" stroke="#b8dc16" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
                <line x1="10" y1="18" x2="14" y2="18" stroke="#b8dc16" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
                {/* Righe testo pagina destra */}
                <line x1="18.8" y1="13" x2="24" y2="13" stroke="#b8dc16" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
                <line x1="18.8" y1="15.5" x2="24" y2="15.5" stroke="#b8dc16" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
                <line x1="18.8" y1="18" x2="22.5" y2="18" stroke="#b8dc16" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-[#f7f3e8] group-hover:text-[#b8dc16] transition-colors">
                Il Paroliere
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden sm:flex items-center gap-6 text-[1rem] text-[#b8b3a7]"
              aria-label="Navigazione principale"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Link href="/progetto" className="hover:text-[#f7f3e8] transition-colors">
                Progetto
              </Link>
              <Link href="/fonti" className="hover:text-[#f7f3e8] transition-colors">
                Fonti
              </Link>
              <Link href="/contribuisci" className="hover:text-[#f7f3e8] transition-colors">
                Contribuisci
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <MobileNav />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] px-5 sm:px-8 lg:px-12 py-10 mt-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Nav istituzionale */}
            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#b8b3a7]"
              aria-label="Navigazione istituzionale"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Link href="/progetto" className="hover:text-[#b8dc16] transition-colors">
                Il progetto
              </Link>
              <Link href="/fonti" className="hover:text-[#b8dc16] transition-colors">
                Fonti
              </Link>
              <Link href="/licenza" className="hover:text-[#b8dc16] transition-colors">
                Licenza
              </Link>
              <Link href="/contribuisci" className="hover:text-[#b8dc16] transition-colors">
                Contribuisci
              </Link>
              <Link href="/privacy" className="hover:text-[#b8dc16] transition-colors">
                Privacy
              </Link>
            </nav>

            {/* Colophon */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-[#b8b3a7]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p>
                Il Paroliere è un progetto open source curato da{" "}
                <a
                  href="https://www.pistakkio.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b8dc16] transition-colors"
                >
                  Pistakkio®
                </a>
                . Contenuto —{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b8dc16] transition-colors"
                >
                  CC BY-SA 4.0
                </a>
                . Codice — MIT.
              </p>
              <p className="text-[#b8b3a7]/60">
                Le fonti esterne sono collegate, mai copiate.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
