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
    margin-bottom: 72px;

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
`;
