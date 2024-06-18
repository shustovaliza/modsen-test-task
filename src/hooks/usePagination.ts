import { useMemo } from 'react';

type UsePaginationProps = {
  totalNumberOfPages: number;
  currentPage: number;
};

export const usePagination = ({
  totalNumberOfPages,
  currentPage,
}: UsePaginationProps) => {
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

  return arrayOfCurrentButtons;
};
