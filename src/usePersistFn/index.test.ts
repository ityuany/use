import { usePersistFn } from '.';
import { renderHook } from '@testing-library/react-hooks';

describe('test usePersistFn', function() {
  it('After repeated rendering, the memory address should be the same', function() {
    const hooks = renderHook(() => usePersistFn(jest.fn()));
    const fn = hooks.result.current;
    hooks.rerender();
    expect(hooks.result.current).toEqual(fn);
    hooks.rerender();
    expect(hooks.result.current).toEqual(fn);
    hooks.rerender();
    expect(hooks.result.current).toEqual(fn);
  });
});
