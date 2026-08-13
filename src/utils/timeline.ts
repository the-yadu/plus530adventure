import { adventures, type Adventure, getAdventureUrl, getTypeLabel } from '../data/adventures';
import { parseBatchDate, getUpcomingBatchDates } from './dates';

export interface TimelineBatchItem {
  dateStr: string;
  dateObj: Date;
  monthYearKey: string; // e.g. "September 2026"
  formattedDay: string; // e.g. "01 SEP"
  adventure: Adventure;
}

export interface MonthGroup {
  monthYearKey: string;
  items: TimelineBatchItem[];
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_SHORT = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

export function getGroupedTimelineBatches(): MonthGroup[] {
  const allBatchItems: TimelineBatchItem[] = [];

  adventures.forEach((adv) => {
    const upcoming = getUpcomingBatchDates(adv.nextBatchDates);
    upcoming.forEach((dateStr) => {
      const parsed = parseBatchDate(dateStr);
      if (parsed) {
        const monthYearKey = `${MONTH_NAMES[parsed.getMonth()]} ${parsed.getFullYear()}`;
        const day = parsed.getDate().toString().padStart(2, '0');
        const monthShort = MONTH_SHORT[parsed.getMonth()];
        const formattedDay = `${day} ${monthShort}`;

        allBatchItems.push({
          dateStr,
          dateObj: parsed,
          monthYearKey,
          formattedDay,
          adventure: adv,
        });
      }
    });
  });

  // Sort chronologically by start date
  allBatchItems.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  // Group by Month Year
  const groupMap = new Map<string, TimelineBatchItem[]>();
  allBatchItems.forEach((item) => {
    if (!groupMap.has(item.monthYearKey)) {
      groupMap.set(item.monthYearKey, []);
    }
    groupMap.get(item.monthYearKey)!.push(item);
  });

  const result: MonthGroup[] = [];
  groupMap.forEach((items, monthYearKey) => {
    result.push({
      monthYearKey,
      items,
    });
  });

  return result;
}
