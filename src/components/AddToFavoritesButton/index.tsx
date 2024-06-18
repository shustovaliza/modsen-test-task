import FavoritesIcon from '@/assets/icons/bookmark.svg?react';

import {
  AddToFavoritesButtonAppearance,
  AddToFavoritesButtonProps,
} from './AddToFavoritesButton.types';
import { AddToFavoritesBtnWrap } from './styles';

export const AddToFavoritesButton = ({
  onClick,
  isFavorite,
  appearance = AddToFavoritesButtonAppearance.default,
}: AddToFavoritesButtonProps) => {
  return (
    <AddToFavoritesBtnWrap
      $isFavorite={isFavorite}
      onClick={onClick}
      $appearance={appearance}
    >
      <FavoritesIcon />
    </AddToFavoritesBtnWrap>
  );
};
