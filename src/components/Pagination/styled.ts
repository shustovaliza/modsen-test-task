import styled from 'styled-components';

type ArrowButtonProps = {
  hidden: boolean;
};

export const PaginationWrap = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @media ${(props) => props.theme.media.sm} {
    gap: 10px;
  }
`;

export const PaginationButton = styled.button`
  min-width: 35px;
  height: 35px;
  padding: 5px;
  box-sizing: border-box;
  background: inherit;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  color: ${(props) => props.theme.colors.black};

  &:hover {
    color: ${(props) => props.theme.colors.lightOrange};
  }

  &[data-active='true'] {
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    background: ${(props) => props.theme.colors.orange};
  }
`;

export const ArrowsButton = styled.button<ArrowButtonProps>`
  background: inherit;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 35px;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};

  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.lightOrange};
    }
  }
`;
