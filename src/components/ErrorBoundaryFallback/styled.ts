import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.backgroundMainColor};
  display: flex;
  font-family: Lexend Deca;
  font-weight: 400;
`;

export const ErrorContentWrap = styled.div`
  max-width: 1330px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 0px 50px;
  box-sizing: border-box;
  gap: 20px;

  h1 {
    text-align: center;
  }
`;

export const ResetButton = styled.button`
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-radius: 5px;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.orange};
`;
