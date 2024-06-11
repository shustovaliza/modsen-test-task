import styled from 'styled-components';

export const MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    max-width: 684px;
    width: 100%;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    margin-bottom: 34px;

    span {
      color: ${(props) => props.theme.colors.orange};
    }
  }

  @media ${(props) => props.theme.media.lg} {
    h1 {
      font-size: 54px;
      line-height: 60px;
    }
  }

  @media ${(props) => props.theme.media.sm} {
    h1 {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

export const ArtworkCardsWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 40px;

  @media ${(props) => props.theme.media.sm} {
    gap: 16px;
  }
`;

export const BlocksWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
`;

export const GalleryBlockWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const PaginationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ArtworksWrapExtra = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 16px;
`;
