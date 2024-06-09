import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 127px;
  background-color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.media.sm} {
    height: 100px;
  }
`;

export const FooterContentWrap = styled.div`
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

export const FooterLogoWrap = styled.div`
  display: flex;
  svg {
    fill: ${(props) => props.theme.colors.black};
  }

  @media ${(props) => props.theme.media.sm} {
    svg {
      width: 150px;
      height: 40px;
    }
  }

  @media ${(props) => props.theme.media.xs} {
    svg {
      width: 120px;
      height: 30px;
    }
  }
`;

export const ModsenLogoWrap = styled.div`
  @media ${(props) => props.theme.media.sm} {
    svg {
      width: 120px;
      height: 40px;
    }
  }

  @media ${(props) => props.theme.media.xs} {
    svg {
      width: 100px;
      height: 30px;
    }
  }
`;
