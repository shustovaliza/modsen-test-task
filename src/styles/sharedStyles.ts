import styled from 'styled-components';

export const H2Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme.colors.lightOrange};
    text-align: center;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
  }
`;

export const PageBlock = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
