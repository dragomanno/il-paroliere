/**
 * Il Paroliere — date formatting for display
 *
 * Dates arrive as ISO strings (e.g. "2026-11-13T00:00:00.000Z" or
 * "2026-11-13"). The calendar date is taken from the string itself, not
 * through Date, so the displayed day never shifts with the time zone.
 *
 * License: MIT
 */

/** "2026-11-13T00:00:00.000Z" → "2026-11-13", or undefined if not a date. */
export function isoDay(value?: string): string | undefined {
  const m = value?.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : undefined;
}

/** "2026-11-13T00:00:00.000Z" → "13/11/2026", or undefined if not a date. */
export function formatDate(value?: string): string | undefined {
  const day = isoDay(value);
  if (!day) return undefined;
  const [y, m, d] = day.split("-");
  return `${d}/${m}/${y}`;
}
