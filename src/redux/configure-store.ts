import { configureStore } from '@reduxjs/toolkit';
import { catsApi } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';
import favoriteReducer from './reducers/favorite-slice';

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
    favorite: favoriteReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
