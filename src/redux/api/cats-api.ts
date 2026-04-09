import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CatImageResponse, CatsFilters } from '../../types';
import { normalizeFilters } from '../../utils';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/images/search',
  }),
  endpoints: (build) => ({
    getCatsImages: build.query<CatImageResponse[], CatsFilters>({
      query: (filters = {}) => ({
        url: '',
        params: normalizeFilters(filters),
      }),

      serializeQueryArgs: ({ endpointName }) => endpointName,

      merge: (currentCache, newItems) => {
        const ids = new Set(currentCache.map((c) => c.id));

        for (const item of newItems) {
          if (!ids.has(item.id)) {
            currentCache.push(item);
          }
        }
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetCatsImagesQuery } = catsApi;
