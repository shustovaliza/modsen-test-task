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
