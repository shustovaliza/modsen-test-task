export enum AddToFavoritesButtonAppearance {
  default = 'default',
  white = 'white',
}

export type AddToFavoritesButtonProps = {
  onClick: () => void;
  isFavorite: boolean;
  appearance?: AddToFavoritesButtonAppearance;
};
