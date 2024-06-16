import styled from 'styled-components';

export const FavoritesPageContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    max-width: 684px;
    width: 100%;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 72px;

    div {
      color: ${(props) => props.theme.colors.orange};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      svg {
        stroke: ${(props) => props.theme.colors.orange};
        min-height: 50px;
        min-width: 50px;
      }
    }
  }

  @media ${(props) => props.theme.media.lg} {
    h1 {
      font-size: 54px;
    }
  }

  @media ${(props) => props.theme.media.sm} {
    h1 {
      font-size: 40px;
    }
  }
`;

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
