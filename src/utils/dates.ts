/**
 * Parses date strings such as "15th Oct 2026", "05th Nov 2026", "15 Dec 2026", "2026-10-15" into a Date object.
 */
export function parseBatchDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  // Remove ordinal suffixes (st, nd, rd, th) e.g. "15th Oct 2026" -> "15 Oct 2026"
  const cleanStr = dateStr.replace(/(\d+)(st|nd|rd|th)/i, '$1');
  const timestamp = Date.parse(cleanStr);
  if (isNaN(timestamp)) return null;
  return new Date(timestamp);
}

/**
 * Filters an array of batch date strings to return only future/today dates.
 * A date is considered upcoming if its end of day (23:59:59) is not in the past relative to referenceDate (default now).
 */
export function getUpcomingBatchDates(dates?: string[], referenceDate: Date = new Date()): string[] {
  if (!dates || !Array.isArray(dates)) return [];
  
  // Set start of reference date day or compare timestamp
  const refTime = referenceDate.getTime();

  return dates.filter((d) => {
    const parsed = parseBatchDate(d);
    if (!parsed) return true; // Keep unparseable string fallbacks if any
    
    // Set end of day for the batch date to allow same-day departure
    const endOfDay = new Date(parsed);
    endOfDay.setHours(23, 59, 59, 999);
    
    return endOfDay.getTime() >= refTime;
  });
}
