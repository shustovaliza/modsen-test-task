import styled from 'styled-components';

export const SortingWrap = styled.form``;

export const CheckboxContainer = styled.label`
  display: flex;
  position: relative;
  font-size: 18px;
  height: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 40px;
  cursor: pointer;
  align-items: center;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ span {
    background-color: ${(props) => props.theme.colors.orange};
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.orange};
    border-radius: 5px;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
    left: 11px;
    top: 4px;
    width: 7px;
    height: 14px;
    border: solid ${(props) => props.theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input:checked ~ span::after {
    display: block;
  }
`;
