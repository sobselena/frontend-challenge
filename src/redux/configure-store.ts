import { configureStore } from '@reduxjs/toolkit';
import { catsApi } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
