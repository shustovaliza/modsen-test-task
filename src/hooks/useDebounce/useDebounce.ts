import { useCallback } from 'react';

type UseDebounceProps = {
  callback: () => void;
  delay: number;
};

export const useDebounce = ({ callback, delay }: UseDebounceProps) => {
  let timeout: null | ReturnType<typeof setTimeout> = null;

  const debouncedCallback = useCallback(() => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};
