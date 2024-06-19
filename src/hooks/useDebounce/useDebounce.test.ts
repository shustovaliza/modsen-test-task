import { renderHook, RenderHookResult } from '@testing-library/react';

import { useDebounce } from './useDebounce';

type GetHookResult = [
  jest.Mock,
  RenderHookResult<() => void, { delay: number; cb: jest.Mock }>,
];

describe('useDebounce test', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('must be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('must return a function', () => {
    const hook = renderHook(() =>
      useDebounce({ callback: () => {}, delay: 50 }),
    );
    expect(typeof hook.result.current).toBe('function');
  });

  function getHook(ms = 5, fn = jest.fn()): GetHookResult {
    return [
      fn,
      renderHook(
        ({ delay = 5, cb }) => useDebounce({ callback: cb, delay: delay }),
        {
          initialProps: { delay: ms, cb: fn },
        },
      ),
    ];
  }

  it('must cancel function call on unmount', () => {
    const [spy, hook] = getHook();

    expect(spy).not.toHaveBeenCalled();
    hook.unmount();
    jest.advanceTimersByTime(5);
    expect(spy).not.toHaveBeenCalled();
  });
});
