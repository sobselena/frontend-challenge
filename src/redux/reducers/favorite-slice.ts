import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const stored = localStorage.getItem('cats');

type Cat = {
  id: string;
  url: string;
};

const initialState: { favorites: Cat[] } = {
  favorites: stored ? (JSON.parse(stored) as Cat[]) : [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: PayloadAction<Cat>) => {
      const exists = state.favorites.some((cat) => cat.id === payload.id);

      if (exists) {
        state.favorites = state.favorites.filter((cat) => cat.id !== payload.id);
      } else {
        state.favorites.push(payload);
      }

      localStorage.setItem('cats', JSON.stringify(state.favorites));
    },
  },
});
export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
