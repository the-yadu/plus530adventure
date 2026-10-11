import { adventures, type Adventure } from '../data/adventures';

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
export function transformApiAdventure(item: any): Adventure {
  const batchDates: string[] = Array.isArray(item.batches)
    ? item.batches
        .filter((b: any) => !b.status || (b.status !== 'cancelled' && b.status !== 'completed'))
        .map((b: any) => (typeof b === 'string' ? b : (b.displayLabel || b.startDate || '')))
        .filter(Boolean)
    : (Array.isArray(item.nextBatchDates) ? item.nextBatchDates : []);

  return {
    id: String(item.id || ''),
    slug: String(item.slug || ''),
    type: item.type || 'car',
    title: String(item.title || ''),
    description: String(item.description || ''),
    longDescription: String(item.longDescription ?? item.long_description ?? item.description ?? ''),
    duration: String(item.duration || ''),
    difficulty: item.difficulty || 'Moderate',
    price: String(item.price || ''),
    image: String(item.image || ''),
    backgroundImage: String(item.backgroundImage ?? item.background_image ?? item.image ?? ''),
    nextBatchDates: batchDates,
    highlights: Array.isArray(item.highlights) ? item.highlights : [],
    included: Array.isArray(item.included) ? item.included : [],
    gallery: Array.isArray(item.gallery) ? item.gallery : [],
    itinerary: Array.isArray(item.itinerary) ? item.itinerary : [],
    featured: Boolean(item.featured),
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
      return data.adventures.map(transformApiAdventure);
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
