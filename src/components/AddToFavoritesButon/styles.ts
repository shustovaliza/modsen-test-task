import styled from 'styled-components';

export const AddToFavoritesBtnWrap = styled.button<{ $isFavorite: boolean }>`
  min-width: 59px;
  width: 59px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$isFavorite
      ? props.theme.colors.orangeTransparent
      : props.theme.colors.backgroundMainColor};
  border-radius: 50%;

  &:hover {
    background: ${(props) => props.theme.colors.orangeTransparent};
  }

  svg {
    stroke: ${(props) => props.theme.colors.orange};
  }
`;
