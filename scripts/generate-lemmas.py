#!/usr/bin/env python3
"""
Il Paroliere — Generatore lemmi
================================
Legge un file Markdown con blocchi JSON (prodotti dal motore stilometrico)
e genera:
  1. Un file .ts per ogni lemma in src/content/lemmas/
  2. Aggiorna src/content/lemmas/static.ts (import + array)

Usage:
  python3 scripts/generate-lemmas.py <file_markdown.md>

Il file Markdown deve contenere blocchi ```json { ... } ``` per ogni lemma.

IMPORTANTE:
- Tutti i lemmi vengono generati con editorialStatus: "reviewed" e indexable: true
  perché questo script si usa SOLO dopo approvazione editoriale esplicita.
- Il campo examples: [] è sempre incluso anche se vuoto (obbligatorio per il seed).
- static.ts viene aggiornato in modo sicuro tramite marker di testo, non sed.

License: MIT
"""

import json
import re
import os
import sys
from datetime import date

# ── Paths ─────────────────────────────────────────────────────────────────────
REPO_ROOT   = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEMMAS_DIR  = os.path.join(REPO_ROOT, "src", "content", "lemmas")
STATIC_PATH = os.path.join(LEMMAS_DIR, "static.ts")
TODAY       = date.today().isoformat()

# ── Helpers ───────────────────────────────────────────────────────────────────

def ts_str(s: str) -> str:
    if not s:
        return '""'
    s = s.replace('\\', '\\\\').replace('"', '\\"')
    return f'"{s}"'

def ts_str_long(s: str, indent: int = 4) -> str:
    """Spezza stringhe lunghe su più righe con operatore +."""
    if not s:
        return '""'
    s = s.replace('\\', '\\\\').replace('"', '\\"')
    words = s.split(' ')
    lines, current = [], ''
    for w in words:
        if len(current) + len(w) + 1 > 80:
            lines.append(current)
            current = w
        else:
            current = (current + ' ' + w).strip()
    if current:
        lines.append(current)
    pad = ' ' * indent
    if len(lines) == 1:
        return f'"{lines[0]}"'
    result = f'"{lines[0]} " +\n'
    for line in lines[1:-1]:
        result += f'{pad}"{line} " +\n'
    result += f'{pad}"{lines[-1]}"'
    return result

def generate_ts(data: dict) -> str:
    lemma        = data["lemma"]
    slug         = data["slug"]
    pos          = data.get("partOfSpeech", "sostantivo")
    gender       = data.get("gender", "")
    definition   = data.get("definition", "")
    short_def    = data.get("shortDefinition", "")
    register     = data.get("register", [])
    domains      = data.get("domains", [])
    etymology    = data.get("etymology", "")
    examples     = data.get("examples", [])   # sempre [] se assente
    synonyms     = data.get("synonyms", [])
    antonyms     = data.get("antonyms", [])
    related      = data.get("relatedWords", [])
    source_links = data.get("sourceLinks", [])
    note         = data.get("paroliereNote", "")
    seo          = data.get("seo", {})

    # sourceLinks → oggetto {wiktionary?, treccani?}
    src_parts = []
    if isinstance(source_links, list):
        for sl in source_links:
            url = sl.get("sourceUrl", "")
            if "wiktionary" in url:
                src_parts.append(f'    wiktionary: "{url}"')
            elif "treccani" in url:
                src_parts.append(f'    treccani: "{url}"')
    elif isinstance(source_links, dict):
        if "wiktionary" in source_links:
            src_parts.append(f'    wiktionary: "{source_links["wiktionary"]}"')
        if "treccani" in source_links:
            src_parts.append(f'    treccani: "{source_links["treccani"]}"')
    src_obj = "{\n" + ",\n".join(src_parts) + "\n  }" if src_parts else "{}"

    # Sinonimi
    syn_lines = []
    for s in synonyms:
        term = s.get("term", "")
        reg  = s.get("register", "")
        ctx  = s.get("context", s.get("note", ""))
        parts = [f'term: "{term}"']
        if reg:  parts.append(f'register: "{reg}"')
        if ctx:  parts.append(f'context: "{ctx}"')
        syn_lines.append("    { " + ", ".join(parts) + " }")

    # Contrari
    ant_lines = []
    for a in antonyms:
        term = a.get("term", "")
        reg  = a.get("register", "")
        ctx  = a.get("context", a.get("note", ""))
        parts = [f'term: "{term}"']
        if reg:  parts.append(f'register: "{reg}"')
        if ctx:  parts.append(f'context: "{ctx}"')
        ant_lines.append("    { " + ", ".join(parts) + " }")

    rel_lines = [f'    "{r}"' for r in related]
    ex_lines  = [f'    {ts_str_long(e, 4)},' for e in examples]

    reg_arr = ", ".join([f'"{r}"' for r in register])
    dom_arr = ", ".join([f'"{d}"' for d in domains])
    var_name = re.sub(r'[^a-zA-Z0-9_]', '_', slug).rstrip('_')

    L = []
    L.append(f"// Il Paroliere — Lemma: {lemma}")
    L.append(f"// Editorial status: reviewed | Content license: CC BY-SA 4.0")
    L.append("// IMPORTANT: all definitions and examples are original.")
    L.append("// External sources linked, not copied.")
    L.append("")
    L.append('import type { LemmaEntry } from "@/lib/types";')
    L.append("")
    L.append(f"export const {var_name}: LemmaEntry = {{")
    L.append(f"  lemma: {ts_str(lemma)},")
    L.append(f"  slug: {ts_str(slug)},")
    L.append(f"  partOfSpeech: {ts_str(pos)},")
    if gender:
        L.append(f"  gender: {ts_str(gender)},")
    L.append("")
    L.append(f"  definition:")
    L.append(f"    {ts_str_long(definition, 4)},")
    L.append("")
    L.append(f"  shortDefinition:")
    L.append(f"    {ts_str_long(short_def, 4)},")
    L.append("")
    L.append(f"  register: [{reg_arr}],")
    L.append(f"  domains: [{dom_arr}],")
    L.append("")
    if etymology:
        L.append(f"  etymology:")
        L.append(f"    {ts_str_long(etymology, 4)},")
        L.append("")
    L.append("  examples: [")
    for ex in ex_lines:
        L.append(f"  {ex}")
    L.append("  ],")
    L.append("")
    if synonyms:
        L.append("  synonyms: [")
        L.append(",\n".join(syn_lines))
        L.append("  ],")
        L.append("")
    if antonyms:
        L.append("  antonyms: [")
        L.append(",\n".join(ant_lines))
        L.append("  ],")
        L.append("")
    if related:
        L.append("  relatedWords: [")
        L.append(",\n".join(rel_lines))
        L.append("  ],")
        L.append("")
    L.append(f"  sourceLinks: {src_obj},")
    L.append("")
    if note:
        L.append(f"  paroliereNote:")
        L.append(f"    {ts_str_long(note, 4)},")
        L.append("")
    L.append(f'  editorialStatus: "reviewed",')
    L.append(f"  indexable: true,")
    L.append("")
    L.append("  seo: {")
    L.append(f"    title: {ts_str(seo.get('title', f'{lemma} — Il Paroliere'))},")
    L.append(f"    description:")
    L.append(f"      {ts_str_long(seo.get('description', short_def), 6)},")
    L.append("  },")
    L.append("")
    L.append(f'  createdAt: "{TODAY}",')
    L.append(f'  updatedAt: "{TODAY}",')
    L.append("};")

    return "\n".join(L)


