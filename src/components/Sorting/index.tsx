import { CheckboxContainer, SortingWrap } from './styled';

export const Sorting = ({
  isChecked,
  onChange,
}: {
  isChecked: boolean;
  onChange: () => void;
}) => {
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
