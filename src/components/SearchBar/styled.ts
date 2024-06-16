import styled from 'styled-components';

export const SearchBarForm = styled.form`
  max-width: 762px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100px;
  justify-content: flex-end;
`;

export const SearchBarErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error};
`;

export const SearchInputWrap = styled.div`
  position: relative;
  width: 100%;
  height: 62px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px 60px 16px 16px;
  border-radius: 16px;
  background: #3939390d;
  font-size: 16px;
  line-height: 17px;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.mainFont};
  font-weight: 300;
  outline: none;
  border: solid 2px transparent;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.orange};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 15px;
  width: 35px;
  height: 35px;
  top: 15px;
  fill: ${(props) => props.theme.colors.black};
  background: inherit;

  &:disabled {
    pointer-events: none;
  }
`;
