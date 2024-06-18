import styled from 'styled-components';

export const ArtworkCardsWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 40px;

  @media ${(props) => props.theme.media.sm} {
    gap: 16px;
  }
`;

export const NothingFoundMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
  }
`;

export const PaginationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
