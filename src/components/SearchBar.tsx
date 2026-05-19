"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  buildSearchIndex,
  createFuseInstance,
  searchLemmas,
  type SearchableEntry,
} from "@/lib/search";
import { allLemmas } from "@/content/lemmas";
import type Fuse from "fuse.js";

// Build index once at module level (client-side only)
let fuseInstance: Fuse<SearchableEntry> | null = null;

function getFuse(): Fuse<SearchableEntry> {
  if (!fuseInstance) {
    const index = buildSearchIndex(allLemmas);
    fuseInstance = createFuseInstance(index);
  }
  return fuseInstance;
}

type SearchBarProps = {
  /** Placeholder text */
  placeholder?: string;
  /** Additional CSS classes for the wrapper */
  className?: string;
  /** If true, autofocus on mount */
  autoFocus?: boolean;
};

export default function SearchBar({
  placeholder = "Cerca una parola…",
  className = "",
  autoFocus = false,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Run search on query change
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      setActiveIndex(-1);
      return;
    }
    const found = searchLemmas(query, getFuse());
    setResults(found.slice(0, 6)); // max 6 results in dropdown
    setIsOpen(found.length > 0);
    setActiveIndex(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateTo = useCallback(
    (slug: string) => {
      setIsOpen(false);
      setQuery("");
      router.push(`/parola/${slug}`);
    },
    [router]
  );

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        navigateTo(results[activeIndex].slug);
      } else if (results.length === 1) {
        navigateTo(results[0].slug);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && dropdownRef.current) {
      const item = dropdownRef.current.children[activeIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {/* Input */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b8b3a7] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Cerca una parola nel dizionario"
          aria-autocomplete="list"
          aria-controls={isOpen ? "search-results" : undefined}
          aria-activedescendant={
            activeIndex >= 0 ? `result-${activeIndex}` : undefined
          }
          className="w-full pl-11 pr-4 py-3 bg-[#181818] border border-[#2a2a2a] rounded-lg
                     text-[#f7f3e8] placeholder-[#b8b3a7] text-sm
                     focus:outline-none focus:border-[#b8dc16]
                     transition-colors duration-150"
          style={{ fontFamily: "Poppins, sans-serif" }}
        />
        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b8b3a7]
                       hover:text-[#f7f3e8] transition-colors p-1"
            aria-label="Cancella ricerca"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {isOpen && results.length > 0 && (
        <ul
          id="search-results"
          ref={dropdownRef}
          role="listbox"
          aria-label="Risultati della ricerca"
          className="absolute top-full left-0 right-0 mt-1 z-50
                     bg-[#181818] border border-[#2a2a2a] rounded-lg
                     shadow-xl overflow-hidden"
        >
          {results.map((entry, i) => (
            <li
              key={entry.slug}
              id={`result-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(e) => {
                e.preventDefault(); // prevent input blur before click
                navigateTo(entry.slug);
              }}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex flex-col gap-0.5 px-4 py-3 cursor-pointer transition-colors duration-100
                         border-b border-[#2a2a2a] last:border-b-0
                         ${
                           i === activeIndex
                             ? "bg-[#1e1e1e]"
                             : "hover:bg-[#1e1e1e]"
                         }`}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="font-semibold text-sm text-[#f7f3e8]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {entry.lemma}
                </span>
                {entry.register.slice(0, 1).map((r) => (
                  <span
                    key={r}
                    className="text-xs text-[#b8b3a7]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p
                className="text-xs text-[#b8b3a7] leading-snug line-clamp-1"
                style={{ fontFamily: "Lora, serif" }}
              >
                {entry.shortDefinition}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
