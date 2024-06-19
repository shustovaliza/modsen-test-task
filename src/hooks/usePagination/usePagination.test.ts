import { renderHook } from '@testing-library/react';

import { usePagination } from './usePagination';

describe('usePagination test', () => {
  it('must be defined', () => {
    expect(usePagination).toBeDefined();
  });

  it('must return an array', () => {
    const hook = renderHook(() =>
      usePagination({ totalNumberOfPages: 10, currentPage: 3 }),
    );
    expect(Array.isArray(hook.result.current)).toBe(true);
  });

  it('normal case', () => {
    const hook = renderHook(() =>
      usePagination({ totalNumberOfPages: 10, currentPage: 3 }),
    );
    expect(hook.result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('totalNumberOfPages is less than 5', () => {
    const hook = renderHook(() =>
      usePagination({ totalNumberOfPages: 4, currentPage: 5 }),
    );
    expect(hook.result.current).toEqual([1, 2, 3, 4]);
  });

  it('currentPage is 8 and totalNumberOfPages is 10', () => {
    const hook = renderHook(() =>
      usePagination({ totalNumberOfPages: 10, currentPage: 8 }),
    );
    expect(hook.result.current).toEqual([6, 7, 8, 9, 10]);
  });

  it('currentPage is 5 and totalNumberOfPages is 10', () => {
    const hook = renderHook(() =>
      usePagination({ totalNumberOfPages: 10, currentPage: 5 }),
    );
    expect(hook.result.current).toEqual([3, 4, 5, 6, 7]);
  });
});
