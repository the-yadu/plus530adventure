import { adventures, type Adventure } from '../data/adventures';

export interface ApiBatch {
  id?: string;
  displayLabel?: string;
  startDate?: string;
  endDate?: string | null;
  status?: string;
  seatsTotal?: number;
  seatsBooked?: number;
}

export interface ApiAdventure {
  id?: string;
  slug: string;
  type?: string;
  title?: string;
  description?: string;
  longDescription?: string;
  duration?: string;
  difficulty?: string;
  price?: string;
  image?: string;
  backgroundImage?: string;
  featured?: boolean;
  highlights?: string[];
  included?: string[];
  gallery?: string[];
  itinerary?: Array<{ day: number; title: string; description: string }>;
  batches?: ApiBatch[];
  nextBatchDates?: string[];
}

/**
 * Resolves the Plus530 Adventure Dashboard App API URL from environment variables.
 */
export function getDashboardApiUrl(): string | undefined {
  let url: string | undefined;

  if (typeof import.meta !== 'undefined' && import.meta.env) {
    url = import.meta.env.PUBLIC_DASHBOARD_API_URL || import.meta.env.DASHBOARD_API_URL;
  }

  if (!url && typeof process !== 'undefined' && process.env) {
    url = process.env.PUBLIC_DASHBOARD_API_URL || process.env.DASHBOARD_API_URL;
  }

  return url && url.trim().length > 0 ? url.trim() : undefined;
}

/**
 * Transforms an adventure object returned by the Dashboard App API to match the website's Adventure interface.
 */
export function transformApiAdventure(item: unknown): Adventure {
  if (!item || typeof item !== 'object') {
    return {} as Adventure;
  }
  const adv = item as ApiAdventure;
  const batchDates: string[] = Array.isArray(adv.batches)
    ? adv.batches
        .filter((b): b is ApiBatch => Boolean(b && typeof b === 'object' && (!b.status || (b.status !== 'cancelled' && b.status !== 'completed'))))
        .map((b) => (b.displayLabel || b.startDate || ''))
        .filter(Boolean)
    : (Array.isArray(adv.nextBatchDates) ? adv.nextBatchDates.filter(Boolean) : []);

  return {
    id: String(adv.id || ''),
    slug: String(adv.slug || ''),
    type: (adv.type as any) || 'car',
    title: String(adv.title || ''),
    description: String(adv.description || ''),
    longDescription: String(adv.longDescription ?? (adv as any).long_description ?? adv.description ?? ''),
    duration: String(adv.duration || ''),
    difficulty: (adv.difficulty as any) || 'Moderate',
    price: String(adv.price || ''),
    image: String(adv.image || ''),
    backgroundImage: String(adv.backgroundImage ?? (adv as any).background_image ?? adv.image ?? ''),
    nextBatchDates: batchDates,
    highlights: Array.isArray(adv.highlights) ? adv.highlights : [],
    included: Array.isArray(adv.included) ? adv.included : [],
    gallery: Array.isArray(adv.gallery) ? adv.gallery : [],
    itinerary: Array.isArray(adv.itinerary) ? adv.itinerary : [],
    featured: Boolean(adv.featured),
  };
}

/**
 * Fetches published adventures from the Plus530 Adventure Dashboard App API,
 * with fail-safe fallback to static adventure records when the API is unconfigured or unreachable.
 */
export async function getPublishedAdventures(): Promise<Adventure[]> {
  const apiUrl = getDashboardApiUrl();
  if (!apiUrl) {
    return adventures;
  }

  try {
    const baseUrl = apiUrl.replace(/\/+$/, '');
    const endpoint = `${baseUrl}/api/adventures/public`;
    const signal = typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function'
      ? AbortSignal.timeout(3000)
      : undefined;

    const response = await fetch(endpoint, { signal });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data && Array.isArray(data.adventures) && data.adventures.length > 0) {
      const validAdventures = data.adventures.filter((item: unknown) => Boolean(item && typeof item === 'object' && (item as any).slug));
      if (validAdventures.length > 0) {
        return validAdventures.map(transformApiAdventure);
      }
    }

    return adventures;
  } catch (err) {
    console.warn('Dashboard API unreachable; falling back to local adventures data:', err);
    return adventures;
  }
}

/**
 * Retrieves a published adventure by its slug.
 */
export async function getPublishedAdventureBySlug(slug: string): Promise<Adventure | undefined> {
  const publishedAdventures = await getPublishedAdventures();
  return publishedAdventures.find((adventure) => adventure.slug === slug);
}
