import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex: 1 1 auto;
    max-width: 1330px;
    width: 100%;
    margin: 0px auto;
    padding: 0px 50px;
    box-sizing: border-box;
  }
`;
