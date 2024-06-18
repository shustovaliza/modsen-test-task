import { RootState } from '../store.types';

export const isArtworkFavorite = (state: RootState, id: number) =>
  state.artworks.favoriteArtworks.includes(id);

export const getFavoriteArtworksId = (state: RootState) =>
  state.artworks.favoriteArtworks;
