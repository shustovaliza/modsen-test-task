import { Checkbox, CheckboxContainer, SortingWrap } from './styled';

export const Sorting = ({
  isChecked,
  onChange,
}: {
  isChecked: boolean;
  onChange: () => void;
}) => {
  return (
    <SortingWrap>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="sortByUpdateDate"
          checked={isChecked}
          onChange={onChange}
        />
        <label
          htmlFor="sortByUpdateDate"
          onClick={(event) => event.preventDefault()}
        >
          Sort by update date
        </label>
      </CheckboxContainer>
    </SortingWrap>
  );
};
