import styled from 'styled-components';

export const NotFoundPageWrap = styled.article`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  h1 {
    color: ${(props) => props.theme.colors.lightOrange};
    font-size: 40px;
  }

  h1,
  h2 {
    text-align: center;
  }

  @media ${(props) => props.theme.media.sm} {
    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;
