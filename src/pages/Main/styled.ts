import styled from 'styled-components';

export const MainPageContainer = styled.article`
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

export const BlocksWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
`;

export const GalleryBlockWrap = styled.div`
  width: 100%;
  min-height: 580px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 1169px) {
    min-height: 1130px;
  }

  @media (max-width: 799px) {
    min-height: 1685px;
  }

  @media (max-width: 799px) {
    min-height: 1685px;
  }

  @media ${(props) => props.theme.media.sm} {
    min-height: 485px;
  }
`;

export const ArtworksWrapExtra = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 16px;
`;

export const SearchAndSortingWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
