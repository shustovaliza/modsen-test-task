import FavoritesIcon from '@/assets/icons/bookmark.svg?react';

import { AddToFavoritesButtonAppearance } from './AddToFavoritesButton.types';
import { AddToFavoritesBtnWrap } from './styles';

type AddToFavoritesButtonProps = {
  onClick: () => void;
  isFavorite: boolean;
  appearance?: AddToFavoritesButtonAppearance;
};

export const AddToFavoritesButton = ({
  onClick,
  isFavorite,
  appearance = AddToFavoritesButtonAppearance.default,
}: AddToFavoritesButtonProps) => {
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
