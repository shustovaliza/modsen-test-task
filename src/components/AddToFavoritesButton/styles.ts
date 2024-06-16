import styled from 'styled-components';

import { AddToFavoritesButtonAppearance } from './AddToFavoritesButton.types';

export const AddToFavoritesBtnWrap = styled.button<{
  $isFavorite: boolean;
  $appearance: AddToFavoritesButtonAppearance;
}>`
  min-width: 59px;
  width: 59px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    if (props.$appearance === AddToFavoritesButtonAppearance.white) {
      return props.theme.colors.white;
    } else {
      if (props.$isFavorite) {
        return props.theme.colors.orangeTransparent;
      } else {
        return props.theme.colors.backgroundMainColor;
      }
    }
  }};
  border: ${(props) =>
    props.$appearance === AddToFavoritesButtonAppearance.white
      ? '1px solid #F0F1F1'
      : 'none'};
  border-radius: 50%;
  opacity: 1;

  svg {
    stroke: ${(props) => props.theme.colors.orange};
    fill: ${(props) =>
      props.$appearance === AddToFavoritesButtonAppearance.white &&
      props.$isFavorite
        ? props.theme.colors.orange
        : ''};
  }
`;
