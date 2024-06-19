import LeftArrowIcon from '@/assets/icons/leftArrow.svg?react';
import RightArrowIcon from '@/assets/icons/rightArrow.svg?react';
import { usePagination } from '@/hooks/usePagination/usePagination';

import { ArrowsButton, PaginationButton, PaginationWrap } from './styled';

type PaginationProps = {
  totalNumberOfPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  totalNumberOfPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const arrayOfCurrentButtons = usePagination({
    totalNumberOfPages: totalNumberOfPages,
    currentPage: currentPage,
  });

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
