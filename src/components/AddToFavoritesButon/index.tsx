import FavoritesIcon from '@/assets/icons/bookmark.svg?react';

import { AddToFavoritesBtnWrap } from './styles';

export const AddToFavoritesButton = ({
  onClick,
  isFavorite,
  appearance = 'default',
}: {
  onClick: () => void;
  isFavorite: boolean;
  appearance?: 'default' | 'white';
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
