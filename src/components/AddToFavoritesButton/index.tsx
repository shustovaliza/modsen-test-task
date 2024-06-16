import FavoritesIcon from '@/assets/icons/bookmark.svg?react';

import { AddToFavoritesButtonAppearance } from './AddToFavoritesButton.types';
import { AddToFavoritesBtnWrap } from './styles';

export const AddToFavoritesButton = ({
  onClick,
  isFavorite,
  appearance = AddToFavoritesButtonAppearance.default,
}: {
  onClick: () => void;
  isFavorite: boolean;
  appearance?: AddToFavoritesButtonAppearance;
}) => {
  return (
    <AddToFavoritesBtnWrap
      $isFavorite={isFavorite}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      $appearance={appearance}
    >
      <FavoritesIcon />
    </AddToFavoritesBtnWrap>
  );
};
