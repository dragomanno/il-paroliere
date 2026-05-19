"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/progetto", label: "Progetto" },
  { href: "/fonti", label: "Fonti" },
  { href: "/contribuisci", label: "Contribuisci" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="sm:hidden">
      {/* Hamburger / X button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
        className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-[5px]
                   text-[#b8b3a7] hover:text-[#f7f3e8] transition-colors"
      >
        <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-200 origin-center
          ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-200
          ${open ? "opacity-0 w-0" : ""}`} />
        <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-200 origin-center
          ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer — slide in from right */}
      <nav
        aria-label="Navigazione mobile"
        aria-hidden={!open}
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw]
                    bg-[#161616] border-l border-[#2a2a2a]
                    z-50 flex flex-col justify-between
                    px-7 pt-24 pb-10
                    shadow-2xl
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Main links */}
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[1.25rem] font-semibold py-3 border-b border-[#2a2a2a] transition-colors
                ${pathname === href
                  ? "text-[#b8dc16]"
                  : "text-[#f7f3e8] hover:text-[#b8dc16]"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex flex-col gap-3 text-[0.9375rem] text-[#b8b3a7]">
          <Link href="/licenza" className="hover:text-[#b8dc16] transition-colors">
            Licenza
          </Link>
          <Link href="/privacy" className="hover:text-[#b8dc16] transition-colors">
            Privacy
          </Link>
        </div>
      </nav>
    </div>
  );
}
