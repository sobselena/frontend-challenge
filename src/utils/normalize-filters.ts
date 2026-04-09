import type { CatsFilters } from '../types';

export const normalizeFilters = (filters: CatsFilters) => ({
  limit: filters?.limit ?? 10,
  page: filters?.page ?? 0,
  order: filters?.order ?? 'RAND',
  has_breeds: filters?.has_breeds ?? 0,
  breed_ids: filters?.breed_ids,
  category_ids: filters?.category_ids,
  sub_id: filters?.sub_id,
});