def update_static(slugs: list[str], var_names: list[str]) -> None:
    """Aggiunge import e voci array in static.ts in modo sicuro."""
    with open(STATIC_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Trova l'ultimo import e la chiusura "];"
    import_lines = [l for l in content.splitlines() if l.startswith("import ")]
    last_import  = import_lines[-1] if import_lines else None

    if not last_import:
        print("ERRORE: nessun import trovato in static.ts")
        return

    batch_label = f"// Batch auto — {TODAY}"

    # Filtra slug già presenti
    new_slugs    = [s for s in slugs     if f'from "./{s}"' not in content]
    new_varnames = [v for v, s in zip(var_names, slugs) if s in new_slugs]

    if not new_slugs:
        print("  static.ts: tutti i lemmi già registrati, nessuna modifica.")
        return

    # Blocco import
    import_block = f"\n{batch_label}\n" + "\n".join(
        [f'import {{ {v} }} from "./{s}";' for v, s in zip(new_varnames, new_slugs)]
    )

    # Blocco array
    array_block = f"  {batch_label}\n" + "\n".join(
        [f"  {v}," for v in new_varnames]
    )

    # Inserisci import dopo ultimo import esistente
    content = content.replace(
        last_import,
        last_import + import_block,
        1
    )

    # Inserisci voci prima di "];"
    content = content.replace(
        "\n];",
        f"\n{array_block}\n];",
        1
    )

    with open(STATIC_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  static.ts: aggiunti {len(new_slugs)} import e voci array.")


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/generate-lemmas.py <file.md>")
        sys.exit(1)

    src_file = sys.argv[1]
    if not os.path.exists(src_file):
        print(f"File non trovato: {src_file}")
        sys.exit(1)

    with open(src_file, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = re.findall(r"```json\s*(\{.*?\})\s*```", content, re.DOTALL)
    print(f"Blocchi JSON trovati: {len(blocks)}")

    created, skipped, errors = [], [], []
    slugs, var_names = [], []

    for block in blocks:
        try:
            data     = json.loads(block)
            slug     = data.get("slug", "")
            var_name = re.sub(r'[^a-zA-Z0-9_]', '_', slug).rstrip('_')

            if not slug:
                errors.append("Nessuno slug nel blocco")
                continue

            out_path = os.path.join(LEMMAS_DIR, f"{slug}.ts")
            ts_code  = generate_ts(data)

            with open(out_path, "w", encoding="utf-8") as f:
                f.write(ts_code)

            slugs.append(slug)
            var_names.append(var_name)
            created.append(slug)
            print(f"  ✓ {slug}.ts")

        except json.JSONDecodeError as e:
            errors.append(f"JSON error: {str(e)[:60]}")
        except Exception as e:
            errors.append(f"Errore su {slug}: {str(e)[:60]}")

    # Aggiorna static.ts
    if slugs:
        print(f"\nAggiornamento static.ts...")
        update_static(slugs, var_names)

    # Riepilogo
    print(f"\n{'─'*40}")
    print(f"File .ts creati/aggiornati : {len(created)}")
    print(f"Errori                     : {len(errors)}")
    for e in errors:
        print(f"  ✗ {e}")
    if errors:
        sys.exit(1)
    print(f"\nProssimo step: git add src/content/lemmas/ → commit → push → PR → merge")


if __name__ == "__main__":
    main()
