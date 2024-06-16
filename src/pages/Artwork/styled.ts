import styled from 'styled-components';

export const ArtworkPageContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 80px;

  h1 {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
  }

  @media ${(props) => props.theme.media.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrap = styled.section`
  max-width: 500px;
  min-width: 400px;
  width: 100%;
  height: 570px;
  position: relative;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  @media ${(props) => props.theme.media.sm} {
    min-width: 330px;
    height: 500px;
  }
`;

export const ArtworkContentContainer = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 160px;

  @media ${(props) => props.theme.media.md} {
    gap: 100px;
  }
`;

export const MainInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    span {
      &:first-child {
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
        color: ${(props) => props.theme.colors.lightOrange};
      }

      &:last-child {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
      }
    }
  }
`;

export const OverviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
  }
`;

export const OverviewInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;

    span {
      &:first-child {
        color: ${(props) => props.theme.colors.lightOrange};
      }
      margin-right: 7px;
    }
  }
`;
