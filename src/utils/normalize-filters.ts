import type { CatsFilters } from '../types';

export const normalizeFilters = (filters: CatsFilters) => ({
  limit: filters?.limit ?? 10,
  breed_ids: filters?.breed_ids,
});
