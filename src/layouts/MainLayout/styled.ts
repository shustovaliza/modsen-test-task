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
    padding: 120px 50px;
    box-sizing: border-box;
  }

  @media ${(props) => props.theme.media.sm} {
    main {
      padding: 150px 20px 50px 20px;
    }
  }
`;
