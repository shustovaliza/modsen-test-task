import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { localStorageNames } from '@/constants/localStorage';
import { Artwork } from '@/types/artwork';

const getInitialState = (): { favoriteArtworks: Artwork['id'][] } => {
  const savedFavoriteArtworks = localStorage.getItem(
    localStorageNames.favoriteArtworks,
  );

  return savedFavoriteArtworks
    ? (JSON.parse(savedFavoriteArtworks) as {
        favoriteArtworks: Artwork['id'][];
      })
    : { favoriteArtworks: [] };
};

export const artworksSlice = createSlice({
  name: 'artworks',
  initialState: getInitialState,
  reducers: {
    addArtworkToFavorites: (state, action: PayloadAction<Artwork['id']>) => {
      state.favoriteArtworks = state.favoriteArtworks.includes(action.payload)
        ? state.favoriteArtworks.filter((item) => item !== action.payload)
        : [...state.favoriteArtworks, action.payload];
      localStorage.setItem(
        localStorageNames.favoriteArtworks,
        JSON.stringify({ favoriteArtworks: state.favoriteArtworks }),
      );
    },
  },
});

export const { actions: artworksActions } = artworksSlice;
