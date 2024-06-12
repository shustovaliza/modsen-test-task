import { SortingWrap } from './styled';

export const Sorting = () => {
  return (
    <SortingWrap>
      <div>
        <input type="checkbox" id="sortByUpdateDate" checked={true} />
        <label htmlFor="sortByUpdateDate">Sort by update date</label>
      </div>
    </SortingWrap>
  );
};
