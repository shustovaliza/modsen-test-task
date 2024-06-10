import styled from 'styled-components';

export const MenuWrap = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  a {
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    gap: 8px;
    align-items: center;

    &[data-active='true'] {
      color: ${(props) => props.theme.colors.lightOrange};
    }

    &:hover {
      color: ${(props) => props.theme.colors.lightOrange};
    }
  }

  @media ${(props) => props.theme.media.sm} {
    position: absolute;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    justify-content: center;
    background: linear-gradient(
      90deg,
      #343333 38.05%,
      #484848 69.22%,
      #282828 98.98%
    );
    right: 0;
    top: 100px;
    transform: translateX(100%);
    transition: transform 300ms ease-in-out;

    &[data-open='true'] {
      transform: translateX(0);
    }
  }
`;
