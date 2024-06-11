import styled from 'styled-components';

export const ErrorWrap = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h1,
  h2 {
    text-align: center;
  }

  @media ${(props) => props.theme.media.sm} {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;
