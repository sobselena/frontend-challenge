import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CatImageResponse, CatsFilters } from '../../types';
import { normalizeFilters } from '../../utils';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/images/search',
  }),
  endpoints: (build) => ({
    getCatsImages: build.query<CatImageResponse[], CatsFilters | void>({
      query: (filters: CatsFilters = {}) => ({
        url: ``,
        params: normalizeFilters(filters),
      }),
    }),
  }),
});

export const { useGetCatsImagesQuery } = catsApi;
