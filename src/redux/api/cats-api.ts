import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CatImageResponse, CatsFilters } from '../../types';
import { normalizeFilters } from '../../utils';
import { CATS_KEY } from '../../constants/cats-key';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/images/search',
    prepareHeaders: (headers) => {
      const apiKey = CATS_KEY;
      headers.set('x-api-key', apiKey);
      return headers;
    },
  }),

  endpoints: (build) => ({
    getCatsImages: build.query<CatImageResponse[], CatsFilters>({
      query: (filters = {}) => ({
        url: '',
        params: normalizeFilters(filters),
      }),

      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        const { breed_ids } = queryArgs || {};
        return `${endpointName}-${breed_ids || 'all'}`;
      },

      merge: (currentCache, newItems) => {
        const ids = new Set(currentCache.map((c) => c.id));

        for (const item of newItems) {
          if (!ids.has(item.id)) {
            currentCache.push(item);
          }
        }
      },

      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.page !== previousArg?.page || currentArg?.breed_ids !== previousArg?.breed_ids
        );
      },
    }),
  }),
});

export const { useGetCatsImagesQuery } = catsApi;
