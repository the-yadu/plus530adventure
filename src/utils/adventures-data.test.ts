import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { adventures } from '../data/adventures';
import {
  getPublishedAdventures,
  getPublishedAdventureBySlug,
  getDashboardApiUrl,
  transformApiAdventure,
} from './adventures-data';

describe('adventures-data utility', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.restoreAllMocks();
    delete process.env.PUBLIC_DASHBOARD_API_URL;
    delete process.env.DASHBOARD_API_URL;
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  describe('getDashboardApiUrl', () => {
    it('returns undefined when no environment variable is configured', () => {
      expect(getDashboardApiUrl()).toBeUndefined();
    });

    it('returns trimmed PUBLIC_DASHBOARD_API_URL from process.env', () => {
      process.env.PUBLIC_DASHBOARD_API_URL = ' https://dashboard.plus530adventure.com  ';
      expect(getDashboardApiUrl()).toBe('https://dashboard.plus530adventure.com');
    });

    it('returns DASHBOARD_API_URL when PUBLIC_DASHBOARD_API_URL is unset', () => {
      process.env.DASHBOARD_API_URL = 'https://api.plus530adventure.com';
      expect(getDashboardApiUrl()).toBe('https://api.plus530adventure.com');
    });
  });

  describe('transformApiAdventure', () => {
    it('maps batch displayLabels and startDates into nextBatchDates', () => {
      const apiItem = {
        id: 'adv-123',
        slug: 'spiti-valley-expedition',
        type: 'car',
        title: 'Spiti Valley Expedition',
        description: 'Epic 4x4 drive',
        long_description: 'Full details of Spiti expedition',
        duration: '8 Days',
        difficulty: 'Challenging',
        price: '₹95,000',
        image: '/images/spiti.jpg',
        background_image: '/images/spiti-bg.jpg',
        featured: true,
        batches: [
          { id: 'b1', displayLabel: '15th Oct 2026', startDate: '2026-10-15', status: 'open' },
          { id: 'b2', startDate: '2026-11-01', status: 'filling_fast' },
          { id: 'b3', displayLabel: 'Cancelled Batch', startDate: '2026-12-01', status: 'cancelled' },
        ],
        highlights: ['High altitude passes'],
        included: ['Hotels', 'Permits'],
        gallery: ['/images/spiti-1.jpg'],
        itinerary: [{ day: 1, title: 'Arrival', description: 'Acclimatize' }],
      };

      const transformed = transformApiAdventure(apiItem);
      expect(transformed.id).toBe('adv-123');
      expect(transformed.slug).toBe('spiti-valley-expedition');
      expect(transformed.type).toBe('car');
      expect(transformed.title).toBe('Spiti Valley Expedition');
      expect(transformed.longDescription).toBe('Full details of Spiti expedition');
      expect(transformed.backgroundImage).toBe('/images/spiti-bg.jpg');
      expect(transformed.featured).toBe(true);
      expect(transformed.nextBatchDates).toEqual(['15th Oct 2026', '2026-11-01']);
    });

    it('falls back to nextBatchDates array if batches is not provided', () => {
      const apiItem = {
        id: 'adv-456',
        slug: 'ladakh-trail',
        title: 'Ladakh Trail',
        nextBatchDates: ['20th Sep 2026'],
      };

      const transformed = transformApiAdventure(apiItem);
      expect(transformed.nextBatchDates).toEqual(['20th Sep 2026']);
    });
  });

  describe('getPublishedAdventures - static fallback', () => {
    it('returns static adventures when API URL is unset', async () => {
      const result = await getPublishedAdventures();
      expect(result).toBe(adventures);
      expect(result.length).toBeGreaterThan(0);
    });

    it('finds adventure by slug from static data when API URL is unset', async () => {
      const firstSlug = adventures[0].slug;
      const found = await getPublishedAdventureBySlug(firstSlug);
      expect(found).toBeDefined();
      expect(found?.slug).toBe(firstSlug);

      const notFound = await getPublishedAdventureBySlug('non-existent-adventure-slug');
      expect(notFound).toBeUndefined();
    });
  });

  describe('getPublishedAdventures - live API fetch', () => {
    it('fetches and maps adventures from the Plus530 Adventure Dashboard App API', async () => {
      process.env.PUBLIC_DASHBOARD_API_URL = 'https://dashboard.plus530adventure.com';

      const mockApiResponse = {
        success: true,
        adventures: [
          {
            id: 'remote-1',
            slug: 'remote-himalayan-pass',
            type: 'car',
            title: 'Remote Himalayan Pass',
            description: 'Traverse high mountain passes',
            longDescription: 'In-depth description of the pass route',
            duration: '7 Days',
            difficulty: 'Moderate',
            price: '₹85,000',
            image: '/images/remote.jpg',
            backgroundImage: '/images/remote-hero.jpg',
            featured: true,
            batches: [
              { id: 'batch-1', displayLabel: '10th Oct 2026', startDate: '2026-10-10', status: 'open' },
            ],
            highlights: ['Snow passes'],
            included: ['Lead vehicle'],
            gallery: ['/images/remote-g1.jpg'],
            itinerary: [{ day: 1, title: 'Day 1', description: 'Start' }],
          },
        ],
      };

      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockApiResponse,
      } as Response);

      const result = await getPublishedAdventures();

      expect(fetchSpy).toHaveBeenCalledWith(
        'https://dashboard.plus530adventure.com/api/adventures/public',
        expect.objectContaining({ signal: expect.anything() })
      );
      expect(result).toHaveLength(1);
      expect(result[0].slug).toBe('remote-himalayan-pass');
      expect(result[0].nextBatchDates).toEqual(['10th Oct 2026']);

      // Also verify getPublishedAdventureBySlug works with fetched data
      fetchSpy.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockApiResponse,
      } as Response);

      const found = await getPublishedAdventureBySlug('remote-himalayan-pass');
      expect(found).toBeDefined();
      expect(found?.title).toBe('Remote Himalayan Pass');
    });

    it('strips trailing slashes from API URL before requesting /api/adventures/public', async () => {
      process.env.PUBLIC_DASHBOARD_API_URL = 'https://dashboard.plus530adventure.com///';

      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ success: true, adventures: [{ id: '1', slug: 'test-adv' }] }),
      } as Response);

      await getPublishedAdventures();

      expect(fetchSpy).toHaveBeenCalledWith(
        'https://dashboard.plus530adventure.com/api/adventures/public',
        expect.anything()
      );
    });
  });

  describe('getPublishedAdventures - graceful error handling & fallbacks', () => {
    it('gracefully falls back to static adventures when fetch throws a network error', async () => {
      process.env.PUBLIC_DASHBOARD_API_URL = 'https://dashboard.plus530adventure.com';

      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Connection refused'));

      const result = await getPublishedAdventures();

      expect(result).toBe(adventures);
      expect(warnSpy).toHaveBeenCalledWith(
        'Dashboard API unreachable; falling back to local adventures data:',
        expect.any(Error)
      );
    });

    it('gracefully falls back to static adventures on request timeout', async () => {
      process.env.PUBLIC_DASHBOARD_API_URL = 'https://dashboard.plus530adventure.com';

      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const abortError = new Error('The operation was aborted due to timeout');
      abortError.name = 'TimeoutError';
      vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(abortError);

      const result = await getPublishedAdventures();

      expect(result).toBe(adventures);
      expect(warnSpy).toHaveBeenCalledWith(
        'Dashboard API unreachable; falling back to local adventures data:',
        abortError
      );
    });

    it('gracefully falls back to static adventures when API returns a 500 error', async () => {
      process.env.PUBLIC_DASHBOARD_API_URL = 'https://dashboard.plus530adventure.com';

      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      } as Response);

      const result = await getPublishedAdventures();

      expect(result).toBe(adventures);
      expect(warnSpy).toHaveBeenCalledWith(
        'Dashboard API unreachable; falling back to local adventures data:',
        expect.any(Error)
      );
    });

    it('falls back to static adventures when API returns empty adventures list', async () => {
      process.env.PUBLIC_DASHBOARD_API_URL = 'https://dashboard.plus530adventure.com';

      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ success: true, adventures: [] }),
      } as Response);

      const result = await getPublishedAdventures();
      expect(result).toBe(adventures);
    });
  });
});
