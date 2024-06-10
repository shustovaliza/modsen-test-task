import { useMemo } from 'react';
import { ArrowsButton, PaginationButton, PaginationWrap } from './styled';
import RightArrowIcon from '@/assets/icons/rightArrow.svg?react';
import LeftArrowIcon from '@/assets/icons/leftArrow.svg?react';

export const Pagination = ({
  totalNumberOfPages,
  currentPage,
  onPageChange,
}: {
  totalNumberOfPages: number;
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const arrayOfCurrentButtons = useMemo(() => {
    let firstPage, lastPage;

    if (totalNumberOfPages <= 5) {
      firstPage = 1;
      lastPage = totalNumberOfPages;
    } else {
      if (currentPage <= 3) {
        firstPage = 1;
        lastPage = 5;
      } else if (currentPage + 3 >= totalNumberOfPages) {
        firstPage = totalNumberOfPages - 4;
        lastPage = totalNumberOfPages;
      } else {
        firstPage = currentPage - 2;
        lastPage = currentPage + 2;
      }
    }

    const resultArray = [];

    for (let i = firstPage; i <= lastPage; i++) {
      resultArray.push(i);
    }

    return resultArray;
  }, [currentPage]);

  return (
    <PaginationWrap>
      <ArrowsButton
        hidden={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <LeftArrowIcon />
      </ArrowsButton>
      {arrayOfCurrentButtons.map((number) => (
        <PaginationButton
          key={number}
          data-active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </PaginationButton>
      ))}
      <ArrowsButton
        hidden={currentPage === totalNumberOfPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <RightArrowIcon />
      </ArrowsButton>
    </PaginationWrap>
  );
};
