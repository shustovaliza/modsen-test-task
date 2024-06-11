import { AddToFavoritesBtnWrap } from './styles';
import FavoritesIcon from '@/assets/icons/bookmark.svg?react';

export const AddToFavoritesButton = ({
  onClick,
  isFavorite,
}: {
  onClick: () => void;
  isFavorite: boolean;
}) => {
  return (
    <AddToFavoritesBtnWrap
      $isFavorite={isFavorite}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      <FavoritesIcon />
    </AddToFavoritesBtnWrap>
  );
};
