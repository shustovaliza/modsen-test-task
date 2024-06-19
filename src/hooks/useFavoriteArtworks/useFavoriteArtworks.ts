import { artworksActions } from '@/store/slices/artworks.slice';
import { isArtworkFavorite } from '@/store/slices/artworks.slice.selectors';
import { useAppDispatch, useAppSelector } from '@/store/store.types';

export const useFavoriteArtworks = (artwork_id: number) => {
  const isFavorite = useAppSelector((state) =>
    isArtworkFavorite(state, artwork_id),
  );
  const dispatch = useAppDispatch();

  const addToFavorites = () =>
    dispatch(artworksActions.addArtworkToFavorites(artwork_id));

  return { isFavorite, addToFavorites };
};
