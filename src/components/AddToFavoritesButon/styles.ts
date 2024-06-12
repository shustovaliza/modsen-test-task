import styled from 'styled-components';

export const AddToFavoritesBtnWrap = styled.button<{
  $isFavorite: boolean;
  $appearance: 'default' | 'white';
}>`
  min-width: 59px;
  width: 59px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    if (props.$appearance === 'white') {
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
    props.$appearance === 'white' ? '1px solid #F0F1F1' : 'none'};
  border-radius: 50%;
  opacity: 1;

  svg {
    stroke: ${(props) => props.theme.colors.orange};
    fill: ${(props) =>
      props.$appearance === 'white' && props.$isFavorite
        ? props.theme.colors.orange
        : ''};
  }
`;
