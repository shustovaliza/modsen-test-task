import styled, { css } from 'styled-components';

export const ArtworkCardWrap = styled.div<{ $appearance: 'big' | 'small' }>`
  ${(props) => {
    switch (props.$appearance) {
      case 'small':
        return css`
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 130px;
          gap: 15px;
          padding: 20px 13px 20px 13px;
          box-sizing: border-box;
          border: 1px solid #f0f1f1;
          background: ${(props) => props.theme.colors.white};
          align-items: center;
        `;
      default:
        return css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 514px;
          position: relative;
          align-items: center;

          @media ${(props) => props.theme.media.sm} {
            flex-direction: row;
            background: ${(props) => props.theme.colors.white};
            padding: 20px;
            box-sizing: border-box;
            height: 130px;
            gap: 15px;
            border: 1px solid #f0f1f1;
          }

          @media ${(props) => props.theme.media.xs} {
            padding: 20px 13px 20px 13px;
            gap: 10px;
          }
        `;
    }
  }}
`;

export const ImageWrap = styled.a<{ $appearance: 'big' | 'small' }>`
  ${(props) => {
    switch (props.$appearance) {
      case 'small':
        return css`
          min-width: 80px;
          width: 80px;
          max-height: 80px;

          img {
            display: block;
            height: 80px;
            width: 80px;
            object-fit: cover;
          }
        `;
      default:
        return css`
          width: 100%;
          max-height: 444px;
          height: 100%;

          img {
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }

          @media ${(props) => props.theme.media.sm} {
            min-width: 80px;
            width: 80px;
            max-height: 80px;
          }
        `;
    }
  }}
`;

export const ArtworkDescription = styled.div<{ $appearance: 'big' | 'small' }>`
  ${(props) => {
    switch (props.$appearance) {
      case 'small':
        return css`
          height: 100%;
          width: 100%;
          display: flex;
          gap: 10px;
          justify-content: space-between;
          align-items: center;
        `;
      default:
        return css`
          position: absolute;
          width: 90%;
          height: 132px;
          padding: 24px;
          box-sizing: border-box;
          bottom: 0px;
          background-color: ${(props) => props.theme.colors.white};
          display: flex;
          gap: 10px;
          justify-content: space-between;
          align-items: center;

          @media ${(props) => props.theme.media.sm} {
            position: relative;
            padding: 0px;
            height: 100%;
            width: 100%;
          }
        `;
    }
  }}
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 200px;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    span {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: ${(props) => props.theme.colors.lightOrange};
    }

    a {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 18px;
      font-weight: 500;
      line-height: 20px;
    }
  }

  @media ${(props) => props.theme.media.sm} {
    div {
      span {
        font-size: 14px;
      }

      a {
        font-size: 16px;
      }
    }
  }
`;

export const ArtworkType = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  color: ${(props) => props.theme.colors.black};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
