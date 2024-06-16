import { CheckboxContainer, SortingWrap } from './styled';

type SortingProps = {
  isChecked: boolean;
  onChange: () => void;
};

export const Sorting = ({ isChecked, onChange }: SortingProps) => {
  return (
    <SortingWrap>
      <CheckboxContainer htmlFor="sortByUpdateDate">
        Sort by update date
        <input
          type="checkbox"
          id="sortByUpdateDate"
          checked={isChecked}
          onChange={onChange}
        ></input>
        <span></span>
      </CheckboxContainer>
    </SortingWrap>
  );
};
