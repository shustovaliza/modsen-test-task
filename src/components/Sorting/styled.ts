import styled from 'styled-components';

export const SortingWrap = styled.form``;

export const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  font-size: 18px;
  height: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 40px;

  label {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #f0f1f1;
  border-radius: 5px;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.theme.colors.orange};
  }

  &:checked::before {
    content: '';
    display: block;
    position: absolute;
    left: 9px;
    top: 3px;
    width: 7px;
    height: 14px;
    border: solid ${(props) => props.theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
