import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 127px;
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );

  @media ${(props) => props.theme.media.sm} {
    height: 100px;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 2;
  }
`;

export const HeaderContentWrap = styled.div`
  max-width: 1330px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 0px 50px;
  box-sizing: border-box;
  gap: 40px;

  @media ${(props) => props.theme.media.sm} {
    gap: 20px;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;
  position: relative;
  z-index: 1;
  background: inherit;

  @media ${(props) => props.theme.media.sm} {
    display: block;
  }
`;

export const HeaderLogoWrap = styled.div`
  position: relative;
  svg {
    fill: ${(props) => props.theme.colors.white};
  }

  @media ${(props) => props.theme.media.sm} {
    svg {
      width: 150px;
      height: 40px;
    }
  }
`;
