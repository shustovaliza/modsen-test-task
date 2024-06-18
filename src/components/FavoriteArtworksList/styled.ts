import styled from 'styled-components';

export const FavoriteArtworksWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 16px;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
  }
`;
