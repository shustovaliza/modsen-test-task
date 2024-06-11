import { AddToFavoritesBtnWrap } from './styles';
import FavoritesIcon from '@/assets/icons/bookmark.svg?react';

export const AddToFavoritesButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <AddToFavoritesBtnWrap
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      <FavoritesIcon />
    </AddToFavoritesBtnWrap>
  );
};
